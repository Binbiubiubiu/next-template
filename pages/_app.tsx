import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import "@/styles/global.css";
import store from "@/store";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
