import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import React, { FC } from "react";
import { theme } from "../utils/theme";

/**
 *  No layout component
 * @param {AppProps} props The props
 * @returns {ReactElement} The no layout component
 **/
const Noop: FC = ({ children }) => <>{children}</>;

/**
 * Next.js Application
 * @param {NextComponentType} Component The component to render
 * @param {any} pageProps The props passed to the page
 * @returns {ReactElement} The rendered component
 */
function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
