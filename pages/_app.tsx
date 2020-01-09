import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import "@/styles/global.css";
import { configureStore } from "@/store";

const store = configureStore();

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
