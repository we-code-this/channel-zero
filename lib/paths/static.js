const filesRoot = () => {
  return "/static/files";
};

const imgRoot = () => {
  return "/static/img";
};

const img = filename => {
  return `${imgRoot()}/${filename}`;
};

const ad = filename => {
  return `${filesRoot()}/a/${filename}`;
};

const release = filename => {
  return `${filesRoot()}/releases/${filename}`;
};

export default {
  ad,
  img,
  release
};
