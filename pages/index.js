import React, { Component } from "react";
import Ad from "../components/common/Ad";
import Articles from "../components/home/Articles";
import Feature from "../components/home/Feature";
import HorizontalPromos from "../components/home/HorizontalPromos";
import Layout from "../components/common/layouts/Layout";
import Releases from "../components/home/Releases";
import VerticalPromos from "../components/home/VerticalPromos";
import "isomorphic-unfetch";
import { fetchHomeProps } from "../models/utilities";

class Index extends Component {
  static async getInitialProps() {
    return await fetchHomeProps();
  }

  constructor(props) {
    super(props);

    this.state = {
      ad: props.ad,
      feature: props.feature,
      articles: props.articles,
      horizontalPromos: props.horizontalPromos,
      verticalPromos: props.verticalPromos,
      releases: props.releases
    };
  }

  render() {
    return (
      <Layout>
        <Ad
          url={this.state.ad.url}
          alt={this.state.ad.alt}
          filename={this.state.ad.desktop_filename}
        />
        <div className="columns">
          <div className="column is-three-fifths">
            <Feature {...this.state.feature} />
            <Articles articles={this.state.articles} />
          </div>
          <div className="column">
            <div className="columns">
              <Releases releases={this.state.releases} />
              <VerticalPromos promos={this.state.verticalPromos} />
            </div>
          </div>
        </div>
        <HorizontalPromos promos={this.state.horizontalPromos} />
        <Ad
          url={this.state.ad.url}
          alt={this.state.ad.alt}
          filename={this.state.ad.mobile_filename}
          mobile
        />
      </Layout>
    );
  }
}

export default Index;
