import React from 'react';
import App, { Container } from 'next/app';
import Icons from '../components/common/Icons';

import '../sass/app.scss';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
        <Icons />
      </Container>
    );
  }
}
