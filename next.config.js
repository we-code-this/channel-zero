require("dotenv").config();

const withSass = require("@zeit/next-sass");
module.exports = withSass({
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    DATA_API_HOST: process.env.DATA_API_HOST
  },
  cssLoaderOptions: {
    sourceMap: true,
    url: false
  }
});
