import ReleaseCredit from "./ReleaseCredit";

const ReleaseCreditList = ({ credits }) => (
  <ul className="is-unstyled">
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
