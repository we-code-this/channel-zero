import React, { Component } from 'react';
import { Columns } from 'react-bulma-components';
import Promo from '../common/Promo';

class VerticalPromos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promos: props.promos,
    };
  }

  render() {
    return (
      <Columns.Column
        mobile={{
          size: 'full',
        }}
      >
        <Columns breakpoint="mobile">
          {this.state.promos.map(promo => {
            return (
              <Columns.Column
                key={promo.id}
                mobile={{ size: 'half' }}
                tablet={{ size: 'full' }}
              >
                <div className="column-content-inline">
                  <Promo {...promo} />
                </div>
              </Columns.Column>
            );
          })}
        </Columns>
      </Columns.Column>
    );
  }
}

export default VerticalPromos;
