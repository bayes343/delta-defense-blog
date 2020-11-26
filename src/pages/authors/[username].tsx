import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AppName } from '../../constants';

export default function AuthorDetail() {
  const username = useRouter().query.username;

  return (
    <div>
      <Head>
        <title>{username} | {AppName}</title>
      </Head>

      <h1>{username}</h1>
    </div>
  );
}
