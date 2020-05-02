let ReleasesModule;

async function model() {
  if (ReleasesModule) return ReleasesModule;
  ReleasesModule = await import(`./releases-${process.env.NODE_ENV}`);

  return ReleasesModule;
}

export async function count() {
  return await (await model()).count();
}

export async function get(params = {}) {
  let releases;
  try {
    releases = await (await model()).get(params);
  } catch (e) {
    releases = [];
  }

  return releases;
}

export async function recent() {
  let releases;
  try {
    releases = await (await model()).recent();
  } catch (e) {
    releases = [];
  }

  return releases;
}

export async function findBySlug(slug) {
  let release;
  try {
    release = await (await model()).findBySlug(slug);
  } catch (e) {
    release = undefined;
  }

  return release;
}
