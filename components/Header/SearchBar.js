// import React, { useState, useRef, useEffect } from 'react';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import Image from 'next/image'; // Import Image component from next/image
// import StarRating from '../StarRating/StarRating'; // Import the StarRating component

// const SearchBar = () => {
//   const [isSearchVisible, setIsSearchVisible] = useState(false);
//   const searchRef = useRef(null);
//   const [searchResults, setSearchResults] = useState([]); //State for results

//   // Sample Search Results Data
//   // Using a constant for the data, but consider a more dynamic way in a production environment.
//   const searchData = [
//     {
//       title: "Result 1",
//       description: "This is the first result.",
//       image: "/images/ionos-logo.webp", // Use relative path
//       rating: 4.5,
//       reviewCount: 123,
//     },
//     {
//       title: "Result 2",
//       description: "This is the second result.",
//       image: "/images/ultahost-logo.png", // Use relative path
//       rating: 3.8,
//       reviewCount: 78,
//     },
//     {
//       title: "Result 3",
//       description: "This is the third result.",
//       image: "/images/hostinger-logo.png", // Use relative path
//       rating: 4.2,
//       reviewCount: 230,
//     },
//   ];


//   const handleSearchClick = () => {
//     setIsSearchVisible(true);
//     document.body.classList.add('overflow-hidden');
//   };

//   const handleCloseSearch = () => {
//     setIsSearchVisible(false);
//     document.body.classList.remove('overflow-hidden');
//   };


//   const handleClickOutside = (event) => {
//     if (searchRef.current && !searchRef.current.contains(event.target)) {
//       setIsSearchVisible(false);
//       document.body.classList.remove('overflow-hidden');
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.body.classList.remove('overflow-hidden');
//     };
//   }, []);

//   useEffect(() => {
//     setSearchResults(searchData); //Initial Data
//   },[]);


//   const renderSearchResults = () => {
//     if (searchResults.length === 0) {
//       return <div className="py-16 text-center text-light-color">No recent searches</div>;
//     }
//     return (
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//         {searchResults.map((result) => (
//           <div key={result.title} className="p-4 border border-gray-300 rounded-xl shadow-sm flex flex-col items-center">
//             <Image
//               src={result.image}
//               alt={result.title}
//               width={100} // Explicit sizes for optimization
//               height={100} // Explicit sizes for optimization
//               className="w-28 h-auto"
//               layout="intrinsic" // Ensures aspect ratio is preserved
//             />
//             <div className="flex flex-col tablet:flex-row items-center gap-3 mt-4">
//               <StarRating rating={result.rating} size="text-2xl text-ga" />
//               <div className="flex space-x-2">
//                 <span className="text-base text-gray-500 font-semibold">{result.rating}</span>
//                 <span className="text-base text-gray-500 font-semibold">({result.reviewCount} Reviews)</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <button onClick={handleSearchClick} className="flex items-center px-2 text-dark-color">
//         <FaSearch className='text-gray-700' />
//       </button>

//       {isSearchVisible && (
//         <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-start py-0 lg:py-4">
//           <div className="relative w-full h-full lg:max-w-2xl p-4 bg-white lg:rounded-3xl rounded-none" ref={searchRef}>
//             <div className="flex relative">
//               <input
//                 type="text"
//                 placeholder="Search docs"
//                 className="border border-gray-300 rounded-3xl py-2 px-3 focus:outline-none focus:border-black w-full pr-10"
//               />
//               <button onClick={handleCloseSearch} className="absolute inset-y-0 right-2 flex items-center px-2 text-dark-color">
//                 <FaTimes />
//               </button>
//             </div>
//             {renderSearchResults()}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;





// import React, { useState, useRef, useEffect } from 'react';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import Image from 'next/image';
// import StarRating from '../StarRating/StarRating';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// const SearchBar = ({ specificIds }) => {
//     const [isSearchVisible, setIsSearchVisible] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const searchRef = useRef(null);
//     const [searchResults, setSearchResults] = useState([]);
//     const [initialResults, setInitialResults] = useState([]);
//     const router = useRouter();

//     const handleSearchClick = () => {
//         setIsSearchVisible(true);
//         document.body.classList.add('overflow-hidden');
//     };

//     const handleCloseSearch = () => {
//         setIsSearchVisible(false);
//         document.body.classList.remove('overflow-hidden');
//     };

//     const handleClickOutside = (event) => {
//         if (searchRef.current && !searchRef.current.contains(event.target)) {
//             setIsSearchVisible(false);
//             document.body.classList.remove('overflow-hidden');
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//             document.body.classList.remove('overflow-hidden');
//         };
//     }, []);

//     const fetchSearchResults = async (query = '', ids = []) => {
//         try {
//             let apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`;

//             if (ids && ids.length > 0) {
//                 apiUrl += `&include=${ids.join(',')}`;
//             } else if (query) {
//                 apiUrl += `&search=${query}`;
//             }


//             const response = await fetch(apiUrl);

//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }

//             const data = await response.json();
//             const formattedData = data.map((item) => ({
//                 id: item.id,
//                 title: item.title.rendered,
//                 image: item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0]
//                     ? item._embedded['wp:featuredmedia'][0].source_url
//                     : '/images/default-image.png',
//                 rating: item.acf?.rating || 0,
//                 reviewCount: item.acf?.user_reviews || 0,
//                 link: `/company/${item.slug}` || '/default-post-link',
//             }));


//             setSearchResults(formattedData);

//             if (!query && !ids && data.length > 0) {
//                 setInitialResults(formattedData);
//             } else if (!query && !ids && data.length === 0) {
//                 setInitialResults([]);
//             }
//         } catch (error) {
//             console.error('Error fetching search results:', error);
//             setSearchResults([]);
//             if (!query && !ids) {
//                 setInitialResults([]);
//             }
//         }
//     };


//     useEffect(() => {
//         // Fetch initial results with specificIds or default
//         fetchSearchResults('', specificIds);
//     }, [specificIds]);


//     const handleSearchChange = (e) => {
//         const query = e.target.value;
//         setSearchQuery(query);

//         if (!query) {
//             setSearchResults(initialResults);
//         } else {
//             fetchSearchResults(query);
//         }
//     };

//     const handleReadMoreClick = (link) => {
//         handleCloseSearch(); // Close the modal
//         router.push(link); // Navigate to the link

//     };


//     const renderSearchResults = () => {
//         if (searchResults.length === 0) {
//             return <div className="py-16 text-center text-light-color">No results found</div>;
//         }
//         const resultsToShow = searchResults.slice(0, 6);

//         return (
//             <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {resultsToShow.map((result) => (
//                     <div key={result.id} className="p-6 border border-gray-300 rounded-xl shadow-lg flex flex-col justify-between items-center bg-white">
//                         <Image
//                             src={result.image}
//                             alt={result.title}
//                             width={200}
//                             height={45}
//                             className="w-44 h-12 object-cover rounded-lg"
//                             layout="intrinsic"
//                         />
//                         <div className="flex flex-col items-center mt-4">
//                             <div className="flex flex-col tablet:flex-row items-center gap-3 mt-4">
//                                 <StarRating rating={result.rating} size="text-lg" />
//                                 <div className="flex space-x-2">
//                                     <span className="text-base text-gray-500">{result.rating}</span>
//                                     <span className="text-base text-gray-500">({result.reviewCount} Reviews)</span>
//                                 </div>
//                             </div>
//                             <Link
//                                 href={result.link}
//                                 className='text-blue-600 hover:text-blue-800 mt-1 text-sm font-semibold'
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     handleReadMoreClick(result.link);
//                                 }}
//                             >
//                                 Read More
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <div>
//             <button onClick={handleSearchClick} className="flex items-center px-2 text-dark-color cursor-pointer">
//                 <FaSearch className='text-gray-700' />
//             </button>

//             {isSearchVisible && (
//                 <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-start py-0 lg:py-4">
//                     <div className="relative w-full h-full lg:max-w-3xl p-4 bg-white lg:rounded-3xl rounded-none" ref={searchRef}>
//                         <div className="flex relative">
//                             <input
//                                 type="text"
//                                 value={searchQuery}
//                                 onChange={handleSearchChange}
//                                 placeholder="Search by post title"
//                                 className="border border-gray-300 rounded-3xl py-2 px-3 focus:outline-none focus:border-black w-full pr-10"
//                             />
//                             <button onClick={handleCloseSearch} className="absolute inset-y-0 right-2 flex items-center px-2 text-dark-color">
//                                 <FaTimes />
//                             </button>
//                         </div>
//                         {renderSearchResults()}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SearchBar;




import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import StarRating from '../StarRating/StarRating';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SearchBar = ({ specificIds }) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchRef = useRef(null);
    const [searchResults, setSearchResults] = useState([]);
    const [initialResults, setInitialResults] = useState([]);
    const router = useRouter();
    const [jwt, setJwt] = useState(null); // JWT Token
    const [jwtLoading, setJwtLoading] = useState(true); // JWT loading state

    const handleSearchClick = () => {
        setIsSearchVisible(true);
        document.body.classList.add('overflow-hidden');
    };

    const handleCloseSearch = () => {
        setIsSearchVisible(false);
        document.body.classList.remove('overflow-hidden');
    };

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setIsSearchVisible(false);
            document.body.classList.remove('overflow-hidden');
        }
    };


    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
        const fetchJWT = async () => {
            setJwtLoading(true); // Set JWT loading to true while fetching
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
                console.error("Error fetching JWT", err);
            } finally {
              setJwtLoading(false); // Set JWT loading to false after fetching
            }
        };
      fetchJWT();
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.body.classList.remove('overflow-hidden');
      };
    }, []);

    const fetchRatingsAndReviews = useCallback(async (postId) => {
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


    const fetchSearchResults = useCallback(async (query = '', ids = []) => {
        if (jwtLoading) {
          // If JWT is still loading, prevent fetching data
          return;
        }
        try {
            let apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`;

            if (ids && ids.length > 0) {
                apiUrl += `&include=${ids.join(',')}`;
            } else if (query) {
                apiUrl += `&search=${query}`;
            }

            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
               // Fetch ratings and reviews for each post
                const postsWithRatings = await Promise.all(
                    data.map(async (item) => {
                        const { averageRating, totalReviews } = await fetchRatingsAndReviews(item.id);
                        return {
                            ...item,
                            averageRating: averageRating,
                            totalReviews: totalReviews
                        };
                    })
                );

            const formattedData = postsWithRatings.map((item) => ({
                id: item.id,
                title: item.title.rendered,
                image: item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0]
                    ? item._embedded['wp:featuredmedia'][0].source_url
                    : '/images/default-image.png',
                rating: item.acf?.rating || 0,
                reviewCount: item.acf?.user_reviews || 0,
                link: `/company/${item.slug}` || '/default-post-link',
                averageRating: item.averageRating, // Set average rating from the fetched data
                totalReviews: item.totalReviews   // Set total reviews from the fetched data

            }));


            setSearchResults(formattedData);

            if (!query && !ids && data.length > 0) {
                setInitialResults(formattedData);
            } else if (!query && !ids && data.length === 0) {
                setInitialResults([]);
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
            setSearchResults([]);
            if (!query && !ids) {
                setInitialResults([]);
            }
        }
    }, [fetchRatingsAndReviews, jwtLoading]);


    useEffect(() => {
        // Fetch initial results with specificIds or default
        fetchSearchResults('', specificIds);
    }, [specificIds, fetchSearchResults]);


    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (!query) {
            setSearchResults(initialResults);
        } else {
            fetchSearchResults(query);
        }
    };

    const handleReadMoreClick = (link) => {
        handleCloseSearch(); // Close the modal
        router.push(link); // Navigate to the link

    };


    const renderSearchResults = () => {
        if (searchResults.length === 0) {
            return <div className="py-16 text-center text-light-color">No results found</div>;
        }
        const resultsToShow = searchResults.slice(0, 6);

        return (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {resultsToShow.map((result) => (
                    <div key={result.id} className="p-6 border border-gray-300 rounded-xl shadow-lg flex flex-col justify-between items-center bg-white">
                        <Image
                            src={result.image}
                            alt={result.title}
                            width={200}
                            height={45}
                            className="w-44 h-12 object-cover rounded-lg"
                            layout="intrinsic"
                        />
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex flex-col tablet:flex-row items-center gap-3 mt-4">
                                <StarRating  rating={parseFloat(result.averageRating)} size="text-lg" />
                                <div className="flex space-x-2">
                                    <span className="text-base text-gray-500">{result.averageRating}</span>
                                    <span className="text-base text-gray-500">({result.totalReviews} Reviews)</span>
                                </div>
                            </div>
                            <Link
                                href={result.link}
                                className='text-blue-600 hover:text-blue-800 mt-1 text-sm font-semibold'
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleReadMoreClick(result.link);
                                }}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <button onClick={handleSearchClick} className="flex items-center px-2 text-dark-color cursor-pointer">
                <FaSearch className='text-gray-700' />
            </button>

            {isSearchVisible && (
                <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-start py-0 lg:py-4">
                    <div className="relative w-full h-full lg:max-w-3xl p-4 bg-white lg:rounded-3xl rounded-none" ref={searchRef}>
                        <div className="flex relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search by post title"
                                className="border border-gray-300 rounded-3xl py-2 px-3 focus:outline-none focus:border-black w-full pr-10"
                            />
                            <button onClick={handleCloseSearch} className="absolute cursor-pointer inset-y-0 right-2 flex items-center px-2 text-dark-color">
                                <FaTimes />
                            </button>
                        </div>
                        {renderSearchResults()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;