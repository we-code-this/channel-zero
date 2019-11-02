import getConfig from "next/config";
import "isomorphic-unfetch";

const { publicRuntimeConfig } = getConfig();

export async function get() {
  const res = await fetch(`${publicRuntimeConfig.APP_HOST}/api/articles`);
  return await res.json();
}

export async function recent() {
  const res = await fetch(
    `${publicRuntimeConfig.APP_HOST}/api/articles/6/desc`
  );
  return await res.json();
}
