import Head from 'next/head';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import 'public/global.css';

function MyApp({ Component, pageProps }: AppPropsType) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap"
        />
        <title>Richard Torres</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
        ></link>
        <meta property="og:title" content="Richard Torres Personal Homepage" />
        <meta property="og:url" content="https://richardtorres.github.io/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="I'm Richard Torres, software engineer located in Boston, MA. Learn more or contact me."
        />
        <meta property="og:image" content="richard-torres.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
