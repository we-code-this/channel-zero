import React, { Component } from 'react';
import { Columns } from 'react-bulma-components';
import Release from '../common/Release';

class Releases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      releases: props.releases,
    };
  }

  render() {
    return (
      <Columns.Column mobile={{ size: 'full' }}>
        <Columns breakpoint="mobile">
          {this.state.releases.map(release => (
            <Columns.Column
              key={release.id}
              mobile={{ size: 'half' }}
              tablet={{ size: 'full' }}
            >
              <Release {...release} />
            </Columns.Column>
          ))}
        </Columns>
      </Columns.Column>
    );
  }
}

export default Releases;
