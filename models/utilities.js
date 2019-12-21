import { recent as fetchReleases } from './Release/releases';
import { current as fetchAd } from './Ad/ads';
import { current as fetchFeature } from './Feature/features';
import {
  recent as fetchArticles,
  findBySlug as findArticleBySlug,
  getNext as getNextArticle,
  getPrev as getPrevArticle,
} from './Article/articles';
import { recent as fetchPromos } from './Promo/promos';
import 'isomorphic-unfetch';

const fetchHomeProps = async () => {
  const ad = await fetchAd();
  const feature = await fetchFeature();
  const articles = await fetchArticles();
  const horizontalPromos = await fetchPromos('horizontal', 5);
  const verticalPromos = await fetchPromos('vertical', 4);
  const releases = await fetchReleases();

  return {
    ad,
    feature,
    articles,
    horizontalPromos,
    verticalPromos,
    releases,
  };
};

const fetchArticlePageProps = async slug => {
  const article = await findArticleBySlug(slug);
  const prev = await getPrevArticle(article.id);
  const next = await getNextArticle(article.id);

  return {
    article,
    next,
    prev,
  };
};

export {
  fetchAd,
  fetchFeature,
  fetchArticles,
  fetchPromos,
  fetchReleases,
  fetchHomeProps,
  fetchArticlePageProps,
};
