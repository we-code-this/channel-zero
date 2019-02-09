import { Link } from "../../../routes";

import staticPaths from "../../../lib/paths/static";

const ReleaseCoverLink = props => (
  <Link prefetch route="dig/release" params={{ slug: props.slug }}>
    <a>
      <img
        src={staticPaths.release(props.filename)}
        alt={`${props.artist.name} - ${props.title}`}
      />
    </a>
  </Link>
);

export default ReleaseCoverLink;
