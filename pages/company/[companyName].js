// // pages/company/[companyName].js
// import React, { useState, useEffect, useCallback } from "react";
// import { useRouter } from "next/router";
// import Seo from "@/components/Seo";
// import CompanyReviewHero from "@/components/CompanyReview/CompanyReviewHero";
// import Breadcrumbs from "@/components/Breadcrumbs";
// import AuthorBlock from "@/components/CompanyReview/AuthorBlock";
// import ReviewSummary from "@/components/CompanyReview/ReviewSummary";
// import UserReviewList from "@/components/CompanyReview/UserReviewList";
// import InfoCard from "@/components/CompanyReview/InfoCard";
// import Sidebar from "@/components/CompanyReview/Sidebar";
// import SimilarInstagramAdviceCompanies from "@/components/Advice/SimilarInstagramAdviceCompanies";
// import ReviewModal from "@/components/CompanyReview/ReviewModal";

// const CompanyPage = () => {
//     const router = useRouter();
//     const { companyName } = router.query;
//     const [advicePosts, setAdvicePosts] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [noData, setNoData] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [reviews, setReviews] = useState([]);
//     const [jwt, setJwt] = useState(null);
//     const [jwtLoading, setJwtLoading] = useState(true);
//     const [averageRatingForInfoCard, setAverageRatingForInfoCard,] = useState(0);
//     const [totalReviewsForInfoCard, setTotalReviewsForInfoCard] = useState(0);


//     const proxyImageUrl = (url) => {
//         if (!url) return "";
//         return `/api/proxy-image?imageUrl=${encodeURIComponent(url)}`;
//     };

//     // Fetch the JWT
//     useEffect(() => {
//         const fetchJWT = async () => {
//             setJwtLoading(true);
//             try {
//                 const authUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/jwt-auth/v1/token`;
//                 const username = process.env.NEXT_PUBLIC_WORDPRESS_USERNAME;
//                 const password = process.env.NEXT_PUBLIC_WORDPRESS_PASSWORD;
//                 const response = await fetch(authUrl, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         username: username,
//                         password: password,
//                     })
//                 });
//                 if (!response.ok) {
//                     const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
//                     console.error("Response error when getting the token:", message);
//                     try {
//                         const responseBody = await response.json();
//                         console.error("Response body:", responseBody);
//                     }
//                     catch (e) {
//                         console.error("Response body not available")
//                     }
//                     throw new Error(message)
//                 }

//                 const data = await response.json();
//                 setJwt(data.token);


//             } catch (err) {
//                 setError(`Failed to fetch JWT Token. ${err.message}`);
//                 console.error("Error fetching JWT", err);
//             } finally {
//                 setJwtLoading(false);
//             }
//         };


//         const storedToken = localStorage.getItem('jwtToken');
//         if (storedToken) {
//             setJwt(storedToken);
//             setJwtLoading(false);
//         } else {
//             fetchJWT();
//         }

//     }, [])

//     const fetchReviews = useCallback(async (postId) => {
//         if (!jwt) return;
//         try {
//             const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/comments?post=${postId}`;
//             const response = await fetch(apiUrl, {
//                 headers: {
//                     "Authorization": `Bearer ${jwt}`,
//                 },
//             });

//             if (!response.ok) {
//                 const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
//                 console.error("Response error when fetching comments:", message);
//                 try {
//                     const responseBody = await response.json();
//                     console.error("Response body:", responseBody);
//                 } catch (e) {
//                     console.error("Response body not available");
//                 }
//                 throw new Error(message);
//             }

//             const comments = await response.json();

//             const formattedReviews = comments.map(comment => {
//                 try {
//                     // Decode HTML entities
//                     const tempElement = document.createElement('div');
//                     tempElement.innerHTML = comment.content.rendered;

//                     // Get the decoded text content
//                     let decodedString = tempElement.textContent;


//                     // Helper function to safely parse JSON.
//                     const safeJsonParse = (str) => {
//                         try {
//                             // Trim whitespace and control characters aggressively
//                             str = str.trim();

//                             // Find the start and end of the JSON object (if possible)
//                             let start = str.indexOf('{');
//                             let end = str.lastIndexOf('}');

//                             if (start !== -1 && end !== -1 && start < end) {
//                                 str = str.substring(start, end + 1);
//                             }

//                             // Clean potentially problematic characters
//                             str = str
//                                 .replace(/[“”]/g, '"') // Replace curly quotes with straight quotes
//                                 .replace(/[\r\n]+/g, "\\n"); // Replace line breaks with escaped newlines

//                             return JSON.parse(str);
//                         } catch (e) {
//                             console.error("Error parsing JSON:", str, e);
//                             return null;
//                         }
//                     };

//                     // Attempt to parse the content
//                     let content = safeJsonParse(decodedString);

//                     // If the content is null return null for the whole review
//                     if (!content) {
//                         return null;
//                     }

//                     return {
//                         id: comment.id,
//                         rating: content?.rating || 0,
//                         userName: content?.userName || "",
//                         title: content?.title || "",
//                         text: content?.text || "",
//                         rawText: content?.text,
//                     };
//                 } catch (e) {
//                     console.error("Error parsing comment content:", comment.content.rendered, e);
//                     return null;
//                 }
//             }).filter(Boolean);

//             setReviews(formattedReviews);

//         } catch (err) {
//             setError(`Failed to fetch reviews. ${err.message}`);
//             console.error("Error fetching review from WordPress", err);
//         }
//     }, [jwt]);



//     useEffect(() => {
//         const fetchCompanyData = async () => {
//             if (!companyName || jwtLoading) return; // Wait for JWT or no company name
//             setLoading(true);
//             setError(null);
//             setNoData(false);
//             try {

//                 const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&slug=${companyName}`;
//                 const response = await fetch(apiUrl);
//                 if (!response.ok) {
//                     const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
//                     console.error("Response error:", message);
//                     throw new Error(message);
//                 }
//                 const data = await response.json();
//                 if (data.length === 0) {
//                     console.error("No data found for this company slug:", companyName);
//                     setNoData(true);
//                     throw new Error("No data found for this company.");
//                 }
//                 setAdvicePosts(data[0]);

//                 // Load reviews from local storage or use initial data from WordPress Comments
//                 await fetchReviews(data[0].id);


//             } catch (err) {
//                 setError(err.message);
//                 console.error("Error fetching data:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchCompanyData();
//     }, [companyName, jwt, jwtLoading, fetchReviews]);

//     // Update averageRatingForInfoCard and totalReviewsForInfoCard whenever reviews change
//     useEffect(() => {
//         if (reviews && reviews.length > 0) {
//             const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
//             const avg = totalRating / reviews.length;
//             setAverageRatingForInfoCard(avg);
//             setTotalReviewsForInfoCard(reviews.length);
//         } else {
//             setAverageRatingForInfoCard(0);
//             setTotalReviewsForInfoCard(0);
//         }
//     }, [reviews]);


//     // Function to handle adding/updating reviews
//     const handleAddReview = async (newReview) => {
//         setLoading(true);
//         setError(null); // Clear existing errors

//         try {
//             const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/comments`;

//             const response = await fetch(apiUrl, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${jwt}`,
//                 },
//                 body: JSON.stringify({
//                     post: advicePosts.id,
//                     content: JSON.stringify(newReview),
//                 }),
//             });
//             if (!response.ok) {
//                 const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
//                 console.error("Response error when adding the comment:", message);

//                 let responseBody = null;

//                 try {
//                     responseBody = await response.json();
//                     console.error("Response body:", responseBody);
//                     // Check for a specific error message in the response body
//                     if (responseBody.code === 'comment_duplicate') {
//                         setError("Duplicate comment detected. Please try again later."); // Specific error for duplicate comment
//                     }
//                     else {
//                         setError(`Failed to add review. Status: ${response.status}. ${responseBody?.message || message}`); // Generic message
//                     }

//                 }
//                 catch (e) {
//                     console.error("Response body not available")
//                     setError(`Failed to add review. Status: ${response.status}. ${message}`); // Generic message when response body is unavailable
//                 }
//                 throw new Error(message); // Re-throw the error to be caught in the catch block
//             }
//             console.log("Comments API success");
//             await fetchReviews(advicePosts.id);
//         } catch (err) {
//             // If the error was not already set from response body
//             if (!error) {
//                 setError(`Failed to update review. ${err.message}`);
//             }
//             console.error("Error updating review to WordPress", err);
//         } finally {
//             setLoading(false);
//         }
//     };


//     const handleOpenModal = () => {
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };


//     if (loading || jwtLoading) {
//         return (
//             <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
//                 <div className="flex space-x-2">
//                     <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
//                     <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
//                     <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
//                 </div>
//             </div>
//         );
//     }


//     if (noData) {
//         return (
//             <div className="mt-10 text-center">
//                 <p>No data found for this company.</p>
//             </div>
//         );
//     }

//     if (error) {
//         return <div className="mt-10 text-center">Error: {error}</div>;
//     }

//     const { acf, content, modified, slug, categories, title, yoast_head_json } = advicePosts;

//     let seoTitle = title.rendered;
//     let seoDescription = content.rendered.replace(/<[^>]*>/g, '');
//     let seoImage = null;
//     let siteName = "Instagram Advice"

//     if (yoast_head_json) {
//         seoTitle = yoast_head_json.title || seoTitle;
//         seoDescription = yoast_head_json.og_description || seoDescription;
//         seoImage = yoast_head_json.og_image?.[0]?.url;
//         siteName = yoast_head_json.og_site_name || siteName
//     }

//     return (
//         <>
//             <Seo
//                 title={seoTitle}
//                 description={seoDescription}
//                 image={proxyImageUrl(seoImage)}
//                 path={`/company/${slug}`}
//                 ogType="article"
//                 modifiedTime={modified}
//                 siteName={siteName}
//             />
//             <div className="page single-page-company">
//                 <section className="hero-wrap bg-gray-100">
//                     <div className="container mx-auto px-4">
//                         <Breadcrumbs />
//                         <CompanyReviewHero data={advicePosts} />
//                     </div>
//                 </section>
//                 <section className="info-card-wrap">
//                     <div className="container mx-auto px-4">
//                         <InfoCard
//                             data={advicePosts}
//                             averageRating={averageRatingForInfoCard}
//                             totalReviews={totalReviewsForInfoCard}
//                         />
//                     </div>
//                 </section>
//                 <section className="py-12">
//                     <div className="container mx-auto px-4">
//                         <div className="xl:flex xl:gap-10">
//                             <div className="xl:w-3/4 lg:full">
//                                 <AuthorBlock acf={acf} modifiedDate={modified} jwt={jwt} />
//                                 <ReviewSummary content={content.rendered} />
//                                 <UserReviewList
//                                     reviews={reviews}
//                                     setAverageRatingForInfoCard={setAverageRatingForInfoCard}
//                                     setTotalReviewsForInfoCard={setTotalReviewsForInfoCard}
//                                 />
//                             </div>
//                             <div
//                                 className={`xl:w-1/4 lg:full md:block hidden sticky top-10 h-full`}
//                             >
//                                 <Sidebar
//                                     data={advicePosts}
//                                     onOpenModal={handleOpenModal}
//                                     reviews={reviews}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="pb-12">
//                     <div className="container mx-auto px-4">
//                         <SimilarInstagramAdviceCompanies
//                             currentCompanyCategories={categories}
//                             currentCompanySlug={slug}
//                         />
//                     </div>
//                 </section>
//                 {/* Render the modal */}
//                 {isModalOpen && (
//                     <ReviewModal onClose={handleCloseModal} onAddReview={handleAddReview} />
//                 )}
//             </div>
//         </>
//     );
// };

// export default CompanyPage;


// pages/company/[companyName].js
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Seo from "@/components/Seo";
import CompanyReviewHero from "@/components/CompanyReview/CompanyReviewHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthorBlock from "@/components/CompanyReview/AuthorBlock";
import ReviewSummary from "@/components/CompanyReview/ReviewSummary";
import UserReviewList from "@/components/CompanyReview/UserReviewList";
import InfoCard from "@/components/CompanyReview/InfoCard";
import Sidebar from "@/components/CompanyReview/Sidebar";
import SimilarInstagramAdviceCompanies from "@/components/Advice/SimilarInstagramAdviceCompanies";
import ReviewModal from "@/components/CompanyReview/ReviewModal";

const CompanyPage = () => {
    const router = useRouter();
    const { companyName } = router.query;
    const [advicePosts, setAdvicePosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [noData, setNoData] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [jwt, setJwt] = useState(null);
    const [jwtLoading, setJwtLoading] = useState(true);
    const [averageRatingForInfoCard, setAverageRatingForInfoCard,] = useState(0);
    const [totalReviewsForInfoCard, setTotalReviewsForInfoCard] = useState(0);


    const proxyImageUrl = (url) => {
        if (!url) return "";
        return `/api/proxy-image?imageUrl=${encodeURIComponent(url)}`;
    };

    // Fetch the JWT
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


        const storedToken = localStorage.getItem('jwtToken');
        if (storedToken) {
            setJwt(storedToken);
            setJwtLoading(false);
        } else {
            fetchJWT();
        }

    }, [])

     const fetchReviews = useCallback(async (postId) => {
        if (!jwt) return;
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
                            // Trim whitespace and control characters aggressively
                            str = str.trim();

                            // Find the start and end of the JSON object (if possible)
                            let start = str.indexOf('{');
                            let end = str.lastIndexOf('}');

                            if (start !== -1 && end !== -1 && start < end) {
                                str = str.substring(start, end + 1);
                            }

                            // Clean potentially problematic characters
                            str = str
                                .replace(/[“”]/g, '"') // Replace curly quotes with straight quotes
                                .replace(/[\r\n]+/g, "\\n"); // Replace line breaks with escaped newlines

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

            setReviews(formattedReviews);

        } catch (err) {
            setError(`Failed to fetch reviews. ${err.message}`);
            console.error("Error fetching review from WordPress", err);
        }
    }, [jwt]);

    useEffect(() => {
        const fetchCompanyData = async () => {
            if (!companyName || jwtLoading) return; // Wait for JWT or no company name
            setLoading(true);
            setError(null);
            setNoData(false);
            try {

                const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&slug=${companyName}`;
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
                    console.error("Response error:", message);
                    throw new Error(message);
                }
                const data = await response.json();
                if (data.length === 0) {
                    console.error("No data found for this company slug:", companyName);
                    setNoData(true);
                    throw new Error("No data found for this company.");
                }
                setAdvicePosts(data[0]);

                // Load reviews from local storage or use initial data from WordPress Comments
                await fetchReviews(data[0].id);


            } catch (err) {
                setError(err.message);
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchCompanyData();
    }, [companyName, jwt, jwtLoading, fetchReviews]);

    // Update averageRatingForInfoCard and totalReviewsForInfoCard whenever reviews change
    useEffect(() => {
        if (reviews && reviews.length > 0) {
            const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
            const avg = totalRating / reviews.length;
            setAverageRatingForInfoCard(avg);
            setTotalReviewsForInfoCard(reviews.length);
        } else {
            setAverageRatingForInfoCard(0);
            setTotalReviewsForInfoCard(0);
        }
    }, [reviews]);


    // Function to handle adding/updating reviews
    const handleAddReview = async (newReview) => {
        setLoading(true);
        setError(null); // Clear existing errors

        try {
            const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/comments`;

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwt}`,
                },
                body: JSON.stringify({
                    post: advicePosts.id,
                    content: JSON.stringify(newReview),
                }),
            });
            if (!response.ok) {
                const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
                console.error("Response error when adding the comment:", message);

                let responseBody = null;

                try {
                    responseBody = await response.json();
                    console.error("Response body:", responseBody);
                    // Check for a specific error message in the response body
                    if (responseBody.code === 'comment_duplicate') {
                        setError("Duplicate comment detected. Please try again later."); // Specific error for duplicate comment
                    }
                    else {
                        setError(`Failed to add review. Status: ${response.status}. ${responseBody?.message || message}`); // Generic message
                    }

                }
                catch (e) {
                    console.error("Response body not available")
                    setError(`Failed to add review. Status: ${response.status}. ${message}`); // Generic message when response body is unavailable
                }
                throw new Error(message); // Re-throw the error to be caught in the catch block
            }
            console.log("Comments API success");
            await fetchReviews(advicePosts.id);
        } catch (err) {
            // If the error was not already set from response body
            if (!error) {
                setError(`Failed to update review. ${err.message}`);
            }
            console.error("Error updating review to WordPress", err);
        } finally {
            setLoading(false);
        }
    };


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    if (loading || jwtLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
                <div className="flex space-x-2">
                    <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
                    <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
                    <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
                </div>
            </div>
        );
    }


    if (noData) {
        return (
            <div className="mt-10 text-center">
                <p>No data found for this company.</p>
            </div>
        );
    }

    if (error) {
        return <div className="mt-10 text-center">Error: {error}</div>;
    }

    const { acf, content, modified, slug, categories, title, yoast_head_json } = advicePosts;

    let seoTitle = title.rendered;
    let seoDescription = content.rendered.replace(/<[^>]*>/g, '');
    let seoImage = null;
    let siteName = "Instagram Advice"

    if (yoast_head_json) {
        seoTitle = yoast_head_json.title || seoTitle;
        seoDescription = yoast_head_json.og_description || seoDescription;
        seoImage = yoast_head_json.og_image?.[0]?.url;
        siteName = yoast_head_json.og_site_name || siteName
    }

    return (
        <>
            <Seo
                title={seoTitle}
                description={seoDescription}
                image={proxyImageUrl(seoImage)}
                path={`/company/${slug}`}
                ogType="article"
                modifiedTime={modified}
                siteName={siteName}
            />
            <div className="page single-page-company">
                <section className="hero-wrap bg-gray-100">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs />
                        <CompanyReviewHero data={advicePosts} />
                    </div>
                </section>
                <section className="info-card-wrap">
                    <div className="container mx-auto px-4">
                        <InfoCard
                            data={advicePosts}
                            averageRating={averageRatingForInfoCard}
                            totalReviews={totalReviewsForInfoCard}
                        />
                    </div>
                </section>
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="xl:flex xl:gap-10">
                            <div className="xl:w-3/4 lg:full">
                                <AuthorBlock acf={acf} modifiedDate={modified} jwt={jwt} />
                                <ReviewSummary content={content.rendered} />
                                <UserReviewList
                                    reviews={reviews}
                                    setAverageRatingForInfoCard={setAverageRatingForInfoCard}
                                    setTotalReviewsForInfoCard={setTotalReviewsForInfoCard}
                                />
                            </div>
                            <div
                                className={`xl:w-1/4 lg:full md:block hidden sticky top-10 h-full`}
                            >
                                <Sidebar
                                    data={advicePosts}
                                    onOpenModal={handleOpenModal}
                                    reviews={reviews}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pb-12">
                    <div className="container mx-auto px-4">
                        <SimilarInstagramAdviceCompanies
                            currentCompanyCategories={categories}
                            currentCompanySlug={slug}
                        />
                    </div>
                </section>
                {/* Render the modal */}
                {isModalOpen && (
                    <ReviewModal onClose={handleCloseModal} onAddReview={handleAddReview} />
                )}
            </div>
        </>
    );
};

export default CompanyPage;