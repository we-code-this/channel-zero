import React, { Component } from "react";
import { Columns } from "react-bulma-components";
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
      <Columns.Column size="two-thirds" id="feature">
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
      </Columns.Column>
    );
  }

  render() {
    // this.state.video is not required
    return (
      <Columns>
        <Article {...this.state.article} isFeature={true} />
        {this.state.video ? this.renderVideo() : undefined}
      </Columns>
    );
  }
}

export default Feature;
