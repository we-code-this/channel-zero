import Head from "next/head";
import DigHeader from "../DigHeader";
import Footer from "../Footer";

const DigLayout = ({ children, title = "DigTheDig @ Channel Zero" }) => (
  <React.Fragment>
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" type="image/png" href="/static/img/favicon.png" />
    </Head>
    <div className="page page-alt">
      <DigHeader />
      <section>{children}</section>
      <Footer />
    </div>
  </React.Fragment>
);

export default DigLayout;
