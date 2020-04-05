import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import { Columns } from 'react-bulma-components';
import { Link } from '../routes';
import Layout from '../components/common/layouts/Layout';
import CenterContent from '../components/common/CenterContent';
import BannerImage from '../components/common/BannerImage';
import ArticleLink from '../components/common/links/ArticleLink';
import { fetchArticlePageProps } from '../models/utilities';

class Article extends Component {
  static async getInitialProps({ req, query: { slug } }) {
    const pageProps = await fetchArticlePageProps(slug);

    return pageProps;
  }

  render() {
    if (this.props.article) {
      const { article, next, prev } = this.props;

      return (
        <Layout
          title={article.title}
          inner
          url={`/article/${article.slug}`}
        >
          <CenterContent>
            <h1 className="title">{article.title}</h1>
          </CenterContent>
          {article.filename && (
            <BannerImage
              url={article.url.large}
              alt={article.title}
            />
          )}
          <CenterContent>
            <Columns>
              <Columns.Column>
                <Markdown className="content">
                  {article.description}
                </Markdown>
              </Columns.Column>
            </Columns>

            <nav
              className="pagination is-centered"
              role="navigation"
              aria-label="pagination"
            >
              {prev && (
                <ArticleLink slug={prev.slug}>
                  <a className="pagination-previous">Previous</a>
                </ArticleLink>
              )}

              {next && (
                <ArticleLink slug={next.slug}>
                  <a className="pagination-next">Next</a>
                </ArticleLink>
              )}

              <ul className="pagination-list">
                <li>
                  <Link route="/news">
                    <a
                      className="pagination-link"
                      aria-label="Go to news page"
                    >
                      More news…
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </CenterContent>
        </Layout>
      );
    } else {
      return <Layout></Layout>;
    }
  }
}

export default Article;
