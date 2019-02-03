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
        <ul class="is-unstyled">
          <li>
            <strong>Executive Producer:</strong> Chuck D
          </li>
          <li>
            <strong>Album Producer:</strong> C-Doc
          </li>
          <li>
            <strong>Associate Producer:</strong> JP Hesser of Castaway 7
          </li>
          <li>
            <strong>Mastered by:</strong>{" "}
            <a href="https://defexperience.com">
              Shawn Franklin at “S.T.O.H.” Labs for TDX (The Definitive
              Xperience)
            </a>
          </li>
          <li>
            <strong>Cover Photo by:</strong> Carl Ryder
          </li>
          <li>
            <strong>Additional Photos by:</strong> Eitan Miskevich
          </li>
          <li>
            <strong>Cover Design by:</strong> Kelvin Fonville
          </li>
          <li>
            <strong>Additional Design and Layout by:</strong> DC Snyder
          </li>
        </ul>
        <hr />
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
