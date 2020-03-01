import React from 'react';
import Tracklist from './Tracklist';

const ReleaseDisc = props => (
  <div className="release-disc">
    {props.showTitle && <h3 className="title is-4">{props.name}</h3>}
    {props.tracks.length > 0 && <Tracklist tracks={props.tracks} />}
  </div>
);

export default ReleaseDisc;
