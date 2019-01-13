import Link from "next/link";

const Header = () => (
  <div className="header" id="header">
    <Link prefetch href="/">
      <a className="logo">
        <img src="/static/img/logo.svg" alt="Channel Zero logo" />
      </a>
    </Link>
  </div>
);

export default Header;
