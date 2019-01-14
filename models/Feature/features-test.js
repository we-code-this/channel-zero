import fs from "fs-extra";
import path from "path";

export async function get() {
  const filePath = path.join(
    __dirname,
    "/../",
    "/../",
    "test",
    "fixtures",
    "features.json"
  );
  const data = await fs.readFile(filePath, "utf8");

  return JSON.parse(data);
}

export async function current() {
  const features = await get();

  return features[0];
}
