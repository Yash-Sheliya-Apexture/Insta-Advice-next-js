import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import VS from '../public/images/vs.svg';
import Seo from "@/components/Seo";


const ComparisonPage = () => {
    const [comparisons, setComparisons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComparisons = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/company_comparison?_embed`
                );
                if (!response.ok) throw new Error("Failed to fetch data");
                const data = await response.json();

                const formattedData = await Promise.all(
                    data.map(async (comparison) => {
                        const logo1Id = comparison.acf?.["1_logo"];
                        const logo2Id = comparison.acf?.["2logo"];

                        const [logo1, logo2] = await Promise.all([
                            logo1Id ? fetchMediaUrl(logo1Id) : null,
                            logo2Id ? fetchMediaUrl(logo2Id) : null,
                        ]);

                        return {
                            id: comparison.id,
                            title: comparison.title.rendered,
                            slug: comparison.slug,
                            logo1: logo1,
                            logo2: logo2,
                            text1: comparison.acf?.["1logo_text"] || null,
                            text2: comparison.acf?.["2logo_text"] || null,
                        };
                    })
                );

                setComparisons(formattedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

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

        fetchComparisons();
    }, []);

    if (loading) return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
            <div className="flex space-x-2">
                <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
                <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
                <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
            </div>
        </div>
    );
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Seo
                title="InstaAdvice | Review & Compare Top Advice Services"
                description="Compare top instagram growth tools & find the best fit for you! Read expert reviews and make informed decisions with InstaAdvice. Start saving time & money"
                ogType="website"
                path="/comparison"
            />
            <div className="Comparison-list-wrap py-12">
                <div className="Comparison-list-hero">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center ">
                            <div className="flex justify-center items-center">
                                <h1 className="text-3xl text-dark-color md:text-5xl font-gt font-bold mt-6">Objective Comparison: <span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">Top Instagram Growth Services Analyzed</span></h1>
                            </div>
                            <div>
                                <p className="text-lg md:text-xl text-gray-500 mt-6">Stop guessing which Instagram growth service is best. Our comparisons provide an objective look at the top providers, so you can make the right choice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Comparison-list mt-10">
                    <div className="container mx-auto px-4">
                        <div className="comparison-grid gap-5">
                            {comparisons?.map((comparison) => (
                                <div key={comparison.id} className="border border-gray-300 bg-white shadow-md rounded-xl p-4">
                                    <Link href={`/comparison/${comparison.slug}`} >
                                        <div className="flex justify-center items-center relative">
                                            <div className='flex justify-center items-center sm:gap-6 gap-2'>
                                                <div className="flex flex-col">
                                                    {comparison.logo1 && (
                                                        <div className='bg-white border border-gray-300 rounded-lg w-28 sm:w-32 h-28 sm:h-32 flex justify-center items-center relative'>
                                                            <Image src={comparison.logo1} alt={comparison.text1} fill className="rounded object-contain p-3" sizes="(max-width: 768px) 100vw, 32px" />
                                                        </div>
                                                    )}
                                                </div>


                                                <div className="relative p-1 w-14 sm:w-18 h-32 sm:h-42 flex justify-center items-center">
                                                    <Image src={VS} alt="VS" fill className="rounded object-contain mb-2 p-3" sizes="18px" />
                                                </div>

                                                <div className="flex flex-col">
                                                    {comparison.logo2 && (
                                                        <div className='bg-white border border-gray-300 rounded-lg w-28 sm:w-32 h-28 sm:h-32 flex justify-center items-center relative'>
                                                            <Image src={comparison.logo2} alt={comparison.text2} fill className="rounded object-contain p-3" sizes="(max-width: 768px) 100vw, 32px" />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="text-xl font-semibold mb-2 text-center">{comparison.title}</h2>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComparisonPage;