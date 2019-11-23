let PromosModule;

async function model() {
  if (PromosModule) return PromosModule;
  PromosModule = await import(`./promos-${process.env.NODE_ENV}`);

  return PromosModule;
}

export async function get() {
  let promos;
  try {
    promos = await (await model()).get();
  } catch (e) {
    promos = [];
  }
  
  return promos;
}

export async function recent(location, limit) {
  let promos;
  try {
    promos = await (await model()).recent(location, limit);
  } catch (e) {
    promos = [];
  }

  return promos;
}
