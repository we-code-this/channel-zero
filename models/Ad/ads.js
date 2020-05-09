let AdsModule;

async function model() {
  if (AdsModule) return AdsModule;
  AdsModule = await import(`./ads-${process.env.NODE_ENV}`);

  return AdsModule;
}

export async function get() {
  const ads = await (await model()).get();
  return ads;
}

export async function current() {
  let ad;
  try {
    ad = await (await model()).current();
  } catch (e) {
    ad = undefined;
  }

  return ad;
}
