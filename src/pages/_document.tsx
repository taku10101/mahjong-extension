import { Html, Head, Main, NextScript } from "next/document";
import { UIProvider } from "@yamada-ui/react";

export default function Document() {
  return (
    <Html lang='ja'>
      <Head />
      {/* @ts-ignore */}
      <body>
        <UIProvider>
          <Main />
          <NextScript />
          {/* @ts-ignore */}
        </UIProvider>
      </body>
    </Html>
  );
}
