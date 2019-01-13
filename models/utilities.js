const fetchAd = async () => {
  const res = await fetch("http://localhost:3000/static/data/home/ad.json");
  return await res.json();
};

const fetchFeature = async () => {
  const res = await fetch(
    "http://localhost:3000/static/data/home/feature.json"
  );
  return await res.json();
};

const fetchArticles = async () => {
  const res = await fetch(
    "http://localhost:3000/static/data/home/articles.json"
  );
  return await res.json();
};

const fetchHorizontalPromos = async () => {
  const res = await fetch(
    "http://localhost:3000/static/data/home/horizontalPromos.json"
  );
  return await res.json();
};

const fetchVerticalPromos = async () => {
  const res = await fetch(
    "http://localhost:3000/static/data/home/verticalPromos.json"
  );
  return await res.json();
};

const fetchReleases = async () => {
  const res = await fetch(
    "http://localhost:3000/static/data/home/releases.json"
  );
  return await res.json();
};

const fetchHomeProps = async () => {
  const ad = await fetchAd();
  const feature = await fetchFeature();
  const articles = await fetchArticles();
  const horizontalPromos = await fetchHorizontalPromos();
  const verticalPromos = await fetchVerticalPromos();
  const releases = await fetchReleases();

  return {
    ad,
    feature,
    articles,
    horizontalPromos,
    verticalPromos,
    releases
  };
};

export {
  fetchAd,
  fetchFeature,
  fetchArticles,
  fetchHorizontalPromos,
  fetchVerticalPromos,
  fetchReleases,
  fetchHomeProps
};
