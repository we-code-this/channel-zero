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

  vendors() {
    const vendors = this.props.release.vendors;
    let output = "";

    if (vendors.length) {
      output = (
        <div className="vendor-container">
          <span className="vendor-label">Buy/Stream</span>{" "}
          <ul>
            {vendors.map(vendor => (
              <li key={`vendor-${vendor.id}`}>
                <a
                  href={vendor.url}
                  className="button is-small is-info is-radiusless"
                >
                  <span className="icon is-small">
                    <svg className="svg-icon">
                      <use xlinkHref={`#icon-${vendor.icon_class}`} />
                    </svg>
                  </span>
                  <span>{vendor.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return output;
  }

  render() {
    const header = <DigHeader />;
    const { release } = this.props;

    return (
      <Layout header={header} inner>
        <h1 class="title">{release.title}</h1>
        <h2 className="subtitle">{release.artist.name}</h2>
        <div className="columns">
          <div className="column is-half-tablet is-one-third-desktop">
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img
                    src={`/static/files/releases/${release.filename}`}
                    alt={`${release.artist.name} - ${release.title}`}
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p>
                    <span class="album-review">
                      “Incredible album! Not to be missed!”
                    </span>{" "}
                    <span class="album-reviewer">- Someone</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            {this.vendors()}
            <Markdown className="content page-content">
              {release.description}
            </Markdown>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Release);
