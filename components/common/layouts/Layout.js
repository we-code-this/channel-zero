import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, title = "Channel Zero" }) => (
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
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  </React.Fragment>
);

export default Layout;
