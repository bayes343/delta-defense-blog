import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PostDetail() {
  const id = useRouter().query.id;

  return (
    <div>
      <Head>
        <title>{id}</title>
      </Head>

      <main>
        <h1>{id}</h1>
      </main>
    </div>
  );
}
