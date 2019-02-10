import React, { Component } from "react";
import getConfig from "next/config";
import { Link } from "../../../routes";

const { publicRuntimeConfig } = getConfig();
const ADMIN_ROOT = publicRuntimeConfig.ADMIN_ROOT;

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <nav className="admin-menu">
        <ul className="is-unstyled">
          <li>
            <Link href={`/${ADMIN_ROOT}/artists`}>
              <a className="navbar-item">Artists</a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a className="navbar-item">Labels</a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a className="navbar-item">Releases</a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a className="navbar-item">Vendors</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
