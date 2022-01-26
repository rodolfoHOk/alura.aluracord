import '../styles/globalFonts.css';
import { AppProps } from 'next/app';
import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { matrix, mushoku } from '../styles/themes';
import { GlobalStyles } from '../styles/globalStyle';
import { PageBackground } from '../components/PageBackground';
import TemaContainer from '../components/TemaContainer';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(matrix);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageBackground>
        <TemaContainer theme={theme} setTheme={setTheme} />
        <Component {...pageProps} />
      </PageBackground>
    </ThemeProvider>
  );
}

export default MyApp;
