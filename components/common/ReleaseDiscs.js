import React from 'react';
import ReleaseDisc from './ReleaseDisc';

const ReleaseDiscs = props => (
  <div className="release-discs">
    {props.discs.map(disc => {
      return (
        <ReleaseDisc
          key={`disc-${disc.id}`}
          {...disc}
          showTitle={props.discs.length > 1}
        />
      );
    })}
  </div>
);

export default ReleaseDiscs;
