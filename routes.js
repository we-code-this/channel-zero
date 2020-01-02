const routes = require('next-routes');

module.exports = routes()
  .add('news', '/news')
  .add('article', '/article/:slug')
  .add('feature', '/feature/:id')
  .add('dig/release', '/dig/release/:slug')
  .add('dig', '/dig')
  .add('/', '/');
