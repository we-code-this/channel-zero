import he from 'he';
import { Columns } from 'react-bulma-components';
import ArticleLink from './links/ArticleLink';
import FeatureLink from './links/FeatureLink';

const Article = (props) => {
  let headingLink, readMoreLink;
  let columnStyles = {};
  if (props.feature) {
    headingLink = (
      <FeatureLink id={props.feature}>
        {he.decode(props.title)}
      </FeatureLink>
    );
    readMoreLink = (
      <FeatureLink id={props.feature}>Read more…</FeatureLink>
    );
  } else {
    headingLink = (
      <ArticleLink slug={props.slug}>
        {he.decode(props.title)}
      </ArticleLink>
    );
    readMoreLink = (
      <ArticleLink slug={props.slug}>Read more…</ArticleLink>
    );
  }

  if (props.noHPadding) {
    columnStyles = {
      padding: '0.75rem 0',
    };
  }

  return (
    <Columns.Column className="article" style={columnStyles}>
      <div className="column-content">
        <h2 className="title is-4">{headingLink}</h2>
        <p>
          {he
            .decode(props.summary)
            .replace(/^(.{200}[^\s]*).*/, '$1…')}{' '}
          {readMoreLink}
        </p>
      </div>
    </Columns.Column>
  );
};

export default Article;
