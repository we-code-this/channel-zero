require("dotenv").config();
const { ADMIN_ROOT } = require("./config");

const withSass = require("@zeit/next-sass");
module.exports = withSass({
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    DATA_API_HOST: process.env.DATA_API_HOST,
    ADMIN_ROOT: ADMIN_ROOT
  },
  cssLoaderOptions: {
    sourceMap: true,
    url: false
  }
});
