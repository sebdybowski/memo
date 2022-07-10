import 'milligram';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return <Fragment>
    <Component {...pageProps} />
    <br/>
    <footer>by s3b1x</footer>
  </Fragment>
}

export default MyApp
