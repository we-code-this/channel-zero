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

const Index = () => (
  <div className="page page-alt">
    <Header />
    <section>
      <HorizontalAd />
      <div className="columns">
        <div className="column is-three-fifths">
          <Feature />
          <Articles />
        </div>
        <div className="column">
          <div className="columns">
            <Releases />
            <VerticalPromos />
          </div>
        </div>
      </div>
      <HorizontalPromos />
      <MobileAd />
    </section>
    <Footer />
  </div>
);

export default Index;
