import React from 'react';
import he from 'he';

const ReleaseCredit = (props) => {
  const value = props.url ? (
    <a href={props.url}>{he.decode(props.value)}</a>
  ) : (
    he.decode(props.value)
  );

  return (
    <React.Fragment>
      <strong>{he.decode(props.label)}:</strong> {value}
    </React.Fragment>
  );
};

export default ReleaseCredit;
