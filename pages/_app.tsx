import React from "react";
import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Button from "../components/Button";

createGlobalStyle`
  * {
    box-sizing: border-box;
    background:#f00;
  }
  html,
  body,
  #root {
    position: relative;
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    font: normal 1em/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

export default class MyApp extends App {
  state = {
    mode: "light",
    size: "normal"
  };

  handleToggleMode = () => {
    this.setState({ mode: this.state.mode === "light" ? "dark" : "light" });
  };

  handleToggleSize = () => {
    this.setState({ size: this.state.size === "normal" ? "large" : "normal" });
  };
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={{ mode: this.state.mode, size: this.state.size }}>
        <Component {...pageProps} />
        <h1>styled-theming</h1>
        <Button onClick={this.handleToggleMode}>Toggle Mode</Button>
        <Button kind="primary" onClick={this.handleToggleSize}>
          Toggle Size
        </Button>
        <Button kind="success" onClick={this.handleToggleMode}>
          Toggle Mode
        </Button>
        <Button kind="warning" onClick={this.handleToggleSize}>
          Toggle Size
        </Button>
        <Button kind="danger" onClick={this.handleToggleMode}>
          Toggle Mode
        </Button>
      </ThemeProvider>
    );
  }
}
