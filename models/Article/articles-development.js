import "isomorphic-unfetch";

export async function get() {
  const res = await fetch(`${process.env.DATA_API_HOST}/articles`);
  return await res.json();
}

export async function recent() {
  const res = await fetch(`${process.env.DATA_API_HOST}/articles/6/desc`);
  return await res.json();
}
