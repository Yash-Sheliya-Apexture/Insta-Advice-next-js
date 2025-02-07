




// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import HostCard from "./HostCard";
// import Link from "next/link";

// const Hero = () => {
//     const [hostData, setHostData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const targetPostIds = [206, 272, 276];

//     useEffect(() => {
//         const fetchHosts = async () => {
//             try {
//                 const response = await fetch(
//                     `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//                 );
//                 if (!response.ok) throw new Error("Failed to fetch data");
//                 const data = await response.json();


//                   const dataMap = new Map(data.map((item) => [item.id, item]));

//                    const orderedData = targetPostIds.reduce((acc, id) => {
//                     const item = dataMap.get(id);
//                      if (item) {
//                         acc.push(item);
//                      }
//                        return acc;
//                    }, []);


//                   const formattedData = orderedData.map((item) => {
//                     let imageUrl = "/images/default-logo.png";

//                     if (item.acf?.company_logo && item._embedded?.["wp:featuredmedia"]) {
//                        const mediaItem = item._embedded["wp:featuredmedia"].find(
//                         (media) => media.id === item.acf.company_logo
//                       );
//                       if (mediaItem) {
//                             imageUrl = mediaItem.source_url;
//                        }
//                      }

//                     return {
//                        id: item.id,
//                       logo: imageUrl,
//                        rating: parseFloat(item.acf?.rating) || 0,
//                        reviews: item.acf?.user_reviews || "0",
//                        features: item.acf?.features?.split("\n") || [],
//                       visitSiteUrl: item.acf?.visit_site_url,
//                         signalPageUrl: `/company/${item.slug}`,
//                       ranking: item.acf?.ranking || null,
//                     };
//                 });
//                   setHostData(formattedData);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchHosts();
//     }, []);



//     return (
//       <section className="relative py-8 md:py-16 overflow-hidden bg-[linear-gradient(180deg,hsla(0,0%,100%,0)_0%,#4f3bea)]">
//         <div className="container mx-auto px-4 ">
//           <div className="flex items-center justify-center gap-6">
//             {/* Text Content */}
//             <div className="max-w-6xl text-center">
//               <span className="text-lg md:text-xl">
//                 Updated on January 30, 2025
//               </span>
//               <h1 className="text-3xl lg:text-5xl font-bold mt-4 leading-tight">
//                 Plan Your Instagram Growth, Grow Your Audience, Build Your Brand
//               </h1>
//               <p className="text-lg md:text-xl font-medium mt-6">
//                 We help you choose the ideal growth tools that get you real
//                 followers, engagement, and brand visibility.
//               </p>
//               <Link
//                 href="/company"
//                 rel="noopener noreferrer"
//                 className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-10 py-4 hover:bg-blue-600 transform text-center mt-2"
//               >
//                 Get Started Today
//               </Link>
//             </div>
//           </div>

//            {/* Host Cards */}
//           <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
//              {loading && (
//                   <div className="col-span-full flex justify-center items-center h-40"> {/* Center content */}
//                       <p className="text-center text-white">Loading Insta Advice...</p>
//                   </div>
//               )}
//               {error && (
//                   <div className="col-span-full flex justify-center items-center h-40"> {/* Center content */}
//                       <p className="text-center text-red-400">{error}</p>
//                   </div>
//               )}
//             {hostData.map((host, index) => (
//               <HostCard key={host.id} {...host} isMiddleCard={index === 1} />
//             ))}
//           </div>
//         </div>
//          <div className="w-full h-[450px] absolute inset-0 flex justify-center items-center -z-1">
//              <Image
//                src="images/landing-hero-overlay.svg"
//                className="w-full h-[300px]"
//                fill
//                 alt="Picture of the author"
//                  priority
//              />
//            </div>
//       </section>
//     );
// };

// export default Hero;







// import React, { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import HostCard from "./HostCard";
// import Link from "next/link";

// const Hero = () => {
//   const [hostData, setHostData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const targetPostIds = [206, 272, 276]; // Ensure these are numbers
//   const [jwt, setJwt] = useState(null);
//   const [isClient, setIsClient] = useState(false);
//   const [jwtLoading, setJwtLoading] = useState(true);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     const fetchJWT = async () => {
//       setJwtLoading(true);
//       try {
//         const authUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/jwt-auth/v1/token`;
//         const username = process.env.NEXT_PUBLIC_WORDPRESS_USERNAME;
//         const password = process.env.NEXT_PUBLIC_WORDPRESS_PASSWORD;
//         const response = await fetch(authUrl, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             username: username,
//             password: password,
//           })
//         });
//         if (!response.ok) {
//           const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
//           console.error("Response error when getting the token:", message);
//           try {
//             const responseBody = await response.json();
//             console.error("Response body:", responseBody);
//           }
//           catch (e) {
//             console.error("Response body not available")
//           }
//           throw new Error(message)
//         }

//         const data = await response.json();
//         setJwt(data.token);


//       } catch (err) {
//         setError(`Failed to fetch JWT Token. ${err.message}`);
//         console.error("Error fetching JWT", err);
//       } finally {
//         setJwtLoading(false);
//       }
//     };
//     fetchJWT()
//   }, [])

//   const fetchRatingsAndReviews = useCallback(async (postId) => {
//     if (!postId) {
//       console.error("fetchRatingsAndReviews called with undefined postId!");
//       return { averageRating: 0, totalReviews: 0 };
//     }
//     if (!jwt) {
//       console.warn("JWT Token is not available yet. Returning default ratings.");
//       return { averageRating: 0, totalReviews: 0 };
//     }

//     try {
//       let allReviews = [];
//       let page = 1;
//       let totalPages = 1; // Assume at least one page initially

//       while (page <= totalPages) {
//         const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/comments?post=${postId}&page=${page}`;
//         const response = await fetch(apiUrl, {
//           headers: {
//             "Authorization": `Bearer ${jwt}`,
//           },
//         });

//         if (!response.ok) {
//           const message = `HTTP error! Status: ${response.status} - ${response.statusText} - URL: ${apiUrl}`;
//           console.error("Response error when fetching comments:", message);
//           try {
//             const responseBody = await response.json();
//             console.error("Response body:", responseBody);
//           } catch (e) {
//             console.error("Response body not available");
//           }
//           throw new Error(message);
//         }

//         const comments = await response.json();
//         allReviews = allReviews.concat(comments);  // Accumulate comments
//         totalPages = parseInt(response.headers.get('X-WP-TotalPages'), 10) || 1; // Get total pages from headers
//         page++;
//       }

//       const formattedReviews = allReviews.map(comment => {
//         try {
//           // Decode HTML entities
//           const tempElement = document.createElement('div');
//           tempElement.innerHTML = comment.content.rendered;

//           // Get the decoded text content
//           let decodedString = tempElement.textContent;


//           // Helper function to safely parse JSON.
//           const safeJsonParse = (str) => {
//             try {
//               // Trim whitespace and control characters aggressively
//               str = str.trim();

//               // Find the start and end of the JSON object (if possible)
//               let start = str.indexOf('{');
//               let end = str.lastIndexOf('}');

//               if (start !== -1 && end !== -1 && start < end) {
//                 str = str.substring(start, end + 1);
//               }

//               // Clean potentially problematic characters
//               str = str
//                 .replace(/[“”]/g, '"') // Replace curly quotes with straight quotes
//                 .replace(/[\r\n]+/g, "\\n"); // Replace line breaks with escaped newlines

//               return JSON.parse(str);
//             } catch (e) {
//               console.error("Error parsing JSON:", str, e);
//               return null;
//             }
//           };

//           // Attempt to parse the content
//           let content = safeJsonParse(decodedString);

//           // If the content is null return null for the whole review
//           if (!content) {
//             return null;
//           }

//           return {
//             id: comment.id,
//             rating: content?.rating || 0,
//             userName: content?.userName || "",
//             title: content?.title || "",
//             text: content?.text || "",
//             rawText: content?.text,
//           };
//         } catch (e) {
//           console.error("Error parsing comment content:", comment.content.rendered, e);
//           return null;
//         }
//       }).filter(Boolean);
//       const totalRating = formattedReviews.reduce((acc, review) => acc + review.rating, 0);
//       const averageRating = formattedReviews.length > 0 ? totalRating / formattedReviews.length : 0;
//       return {
//         averageRating: averageRating.toFixed(1),
//         totalReviews: formattedReviews.length,
//       };
//     } catch (err) {
//       console.error("Error fetching ratings and reviews:", err);
//       return { averageRating: 0, totalReviews: 0 };
//     }
//   }, [jwt]);

//   useEffect(() => {
//     const fetchHosts = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//         );
//         if (!response.ok) throw new Error("Failed to fetch data");
//         const data = await response.json();

//         const dataMap = new Map(data.map((item) => [parseInt(item.id), item]));  //Parse int to match targetPostIds


//         const orderedData = targetPostIds.reduce((acc, id) => {
//           const item = dataMap.get(parseInt(id)); // ParseInt again

//           if (item) {
//             acc.push(item);
//           }
//           return acc;
//         }, []);

//         // Fetch ratings and reviews for each host
//         const hostsWithRatings = await Promise.all(
//           orderedData.map(async (item) => {
//             const { averageRating, totalReviews } = await fetchRatingsAndReviews(item.id);
//             let imageUrl = "/images/default-logo.png";

//             if (item.acf?.company_logo && item._embedded?.["wp:featuredmedia"]) {
//               const mediaItem = item._embedded["wp:featuredmedia"].find(
//                 (media) => media.id === item.acf.company_logo
//               );
//               if (mediaItem) {
//                 imageUrl = mediaItem.source_url;
//               }
//             }

//             return {
//               id: item.id,
//               logo: imageUrl,
//               averageRating: averageRating,
//               totalReviews: totalReviews,
//               features: item.acf?.features?.split("\n") || [],
//               visitSiteUrl: item.acf?.visit_site_url,
//               signalPageUrl: `/company/${item.slug}`,
//               ranking: item.acf?.ranking || null,
//             };
//           })
//         );

//         setHostData(hostsWithRatings);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isClient && !jwtLoading) {
//       fetchHosts();
//     }
//   }, [fetchRatingsAndReviews, jwt, isClient, jwtLoading]);

//   return (
//     <section className="relative py-8 md:py-16 overflow-hidden bg-[linear-gradient(180deg,hsla(0,0%,100%,0)_0%,#4f3bea)]">
//       <div className="container mx-auto px-4 ">
//         <div className="flex items-center justify-center gap-6">
//           {/* Text Content */}
//           <div className="max-w-6xl text-center">
//             <span className="text-lg md:text-xl">Updated on January 30, 2025</span>
//             <h1 className="text-3xl lg:text-5xl font-bold mt-4 leading-tight">
//               Plan Your Instagram Growth, Grow Your Audience, Build Your Brand
//             </h1>
//             <p className="text-lg md:text-xl font-medium mt-6">
//               We help you choose the ideal growth tools that get you real followers, engagement, and brand visibility.
//             </p>
//             <Link
//               href="/company"
//               rel="noopener noreferrer"
//               className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-10 py-4 hover:bg-blue-600 transform text-center mt-2"
//             >
//               Get Started Today
//             </Link>
//           </div>
//         </div>

//         {/* Host Cards */}
//         <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
//           {loading || jwtLoading ? (
//             <div className="col-span-full flex justify-center items-center h-40">
//               {/* Center content */}
//               <p className="text-center text-white">Loading Insta Advice...</p>
//             </div>
//           ) : error ? (
//             <div className="col-span-full flex justify-center items-center h-40">
//               {/* Center content */}
//               <p className="text-center text-red-400">{error}</p>
//             </div>
//           ) : (isClient && hostData.map((host, index) => (
//             <HostCard key={host.id} {...host} isMiddleCard={index === 1} />
//           )))}
//         </div>
//       </div>
//       <div className="w-full h-[450px] absolute inset-0 flex justify-center items-center -z-1">
//         <Image
//           src="images/landing-hero-overlay.svg"
//           className="w-full h-[300px]"
//           fill
//           alt="Picture of the author"
//           priority
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;





// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import Image from "next/image";
// import HostCard from "./HostCard";
// import Link from "next/link";

// const Hero = () => {
//   const [hostData, setHostData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const targetPostIds = useMemo(() => [206, 272, 276], []); // Use useMemo to avoid recreation
//   const [jwt, setJwt] = useState(null);
//   const [isClient, setIsClient] = useState(false);
//   const [jwtLoading, setJwtLoading] = useState(true);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // JWT Fetching Optimization
//   useEffect(() => {
//     const fetchJWT = async () => {
//       setJwtLoading(true);
//       try {
//         const authUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/jwt-auth/v1/token`;
//         const username = process.env.NEXT_PUBLIC_WORDPRESS_USERNAME;
//         const password = process.env.NEXT_PUBLIC_WORDPRESS_PASSWORD;

//         const response = await fetch(authUrl, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             username: username,
//             password: password,
//           }),
//           cache: 'no-store', // Add this line
//         });

//         if (!response.ok) {
//           const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
//           console.error("Response error when getting the token:", message);
//           try {
//             const responseBody = await response.json();
//             console.error("Response body:", responseBody);
//           } catch (e) {
//             console.error("Response body not available");
//           }
//           throw new Error(message);
//         }

//         const data = await response.json();
//         setJwt(data.token);
//       } catch (err) {
//         setError(`Failed to fetch JWT Token. ${err.message}`);
//         console.error("Error fetching JWT", err);
//       } finally {
//         setJwtLoading(false);
//       }
//     };

//     fetchJWT();
//   }, []);

//   // Ratings and Reviews Fetching Optimization
//   const fetchRatingsAndReviews = useCallback(async (postId) => {
//     if (!postId) {
//       console.error("fetchRatingsAndReviews called with undefined postId!");
//       return { averageRating: 0, totalReviews: 0 };
//     }

//     if (!jwt) {
//       console.warn("JWT Token is not available yet. Returning default ratings.");
//       return { averageRating: 0, totalReviews: 0 };
//     }

//     try {
//       let allReviews = [];
//       let page = 1;
//       let totalPages = 1;

//       while (page <= totalPages) {
//         const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/comments?post=${postId}&page=${page}&per_page=100`; // Increased per_page
//         const response = await fetch(apiUrl, {
//           headers: {
//             "Authorization": `Bearer ${jwt}`,
//           },
//           cache: 'no-store', // Add this line
//         });

//         if (!response.ok) {
//           const message = `HTTP error! Status: ${response.status} - ${response.statusText} - URL: ${apiUrl}`;
//           console.error("Response error when fetching comments:", message);
//           try {
//             const responseBody = await response.json();
//             console.error("Response body:", responseBody);
//           } catch (e) {
//             console.error("Response body not available");
//           }
//           throw new Error(message);
//         }

//         const comments = await response.json();
//         allReviews = allReviews.concat(comments);
//         totalPages = parseInt(response.headers.get('X-WP-TotalPages'), 10) || 1;
//         page++;
//       }

//       const formattedReviews = allReviews.map(comment => {
//         try {
//           const tempElement = document.createElement('div');
//           tempElement.innerHTML = comment.content.rendered;
//           let decodedString = tempElement.textContent;

//           const safeJsonParse = (str) => {
//             try {
//               str = str.trim();
//               let start = str.indexOf('{');
//               let end = str.lastIndexOf('}');

//               if (start !== -1 && end !== -1 && start < end) {
//                 str = str.substring(start, end + 1);
//               }

//               str = str
//                 .replace(/[“”]/g, '"')
//                 .replace(/[\r\n]+/g, "\\n");

//               return JSON.parse(str);
//             } catch (e) {
//               console.error("Error parsing JSON:", str, e);
//               return null;
//             }
//           };

//           let content = safeJsonParse(decodedString);

//           if (!content) {
//             return null;
//           }

//           return {
//             id: comment.id,
//             rating: content?.rating || 0,
//             userName: content?.userName || "",
//             title: content?.title || "",
//             text: content?.text || "",
//             rawText: content?.text,
//           };
//         } catch (e) {
//           console.error("Error parsing comment content:", comment.content.rendered, e);
//           return null;
//         }
//       }).filter(Boolean);

//       const totalRating = formattedReviews.reduce((acc, review) => acc + review.rating, 0);
//       const averageRating = formattedReviews.length > 0 ? totalRating / formattedReviews.length : 0;

//       return {
//         averageRating: averageRating.toFixed(1),
//         totalReviews: formattedReviews.length,
//       };
//     } catch (err) {
//       console.error("Error fetching ratings and reviews:", err);
//       return { averageRating: 0, totalReviews: 0 };
//     }
//   }, [jwt]);

//   // Host Data Fetching Optimization
//   useEffect(() => {
//     const fetchHosts = async () => {
//       setLoading(true); // set loading to true to handle the case where loading is completed before jwt is ready
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&per_page=100`, // Increased per_page
//           {
//             cache: 'no-store', // Add this line
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch data");
//         const data = await response.json();

//         const dataMap = new Map(data.map((item) => [parseInt(item.id), item]));

//         const orderedData = targetPostIds.reduce((acc, id) => {
//           const item = dataMap.get(parseInt(id));
//           if (item) {
//             acc.push(item);
//           }
//           return acc;
//         }, []);

//         const hostsWithRatings = await Promise.all(
//           orderedData.map(async (item) => {
//             const { averageRating, totalReviews } = await fetchRatingsAndReviews(item.id);
//             let imageUrl = "/images/default-logo.png";

//             if (item.acf?.company_logo && item._embedded?.["wp:featuredmedia"]) {
//               const mediaItem = item._embedded["wp:featuredmedia"].find(
//                 (media) => media.id === item.acf.company_logo
//               );
//               if (mediaItem) {
//                 imageUrl = mediaItem.source_url;
//               }
//             }

//             return {
//               id: item.id,
//               logo: imageUrl,
//               averageRating: averageRating,
//               totalReviews: totalReviews,
//               features: item.acf?.features?.split("\n") || [],
//               visitSiteUrl: item.acf?.visit_site_url,
//               signalPageUrl: `/company/${item.slug}`,
//               ranking: item.acf?.ranking || null,
//             };
//           })
//         );

//         setHostData(hostsWithRatings);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isClient && jwt && !jwtLoading) {
//       fetchHosts();
//     } else if (!isClient) {
//       setLoading(false)
//     }
//   }, [fetchRatingsAndReviews, jwt, isClient, jwtLoading, targetPostIds]);

//   // Early Return for Loading State
//   if (loading || jwtLoading) {
//     return (
//       <section className="relative py-8 md:py-16 overflow-hidden bg-[linear-gradient(180deg,hsla(0,0%,100%,0)_0%,#4f3bea)]">
//         <div className="container mx-auto px-4 ">
//           <div className="col-span-full flex justify-center items-center h-40">
//             <p className="text-center text-white">Loading Insta Advice...</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="relative py-8 md:py-16 overflow-hidden bg-[linear-gradient(180deg,hsla(0,0%,100%,0)_0%,#4f3bea)]">
//         <div className="container mx-auto px-4 ">
//           <div className="col-span-full flex justify-center items-center h-40">
//             <p className="text-center text-red-400">{error}</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="relative py-8 md:py-16 overflow-hidden bg-[linear-gradient(180deg,hsla(0,0%,100%,0)_0%,#4f3bea)]">
//       <div className="container mx-auto px-4 ">
//         <div className="flex items-center justify-center gap-6">
//           <div className="max-w-6xl text-center">
//             <span className="text-lg md:text-xl">Updated on January 30, 2025</span>
//             <h1 className="text-3xl lg:text-5xl font-bold mt-4 leading-tight">
//               Plan Your Instagram Growth, Grow Your Audience, Build Your Brand
//             </h1>
//             <p className="text-lg md:text-xl font-medium mt-6">
//               We help you choose the ideal growth tools that get you real followers, engagement, and brand visibility.
//             </p>
//             <Link
//               href="/company"
//               rel="noopener noreferrer"
//               className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-10 py-4 hover:bg-blue-600 transform text-center mt-2"
//             >
//               Get Started Today
//             </Link>
//           </div>
//         </div>

//         <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
//           {hostData.map((host, index) => (
//             <HostCard key={host.id} {...host} isMiddleCard={index === 1} />
//           ))}
//         </div>
//       </div>
//       <div className="w-full h-[450px] absolute inset-0 flex justify-center items-center -z-1">
//         <Image
//           src="images/landing-hero-overlay.svg"
//           className="w-full h-[300px]"
//           fill
//           alt="Picture of the author"
//           priority
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;





import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import HostCard from "./HostCard";
import Link from "next/link";

const Hero = () => {
  const [hostData, setHostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const targetPostIds = useMemo(() => [206, 272, 276], []); // Use useMemo to avoid recreation
  const [jwt, setJwt] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [jwtLoading, setJwtLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // JWT Fetching Optimization
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
          }),
          cache: 'no-store', // Add this line
        });

        if (!response.ok) {
          const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
          console.error("Response error when getting the token:", message);
          try {
            const responseBody = await response.json();
            console.error("Response body:", responseBody);
          } catch (e) {
            console.error("Response body not available");
          }
          throw new Error(message);
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

    fetchJWT();
  }, []);

  // Ratings and Reviews Fetching Optimization
  const fetchRatingsAndReviews = useCallback(async (postId) => {
    if (!postId) {
      console.error("fetchRatingsAndReviews called with undefined postId!");
      return { averageRating: 0, totalReviews: 0 };
    }

    if (!jwt) {
      console.warn("JWT Token is not available yet. Returning default ratings.");
      return { averageRating: 0, totalReviews: 0 };
    }

    try {
      let allReviews = [];
      let page = 1;
      let totalPages = 1;

      while (page <= totalPages) {
        const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/comments?post=${postId}&page=${page}&per_page=100`; // Increased per_page
        const response = await fetch(apiUrl, {
          headers: {
            "Authorization": `Bearer ${jwt}`,
          },
          cache: 'no-store', // Add this line
        });

        if (!response.ok) {
          const message = `HTTP error! Status: ${response.status} - ${response.statusText} - URL: ${apiUrl}`;
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
        allReviews = allReviews.concat(comments);
        totalPages = parseInt(response.headers.get('X-WP-TotalPages'), 10) || 1;
        page++;
      }

      const formattedReviews = allReviews.map(comment => {
        try {
          const tempElement = document.createElement('div');
          tempElement.innerHTML = comment.content.rendered;
          let decodedString = tempElement.textContent;

          const safeJsonParse = (str) => {
            try {
              str = str.trim();
              let start = str.indexOf('{');
              let end = str.lastIndexOf('}');

              if (start !== -1 && end !== -1 && start < end) {
                str = str.substring(start, end + 1);
              }

              str = str
                .replace(/[“”]/g, '"')
                .replace(/[\r\n]+/g, "\\n");

              return JSON.parse(str);
            } catch (e) {
              console.error("Error parsing JSON:", str, e);
              return null;
            }
          };

          let content = safeJsonParse(decodedString);

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
  }, [jwt]);

  // Host Data Fetching Optimization
  useEffect(() => {
    const fetchHosts = async () => {
      setLoading(true); // set loading to true to handle the case where loading is completed before jwt is ready
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&per_page=100`, // Increased per_page
          {
            cache: 'no-store', // Add this line
          }
        );

        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        const dataMap = new Map(data.map((item) => [parseInt(item.id), item]));

        const orderedData = targetPostIds.reduce((acc, id) => {
          const item = dataMap.get(parseInt(id));
          if (item) {
            acc.push(item);
          }
          return acc;
        }, []);

        const hostsWithRatings = await Promise.all(
          orderedData.map(async (item) => {
            const { averageRating, totalReviews } = await fetchRatingsAndReviews(item.id);
            let imageUrl = "/images/default-logo.png";

            if (item.acf?.company_logo && item._embedded?.["wp:featuredmedia"]) {
              const mediaItem = item._embedded["wp:featuredmedia"].find(
                (media) => media.id === item.acf.company_logo
              );
              if (mediaItem) {
                imageUrl = mediaItem.source_url;
              }
            }

            return {
              id: item.id,
              logo: imageUrl,
              averageRating: averageRating,
              totalReviews: totalReviews,
              features: item.acf?.features?.split("\n") || [],
              visitSiteUrl: item.acf?.visit_site_url,
              signalPageUrl: `/company/${item.slug}`,
              ranking: item.acf?.ranking || null,
            };
          })
        );

        setHostData(hostsWithRatings);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (isClient && jwt && !jwtLoading) {
      fetchHosts();
    } else if (!isClient) {
      setLoading(false)
    }
  }, [fetchRatingsAndReviews, jwt, isClient, jwtLoading, targetPostIds]);

  // Early Return for Loading State
  if (loading || jwtLoading) {
    return (
      <section className="relative py-8 md:py-16 overflow-hidden bg-[linear-gradient(180deg,hsla(0,0%,100%,0)_0%,#4f3bea)]">
        <div className="container mx-auto px-4 ">
          <div className="col-span-full flex justify-center items-center h-40">
            <p className="text-center text-white">Loading Insta Advice...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-8 md:py-16 overflow-hidden bg-[linear-gradient(180deg,hsla(0,0%,100%,0)_0%,#4f3bea)]">
        <div className="container mx-auto px-4 ">
          <div className="col-span-full flex justify-center items-center h-40">
            <p className="text-center text-red-400">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-8 md:py-16 overflow-hidden bg-[linear-gradient(180deg,hsla(0,0%,100%,0)_0%,#4f3bea)]">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-center gap-6">
          <div className="max-w-6xl text-center">
            <span className="text-lg md:text-xl">Updated on January 30, 2025</span>
            <h1 className="text-3xl lg:text-5xl font-bold mt-4 leading-tight">
              Plan Your Instagram Growth, Grow Your Audience, Build Your Brand
            </h1>
            <p className="text-lg md:text-xl font-medium mt-6">
              We help you choose the ideal growth tools that get you real followers, engagement, and brand visibility.
            </p>
            <Link
              href="/company"
              rel="noopener noreferrer"
              className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-10 py-4 hover:bg-blue-600 transform text-center mt-2"
            >
              Get Started Today
            </Link>
          </div>
        </div>

        <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
          {hostData.map((host, index) => (
            <HostCard key={host.id} {...host} isMiddleCard={index === 1} />
          ))}
        </div>
      </div>
      <div className="w-full h-[450px] absolute inset-0 flex justify-center items-center -z-1">
        <Image
          src="images/landing-hero-overlay.svg"
          className="w-full h-[300px]"
          fill
          alt="Picture of the author"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;