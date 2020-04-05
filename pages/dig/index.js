import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'next/router';
import host from '../../lib/host';
import { Columns } from 'react-bulma-components';
import DigHeader from '../../components/common/DigHeader';
import Layout from '../../components/common/layouts/Layout';
import Release from '../../components/common/Release';
import { get } from '../../models/Release/releases';

class Index extends Component {
  static async getInitialProps() {
    const releases = await get({ limit: 12, order: 'desc' });

    return {
      releases,
    };
  }

  render() {
    const header = <DigHeader />;
    const { releases } = this.props;
    const pageTitle = 'Dig The Dig @ ChannelZero';

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
      </Layout>
    );
  }
}

export default withRouter(Index);
