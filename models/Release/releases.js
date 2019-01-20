let ReleasesModule;

async function model() {
  if (ReleasesModule) return ReleasesModule;
  ReleasesModule = await import(`./releases-${process.env.NODE_ENV}`);

  return ReleasesModule;
}

export async function get() {
  const releases = await (await model()).get();
  return releases;
}

export async function recent() {
  const release = await (await model()).recent();
  return release;
}

export async function findBySlug(slug) {
  const release = await (await model()).findBySlug(slug);
  return release;
}
