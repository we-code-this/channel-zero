import React, { Component } from 'react';
import he from 'he';
import Helmet from 'react-helmet';
import Markdown from 'markdown-to-jsx';
import removeMd from 'remove-markdown';
import { withRouter } from 'next/router';
import { Columns } from 'react-bulma-components';
import host from '../../lib/host';
import DigHeader from '../../components/common/DigHeader';
import Layout from '../../components/common/layouts/Layout';
import Vendors from '../../components/common/Vendors';
import ReleaseCard from '../../components/common/ReleaseCard';
import ReleaseDiscs from '../../components/common/ReleaseDiscs';
import { findBySlug } from '../../models/Release/releases';

class Release extends Component {
  static async getInitialProps({ query: { slug } }) {
    const release = await findBySlug(slug);

    return {
      release,
    };
  }

  renderRelease() {
    const { release } = this.props;
    const releaseTitle = he.decode(release.title);
    const artistName = he.decode(release.artist.name);

    const pageTitle = `“${releaseTitle}” by ${artistName}`;
    const pageDescription = he.decode(
      removeMd(release.description)
        .substr(0, 255)
        .replace('\n\n', ' '),
    );

    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta property="og:type" content="music.album" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta
            property="og:image"
            content={host(release.url.large)}
          />
        </Helmet>
        <h1 className="title">{releaseTitle}</h1>
        <h2 className="subtitle">{artistName}</h2>
        <Columns>
          <Columns.Column
            tablet={{ size: 'half' }}
            desktop={{ size: 'one-third' }}
          >
            <ReleaseCard release={release} />
          </Columns.Column>
          <Columns.Column>
            <Vendors vendors={release.vendors} />
            <div className="has-margin-bottom">
              <Markdown className="content page-content">
                {he.decode(release.description)}
              </Markdown>
            </div>
            {release.discs.length > 0 && (
              <ReleaseDiscs discs={release.discs} />
            )}
          </Columns.Column>
        </Columns>
      </>
    );
  }

  render() {
    const header = <DigHeader />;

    return (
      <Layout
        header={header}
        inner
        url={`/dig/release/${this.props.release.slug}`}
      >
        {this.props.release && this.renderRelease()}
      </Layout>
    );
  }
}

export default withRouter(Release);
