import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import { withRouter } from "next/router";
import DigHeader from "../../components/common/DigHeader";
import Layout from "../../components/common/layouts/Layout";
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
        <h1>{`${release.artist.name} - ${release.title}`}</h1>
        <div className="is-clearfix">
          <div className="wraparound is-half-tablet is-one-thirds-desktop">
            <img
              src={`/static/files/releases/${release.filename}`}
              alt={`${release.artist.name} - ${release.title}`}
            />
          </div>
          <Markdown className="content">{release.description}</Markdown>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Release);
