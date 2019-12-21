const filesRoot = () => {
  return '/files';
};

const imgRoot = () => {
  return '/static/img';
};

const img = filename => {
  return `${imgRoot()}/${filename}`;
};

const ad = filename => {
  return `${filesRoot()}/a/${filename}`;
};

const article = filename => {
  return `${filesRoot()}/articles/${filename}`;
};

const release = filename => {
  return `${filesRoot()}/releases/${filename}`;
};

export default {
  ad,
  article,
  img,
  release,
};
