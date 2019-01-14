import "isomorphic-unfetch";

export async function get() {
  const res = await fetch(
    "http://localhost:3000/static/data/home/releases.json"
  );
  return await res.json();
}

export async function findBySlug(slug) {
  const releases = await get();

  return releases.filter(release => slug === release.slug)[0];
}
