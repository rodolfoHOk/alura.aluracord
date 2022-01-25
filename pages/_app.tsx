import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { matrix } from '../styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={matrix}>
      <Component />
    </ThemeProvider>
  );
}

export default MyApp;
