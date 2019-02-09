import React, { Component } from "react";
import { withRouter } from "next/router";
import { Columns } from "react-bulma-components";
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
        <Columns>
          {releases.map(release => (
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
