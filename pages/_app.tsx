import '../styles/globalFonts.css';
import { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { matrix, mushoku } from '../styles/themes';
import { GlobalStyles } from '../styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(mushoku);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component />
    </ThemeProvider>
  );
}

export default MyApp;
