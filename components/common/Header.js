import Link from "next/link";

import staticPaths from "../../lib/paths/static";

const Header = () => (
  <div className="header" id="header">
    <Link prefetch href="/">
      <a className="logo">
        <img src={staticPaths.img("logo.svg")} alt="Channel Zero logo" />
      </a>
    </Link>
  </div>
);

export default Header;
