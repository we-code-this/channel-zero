const routes = require("next-routes");

const ADMIN_ROOT = process.env.ADMIN_ROOT ? process.env.ADMIN_ROOT : "admin";

module.exports = routes()
  .add("dig/release", "/dig/release/:slug")
  .add(ADMIN_ROOT, `/${ADMIN_ROOT}`, "admin")
  .add("/", "/");
