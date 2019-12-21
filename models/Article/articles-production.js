import 'isomorphic-unfetch';
import host from '../../lib/host';

export async function count() {
  const res = await fetch(host(`/api/articles/count/published`));
  return (await res.json())[0].count;
}

export async function get(params = {}) {
  const order = params.order ? params.order.toUpperCase() : 'DESC';
  let url = host('/api/articles');

  if (params.start && params.limit) {
    url = `${url}/range/${params.start}/${params.limit}/${order}`;
  } else if (params.limit) {
    url = `${url}/${params.limit}/${order}`;
  }

  const res = await fetch(url);
  return await res.json();
}

export async function findBySlug(slug) {
  const res = await fetch(host(`/api/article/${slug}`));
  return await res.json();
}

export async function getNext(id) {
  const res = await fetch(host(`/api/article/next/${id}`));
  return await res.json();
}

export async function getPrev(id) {
  const res = await fetch(host(`/api/article/prev/${id}`));
  return await res.json();
}

export async function recent() {
  const res = await fetch(host('/api/articles/6/desc'));
  return await res.json();
}
