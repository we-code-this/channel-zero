import Link from "next/link";

import dig from "../../../lib/paths/dig";
import staticPaths from "../../../lib/paths/static";

const ReleaseCoverLink = props => (
  <Link prefetch as={dig.releaseAs(props.slug)} href={dig.release(props.slug)}>
    <a>
      <img
        src={staticPaths.release(props.filename)}
        alt={`${props.artist.name} - ${props.title}`}
      />
    </a>
  </Link>
);

export default ReleaseCoverLink;
