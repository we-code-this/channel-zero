import test from './releases-test';
import development from './releases-development';
import production from './releases-production';

let ReleasesModule;

function model() {
  if (ReleasesModule) return ReleasesModule;
  switch(process.env.NODE_ENV) {
    case 'test':
      ReleasesModule = test;
      break;
    case 'development':
      ReleasesModule = development;
      break;
    case 'production':
      ReleasesModule = production;
  }

  return ReleasesModule;
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
    release = await model().findBySlug(slug);
  } catch (e) {
    release = undefined;
  }

  return release;
}
