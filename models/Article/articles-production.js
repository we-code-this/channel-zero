import "isomorphic-unfetch";

export async function get() {
  const res = await fetch(`${process.env.DATA_API_HOST}/articles`);
  return await res.json();
}

export async function recent() {
  const articles = await get();

  return articles;
}
