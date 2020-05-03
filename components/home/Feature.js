import React, { Component } from 'react';
import { Columns } from 'react-bulma-components';
import Article from '../common/Article';
import Video from '../common/Video';

class Feature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: props.article,
      video: props.video,
    };
  }

  renderVideo() {
    return (
      <Columns.Column size="two-thirds" id="feature">
        <div className="column-content">
          <Video
            src={this.state.video.src}
            title={this.state.video.title}
          />
        </div>
      </Columns.Column>
    );
  }

  render() {
    // this.state.video is not required
    return (
      <Columns>
        <Article {...this.state.article} feature={this.props.id} />
        {this.state.video ? this.renderVideo() : undefined}
      </Columns>
    );
  }
}

export default Feature;
