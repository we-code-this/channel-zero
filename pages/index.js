import React, { Component } from "react";
import Ad from "../components/common/Ad";
import Articles from "../components/home/Articles";
import Feature from "../components/home/Feature";
import HorizontalPromos from "../components/home/HorizontalPromos";
import Layout from "../components/common/layouts/Layout";
import Releases from "../components/home/Releases";
import VerticalPromos from "../components/home/VerticalPromos";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ad: {
        url: "#",
        alt: "Something awesome to promote",
        desktopImageUrl: "/static/img/a/leaderboard.jpg",
        mobileImageUrl: "/static/img/a/mobile.jpg"
      },
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
      articles: [
        {
          id: 6,
          url: "#",
          title: "Parturient Fermentum Bibendum",
          summary:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum"
        },
        {
          id: 5,
          url: "#",
          title: "Mattis Ultricies Egestas Pharetra",
          summary:
            "Maecenas sed diam eget risus varius blandit sit amet non magna.           Donec ullamcorper nulla non metus auctor fringilla…"
        },
        {
          id: 4,
          url: "#",
          title: "Sollicitudin Ligula Parturient",
          summary:
            "Donec sed odio dui. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus…"
        },
        {
          id: 3,
          url: "#",
          title: "Parturient Fermentum Bibendum, Yo!",
          summary:
            "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum"
        },
        {
          id: 2,
          url: "#",
          title: "Mattis Ultricies Egestas Pharetra",
          summary:
            "Maecenas sed diam eget risus varius blandit sit amet non magna.           Donec ullamcorper nulla non metus auctor fringilla…"
        },
        {
          id: 1,
          url: "#",
          title: "Sollicitudin Ligula Parturient",
          summary:
            "Donec sed odio dui. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus…"
        }
      ],
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
      ],
      releases: [
        {
          id: 1,
          artist: "Chuck D aka Mistachuck",
          title: "Celebration of Ignorance",
          slug: "chuck-d-mistachuck-celebration-ignorance",
          imageUrl: "/static/img/other/mistachuck.png"
        },
        {
          id: 2,
          artist: "DJ Lord",
          title: "Afterburn",
          slug: "dj-lord-afterburn",
          imageUrl: "/static/img/other/dj-lord.jpg"
        },
        {
          id: 3,
          artist: "Anime Oscen & Hive",
          title: "North Country",
          slug: "anime-oscen-hive-north-country",
          imageUrl: "/static/img/other/anime-oscen.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <Layout>
        <Ad
          url={this.state.ad.url}
          alt={this.state.ad.alt}
          imageUrl={this.state.ad.desktopImageUrl}
        />
        <div className="columns">
          <div className="column is-three-fifths">
            <Feature {...this.state.feature} />
            <Articles articles={this.state.articles} />
          </div>
          <div className="column">
            <div className="columns">
              <Releases releases={this.state.releases} />
              <VerticalPromos promos={this.state.verticalPromos} />
            </div>
          </div>
        </div>
        <HorizontalPromos promos={this.state.horizontalPromos} />
        <Ad
          url={this.state.ad.url}
          alt={this.state.ad.alt}
          imageUrl={this.state.ad.mobileImageUrl}
          mobile
        />
      </Layout>
    );
  }
}

export default Index;
