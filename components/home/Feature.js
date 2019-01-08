import React, { Component } from "react";

class Feature extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="column-content">
            <h2 className="title is-4">
              <a href="">Parturient Fermentum Bibendum</a>
            </h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
              venenatis vestibulum <a href="#">Read more…</a>
            </p>
          </div>
        </div>
        <div className="column is-two-thirds">
          <div className="column-content">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/YNorGUam5w4"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
