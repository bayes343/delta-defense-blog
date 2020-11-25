import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function AuthorDetail() {
  const username = useRouter().query.username;

  return (
    <div>
      <Head>
        <title>{username}</title>
      </Head>

      <main>
        <h1>{username}</h1>
      </main>
    </div>
  );
}
