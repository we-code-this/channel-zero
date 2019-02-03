import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import { withRouter } from "next/router";
import DigHeader from "../../components/common/DigHeader";
import Layout from "../../components/common/layouts/Layout";
import Vendors from "../../components/common/Vendors";
import ReleaseCard from "../../components/common/ReleaseCard";
import { findBySlug } from "../../models/Release/releases";

class Release extends Component {
  static async getInitialProps({ query: { slug } }) {
    const release = await findBySlug(slug);

    return {
      release
    };
  }

  render() {
    const header = <DigHeader />;
    const { release } = this.props;

    return (
      <Layout header={header} inner>
        <h1 class="title">{release.title}</h1>
        <h2 className="subtitle">{release.artist.name}</h2>
        <div className="columns">
          <div className="column is-half-tablet is-one-third-desktop">
            <ReleaseCard release={release} />
          </div>
          <div className="column">
            <Vendors vendors={release.vendors} />
            <Markdown className="content page-content">
              {release.description}
            </Markdown>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Release);
