let FeaturesModule;

async function model() {
  if (FeaturesModule) return FeaturesModule;
  FeaturesModule = await import(`./features-${process.env.NODE_ENV}`);

  return FeaturesModule;
}

export async function findById(id) {
  let feature;
  try {
    feature = await (await model()).findById(id);
  } catch (e) {
    feature = undefined;
  }

  return feature;
}

export async function get() {
  const features = await (await model()).get();
  return features;
}

export async function current() {
  let feature;
  try {
    feature = await (await model()).current();
  } catch (e) {
    feature = undefined;
  }

  return feature;
}
