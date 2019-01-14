import "isomorphic-unfetch";

export async function get() {
  const res = await fetch("http://localhost:3000/static/data/home/ad.json");
  return await res.json();
}

export async function current() {
  const ad = await get();

  return ad;
}
