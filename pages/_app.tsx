import Head from 'next/head';
import { Navigation } from '../components/module';
import '../styles/base.scss';

function DeltaDefenseBlog({ Component, pageProps }) {
  return <div>
    <Head>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <header>
      <Navigation />
    </header>

    <main>
      <Component {...pageProps} />
    </main>

    <footer>
      <p>Super Badass Blog</p>
    </footer>
  </div>;
}

export default DeltaDefenseBlog;
