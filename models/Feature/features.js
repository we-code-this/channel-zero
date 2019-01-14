let FeaturesModule;

async function model() {
  if (FeaturesModule) return FeaturesModule;
  FeaturesModule = await import(`./features-${process.env.NODE_ENV}`);

  return FeaturesModule;
}

export async function get() {
  const features = await (await model()).get();
  return features;
}

export async function current() {
  const feature = await (await model()).current();
  return feature;
}
