import getConfig from "next/config";
import "isomorphic-unfetch";

const { publicRuntimeConfig } = getConfig();

export async function get() {
  const res = await fetch(`${publicRuntimeConfig.DATA_API_HOST}/releases`);
  return await res.json();
}

export async function recent() {
  const res = await fetch(
    `${publicRuntimeConfig.DATA_API_HOST}/releases/3/desc`
  );
  return await res.json();
}

export async function findBySlug(slug) {
  const res = await fetch(
    `${publicRuntimeConfig.DATA_API_HOST}/release/${slug}`
  );
  return await res.json();
}
