const routes = require("next-routes");

module.exports = routes()
  .add("dig/release", "/dig/release/:slug")
  .add("dig", "/dig")
  .add("/", "/");
