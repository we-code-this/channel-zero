import "isomorphic-unfetch";

export async function get() {
  const res = await fetch(`${process.env.DATA_API_HOST}/promos`);
  return await res.json();
}

export async function recent(location, limit) {
  const res = await fetch(
    `${process.env.DATA_API_HOST}/promos/${location}/${limit}`
  );
  return await res.json();
}
