import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'next/router';
import { Router } from '../../routes';
import host from '../../lib/host';
import { Columns, Pagination } from 'react-bulma-components';
import DigHeader from '../../components/common/DigHeader';
import Layout from '../../components/common/layouts/Layout';
import Release from '../../components/common/Release';
import { get, count } from '../../models/Release/releases';

class Index extends Component {
  static async getInitialProps(context) {
    const limit = 12;
    let { page = 1 } = context.query;
    page = parseInt(page);

    const start = (page - 1) * limit;
    const releaseCount = parseInt(await count());

    const releases = await get({
      start: start,
      limit: limit,
      order: 'desc',
    });

    return {
      releases,
      limit,
      page,
      releaseCount,
    };
  }

  changePage = (page) => {
    Router.pushRoute('dig', { page: page });
  };

  render() {
    const header = <DigHeader />;
    const { releases, limit, page, releaseCount } = this.props;
    const pageCount =
      releaseCount < limit ? 1 : Math.ceil(releaseCount / limit);
    const pageTitle = `Dig The Dig @ ChannelZero Page ${page}`;

    return (
      <Layout header={header} inner url="/dig">
        <Helmet>
          <title>{pageTitle}</title>
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageTitle} />
          <meta
            property="og:description"
            content="Discover great new music being released by the ChannelZero family of labels and artists."
          />
          <meta
            property="og:image"
            content={host('/static/img/meta-graphic-dig-the-dig.jpg')}
          />
        </Helmet>
        <h1 className="title">Dig The Dig</h1>
        <Columns>
          {releases.map((release) => (
            <Columns.Column key={release.id} size="one-quarter">
              <Release {...release} />
            </Columns.Column>
          ))}
        </Columns>
        <Pagination
          className="is-centered"
          total={pageCount}
          current={page}
          onChange={this.changePage}
        />
      </Layout>
    );
  }
}

export default withRouter(Index);
