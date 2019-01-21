import getConfig from "next/config";
import "isomorphic-unfetch";

const { publicRuntimeConfig } = getConfig();

export async function get() {
  const res = await fetch(`${publicRuntimeConfig.DATA_API_HOST}/a`);
  return await res.json();
}

export async function current() {
  const ads = await get();

  return ads[0];
}
