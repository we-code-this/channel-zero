import getConfig from "next/config";
import "isomorphic-unfetch";

const { publicRuntimeConfig } = getConfig();

export async function get(params = {}) {
  const order = params.order ? params.order.toUpperCase() : "DESC";
  let url = `${publicRuntimeConfig.DATA_API_HOST}/releases`;

  if (params.start && params.limit) {
    url = `${url}/range/${params.start}/${params.limit}/${order}`;
  } else if (params.limit) {
    url = `${url}/${params.limit}/${order}`;
  }

  const res = await fetch(url);
  return await res.json();
}

export async function recent() {
  const res = await fetch(
    `${publicRuntimeConfig.DATA_API_HOST}/releases/4/desc`
  );
  return await res.json();
}

export async function findBySlug(slug) {
  const res = await fetch(
    `${publicRuntimeConfig.DATA_API_HOST}/release/${slug}`
  );
  return await res.json();
}
