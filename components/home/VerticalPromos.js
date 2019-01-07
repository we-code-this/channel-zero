import React, { Component } from "react";

class VerticalPromos extends Component {
  render() {
    return (
      <div className="column">
        <div className="column-content-inline">
          <a href="#">
            <img src="/static/img/logos/rapstation.svg" alt="Rapstation.com" />
          </a>
        </div>
        <div className="column-content-inline">
          <a href="#">
            <img src="/static/img/logos/spitslam.svg" alt="Spitslam" />
          </a>
        </div>
        <div className="column-content-inline">
          <a href="#">
            <img src="/static/img/logos/spitifly.svg" alt="Spitifly" />
          </a>
        </div>
        <div className="column-content-inline">
          <a href="#">
            <img src="/static/img/logos/dig-the-dig.svg" alt="Spitifly" />
          </a>
        </div>
      </div>
    );
  }
}

export default VerticalPromos;
