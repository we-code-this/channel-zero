import React, { Component } from "react";
import Articles from "../components/home/Articles";
import Feature from "../components/home/Feature";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import HorizontalAd from "../components/common/HorizontalAd";
import HorizontalPromos from "../components/home/HorizontalPromos";
import MobileAd from "../components/common/MobileAd";
import Releases from "../components/home/Releases";
import VerticalPromos from "../components/home/VerticalPromos";

import "../sass/app.scss";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feature: {
        article: {
          id: 1,
          url: "#",
          title: "Parturient Fermentum Bibendum",
          summary:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum"
        },
        video: {
          id: 1,
          src: "https://www.youtube.com/embed/YNorGUam5w4"
        }
      },
      horizontalPromos: [
        {
          id: 1,
          name: "Mad Urgency",
          url: "#",
          imageUrl: "/static/img/logos/madurgency.svg"
        },
        {
          id: 2,
          name: "The Age",
          url: "#",
          imageUrl: "/static/img/logos/the-age.svg"
        },
        {
          id: 3,
          name: "Enemy Books",
          url: "#",
          imageUrl: "/static/img/logos/enemy-books.svg"
        },
        {
          id: 4,
          name: "Spitburg Pirates",
          url: "#",
          imageUrl: "/static/img/logos/spitburg-pirates.svg"
        },
        {
          id: 5,
          name: "HipHopGods",
          url: "#",
          imageUrl: "/static/img/logos/hiphopgods.svg"
        }
      ],
      verticalPromos: [
        {
          id: 6,
          name: "Rapstation.com",
          url: "#",
          imageUrl: "/static/img/logos/rapstation.svg"
        },
        {
          id: 7,
          name: "Spitslam",
          url: "#",
          imageUrl: "/static/img/logos/spitslam.svg"
        },
        {
          id: 8,
          name: "Spitifly",
          url: "#",
          imageUrl: "/static/img/logos/spitifly.svg"
        },
        {
          id: 9,
          name: "DigTheDig",
          url: "#",
          imageUrl: "/static/img/logos/dig-the-dig.svg"
        }
      ]
    };
  }

  render() {
    return (
      <div className="page page-alt">
        <Header />
        <section>
          <HorizontalAd />
          <div className="columns">
            <div className="column is-three-fifths">
              <Feature {...this.state.feature} />
              <Articles />
            </div>
            <div className="column">
              <div className="columns">
                <Releases />
                <VerticalPromos promos={this.state.verticalPromos} />
              </div>
            </div>
          </div>
          <HorizontalPromos promos={this.state.horizontalPromos} />
          <MobileAd />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Index;
