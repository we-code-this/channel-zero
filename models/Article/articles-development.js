import "isomorphic-unfetch";
import host from "../../lib/host";

export async function get() {
  const res = await fetch(host("/api/articles"));
  return await res.json();
}

export async function recent() {
  const res = await fetch(host("/api/articles/6/desc"));
  return await res.json();
}
