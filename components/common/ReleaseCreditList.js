import ReleaseCredit from './ReleaseCredit';

const ReleaseCreditList = ({ credits, label, catalogNumber }) => (
  <ul className="is-unstyled">
    <li>
      <ReleaseCredit label="Label" value={label.name} />
    </li>
    <li>
      <ReleaseCredit label="Catalog Number" value={catalogNumber} />
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
