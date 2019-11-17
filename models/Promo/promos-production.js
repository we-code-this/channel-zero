import "isomorphic-unfetch";
import host from "../../lib/host";

export async function get() {
  const res = await fetch(host("/api/promos"));
  return await res.json();
}

export async function recent(location, limit) {
  const res = await fetch(
    host(`/api/promos/placement/${location}/${limit}`)
  );
  return await res.json();
}
