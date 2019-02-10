import React, { Component } from "react";
import getConfig from "next/config";
import { Navbar, Icon } from "react-bulma-components";
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
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <Icon>
              <svg className="svg-icon">
                <use xlinkHref="#icon-cz" />
              </svg>
            </Icon>
          </Navbar.Item>
          <Navbar.Burger
            active={this.state.open.toString()}
            onClick={() =>
              this.setState(state => {
                open: !state.open;
              })
            }
          />
        </Navbar.Brand>
        <Navbar.Menu active={this.state.open.toString()}>
          <Navbar.Container>
            <Link href={`/${ADMIN_ROOT}/artists`}>
              <a className="navbar-item">Artists</a>
            </Link>
            <Navbar.Item href="#">Labels</Navbar.Item>
            <Navbar.Item href="#">Releases</Navbar.Item>
            <Navbar.Item href="#">Vendors</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default Nav;
