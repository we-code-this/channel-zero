import React from 'react';

const Track = props => (
  <div className="track">
    <span className="track-number">{props.number} </span>
    <span className="track-title">{props.title}</span>
  </div>
);

export default Track;
