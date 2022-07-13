/**
 * _app.tsx
 * Main app component.
 */

// Node Modules
import type { AppProps } from 'next/app';
import Head from 'next/head'
import { FC } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Components
import Footer from 'common/components/Footer';
import Navbar from 'common/components/Navbar';

// Styled Components
const GlobalStyle = createGlobalStyle<{theme: typeof theme}>`
  // Styles for main app component
  #__next {
    margin: auto;
    max-width: ${({ theme }) => theme.size.laptop};
    padding: 0px 5em;
    transition-duration: 250ms;

    @media (max-width: ${({ theme }) => theme.size.tablet}) {
      // Decreases side padding for tablet and smaller sizes such as mobile.
      padding: 0px 1em;
    }
  }

  #page-links-root {
    bottom: 0px;
    left: 0px;
    position: fixed;
    top: 0px;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: beige;
  }

  figure {
    background-color: white;
    border-radius: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    margin: 0px;

    figcaption {
      font-size: 1.25em;
      text-align: center;
    }

    img {
      border-radius: 0.5em;
    }

    iframe {
      aspect-ratio: 16 / 9;
      border-radius: 0.5em;
    }

    video {
      border-radius: 0.5em;
      width: 100%;
    }
  }

  p {
    font-size: 1.5em;
    line-height: 1.5em;
  }
`;

// Theme
import { theme } from 'common/themes';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Peter Myung-Won Pak</title>
      <meta name="description" content="Peter's Website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </ThemeProvider>
);

export default App
