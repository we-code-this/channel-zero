import fs from "fs-extra";
import path from "path";

export async function get(params = {}) {
  const filePath = path.join(
    __dirname,
    "/../",
    "/../",
    "test",
    "fixtures",
    "releases.json"
  );
  const data = await fs.readFile(filePath, "utf8");

  return JSON.parse(data);
}

export async function recent() {
  const releases = await get();
  return releases;
}

export async function findBySlug(slug) {
  const releases = await get();

  return releases.filter(release => slug === release.slug)[0];
}

export default {
  get,
  recent,
  findBySlug
};
