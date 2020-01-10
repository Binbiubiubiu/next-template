import React, { FC } from 'react';
import Head from 'next/head';

interface LayoutProps {
  title?: string;
}

const Layout: FC<LayoutProps> = (props) => {
  const { title = process.env.WEBSITE_TITLE, children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
