import React, { Component } from "react";
import { Columns } from "react-bulma-components";
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
      <Columns.Column>
        {this.state.promos.map(promo => {
          return (
            <div className="column-content-inline" key={promo.id}>
              <Promo {...promo} />
            </div>
          );
        })}
      </Columns.Column>
    );
  }
}

export default VerticalPromos;
