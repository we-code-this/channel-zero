import getConfig from "next/config";
import "isomorphic-unfetch";

const { publicRuntimeConfig } = getConfig();

export async function get() {
  const res = await fetch(`${publicRuntimeConfig.DATA_API_HOST}/articles`);
  return await res.json();
}

export async function recent() {
  const res = await fetch(
    `${publicRuntimeConfig.DATA_API_HOST}/articles/6/desc`
  );
  return await res.json();
}
