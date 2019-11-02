import getConfig from "next/config";
import "isomorphic-unfetch";

const { publicRuntimeConfig } = getConfig();

export async function get() {
  const res = await fetch(`${publicRuntimeConfig.APP_HOST}/api/promos`);
  return await res.json();
}

export async function recent(location, limit) {
  const res = await fetch(
    `${publicRuntimeConfig.APP_HOST}/api/promos/placement/${location}/${limit}`
  );
  return await res.json();
}
