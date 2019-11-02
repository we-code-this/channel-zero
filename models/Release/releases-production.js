import getConfig from "next/config";
import "isomorphic-unfetch";

const { publicRuntimeConfig } = getConfig();

export async function get(params = {}) {
  const order = params.order ? params.order : "DESC";
  let url = `${publicRuntimeConfig.APP_HOST}/api/releases`;

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
    `${publicRuntimeConfig.APP_HOST}/api/releases/4/desc`
  );
  return await res.json();
}

export async function findBySlug(slug) {
  const res = await fetch(
    `${publicRuntimeConfig.APP_HOST}/api/release/${slug}`
  );
  return await res.json();
}
