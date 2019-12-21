import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { Router } from '../../routes';
import { Pagination } from 'react-bulma-components';
import Layout from '../../components/common/layouts/Layout';
import CenterContent from '../../components/common/CenterContent';
import Article from '../../components/common/Article';
import { get, count } from '../../models/Article/articles';

class Index extends Component {
  static async getInitialProps(context) {
    const limit = 10;
    let { page = 1 } = context.query;
    page = parseInt(page);

    const start = (page - 1) * limit;
    const articleCount = await count();
    const articles = await get({
      start: start,
      limit: limit,
      order: 'desc',
    });

    const pageCount = Math.ceil(articleCount / limit);

    return {
      articles,
      page,
      pageCount,
    };
  }

  changePage = page => {
    Router.pushRoute('news', { page: page });
  };

  render() {
    const { articles, page, pageCount } = this.props;

    return (
      <Layout inner>
        <CenterContent>
          <h1 className="title">News</h1>
          {articles.map(article => (
            <Article {...article} key={article.id} noHPadding />
          ))}

          <Pagination
            className="is-centered"
            total={pageCount}
            current={page}
            onChange={this.changePage}
          />
        </CenterContent>
      </Layout>
    );
  }
}

export default withRouter(Index);
