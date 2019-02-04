import React from "react";

const Endorsement = props => {
  const reviewer = props.url ? (
    <a href={props.url}>{props.reviewer}</a>
  ) : (
    props.reviewer
  );

  return (
    <React.Fragment>
      <span class="album-review">“{props.review}”</span>{" "}
      <span class="album-reviewer">- {reviewer}</span>
    </React.Fragment>
  );
};

export default Endorsement;
