import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PostDetail() {
  const title = useRouter().query.title;

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <h1>{title}</h1>
      </main>
    </div>
  );
}
