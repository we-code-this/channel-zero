import 'isomorphic-unfetch';
import host from '../../lib/host';

export async function get(params = {}) {
  const order = params.order ? params.order.toUpperCase() : 'DESC';
  let url = host('/api/releases');

  if (params.start && params.limit) {
    url = `${url}/range/${params.start}/${params.limit}/${order}`;
  } else if (params.limit) {
    url = `${url}/${params.limit}/${order}`;
  }

  const res = await fetch(url);
  return await res.json();
}

export async function recent() {
  const res = await fetch(host('/api/releases/4/desc'));
  return await res.json();
}

export async function findBySlug(slug) {
  const res = await fetch(host(`/api/release/${slug}`));
  return await res.json();
}
