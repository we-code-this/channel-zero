const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssLoaderOptions: {
    sourceMap: true,
    url: false
  }
});
