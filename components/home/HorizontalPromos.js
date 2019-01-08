import React, { Component } from "react";
import Promo from "../common/Promo";

class HorizontalPromos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promos: props.promos
    };
  }

  render() {
    return (
      <div className="columns">
        {this.state.promos.map(promo => {
          return (
            <div className="column" key={promo.id}>
              <div className="column-content">
                <Promo {...promo} className="flex" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HorizontalPromos;
