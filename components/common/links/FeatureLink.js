import { Link } from '../../../routes';

const FeatureLink = props => (
  <Link prefetch route="feature" params={{ id: props.id }}>
    <a>{props.children}</a>
  </Link>
);

export default FeatureLink;
