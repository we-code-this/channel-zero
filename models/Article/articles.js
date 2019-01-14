let ArticlesModule;

async function model() {
  if (ArticlesModule) return ArticlesModule;
  ArticlesModule = await import(`./articles-${process.env.NODE_ENV}`);

  return ArticlesModule;
}

export async function get() {
  const articles = await (await model()).get();
  return articles;
}

export async function recent() {
  const article = await (await model()).recent();
  return article;
}
