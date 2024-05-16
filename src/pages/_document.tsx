import { Html, Head, Main, NextScript } from "next/document";
import { UIProvider } from "@yamada-ui/react";

export default function Document() {
  return (
    <Html lang='ja'>
      <Head />
      <body>
        <UIProvider>
          <Main />
          <NextScript />
        </UIProvider>
      </body>
    </Html>
  );
}
