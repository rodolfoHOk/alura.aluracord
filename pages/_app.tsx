import '../styles/globalFonts.css';
import { GlobalStyles } from '../styles/globalStyle';
import { PageBackground } from '../components/styles/PageBackgound.styles';
import { AppProps } from 'next/app';
import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { matrix, mushoku } from '../styles/themes';
import TemaContainer from '../components/TemaSelection/TemaSelection';
import { AuthProvider } from '../context/auth';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(mushoku);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <PageBackground>
          <TemaContainer theme={theme} setTheme={setTheme} />
          <Component {...pageProps} />
        </PageBackground>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
