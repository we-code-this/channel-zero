require("dotenv").config();

const express = require("express");
const next = require("next");
const routes = require("./routes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = express();

    // if (ADMIN_ROOT !== "admin") {
    //   server.use(handler).get("admin", (req, res) => {
    //     return handle(req, res);
    //   });
    // }

    // server.use(handler).get("*", (req, res) => {
    //   return handle(req, res);
    // });

    server.use(handler).listen(3002, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3002");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
