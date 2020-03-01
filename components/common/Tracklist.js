import React from 'react';
import Track from './Track';

const Tracklist = props => (
  <div className="tracklist">
    {props.tracks.map(track => (
      <Track {...track} />
    ))}
  </div>
);

export default Tracklist;
