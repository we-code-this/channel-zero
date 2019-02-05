import Endorsement from "./Endorsement";

const EndorsementList = ({ endorsements }) => (
  <ul className="is-unstyled">
    {endorsements.map(endorsement => {
      return (
        <li key={`endorsement-${endorsement.id}`}>
          <Endorsement {...endorsement} />
        </li>
      );
    })}
  </ul>
);

export default EndorsementList;
