import React, { Component } from "react";
import Promo from "../common/Promo";

class VerticalPromos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promos: props.promos
    };
  }

  render() {
    return (
      <div className="column">
        {this.state.promos.map(promo => {
          return (
            <div className="column-content-inline" key={promo.id}>
              <Promo {...promo} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default VerticalPromos;
