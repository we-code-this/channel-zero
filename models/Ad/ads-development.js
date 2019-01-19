import "isomorphic-unfetch";

export async function get() {
  const res = await fetch(`${process.env.DATA_API_HOST}/a`);
  return await res.json();
}

export async function current() {
  const ads = await get();

  return ads[0];
}
