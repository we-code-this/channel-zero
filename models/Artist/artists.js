let ArtistsModule;

async function model() {
  if (ArtistsModule) return ArtistsModule;
  ArtistsModule = await import(`./artists-${process.env.NODE_ENV}`);

  return ArtistsModule;
}

export async function get(params = {}) {
  const releases = await (await model()).get(params);
  return releases;
}

export async function findBySlug(slug) {
  const release = await (await model()).findBySlug(slug);
  return release;
}
