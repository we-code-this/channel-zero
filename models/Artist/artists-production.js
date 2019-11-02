import "isomorphic-unfetch";

export async function get(params = {}) {
  const order = params.order ? params.order.toUpperCase() : "DESC";
  let url = `/api/artists`;

  if (params.start && params.limit) {
    url = `${url}/range/${params.start}/${params.limit}/${order}`;
  } else if (params.limit) {
    url = `${url}/${params.limit}/${order}`;
  }

  const res = await fetch(url);
  return await res.json();
}

export async function findBySlug(slug) {
  const res = await fetch(
    `/api/artist/${slug}`
  );
  return await res.json();
}
