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
      <Layout header={header}>
        <h1>{`${release.artist.name} - ${release.title}`}</h1>
        <div className="columns">
          <div className="column is-one-third">
            <img
              src={`/static/files/releases/${release.filename}`}
              alt={`${release.artist.name} - ${release.title}`}
            />
          </div>
          <div className="column">
            <Markdown>{release.description}</Markdown>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Release);
