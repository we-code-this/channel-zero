import he from 'he';
import { Link } from '../../routes';
import ReleaseCoverLink from './links/ReleaseCoverLink';

const Release = (props) => (
  <div className="column-content-inline release">
    <div className="release-info">
      <h2 className="title is-4">
        <Link
          prefetch
          route="dig/release"
          params={{ slug: props.slug }}
        >
          <a>{he.decode(props.title)}</a>
        </Link>
      </h2>
      <h3 className="subtitle is-5">
        {he.decode(props.artist.name)}
      </h3>
    </div>
    <ReleaseCoverLink {...props} />
  </div>
);

export default Release;
