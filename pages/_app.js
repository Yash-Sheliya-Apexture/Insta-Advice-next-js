// // pages/_app.js
// import '../styles/global.css';


// import Header from '../components/Header/Header';
// import Footer from '../components/Footer/Footer';
// import Head from 'next/head';
// function MyApp({ Component, pageProps }) {
//   return (
//      <>
//       <Head>
//         <title>Instagram Advice</title>
//         <meta name="description" content="Instagram Advice App" />
//        </Head>
//        <Header />
//        <main>
//         <Component {...pageProps} />
//       </main>
//        <Footer />
//      </>
//   );
// }

// export default MyApp;


import '../styles/global.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
                window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
                    page_path: url,
                });
            }
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);


    return (
        <>
            <Head>
                <title>InstaAdvice|Expert Tips & Advice for Instagram Success</title>
                <meta name="description" content="Get expert Instagram tips & advice to grow your profile faster! Visit InstaAdvice for actionable strategies, success, and proven methods. Start improving today!" />
            </Head>

            {/* Global site tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                    });
                    `,
                }}
            />


            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}

export default MyApp;