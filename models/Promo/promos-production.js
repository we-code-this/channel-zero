import "isomorphic-unfetch";

export async function get() {
  const res = await fetch("http://localhost:3000/static/data/home/promos.json");
  return await res.json();
}

export async function recent(location) {
  const promos = await get();
  return promos.filter(promo => location === promo.location);
}
