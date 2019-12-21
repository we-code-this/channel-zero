import { Link } from '../../../routes';

const ArticleLink = props => (
  <Link prefetch route="article" params={{ slug: props.slug }}>
    {props.children}
  </Link>
);

export default ArticleLink;
