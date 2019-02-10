import React, { Component } from "react";
import Layout from "../../components/common/layouts/AdminLayout";
import "isomorphic-unfetch";

class Artists extends Component {
  static async getInitialProps() {
    // return await fetchHomeProps();
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <Layout page="Artists">Artists</Layout>;
  }
}

export default Artists;
