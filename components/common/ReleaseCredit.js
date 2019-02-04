import React from "react";

const ReleaseCredit = props => {
  const value = props.url ? <a href={props.url}>{props.value}</a> : props.value;

  return (
    <React.Fragment>
      <strong>{props.label}:</strong> {value}
    </React.Fragment>
  );
};

export default ReleaseCredit;
