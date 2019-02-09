import React, { Component } from "react";
import { Navbar } from "react-bulma-components";

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
            Brand
          </Navbar.Item>
          <Navbar.Burger
            active={this.state.open}
            onClick={() =>
              this.setState(state => {
                open: !state.open;
              })
            }
          />
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Nav;
