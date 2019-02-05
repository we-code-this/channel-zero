import Link from "next/link";
import ReleaseCoverLink from "./links/ReleaseCoverLink";

const Release = props => (
  <div className="column-content-inline release">
    <div className="release-info">
      <h2 className="title is-4">
        <Link
          prefetch
          as={`/dig/release/${props.slug}`}
          href={`/dig/release?slug=${props.slug}`}
        >
          <a>{props.title}</a>
        </Link>
      </h2>
      <h3 className="subtitle is-5">{props.artist.name}</h3>
    </div>
    <ReleaseCoverLink {...props} />
  </div>
);

export default Release;
