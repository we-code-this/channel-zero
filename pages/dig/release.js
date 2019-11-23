import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import { withRouter } from "next/router";
import { Columns } from "react-bulma-components";
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

  renderRelease() {
    const { release } = this.props;

    return (<>
        <h1 className="title">{release.title}</h1>
        <h2 className="subtitle">{release.artist.name}</h2>
        <Columns>
          <Columns.Column
            tablet={{ size: "half" }}
            desktop={{ size: "one-third" }}
          >
            <ReleaseCard release={release} />
          </Columns.Column>
          <Columns.Column>
            <Vendors vendors={release.vendors} />
            <Markdown className="content page-content">
              {release.description}
            </Markdown>
          </Columns.Column>
        </Columns>
    </>);
  }

  render() {
    const header = <DigHeader />;
    return (
      <Layout header={header} inner>
        {this.props.release && this.renderRelease()}
      </Layout>
    );
  }
}

export default withRouter(Release);
