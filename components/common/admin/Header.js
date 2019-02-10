import { Icon } from "react-bulma-components";
import Link from "next/link";

const Header = props => (
  <header>
    <div className="brand">
      <Link href="/">
        <a target="_blank">
          <Icon>
            <svg className="svg-icon">
              <use xlinkHref="#icon-cz" />
            </svg>
          </Icon>
        </a>
      </Link>
    </div>
    <div className="title is-4">{props.title}</div>
  </header>
);

export default Header;
