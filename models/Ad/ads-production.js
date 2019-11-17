import fetch from "isomorphic-unfetch";
import host from "../../lib/host";

export async function get() {
  const res = await fetch(host('/api/a'));
  return await res.json();
}

export async function current() {
  const ads = await get();

  return ads[0];
}
