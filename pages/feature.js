import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import { Columns } from 'react-bulma-components';
import Layout from '../components/common/layouts/Layout';
import CenterContent from '../components/common/CenterContent';
import Video from '../components/common/Video';
import { fetchFeaturePageProps } from '../models/utilities';

class Feature extends Component {
  static async getInitialProps({ req, query: { id } }) {
    const pageProps = await fetchFeaturePageProps(id);

    return pageProps;
  }

  render() {
    if (this.props.feature) {
      const { article, video } = this.props.feature;

      return (
        <Layout
          title={article.title}
          inner
          url={`/feature/${this.props.feature.id}`}
        >
          <CenterContent>
            <h1 className="title">{article.title}</h1>
            <Columns>
              <Columns.Column>
                <Video src={video.src} />
                <Markdown className="content">
                  {article.description}
                </Markdown>
              </Columns.Column>
            </Columns>
          </CenterContent>
        </Layout>
      );
    } else {
      return <Layout></Layout>;
    }
  }
}

export default Feature;
