import ReleaseCreditList from "./ReleaseCreditList";

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
        <ReleaseCreditList credits={release.credits} />
        {release.credits.length ? <hr /> : ""}
        <p>
          <span class="album-review">
            “Incredible album! Not to be missed!”
          </span>{" "}
          <span class="album-reviewer">- Someone</span>
        </p>
        <p>
          <span class="album-review">
            “Among my favorite albums of the year!”
          </span>{" "}
          <span class="album-reviewer">- Another Person</span>
        </p>
      </div>
    </div>
  </div>
);

export default ReleaseCard;
