import Link from "next/link";

const DigHeader = () => (
  <div className="header dig-header" id="dig-header">
    <div className="logos">
      <Link href="/">
        <a className="logo">
          <img src="/static/img/logo.svg" alt="Channel Zero logo" />
        </a>
      </Link>
      <span className="dig-logo">
        <img src="/static/img/logos/dig-the-dig.svg" alt="DigTheDig" />
      </span>
    </div>
  </div>
);

export default DigHeader;
