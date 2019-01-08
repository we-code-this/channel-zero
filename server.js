require("dotenv").config();

const express = require("express");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const defaultAdminRoot = "admin";
const adminRoot = process.env.ADMIN_ROOT
  ? process.env.ADMIN_ROOT
  : defaultAdminRoot;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get(`/${adminRoot}`, (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { query } = parsedUrl;

      console.log(`/${adminRoot}`);

      app.render(req, res, `/${defaultAdminRoot}`, query);
    });

    if (adminRoot !== defaultAdminRoot) {
      server.get(`/${defaultAdminRoot}`, (req, res) => {
        app.render404(req, res);
      });
    }

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
