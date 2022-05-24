import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import { Header } from '@components/index';

import theme from '@utils/theme';

import GlobalStyles from '@styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Exotic Cars</title>
      <meta
        name="description"
        content="Exotic car rental website."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <ThemeProvider theme={theme}>
      <Header />

      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  </>
);

export default MyApp;
