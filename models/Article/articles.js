let ArticlesModule;

async function model() {
  if (ArticlesModule) return ArticlesModule;
  ArticlesModule = await import(`./articles-${process.env.NODE_ENV}`);

  return ArticlesModule;
}

export async function count() {
  return await (await model()).count();
}

export async function get(params = {}) {
  let articles;
  try {
    articles = await (await model()).get(params);
  } catch (e) {
    articles = [];
  }

  return articles;
}

export async function findBySlug(slug) {
  let article;
  try {
    article = await (await model()).findBySlug(slug);
  } catch (e) {
    article = undefined;
  }

  return article;
}

export async function getNext(id) {
  let article;
  try {
    article = await (await model()).getNext(id);
  } catch (e) {
    article = undefined;
  }

  return article;
}

export async function getPrev(id) {
  let article;
  try {
    article = await (await model()).getPrev(id);
  } catch (e) {
    article = undefined;
  }

  return article;
}

export async function recent() {
  let articles;
  try {
    articles = await (await model()).recent();
  } catch (e) {
    articles = [];
  }

  return articles;
}
