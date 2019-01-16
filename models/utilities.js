import { get as fetchReleases } from "./Release/releases";
import { current as fetchAd } from "./Ad/ads";
import { current as fetchFeature } from "./Feature/features";
import { recent as fetchArticles } from "./Article/articles";
import { recent as fetchPromos } from "./Promo/promos";
import "isomorphic-unfetch";

const fetchHomeProps = async () => {
  const ad = await fetchAd();
  const feature = await fetchFeature();
  const articles = await fetchArticles();
  const horizontalPromos = await fetchPromos("horizontal");
  const verticalPromos = await fetchPromos("vertical");
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
  fetchPromos,
  fetchReleases,
  fetchHomeProps
};
