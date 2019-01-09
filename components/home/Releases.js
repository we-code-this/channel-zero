import React, { Component } from "react";
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
      <div className="column">
        {this.state.releases.map(release => (
          <Release key={release.id} {...release} />
        ))}
      </div>
    );
  }
}

export default Releases;
