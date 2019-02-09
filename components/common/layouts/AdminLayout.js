import Head from "next/head";
import Header from "../admin/Header";
import Nav from "../admin/Nav";

import "../../../sass/admin.scss";

const AdminLayout = ({ children, title = "Channel Zero" }) => {
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
      <div className="admin">
        <Nav />
        <section className="main">
          <Header />
          <div className="pageContent">{children}</div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AdminLayout;
