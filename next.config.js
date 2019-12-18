require("dotenv").config();

const withSass = require("@zeit/next-sass");
module.exports = withSass({
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    SERVER_HOST: (process.env.SERVER_HOST ? process.env.SERVER_HOST : "http://nginx"),
    APP_HOST: process.env.APP_HOST
  },
  cssLoaderOptions: {
    sourceMap: true,
    url: false
  }
});
