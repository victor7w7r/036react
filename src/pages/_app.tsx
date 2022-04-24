import type { AppProps } from 'next/app';

import { DataProvider } from '../context';

import '../styles/style.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DataProvider>
      <Component {...pageProps} />
      </DataProvider>
  );
}