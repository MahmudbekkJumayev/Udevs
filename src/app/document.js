// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/public/Logo/NavbarLogo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>UzLoyalAdmin</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
