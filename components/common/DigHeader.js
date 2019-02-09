import Link from "next/link";
import staticPaths from "../../lib/paths/static";

const DigHeader = () => (
  <div className="header dig-header" id="dig-header">
    <div className="logos">
      <Link prefetch href="/">
        <a className="logo">
          <img src={staticPaths.img("logo.svg")} alt="Channel Zero logo" />
        </a>
      </Link>
      <Link prefetch href="/dig">
        <a className="dig-logo">
          <img src={staticPaths.img("logos/dig-the-dig.svg")} alt="DigTheDig" />
        </a>
      </Link>
    </div>
  </div>
);

export default DigHeader;
