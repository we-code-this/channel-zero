import getConfig from "next/config";
import "isomorphic-unfetch";

const { publicRuntimeConfig } = getConfig();

export async function get(params = {}) {
  const order = params.order ? params.order : "desc";
  let url = `${publicRuntimeConfig.DATA_API_HOST}/artists`;

  if (params.start && params.limit) {
    url = `${url}/range/${params.start}/${params.limit}/${order}`;
  } else if (params.limit) {
    url = `${url}/${params.limit}/${order}`;
  }

  const res = await fetch(url);
  return await res.json();
}

export async function count() {
  const res = await fetch(`${publicRuntimeConfig.DATA_API_HOST}/artists/count`);

  return (await res.json())[0].count;
}

export async function findBySlug(slug) {
  const res = await fetch(
    `${publicRuntimeConfig.DATA_API_HOST}/artist/${slug}`
  );
  return await res.json();
}
