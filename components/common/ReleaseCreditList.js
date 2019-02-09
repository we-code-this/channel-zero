import ReleaseCredit from "./ReleaseCredit";

const ReleaseCreditList = ({ credits, label }) => (
  <ul className="is-unstyled">
    <li>
      <ReleaseCredit label="Label" value={label.name} />
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
