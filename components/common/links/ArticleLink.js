import { Link } from '../../../routes';

const ArticleLink = props => (
  <Link prefetch route="article" params={{ slug: props.slug }}>
    <a>{props.children}</a>
  </Link>
);

export default ArticleLink;
