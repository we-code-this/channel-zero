import React, { Component } from "react";

class HorizontalPromos extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="column-content">
            <a href="#" className="flex">
              <img src="/static/img/logos/madurgency.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="column">
          <div className="column-content">
            <a href="#" className="flex">
              <img src="/static/img/logos/the-age.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="column">
          <div className="column-content">
            <a href="#" className="flex">
              <img src="/static/img/logos/enemy-books.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="column">
          <div className="column-content">
            <a href="#" className="flex">
              <img src="/static/img/logos/spitburg-pirates.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="column">
          <div className="column-content">
            <a href="#" className="flex">
              <img src="/static/img/logos/hiphopgods.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalPromos;
