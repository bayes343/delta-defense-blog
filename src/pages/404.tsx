import Head from 'next/head';
import * as React from 'react';

export default function Custom404() {
  return <div>
    <Head>
      <title>Not Found</title>
    </Head>

    <h1>404 - Page Not Found</h1>
  </div>;
}
