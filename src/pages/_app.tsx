import '../styles/globalFonts.css';
import { GlobalStyles } from '../styles/globalStyle';
import { PageBackground } from '../components/styles/PageBackgound.styles';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { mushoku } from '../styles/themes';
import TemaContainer from '../components/TemaSelection/TemaSelection';
import { AuthProvider } from '../context/auth';
import * as themes from '../styles/themes';
import { Loading } from '../components/Loading/Loading';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(mushoku);
  const [loadingTheme, setLoadingTheme] = useState(true);

  useEffect(() => {
    const themeName = localStorage.getItem('@aluracord:theme');

    if (themeName) {
      setTheme(themes[themeName]);
    } else {
      setTheme(mushoku);
    }

    setLoadingTheme(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        {loadingTheme ? (
          <Loading />
        ) : (
          <PageBackground>
            <TemaContainer theme={theme} setTheme={setTheme} />
            <Component {...pageProps} />
          </PageBackground>
        )}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
