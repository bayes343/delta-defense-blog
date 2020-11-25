import Head from 'next/head';
import { Footer, Navigation } from '../components/module';
import '../styles/styles.scss';

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
      <Footer />
    </footer>
  </div>;
}

export default DeltaDefenseBlog;
