import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles'; // works with @material-ui/core/styles, if you prefer to use it.

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ margin: 0}}>
        <Head>
          <title>Ingrid</title>
          <link rel="icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />

          <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1 user-scalable=no"/>
          <meta name="theme-color" content="#03fce3" />

          <meta property="og:site_name" content="ingrid.study" />
          <meta property="og:title" content="Ingrid - A new way to track online education" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Ingrid is an innovative solution to loss of motivation and passion in learning. We provide a clean and intuitive interface to track learning progress, along with milestones and streaks for students to set personal goals." />
          <meta property="og:image" content="/static/images/ingrid-banner.gif" />
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@discord"/>
          <meta name="twitter:creator" content="@discord"/>
        </Head>
        <body style={{ margin: 0, backgroundColor: '#F8F9FB'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
