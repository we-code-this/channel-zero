require('dotenv').config();

const express = require('express');
const next = require('next');
const Keyv = require('keyv');
const { resolve: urlResolve } = require('url');
const normalizeUrl = require('normalize-url');
const cacheableResponse = require('cacheable-response');
const routes = require('./routes');

const isDev = process.env.NODE_ENV !== 'production';

const proxy = {
  '/api': {
    target: process.env.API_PROXY_TARGET,
    pathRewrite: { '^/api': '/api' },
    changeOrigin: true,
  },
  '/files': {
    target: process.env.FILE_PROXY_TARGET,
    pathRewrite: { '^/files': process.env.FILE_ROOT_PATH },
    changeOrigin: true,
  },
};

const app = next({ dev: isDev });
const handler = routes.getRequestHandler(app);
const cacheStore = new Keyv({ namespace: 'ssr-cache' });

const _getSSRCacheKey = req => {
  const url = urlResolve('http://localhost', req.url);
  const { origin } = new URL(url);
  const baseKey = normalizeUrl(url, {
    removeQueryParameters: [
      'embed',
      'filter',
      'force',
      'proxy',
      'ref',
      /^utm_\w+/i,
    ],
  });
  return baseKey.replace(origin, '').replace('/?', '');
};

const cacheManager = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => {
    try {
      return {
        data: await app.renderToHTML(req, res, pagePath, queryParams),
      };
    } catch (e) {
      return { data: 'error: ' + e };
    }
  },
  send: ({ data, res }) => {
    res.send(data);
  },
  cache: cacheStore,
  getKey: _getSSRCacheKey,
  compress: true,
});

function clearCompleteCache(res, req) {
  cacheStore.clear();
  res.status(200);
  res.send({
    path: req.hostname + req.baseUrl,
    purged: true,
    clearedCompleteCache: true,
  });
  res.end();
}

function clearCacheForRequestUrl(req, res) {
  let key = _getSSRCacheKey(req);
  console.log(key);
  cacheStore.delete(key);
  res.status(200);
  res.send({
    path: req.hostname + req.baseUrl + req.path,
    key: key,
    purged: true,
    clearedCompleteCache: false,
  });
  res.end();
}

app
  .prepare()
  .then(() => {
    const server = express();

    const proxyMiddleware = require('http-proxy-middleware');
    Object.keys(proxy).forEach(function(context) {
      server.use(proxyMiddleware(context, proxy[context]));
    });

    server.get('/_next/*', (req, res) => {
      handler(req, res);
    });

    server.get('/static/*', (req, res) => {
      handler(req, res);
    });

    server.get('*', (req, res) => {
      if (isDev || req.query.noCache) {
        res.setHeader('X-Cache-Status', 'DISABLED');
        handler(req, res);
      } else {
        cacheManager({
          req,
          res,
          pagePath: req.path,
          queryParams: req.query,
        });
      }
    });

    server.purge('*', (req, res) => {
      if (req.query.clearCache) {
        clearCompleteCache(res, req);
      } else {
        clearCacheForRequestUrl(req, res);
      }
    });

    server.listen(3002, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3002');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
