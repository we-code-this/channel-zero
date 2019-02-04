import Endorsement from "./Endorsement";

const EndorsementList = ({ endorsements }) => (
  <ul class="is-unstyled">
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
