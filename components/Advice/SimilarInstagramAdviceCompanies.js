// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { FaStar } from 'react-icons/fa';

// const SimilarInstagramAdviceCompanies = () => {
//     const [similarCompanies, setSimilarCompanies] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchSimilarCompanies = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?per_page=10&_embed`;
//                 const response = await fetch(apiUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setSimilarCompanies(data);
//             } catch (err) {
//                 setError(err.message);
//                 console.error("Error fetching similar companies:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchSimilarCompanies();
//     }, []);

//     // Decide how many companies to display
//     const companiesToDisplay = similarCompanies.length > 3 ? 3 : similarCompanies.length;
//     const displayedCompanies = similarCompanies.slice(0, companiesToDisplay);


//     if (loading) {
//         return <div className="mt-10 text-center">Loading Similar Companies...</div>;
//     }

//     if (error) {
//         return <div className="mt-10 text-center">Error Loading Similar Companies: {error}</div>;
//     }
//     if (displayedCompanies.length === 0) {
//         return <div className="mt-10 text-center">No Similar Companies found.</div>;
//     }



//     return (
//         <>
//             <h2 className="text-2xl font-bold mb-8">Check Similar Instagram Advice Companies:</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {displayedCompanies.map((company, index) => {
//                     const { title, acf, _embedded } = company;
//                     const imageUrl = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
//                     const rating = parseFloat(acf?.rating) || 0;
//                     const reviews = parseFloat(acf?.user_reviews) || 0;
//                     const features = acf?.top_features?.split("\n")?.slice(0, 3) || [];

//                     const price = acf?.pricing_plans?.split("\n")?.[0]?.match(/(\$\s*[\d\.]+[\s-]*[\$\d\.]*)/)?.[0] || "N/A";


//                     return (
//                         <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between">
//                             <div>
//                                 <div className="flex items-center gap-2 mb-4">
//                                     {imageUrl && (
//                                         <div className="relative w-10 h-10  mr-2">
//                                             <Image
//                                                 src={imageUrl}
//                                                 alt={`${title?.rendered} Logo`}
//                                                 fill
//                                                 className="object-contain p-1"
//                                             />
//                                         </div>
//                                     )}
//                                     <h3 className="text-xl font-semibold text-gray-800">{title?.rendered}</h3>

//                                 </div>

//                                 <div className="flex items-center mb-3">
//                                     <span className="text-lg font-medium text-gray-800">{rating.toFixed(1)}</span>
//                                     <div className='flex text-yellow-500 ml-1'>
//                                         {[...Array(Math.floor(rating))].map((_, i) => (
//                                             <FaStar key={i} className="inline-block" />
//                                         ))}
//                                     </div>
//                                     <span className="ml-2 text-gray-500 text-sm">({reviews} reviews)</span>
//                                 </div>

//                                 <ul className="text-gray-700 space-y-2 mb-4">
//                                     {features?.map((feature, featureIndex) => (
//                                         <li key={featureIndex} className="flex items-center">
//                                             <span className="mr-2 text-green-500 text-sm">✓</span>
//                                             <span className='text-sm'>{feature}</span>
//                                         </li>
//                                     ))}
//                                 </ul>

//                             </div>
//                             <div className='flex justify-between items-center'>
//                                 <span className="text-xl font-medium text-gray-800">{price} /mo</span>
//                                 <a
//                                     href={acf?.visit_site_url}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="focus:outline-none custom-gradient text-white text-base font-medium rounded-full px-4 py-2 hover:bg-custom-dark transform"
//                                 >
//                                     Visit Site
//                                 </a>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

// export default SimilarInstagramAdviceCompanies;




// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import StarRating from '../StarRating/StarRating';
// import { FaCheck } from "react-icons/fa6";
// import Link from 'next/link';

// const SimilarInstagramAdviceCompanies = ({ currentCompanyCategories, currentCompanySlug }) => {
//     const [similarCompanies, setSimilarCompanies] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchSimilarCompanies = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const allCompaniesApiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?per_page=100&_embed`;
//                 const allCompaniesResponse = await fetch(allCompaniesApiUrl);
//                 if (!allCompaniesResponse.ok) {
//                     throw new Error(`HTTP error! Status: ${allCompaniesResponse.status}`);
//                 }
//                 const allCompaniesData = await allCompaniesResponse.json();

//                 // Filter companies based on the provided categories and exclude current company
//                 const filteredCompanies = allCompaniesData.filter(company => {
//                     if (!company || !company.categories || !currentCompanyCategories || currentCompanyCategories.length === 0 || !company.slug || company.slug === currentCompanySlug) {
//                         return false;
//                     }
//                     return company.categories.some(category => currentCompanyCategories.includes(category));
//                 });

//                 setSimilarCompanies(filteredCompanies);

//             } catch (err) {
//                 setError(err.message);
//                 console.error("Error fetching similar companies:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (currentCompanyCategories && currentCompanyCategories.length > 0) {
//             fetchSimilarCompanies();
//         }
//         else {
//             setLoading(false);
//         }

//     }, [currentCompanyCategories, currentCompanySlug]);

//     // Decide how many companies to display
//     const companiesToDisplay = similarCompanies.length > 3 ? 3 : similarCompanies.length;
//     const displayedCompanies = similarCompanies.slice(0, companiesToDisplay);

//     if (loading) {
//         return <div className="mt-10 text-center">Loading Similar Companies...</div>;
//     }

//     if (error) {
//         return <div className="mt-10 text-center">Error Loading Similar Companies: {error}</div>;
//     }

//     if (displayedCompanies.length === 0) {
//         return <div className="mt-10 text-center">No Similar Companies found.</div>;
//     }

//     return (
//         <>
//             <h2 className="text-2xl font-bold mb-8">Check Similar Instagram Advice Companies:</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {displayedCompanies.map((company, index) => {
//                     const { title, acf, _embedded, slug } = company;
//                     const imageUrl = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
//                     const rating = parseFloat(acf?.rating) || 0;
//                     const reviews = parseFloat(acf?.user_reviews) || 0;
//                     const features = acf?.features?.split("\n")?.slice(0, 3) || [];
//                     const price = acf?.price || "N/A";
//                     const companyUrl = `/company/${slug}`;


//                     return (
//                         <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between">
//                             <div className="flex flex-col lg:flex-row items-center justify-between gap-2 mb-4">
//                                 {imageUrl && (
//                                     <div className="relative w-42 h-12  mr-2">
//                                         <Image
//                                             src={imageUrl}
//                                             alt={`${title?.rendered} Logo`}
//                                             fill
//                                             className="object-contain p-1"
//                                             sizes="(max-width: 768px) 100vw, 200px"
//                                         />
//                                     </div>
//                                 )}
//                                 <div className="text-center mb-3 space-y-2">
//                                     <span className="text-2xl font-medium text-gray-800">{rating.toFixed(1)}</span>
//                                     <StarRating rating={rating} size="text-base" />
//                                     <span className="ml-2 text-gray-500 text-sm">{reviews}+ User Reviews</span>
//                                 </div>
//                             </div>
//                             <ul className="text-gray-700 space-y-2 mb-4">
//                                 {features?.map((feature, featureIndex) => (
//                                     <li key={featureIndex} className="flex">
//                                         <span className="mr-2 text-green-500 text-[15px] mt-1"><FaCheck /></span>
//                                         <span className='text-[15px]'>{feature}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                             <div className='flex justify-between'>
//                                 <span className="text-sm font-medium text-gray-800"><span className="text-2xl">{price}</span>/mo</span>
//                                 <div className='flex w-fit text-center gap-2'>
//                                 <a
//                                     href={acf?.visit_site_url}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="focus:outline-none custom-gradient text-white text-base font-medium rounded-full px-4 py-2 hover:bg-custom-dark transform"
//                                 >
//                                     Visit Site
//                                 </a>
//                                 <Link
//                                     href={companyUrl}
//                                     className="focus:outline-none  bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-full px-4 py-2 transform"
//                                 >
//                                     Read More
//                                 </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

// export default SimilarInstagramAdviceCompanies;


import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import StarRating from '../StarRating/StarRating';
import { FaCheck } from "react-icons/fa6";
import Link from 'next/link';

const SimilarInstagramAdviceCompanies = ({ currentCompanyCategories, currentCompanySlug }) => {
    const [similarCompanies, setSimilarCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [jwt, setJwt] = useState(null);
    const [jwtLoading, setJwtLoading] = useState(true);


    useEffect(() => {
        const fetchJWT = async () => {
            setJwtLoading(true);
            try {
                const authUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/jwt-auth/v1/token`;
                const username = process.env.NEXT_PUBLIC_WORDPRESS_USERNAME;
                const password = process.env.NEXT_PUBLIC_WORDPRESS_PASSWORD;
                const response = await fetch(authUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    })
                });
                if (!response.ok) {
                    const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
                    console.error("Response error when getting the token:", message);
                    try {
                        const responseBody = await response.json();
                        console.error("Response body:", responseBody);
                    }
                    catch (e) {
                        console.error("Response body not available")
                    }
                    throw new Error(message)
                }

                const data = await response.json();
                setJwt(data.token);


            } catch (err) {
                setError(`Failed to fetch JWT Token. ${err.message}`);
                console.error("Error fetching JWT", err);
            } finally {
                setJwtLoading(false);
            }
        };
        fetchJWT()
    }, [])

    const fetchRatingsAndReviews = async (postId) => {
        if (!jwt) {
            return { averageRating: 0, totalReviews: 0 };
        }

        try {
            let allReviews = [];
            let page = 1;
            let totalPages = 1; // Assume at least one page initially

            while (page <= totalPages) {
                const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/comments?post=${postId}&page=${page}`;
                const response = await fetch(apiUrl, {
                    headers: {
                        "Authorization": `Bearer ${jwt}`,
                    },
                });

                if (!response.ok) {
                    const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
                    console.error("Response error when fetching comments:", message);
                    try {
                        const responseBody = await response.json();
                        console.error("Response body:", responseBody);
                    } catch (e) {
                        console.error("Response body not available");
                    }
                    throw new Error(message);
                }

                const comments = await response.json();
                allReviews = allReviews.concat(comments);  // Accumulate comments
                totalPages = parseInt(response.headers.get('X-WP-TotalPages'), 10) || 1; // Get total pages from headers
                page++;
            }

            const formattedReviews = allReviews.map(comment => {
                try {
                    // Decode HTML entities
                    const tempElement = document.createElement('div');
                    tempElement.innerHTML = comment.content.rendered;

                    // Get the decoded text content
                    let decodedString = tempElement.textContent;

                    // Helper function to safely parse JSON.
                    const safeJsonParse = (str) => {
                        try {
                            // Basic sanitization to remove control characters
                            str = str.replace(/[\x00-\x1F\x7F-\x9F]/g, "");

                            // Aggressive sanitization of problematic characters
                            str = str
                                .replace(/[“”]/g, '"')  // Curly quotes to straight quotes
                                .replace(/[\r\n]+/g, "\\n") // Line breaks to escaped newlines
                                .replace(/\\+/g, "\\")  // Remove excessive backslashes
                                .replace(/'/g, "'"); // Replace single quotes with HTML entity

                            // Remove any remaining HTML tags
                            str = str.replace(/<[^>]*>/g, "");

                            // Attempt to extract JSON object from a larger string
                            let start = str.indexOf("{");
                            let end = str.lastIndexOf("}");
                            if (start !== -1 && end !== -1 && start < end) {
                                str = str.substring(start, end + 1);
                            }

                            // Basic validation to ensure it looks like JSON
                            if (!str.trim().startsWith("{") || !str.trim().endsWith("}")) {
                                console.warn("String does not appear to be a JSON object:", str);
                                return null;
                            }
                            return JSON.parse(str);
                        } catch (e) {
                            console.error("Error parsing JSON:", str, e);
                            return null;
                        }
                    };

                    // Attempt to parse the content
                    let content = safeJsonParse(decodedString);

                    // If the content is null return null for the whole review
                    if (!content) {
                        return null;
                    }

                    return {
                        id: comment.id,
                        rating: content?.rating || 0,
                        userName: content?.userName || "",
                        title: content?.title || "",
                        text: content?.text || "",
                        rawText: content?.text,
                    };
                } catch (e) {
                    console.error("Error parsing comment content:", comment.content.rendered, e);
                    return null;
                }
            }).filter(Boolean);
            const totalRating = formattedReviews.reduce((acc, review) => acc + review.rating, 0);
            const averageRating = formattedReviews.length > 0 ? totalRating / formattedReviews.length : 0;
            return {
                averageRating: averageRating.toFixed(1),
                totalReviews: formattedReviews.length,
            };
        } catch (err) {
            console.error("Error fetching ratings and reviews:", err);
            return { averageRating: 0, totalReviews: 0 };
        }
    };

    useEffect(() => {
        const fetchSimilarCompanies = async () => {
            setLoading(true);
            setError(null);
            try {
                const allCompaniesApiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?per_page=100&_embed`;
                const allCompaniesResponse = await fetch(allCompaniesApiUrl);
                if (!allCompaniesResponse.ok) {
                    throw new Error(`HTTP error! Status: ${allCompaniesResponse.status}`);
                }
                const allCompaniesData = await allCompaniesResponse.json();

                // Filter companies based on the provided categories and exclude current company
                const filteredCompanies = allCompaniesData.filter(company => {
                    if (!company || !company.categories || !currentCompanyCategories || currentCompanyCategories.length === 0 || !company.slug || company.slug === currentCompanySlug) {
                        return false;
                    }
                    return company.categories.some(category => currentCompanyCategories.includes(category));
                });

                // Fetch ratings and reviews for each company
                const companiesWithRatings = await Promise.all(
                    filteredCompanies.map(async (company) => {
                        const { averageRating, totalReviews } = await fetchRatingsAndReviews(company.id);
                        return { ...company, averageRating, totalReviews };
                    })
                );

                setSimilarCompanies(companiesWithRatings);

            } catch (err) {
                setError(err.message);
                console.error("Error fetching similar companies:", err);
            } finally {
                setLoading(false);
            }
        };

        if (!jwtLoading && jwt && currentCompanyCategories && currentCompanyCategories.length > 0) {
            fetchSimilarCompanies();
        }
        else {
            setLoading(false);
        }

    }, [currentCompanyCategories, currentCompanySlug, jwt, jwtLoading]);

    // Decide how many companies to display
    const companiesToDisplay = similarCompanies.length > 3 ? 3 : similarCompanies.length;
    const displayedCompanies = similarCompanies.slice(0, companiesToDisplay);

    if (jwtLoading || loading) {
        return <div className="mt-10 text-center">Loading Similar Companies...</div>;
    }

    if (error) {
        return <div className="mt-10 text-center">Error Loading Similar Companies: {error}</div>;
    }

    if (displayedCompanies.length === 0) {
        return <div className="mt-10 text-center">No Similar Companies found.</div>;
    }

    return (
        <>
            <h2 className="text-2xl font-bold mb-8">Check Similar Instagram Advice Companies:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedCompanies.map((company, index) => {
                    const { title, acf, _embedded, slug, averageRating, totalReviews } = company;
                    const imageUrl = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
                    const features = acf?.features?.split("\n")?.slice(0, 3) || [];
                    const price = acf?.price || "N/A";
                    const companyUrl = `/company/${slug}`;


                    return (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-2 mb-4">
                                {imageUrl && (
                                    <div className="relative w-42 h-12  mr-2">
                                        <Image
                                            src={imageUrl}
                                            alt={`${title?.rendered} Logo`}
                                            fill
                                            className="object-contain p-1"
                                            sizes="(max-width: 768px) 100vw, 200px"
                                        />
                                    </div>
                                )}
                                <div className="text-center mb-3 space-y-2">
                                    <span className="text-2xl font-medium text-gray-800">{averageRating}</span> {/* Use averageRating */}
                                    <StarRating rating={parseFloat(averageRating)} size="text-base" /> {/*Parse Float */}
                                    <span className="ml-2 text-gray-500 text-sm">{totalReviews}+ User Reviews</span> {/* Use totalReviews */}
                                </div>
                            </div>
                            <ul className="text-gray-700 space-y-2 mb-4">
                                {features?.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex">
                                        <span className="mr-2 text-green-500 text-[15px] mt-1"><FaCheck /></span>
                                        <span className='text-[15px]'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex justify-between'>
                                <span className="text-sm font-medium text-gray-800"><span className="text-2xl">{price}</span>/mo</span>
                                <div className='flex w-fit text-center gap-2'>
                                    <a
                                        href={acf?.visit_site_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="focus:outline-none custom-gradient text-white text-base font-medium rounded-full px-4 py-2 hover:bg-custom-dark transform"
                                    >
                                        Visit Site
                                    </a>
                                    <Link
                                        href={companyUrl}
                                        className="focus:outline-none  bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-full px-4 py-2 transform"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SimilarInstagramAdviceCompanies;