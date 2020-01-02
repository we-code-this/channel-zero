import 'isomorphic-unfetch';
import host from '../../lib/host';

export async function get() {
  const res = await fetch(host('/api/features'));
  return await res.json();
}

export async function findById(id) {
  const res = await fetch(host(`/api/feature/${id}`));
  console.log('feature response:', res);
  return await res.json();
}

export async function current() {
  const res = await fetch(host('/api/feature'));
  return res.json();
}
