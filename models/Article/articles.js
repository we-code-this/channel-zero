let ArticlesModule;

async function model() {
  if (ArticlesModule) return ArticlesModule;
  ArticlesModule = await import(`./articles-${process.env.NODE_ENV}`);

  return ArticlesModule;
}

export async function get() {
  let articles;
  try {
    articles = await (await model()).get();
  } catch (e) {
    articles = [];
  }

  return articles;
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
