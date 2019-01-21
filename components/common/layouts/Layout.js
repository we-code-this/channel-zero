import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, title = "Channel Zero", header, inner }) => {
  if (!header) {
    header = <Header />;
  }

  const pageClasses = inner ? "page page-alt page-inner" : "page page-alt";

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" type="image/png" href="/static/img/favicon.png" />
      </Head>
      <div className={pageClasses}>
        {header}
        <section id="main">{children}</section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
