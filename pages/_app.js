// pages/_app.js
import '../styles/global.css';


import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
     <>
      <Head>
        <title>Instagram Advice</title>
        <meta name="description" content="Instagram Advice App" />
       </Head>
       <Header />
       <main>
        <Component {...pageProps} />
      </main>
       <Footer />
     </>
  );
}

export default MyApp;