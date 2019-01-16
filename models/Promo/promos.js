let PromosModule;

async function model() {
  if (PromosModule) return PromosModule;
  PromosModule = await import(`./promos-${process.env.NODE_ENV}`);

  return PromosModule;
}

export async function get() {
  const promos = await (await model()).get();
  return promos;
}

export async function recent(location) {
  const promos = await (await model()).recent(location);
  return promos;
}
