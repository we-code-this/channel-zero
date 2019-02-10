import React, { Component } from "react";
import Layout from "../../components/common/layouts/AdminLayout";
import { get as fetchArtists } from "../../models/Artist/artists";
import "isomorphic-unfetch";

class Artists extends Component {
  static async getInitialProps() {
    return {
      artists: await fetchArtists()
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      artists: props.artists
    };
  }

  render() {
    const artists = this.state.artists;
    return (
      <Layout page="Artists">
        {artists.length ? (
          <ul className="is-unstyled">
            {this.state.artists.map(artist => {
              return <li key={artist.id}>{artist.name}</li>;
            })}
          </ul>
        ) : (
          ""
        )}
      </Layout>
    );
  }
}

export default Artists;
