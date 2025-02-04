// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import Image from "next/image";
// import VS from '../../public/images/vs.svg'
// import Winner from '../../public/images/trophy.svg'
// import styles from './comparison.module.css';
// import Link from 'next/link';
// const SingleComparisonPage = () => {
//     const router = useRouter();
//     const { slug } = router.query;
//     const [comparison, setComparison] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);


//     useEffect(() => {
//         const fetchComparison = async () => {
//             if (!slug) return; // Return if slug is not available

//             try {
//                 const response = await fetch(
//                     `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/company_comparison?slug=${slug}`
//                 );

//                 if (!response.ok) throw new Error("Failed to fetch data");
//                 const data = await response.json();


//                 if (data && data.length > 0) {
//                     const comparisonData = data[0];
//                     const logo1Id = comparisonData.acf?.["1_logo"];
//                     const logo2Id = comparisonData.acf?.["2logo"];

//                     const [logo1, logo2] = await Promise.all([
//                         logo1Id ? fetchMediaUrl(logo1Id) : null,
//                         logo2Id ? fetchMediaUrl(logo2Id) : null,
//                     ]);
//                     const formattedData = {
//                         id: comparisonData.id,
//                         title: comparisonData.title.rendered,
//                         subheading: comparisonData.acf?.sub_heading || null,
//                         winner: comparisonData.acf?.winner || null,
//                         winner_wbsite_link: comparisonData.acf?.winner_wbsite_link || null,
//                         shortDescription: comparisonData.acf?.short_description || null,
//                         content: comparisonData.content.rendered,
//                         logo1: logo1,
//                         text1: comparisonData.acf?.["1logo_text"] || null,
//                         logo2: logo2,
//                         text2: comparisonData.acf?.["2logo_text"] || null,
//                     };
//                     setComparison(formattedData);
//                 } else {
//                     setError("Comparison not found")
//                 }
//             } catch (err) {
//                 setError(err.message)
//             } finally {
//                 setLoading(false);
//             }
//         }
//         const fetchMediaUrl = async (mediaId) => {
//             try {
//                 const mediaResponse = await fetch(
//                     `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${mediaId}`
//                 );
//                 if (mediaResponse.ok) {
//                     const mediaData = await mediaResponse.json();
//                     return mediaData.source_url;
//                 } else {
//                     console.error("Failed to fetch media", mediaId);
//                     return null;
//                 }
//             } catch (error) {
//                 console.error("Error fetching media:", error);
//                 return null;
//             }
//         };
//         fetchComparison();

//     }, [slug]);

//     if (loading)
//         return (
//             <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
//                 <div className="flex space-x-2">
//                     <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
//                     <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
//                     <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
//                 </div>
//             </div>
//         );
//     ;
//     if (error) return <p>Error: {error}</p>;
//     if (!comparison) return <p>Comparison not found</p>

//     return (
//         <>
//             <div className='py-10 single-page-comparison'>
//                 <div className="container mx-auto px-4">
//                     <div className='flex gap-11'>
//                         <div className='w-1/2'>
//                             <div className="heading pt-10">
//                                 <h1 className="text-5xl font-bold text-gray-900 "><span className='bg-gradient-to-r from-light-royal-blue from-0% via-purple-heart via-54% to-amaranth to-100% text-transparent bg-clip-text'>{comparison.title}</span> : {comparison.subheading}</h1>
//                             </div>
//                             <div className='flex gap-2 mt-8'>
//                                 <div className='w-8 relative'>
//                                     <Image src={Winner} alt="Winner" fill className="rounded object-contain" sizes="8px" />
//                                 </div>
//                                 <p className='font-semibold text-lg '>Winner : <span className='text-gray-500 font-medium'>{comparison.winner}</span></p>
//                             </div>
//                              {comparison.shortDescription && (
//                                 <div className="text-gray-500 text-lg mt-4 mb-3" dangerouslySetInnerHTML={{__html: comparison.shortDescription}} />
//                             )}
//                             <Link href={comparison.winner_wbsite_link} target='_blank' className='focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center'>Visit {comparison.winner}</Link>
//                         </div>
//                         <div className='w-1/2'>
//                             <div className="my-4">
//                                 <div className="flex justify-center items-center ">
//                                     <div className='flex justify-center items-center gap-6 rounded-full w-2xl h-2xl p-6'>                            <div className="flex flex-col">
//                                         {comparison.logo1 && (
//                                             <div className='bg-white border border-gray-300 rounded-2xl shadow-md w-45 h-45 flex justify-center items-center relative'>
//                                                 <Image src={comparison.logo1} alt={comparison.text1} fill className="rounded object-contain mb-2 p-3" sizes="(max-width: 768px) 100vw, 45px" />
//                                             </div>
//                                         )}
//                                         <span className="text-3xl font-semibold mt-4">{comparison.text1}</span>
//                                     </div>

//                                         <div className=" relative p-1 w-422 h-42 flex justify-center items-center mb-12">
//                                             {/* <p className=" text-2xl font-medium">VS</p> */}
//                                             <Image src={VS} alt="VS" fill className="rounded object-contain mb-2 p-3" sizes="42px"/>
//                                         </div>

//                                         <div className="flex flex-col">
//                                             {comparison.logo2 && (
//                                                 <div className='bg-white border border-gray-300 rounded-2xl shadow-md w-45 h-45 flex justify-center items-center relative'>
//                                                     <Image src={comparison.logo2} alt={comparison.text2} fill className="rounded object-contain mb-2 p-3" sizes="(max-width: 768px) 100vw, 45px" />
//                                                 </div>
//                                             )}
//                                             <span className="text-3xl font-semibold mt-4">{comparison.text2}</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container mx-auto px-4">
//                     <div className='wp-long-content mt-12'>
//                         <div className={`wp-content ${styles['comparison-summary']}`} dangerouslySetInnerHTML={{ __html: comparison.content }} />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SingleComparisonPage;



// pages/comparison/[slug].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import VS from '../../public/images/vs.svg'
import Winner from '../../public/images/trophy.svg'
import styles from './comparison.module.css';
import Link from 'next/link';
import Seo from "@/components/Seo"; // Import the Seo component

const SingleComparisonPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [comparison, setComparison] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchComparison = async () => {
            if (!slug) return; // Return if slug is not available

            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/company_comparison?slug=${slug}&_embed`
                );

                if (!response.ok) throw new Error("Failed to fetch data");
                const data = await response.json();


                if (data && data.length > 0) {
                    const comparisonData = data[0];
                    const logo1Id = comparisonData.acf?.["1_logo"];
                    const logo2Id = comparisonData.acf?.["2logo"];

                    const [logo1, logo2] = await Promise.all([
                        logo1Id ? fetchMediaUrl(logo1Id) : null,
                        logo2Id ? fetchMediaUrl(logo2Id) : null,
                    ]);

                    const formattedData = {
                        id: comparisonData.id,
                        title: comparisonData.title.rendered,
                        subheading: comparisonData.acf?.sub_heading || null,
                        winner: comparisonData.acf?.winner || null,
                         winner_wbsite_link: comparisonData.acf?.winner_wbsite_link || null,
                        shortDescription: comparisonData.acf?.short_description || null,
                        content: comparisonData.content.rendered,
                        logo1: logo1,
                        text1: comparisonData.acf?.["1logo_text"] || null,
                        logo2: logo2,
                        text2: comparisonData.acf?.["2logo_text"] || null,
                          yoast_head_json: comparisonData.yoast_head_json
                    };
                    setComparison(formattedData);
                } else {
                    setError("Comparison not found")
                }
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false);
            }
        }
        const fetchMediaUrl = async (mediaId) => {
            try {
                const mediaResponse = await fetch(
                    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${mediaId}`
                );
                if (mediaResponse.ok) {
                    const mediaData = await mediaResponse.json();
                     return mediaData.source_url;

                } else {
                    console.error("Failed to fetch media", mediaId);
                    return null;
                }
            } catch (error) {
                console.error("Error fetching media:", error);
                return null;
            }
        };
        fetchComparison();

    }, [slug]);

    if (loading)
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
                <div className="flex space-x-2">
                    <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
                    <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
                    <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
                </div>
            </div>
        );
    ;
    if (error) return <p>Error: {error}</p>;
    if (!comparison) return <p>Comparison not found</p>

    let seoTitle = comparison.title;
    let seoDescription = comparison.shortDescription ||  comparison.content;
    let seoImage = null;
    let siteName = "Instagram Advice"


     if(comparison.yoast_head_json){
        seoTitle = comparison.yoast_head_json.title || seoTitle
          seoDescription = comparison.yoast_head_json.og_description || seoDescription;
           seoImage = comparison.yoast_head_json.og_image?.[0]?.url
             siteName = comparison.yoast_head_json.og_site_name || siteName
     }
   const proxyImageUrl = (url) => {
        if (!url) return "";
        return `/api/proxy-image?imageUrl=${encodeURIComponent(url)}`;
    };


    return (
        <>
               <Seo
                    title={seoTitle}
                    description={seoDescription.replace(/<[^>]*>/g, '')}
                    image={proxyImageUrl(seoImage)}
                    path={`/comparison/${slug}`}
                    ogType="article"
                      siteName={siteName}
                 />
            <div className='py-10 single-page-comparison'>
                <div className="container mx-auto px-4">
                    <div className='flex gap-11'>
                        <div className='w-1/2'>
                            <div className="heading pt-10">
                                <h1 className="text-5xl font-bold text-gray-900 "><span className='bg-gradient-to-r from-light-royal-blue from-0% via-purple-heart via-54% to-amaranth to-100% text-transparent bg-clip-text'>{comparison.title}</span> : {comparison.subheading}</h1>
                            </div>
                            <div className='flex gap-2 mt-8'>
                                <div className='w-8 relative'>
                                    <Image src={Winner} alt="Winner" fill className="rounded object-contain" sizes="8px" />
                                </div>
                                <p className='font-semibold text-lg '>Winner : <span className='text-gray-500 font-medium'>{comparison.winner}</span></p>
                            </div>
                            {comparison.shortDescription && (
                                <div className="text-gray-500 text-lg mt-4 mb-3" dangerouslySetInnerHTML={{__html: comparison.shortDescription}} />
                            )}
                             <Link href={comparison.winner_wbsite_link} target='_blank' className='focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center'>Visit {comparison.winner}</Link>
                        </div>
                        <div className='w-1/2'>
                            <div className="my-4">
                                <div className="flex justify-center items-center ">
                                    <div className='flex justify-center items-center gap-6 rounded-full w-2xl h-2xl p-6'>                            <div className="flex flex-col">
                                        {comparison.logo1 && (
                                            <div className='bg-white border border-gray-300 rounded-2xl shadow-md w-45 h-45 flex justify-center items-center relative'>
                                                <Image src={comparison.logo1} alt={comparison.text1} fill className="rounded object-contain mb-2 p-3" sizes="(max-width: 768px) 100vw, 45px" />
                                            </div>
                                        )}
                                        <span className="text-3xl font-semibold mt-4">{comparison.text1}</span>
                                    </div>

                                        <div className=" relative p-1 w-422 h-42 flex justify-center items-center mb-12">
                                            {/* <p className=" text-2xl font-medium">VS</p> */}
                                            <Image src={VS} alt="VS" fill className="rounded object-contain mb-2 p-3" sizes="42px"/>
                                        </div>

                                        <div className="flex flex-col">
                                            {comparison.logo2 && (
                                                <div className='bg-white border border-gray-300 rounded-2xl shadow-md w-45 h-45 flex justify-center items-center relative'>
                                                    <Image src={comparison.logo2} alt={comparison.text2} fill className="rounded object-contain mb-2 p-3" sizes="(max-width: 768px) 100vw, 45px" />
                                                </div>
                                            )}
                                            <span className="text-3xl font-semibold mt-4">{comparison.text2}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className='wp-long-content mt-12'>
                        <div className={`wp-content ${styles['comparison-summary']}`} dangerouslySetInnerHTML={{ __html: comparison.content }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleComparisonPage;