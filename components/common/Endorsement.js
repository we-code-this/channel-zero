import React from 'react';
import Markdown from 'markdown-to-jsx';
import he from 'he';

const Endorsement = (props) => {
  const reviewer = props.url ? (
    <a href={props.url}>{props.reviewer}</a>
  ) : (
    props.reviewer
  );

  return (
    <React.Fragment>
      <span className="album-review">
        “<Markdown>{he.decode(props.review)}</Markdown>”
      </span>{' '}
      <span className="album-reviewer">- {reviewer}</span>
    </React.Fragment>
  );
};

export default Endorsement;
