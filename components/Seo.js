// // components/Seo.js
// import Head from 'next/head';

// const generateCanonicalURL = (path) => {
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//     return `${baseUrl}${path}`;
// };

// const Seo = ({ title, description, image, path, ogType }) => {

//     const canonicalUrl = generateCanonicalURL(path);


//     return (
//         <Head>
//             <title>{title}</title>
//             <meta name="description" content={description} />
//             <link rel="canonical" href={canonicalUrl} />


//             <meta property="og:title" content={title} />
//             <meta property="og:description" content={description} />
//             <meta property="og:type" content={ogType} />
//             {image && <meta property="og:image" content={image} />}
//             <meta property="og:url" content={canonicalUrl} />


//             <meta name="twitter:card" content="summary_large_image" />
//             <meta name="twitter:title" content={title} />
//             <meta name="twitter:description" content={description} />
//             {image && <meta name="twitter:image" content={image} />}
//         </Head>
//     );
// };

// export default Seo;


// components/Seo.js
import Head from 'next/head';

const generateCanonicalURL = (path) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    return `${baseUrl}${path}`;
};

const Seo = ({
    title,
    description,
    image,
    path,
    ogType,
    publishedTime,
    modifiedTime,
    locale = "en_US", // Default value for locale
    siteName
}) => {

  const canonicalUrl = generateCanonicalURL(path);

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            {image && <meta property="og:image" content={image} />}
             <meta property="og:url" content={canonicalUrl} />
            {siteName && <meta property="og:site_name" content={siteName} />}
           {locale && <meta property="og:locale" content={locale} />}

             {/* Article specific properties */}
            {publishedTime && (
                 <meta property="article:published_time" content={publishedTime} />
            )}
             {modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}

             {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
        </Head>
    );
};

export default Seo;