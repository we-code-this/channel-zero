import React, { Component } from "react";

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
        <div className="column">
          <div className="column-content">
            <h2 className="title is-4">
              <a href={this.state.article.url}>{this.state.article.title}</a>
            </h2>
            <p>
              {this.state.article.summary + " "}
              <a href={this.state.article.url}>Read more…</a>
            </p>
          </div>
        </div>

        {this.state.video ? this.renderVideo() : undefined}
      </div>
    );
  }
}

export default Feature;
