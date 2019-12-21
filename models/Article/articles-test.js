import fs from "fs-extra";
import path from "path";

export async function get() {
  const filePath = path.join(
    __dirname,
    "/../",
    "/../",
    "test",
    "fixtures",
    "articles.json"
  );
  const data = await fs.readFile(filePath, "utf8");

  return JSON.parse(data);
}

export async function findBySlug(slug) {
  const filePath = path.join(
    __dirname,
    "/../",
    "/../",
    "test",
    "fixtures",
    "articles.json"
  );

  return JSON.parse(
    await fs.readFile(filePath, "utf8")
  ).filter(article => article.title === slug)[0];
}

export async function recent() {
  const articles = await get();

  return articles;
}
