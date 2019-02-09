import React, { Component } from "react";
import Layout from "../../components/common/layouts/Layout";
import "isomorphic-unfetch";

class Index extends Component {
  static async getInitialProps() {
    // return await fetchHomeProps();
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <Layout>Admin</Layout>;
  }
}

export default Index;
