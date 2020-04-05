import React, { Component } from 'react';
import { Columns } from 'react-bulma-components';
import Ad from '../components/common/Ad';
import Articles from '../components/home/Articles';
import Feature from '../components/home/Feature';
import HorizontalPromos from '../components/home/HorizontalPromos';
import Layout from '../components/common/layouts/Layout';
import Releases from '../components/home/Releases';
import VerticalPromos from '../components/home/VerticalPromos';
import 'isomorphic-unfetch';
import { fetchHomeProps } from '../models/utilities';

class Index extends Component {
  static async getInitialProps(props) {
    const pageProps = await fetchHomeProps();

    return pageProps;
  }

  constructor(props) {
    super(props);

    this.state = {
      ad: props.ad,
      feature: props.feature,
      articles: props.articles,
      horizontalPromos: props.horizontalPromos,
      verticalPromos: props.verticalPromos,
      releases: props.releases,
    };
  }

  render() {
    return (
      <Layout url="/">
        {this.state.ad && (
          <Ad
            url={this.state.ad.url}
            alt={this.state.ad.alt}
            filename={this.state.ad.desktop_filename}
          />
        )}
        <Columns>
          <Columns.Column size="three-fifths">
            {this.state.feature && (
              <Feature {...this.state.feature} />
            )}
            <Articles articles={this.state.articles} />
          </Columns.Column>
          <Columns.Column>
            <Columns breakpoint="mobile">
              <Releases releases={this.state.releases} />
              <VerticalPromos promos={this.state.verticalPromos} />
            </Columns>
          </Columns.Column>
        </Columns>
        <HorizontalPromos promos={this.state.horizontalPromos} />
        {this.state.ad && (
          <Ad
            url={this.state.ad.url}
            alt={this.state.ad.alt}
            filename={this.state.ad.mobile_filename}
            mobile
          />
        )}
      </Layout>
    );
  }
}

export default Index;
