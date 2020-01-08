import React from "react";
import App from "next/app";
import Head from "next/head";

import "@/styles/global.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
