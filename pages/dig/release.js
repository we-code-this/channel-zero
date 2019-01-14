import React, { Component } from "react";
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
        <h1>{`${release.artist} - ${release.title}`}</h1>
      </Layout>
    );
  }
}

export default withRouter(Release);
