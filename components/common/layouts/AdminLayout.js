import Head from "next/head";
import Header from "../admin/Header";
import Nav from "../admin/Nav";

import "../../../sass/admin.scss";

const AdminLayout = ({ children, page = "Admin", title = "Channel Zero" }) => {
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
        <Header title={page} />
        <section className="admin-main">
          <Nav />
          <div className="pageContent">{children}</div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AdminLayout;
