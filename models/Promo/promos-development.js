import getConfig from "next/config";
import "isomorphic-unfetch";

const { publicRuntimeConfig } = getConfig();

export async function get() {
  const res = await fetch(`${publicRuntimeConfig.DATA_API_HOST}/promos`);
  return await res.json();
}

export async function recent(location, limit) {
  const res = await fetch(
    `${publicRuntimeConfig.DATA_API_HOST}/promos/${location}/${limit}`
  );
  return await res.json();
}
