const routes = require("next-routes");
const { ADMIN_ROOT } = require("./config");

module.exports = routes()
  .add("dig/release", "/dig/release/:slug")
  .add(`${ADMIN_ROOT}/artists`, `/${ADMIN_ROOT}/artists`, "/admin/artists")
  .add(ADMIN_ROOT, `/${ADMIN_ROOT}`, "admin")
  .add("/", "/");
