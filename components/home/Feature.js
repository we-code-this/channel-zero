import React, { Component } from "react";
import Article from "../common/Article";

class Feature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: props.article,
      video: props.video
    };
  }

  renderVideo() {
    return (
      <div className="column is-two-thirds">
        <div className="column-content">
          <div className="video-container">
            <iframe
              src={this.state.video.src}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    // this.state.video is not required
    return (
      <div className="columns">
        <Article {...this.state.article} />
        {this.state.video ? this.renderVideo() : undefined}
      </div>
    );
  }
}

export default Feature;
