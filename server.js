require("dotenv").config();

const express = require("express");
const next = require("next");
const routes = require("./routes");

const dev = process.env.NODE_ENV !== "production";

const devProxy = {
  '/api': {
    target: process.env.API_PROXY_TARGET,
    pathRewrite: { '^/api': '/api' },
    changeOrigin: true
  },
  '/files': {
    target: process.env.FILE_PROXY_TARGET,
    pathRewrite: { '^/files': process.env.FILE_ROOT_PATH },
    changeOrigin: true
  },
}

const app = next({ dev });
const handler = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = express();

    if (dev && devProxy) {
      const proxyMiddleware = require('http-proxy-middleware');
      Object.keys(devProxy).forEach(function (context) {
        server.use(proxyMiddleware(context, devProxy[context]))
      });
    }

    server.use(handler).listen(3002, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3002");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
