import "isomorphic-unfetch";

const get = async () => {
  const res = await fetch(
    "http://localhost:3000/static/data/home/releases.json"
  );
  return await res.json();
};

const findBySlug = async slug => {
  const releases = await get();

  return releases.filter(release => slug === release.slug)[0];
};

export { get, findBySlug };
