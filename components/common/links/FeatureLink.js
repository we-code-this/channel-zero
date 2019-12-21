import { Link } from '../../../routes';

const FeatureLink = props => (
  <Link prefetch route="feature" params={{ slug: props.slug }}>
    {props.children}
  </Link>
);

export default FeatureLink;
