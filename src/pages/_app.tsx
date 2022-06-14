import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { DataProvider, ThemeProvider } from '../context';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DataProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </DataProvider>
  );
}