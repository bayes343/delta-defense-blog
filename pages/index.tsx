import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Posts</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>Welcome to <a href="https://nextjs.org">Next.js!</a></h1>
      </main>

      <footer>
      </footer>
    </div>
  );
}
