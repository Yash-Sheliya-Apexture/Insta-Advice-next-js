// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import CompanyReviewHero from "@/components/CompanyReview/CompanyReviewHero";
// import Breadcrumbs from "@/components/Breadcrumbs";
// import AuthorBlock from "@/components/CompanyReview/AuthorBlock";
// import ReviewSummary from "@/components/CompanyReview/ReviewSummary";
// import UserReviewList from "@/components/CompanyReview/UserReviewList";
// import InfoCard from "@/components/CompanyReview/InfoCard";
// import Sidebar from "@/components/CompanyReview/Sidebar";
// import SimilarInstagramAdviceCompanies from "@/components/Advice/SimilarInstagramAdviceCompanies";

// const CompanyPage = () => {
//     const router = useRouter();
//     const { companyName } = router.query;
//     const [advicePosts, setAdvicePosts] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [noData, setNoData] = useState(false);


//    useEffect(() => {
//         const fetchCompanyData = async () => {
//             if (!companyName) return;
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
//                  setAdvicePosts(data[0]);
//             } catch (err) {
//                 setError(err.message);
//                 console.error("Error fetching data:", err);
//             } finally {
//                setLoading(false);
//            }
//        };
//        fetchCompanyData();
//     }, [companyName]);


//     if (loading) {
//         return <div className="mt-10 text-center">Loading...</div>;
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

//     const { acf, content, modified, slug, categories } = advicePosts;


//     return (
//         <div className="page single-page-company">
//             <section className="hero-wrap bg-gray-100">
//                 <div className="container mx-auto px-4">
//                     <Breadcrumbs />
//                     <CompanyReviewHero data={advicePosts} />
//                 </div>
//             </section>
//             <section className="info-card-wrap">
//                 <div className="container mx-auto px-4">
//                     <InfoCard data={advicePosts} />
//                 </div>
//             </section>
//             <section className="py-12">
//                 <div className="container mx-auto px-4">
//                     <div className="xl:flex xl:gap-10">
//                         <div className="xl:w-3/4 lg:full">
//                             <AuthorBlock acf={acf} modifiedDate={modified} />
//                             <ReviewSummary content={content.rendered} />
//                         </div>
//                          <div className={`xl:w-1/4 lg:full md:block hidden sticky top-10 h-full`}>
//                             <Sidebar data={advicePosts} />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="pb-12">
//                 <div className="container mx-auto px-4">
//                     <UserReviewList reviews={acf?.user_reviews} />
//                 </div>
//             </section>
//              <section className="pb-12">
//                 <div className="container mx-auto px-4">
//                    <SimilarInstagramAdviceCompanies currentCompanyCategories={categories} currentCompanySlug={slug} />
//                  </div>
//             </section>
//         </div>
//     );
// };

// export default CompanyPage;




// // CompanyPage.js
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
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
//                 console.log("JWT Token fetched and stored:", data.token);
//                 localStorage.setItem('jwtToken', data.token);


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
//             console.log("JWT Token loaded from storage");
//         } else {
//             fetchJWT();
//         }

//     }, [])



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
//     }, [companyName, jwt, jwtLoading]);


//     // Function to fetch the reviews from the comments
//     const fetchReviews = async (postId) => {
//         if (!jwt) return; // Do not run this if JWT is null
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
//             console.log("Reviews API success");
    
//             const comments = await response.json();
//             const formattedReviews = comments.map(comment => {
//                 try {
//                     // Decode HTML entities
//                     const tempElement = document.createElement('div');
//                     tempElement.innerHTML = comment.content.rendered;
//                     const decodedString = tempElement.textContent;
    
//                     // Replace curly quotes with standard double quotes
//                     const jsonString = decodedString.replace(/[“”]/g, '"');
    
//                     // Remove <p> tags and any surrounding whitespace
//                     const cleanedString = jsonString.replace(/<\/?p>/g, '').trim();
    
//                     // Parse the JSON content
//                     const content = JSON.parse(cleanedString);
    
//                     return {
//                         id: comment.id,
//                         rating: content?.rating || 0,
//                         userName: content?.userName || "",
//                         title: content?.title || "",
//                         text: content?.text || "",
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
//     };




//     // Function to handle adding/updating reviews
//     const handleAddReview = async (newReview) => {
//         setLoading(true);
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
//                 try {
//                     const responseBody = await response.json();
//                     console.error("Response body:", responseBody);
//                 }
//                 catch (e) {
//                     console.error("Response body not available")
//                 }

//                 throw new Error(message);
//             }
//             console.log("Comments API success");
//             await fetchReviews(advicePosts.id);
//         } catch (err) {
//             setError(`Failed to update review. ${err.message}`);
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
//             <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
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

//     const { acf, content, modified, slug, categories } = advicePosts;

//     return (
//         <div className="page single-page-company">
//             <section className="hero-wrap bg-gray-100">
//                 <div className="container mx-auto px-4">
//                     <Breadcrumbs />
//                     <CompanyReviewHero data={advicePosts} />
//                 </div>
//             </section>
//             <section className="info-card-wrap">
//                 <div className="container mx-auto px-4">
//                     <InfoCard data={advicePosts} />
//                 </div>
//             </section>
//             <section className="py-12">
//                 <div className="container mx-auto px-4">
//                     <div className="xl:flex xl:gap-10">
//                         <div className="xl:w-3/4 lg:full">
//                             <AuthorBlock acf={acf} modifiedDate={modified} />
//                             <ReviewSummary content={content.rendered} />
//                             <UserReviewList reviews={reviews} />
//                         </div>
//                         <div className={`xl:w-1/4 lg:full md:block hidden sticky top-10 h-full`}>
//                         <Sidebar data={advicePosts} onOpenModal={handleOpenModal} reviews={reviews} />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="pb-12">
//                 <div className="container mx-auto px-4">
//                     <SimilarInstagramAdviceCompanies currentCompanyCategories={categories} currentCompanySlug={slug} />
//                 </div>
//             </section>
//             {/* Render the modal */}
//             {isModalOpen && <ReviewModal onClose={handleCloseModal} onAddReview={handleAddReview} />}
//         </div>
//     );
// };

// export default CompanyPage;



// // CompanyPage.js
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
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
//                 console.log("JWT Token fetched and stored:", data.token);
//                 localStorage.setItem('jwtToken', data.token);


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
//     }, [companyName, jwt, jwtLoading]);


//     // Function to fetch the reviews from the comments
//     const fetchReviews = async (postId) => {
//         if (!jwt) return; // Do not run this if JWT is null
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
//                     const decodedString = tempElement.textContent;

//                     // Replace curly quotes with standard double quotes
//                     const jsonString = decodedString.replace(/[“”]/g, '"');

//                     // Remove <p> tags and any surrounding whitespace
//                     const cleanedString = jsonString.replace(/<\/?p>/g, '').trim();

//                     // Parse the JSON content
//                     const content = JSON.parse(cleanedString);

//                     return {
//                         id: comment.id,
//                         rating: content?.rating || 0,
//                         userName: content?.userName || "",
//                         title: content?.title || "",
//                         text: content?.text || "",
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
//     };




//     // Function to handle adding/updating reviews
//     const handleAddReview = async (newReview) => {
//         setLoading(true);
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
//                 try {
//                     const responseBody = await response.json();
//                     console.error("Response body:", responseBody);
//                 }
//                 catch (e) {
//                     console.error("Response body not available")
//                 }

//                 throw new Error(message);
//             }
//             console.log("Comments API success");
//             await fetchReviews(advicePosts.id);
//         } catch (err) {
//             setError(`Failed to update review. ${err.message}`);
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
//             <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
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

//     const { acf, content, modified, slug, categories } = advicePosts;

//     return (
//         <div className="page single-page-company">
//             <section className="hero-wrap bg-gray-100">
//                 <div className="container mx-auto px-4">
//                     <Breadcrumbs />
//                     <CompanyReviewHero data={advicePosts} />
//                 </div>
//             </section>
//             <section className="info-card-wrap">
//                 <div className="container mx-auto px-4">
//                     <InfoCard data={advicePosts} />
//                 </div>
//             </section>
//             <section className="py-12">
//                 <div className="container mx-auto px-4">
//                     <div className="xl:flex xl:gap-10">
//                         <div className="xl:w-3/4 lg:full">
//                             <AuthorBlock acf={acf} modifiedDate={modified} jwt={jwt} />
//                             <ReviewSummary content={content.rendered} />
//                             <UserReviewList reviews={reviews} />
//                         </div>
//                         <div className={`xl:w-1/4 lg:full md:block hidden sticky top-10 h-full`}>
//                             <Sidebar data={advicePosts} onOpenModal={handleOpenModal} reviews={reviews} />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="pb-12">
//                 <div className="container mx-auto px-4">
//                     <SimilarInstagramAdviceCompanies currentCompanyCategories={categories} currentCompanySlug={slug} />
//                 </div>
//             </section>
//             {/* Render the modal */}
//             {isModalOpen && <ReviewModal onClose={handleCloseModal} onAddReview={handleAddReview} />}
//         </div>
//     );
// };

// export default CompanyPage;





import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
                console.log("JWT Token fetched and stored:", data.token);
                localStorage.setItem('jwtToken', data.token);


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
                console.log(data)
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
    }, [companyName, jwt, jwtLoading]);


     const fetchReviews = async (postId) => {
        if (!jwt) return;
        try {
            const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/comments?post=${postId}`;
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

            const formattedReviews = comments.map(comment => {
                try {
                    // Decode HTML entities
                    const tempElement = document.createElement('div');
                    tempElement.innerHTML = comment.content.rendered;

                   // Get the decoded text content
                    let decodedString = tempElement.textContent;

                   // Use a regex that replaces leading and trailing <p> and <br> tags with nothing
                    decodedString = decodedString.replace(/^(<p>|<br\/?>)*|<\/?p>|<\/?br\s*\/?>$/g, '').trim();

                     // Replace curly quotes with standard double quotes
                    decodedString = decodedString.replace(/[“”]/g, '"');


                    // Replace specific unicode characters that might cause issues
                   decodedString = decodedString.replace(/[\u2018\u2019]/g, "'"); // Replace smart single quotes
                   decodedString = decodedString.replace(/[\u201C\u201D]/g, '"'); // Replace smart double quotes


                    // Ensure the string is wrapped in curly braces
                    if(!decodedString.startsWith('{') && !decodedString.endsWith('}')){
                      decodedString = `{${decodedString}}`
                    }

                    // Parse the JSON content
                    try {
                      const content = JSON.parse(decodedString);
                      return {
                        id: comment.id,
                        rating: content?.rating || 0,
                        userName: content?.userName || "",
                         title: content?.title || "",
                       text: content?.text || "",
                    };
                    }catch(parseError){
                      console.error("Error parsing content after cleanup: ", decodedString, parseError);
                        return null;
                    }

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
    };




    // Function to handle adding/updating reviews
    const handleAddReview = async (newReview) => {
        setLoading(true);
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
                try {
                    const responseBody = await response.json();
                    console.error("Response body:", responseBody);
                }
                catch (e) {
                    console.error("Response body not available")
                }

                throw new Error(message);
            }
            console.log("Comments API success");
            await fetchReviews(advicePosts.id);
        } catch (err) {
            setError(`Failed to update review. ${err.message}`);
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
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
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

    const { acf, content, modified, slug, categories } = advicePosts;

    return (
        <div className="page single-page-company">
            <section className="hero-wrap bg-gray-100">
                <div className="container mx-auto px-4">
                    <Breadcrumbs />
                    <CompanyReviewHero data={advicePosts} />
                </div>
            </section>
            <section className="info-card-wrap">
                <div className="container mx-auto px-4">
                    <InfoCard data={advicePosts} />
                </div>
            </section>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="xl:flex xl:gap-10">
                        <div className="xl:w-3/4 lg:full">
                            <AuthorBlock acf={acf} modifiedDate={modified} jwt={jwt} />
                            <ReviewSummary content={content.rendered} />
                            <UserReviewList reviews={reviews} />
                        </div>
                        <div className={`xl:w-1/4 lg:full md:block hidden sticky top-10 h-full`}>
                            <Sidebar data={advicePosts} onOpenModal={handleOpenModal} reviews={reviews} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-12">
                <div className="container mx-auto px-4">
                    <SimilarInstagramAdviceCompanies currentCompanyCategories={categories} currentCompanySlug={slug} />
                </div>
            </section>
            {/* Render the modal */}
            {isModalOpen && <ReviewModal onClose={handleCloseModal} onAddReview={handleAddReview} />}
        </div>
    );
};

export default CompanyPage;