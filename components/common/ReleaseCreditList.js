import React from 'react';
import moment from 'moment';
import ReleaseCredit from './ReleaseCredit';

const ReleaseCreditList = ({
  credits,
  label,
  catalog_number,
  release_date,
}) => (
  <ul className="is-unstyled">
    <li>
      <ReleaseCredit label="Label" value={label.name} />
    </li>
    <li>
      <ReleaseCredit label="Catalog Number" value={catalog_number} />
    </li>
    <li>
      <ReleaseCredit
        label="Release Date"
        value={moment(release_date).format('MMMM Do, YYYY')}
      />
    </li>
    {credits.map(credit => {
      return (
        <li key={`credit-${credit.id}`}>
          <ReleaseCredit {...credit} />
        </li>
      );
    })}
  </ul>
);

export default ReleaseCreditList;
