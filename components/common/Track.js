import React from 'react';
import he from 'he';

const Track = (props) => (
  <div className="track">
    <span className="track-number">{props.number} </span>
    <span className="track-title">{he.decode(props.title)}</span>
  </div>
);

export default Track;
