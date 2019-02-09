import ReleaseCreditList from "./ReleaseCreditList";
import EndorsementList from "./EndorsementList";

const ReleaseCard = ({ release }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image">
        <img
          src={`/static/files/releases/${release.filename}`}
          alt={`${release.artist.name} - ${release.title}`}
        />
      </figure>
    </div>
    <div className="card-content">
      <div className="content">
        <ReleaseCreditList credits={release.credits} label={release.label} />
        {release.credits.length ? <hr /> : ""}
        <EndorsementList endorsements={release.endorsements} />
      </div>
    </div>
  </div>
);

export default ReleaseCard;
