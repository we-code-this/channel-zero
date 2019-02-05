import React, { Component } from "react";
import { withRouter } from "next/router";
import DigHeader from "../../components/common/DigHeader";
import Layout from "../../components/common/layouts/Layout";
import Release from "../../components/common/Release";
import { get } from "../../models/Release/releases";

class Index extends Component {
  static async getInitialProps() {
    const releases = await get({ limit: 12, order: "desc" });

    return {
      releases
    };
  }

  render() {
    const header = <DigHeader />;
    const { releases } = this.props;

    return (
      <Layout header={header} inner>
        <h1 className="title">Dig The Dig</h1>
        <div className="columns is-multiline">
          {releases.map(release => (
            <div key={release.id} className="column is-one-quarter">
              <Release {...release} />
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default withRouter(Index);
