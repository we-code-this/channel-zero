import { Link } from '../../../routes';

const ReleaseCoverLink = props => (
  <Link prefetch route="dig/release" params={{ slug: props.slug }}>
    <a>
      <img
        src={props.url.medium}
        alt={`${props.artist.name} - ${props.title}`}
      />
    </a>
  </Link>
);

export default ReleaseCoverLink;
