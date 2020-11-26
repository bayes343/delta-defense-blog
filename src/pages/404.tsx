import Head from 'next/head';
import * as React from 'react';
import { AppName } from '../constants';

export default function Custom404() {
  return <div>
    <Head>
      <title>Not Found | {AppName}</title>
    </Head>

    <h1>404 - Page Not Found</h1>
  </div>;
}
