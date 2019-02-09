const releaseRoot = () => {
  return "/dig/release";
};

const releaseAs = slug => {
  return `${releaseRoot()}/${slug}`;
};

const release = slug => {
  return `${releaseRoot()}?slug=${slug}`;
};

export default {
  releaseAs,
  release
};
