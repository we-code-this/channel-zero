import React, { Component } from "react";
import { Columns } from "react-bulma-components";
import Release from "../common/Release";

class Releases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      releases: props.releases
    };
  }

  render() {
    return (
      <Columns.Column>
        {this.state.releases.map(release => (
          <Release key={release.id} {...release} />
        ))}
      </Columns.Column>
    );
  }
}

export default Releases;
