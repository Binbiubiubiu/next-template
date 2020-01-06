import React, { FC } from "react";
import Head from "next/head";

interface LayoutProps {
  title?: String;
}

const Layout: FC<LayoutProps> = props => {
  const { title = "This is the default title", children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
