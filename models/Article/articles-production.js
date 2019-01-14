import "isomorphic-unfetch";

export async function get() {
  const res = await fetch(
    "http://localhost:3000/static/data/home/articles.json"
  );
  return await res.json();
}

export async function recent() {
  const articles = await get();

  return articles;
}
