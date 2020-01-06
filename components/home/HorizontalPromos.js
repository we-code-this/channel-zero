import React, { Component } from 'react';
import { Columns } from 'react-bulma-components';
import Promo from '../common/Promo';

class HorizontalPromos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promos: props.promos,
    };
  }

  render() {
    return (
      <Columns breakpoint="mobile">
        {this.state.promos.map(promo => {
          return (
            <Columns.Column
              key={promo.id}
              mobile={{ size: 'one-third' }}
            >
              <div className="column-content">
                <Promo {...promo} className="flex" />
              </div>
            </Columns.Column>
          );
        })}
      </Columns>
    );
  }
}

export default HorizontalPromos;
