import host from '../../../lib/host';
import Head from 'next/head';
import Helmet from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children, title, header, inner, url = '' }) => {
  const siteName = 'Channel Zero';
  let pageTitle = siteName;
  let pageUrl = host(url);

  if (title) {
    pageTitle = `${title} - ${siteName}`;
  }

  if (!header) {
    header = <Header />;
  }

  const pageClasses = inner
    ? 'page page-alt page-inner'
    : 'page page-alt';

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="canonical" href={pageUrl} />
        <link
          rel="icon"
          type="image/png"
          href="/static/img/favicon.png"
        />
        <link
          rel="apple-touch-icon"
          href="/static/img/apple-touch-icon-channelzero.jpg"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black"
        />
      </Head>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:description"
          content="ChannelZero is a central platform for discovering great new music by our family of labels and artists."
        />
        <meta
          property="og:image"
          content={host('/static/img/meta-graphic-channelzero.jpg')}
        />
      </Helmet>
      <div className={pageClasses}>
        {header}
        <section id="main">{children}</section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
