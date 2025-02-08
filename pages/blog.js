// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// const fetchMediaUrl = async (mediaId) => {
//   try {
//     const mediaResponse = await fetch(
//       `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${mediaId}`
//     );
//     if (mediaResponse.ok) {
//       const mediaData = await mediaResponse.json();
//       return mediaData.source_url;
//     } else {
//       console.error("Failed to fetch media", mediaId);
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching media:", error);
//     return null;
//   }
// };

// const fetchCategoriesNames = async (categories) => {
//   const categoriesNames = await Promise.all(categories?.map(async (categoryId) => {
//     const categoryResponse = await fetch(
//       `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/categories/${categoryId}`
//     );

//     if (!categoryResponse.ok) {
//       console.error(`Failed to fetch category with id ${categoryId} : ${categoryResponse.status}`)
//       return null;
//     }

//     const category = await categoryResponse.json();
//     return category.name;
//   }));

//   return categoriesNames.filter(Boolean)
// }
// const BlogList = () => {

//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?_embed`
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch blog posts: ${response.status}`);
//         }
//         const data = await response.json();

//         const formattedData = await Promise.all(
//           data.map(async (post) => {
//             const categoriesNames = await fetchCategoriesNames(post.categories);
//             const featuredMediaId = post.featured_media;
//             const featuredMediaUrl = featuredMediaId ? await fetchMediaUrl(featuredMediaId) : null;

//             return {
//               ...post,
//               categories_names: categoriesNames,
//               featured_media_url: featuredMediaUrl,
//             };
//           })
//         );
//         setPosts(formattedData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading)
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
//         <div className="flex space-x-2">
//           <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
//           <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
//           <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
//         </div>
//       </div>
//     );
//   if (error) return <p>Error: {error}</p>;
//   if (!posts || posts.length === 0) {
//     return (
//       <div className="container mx-auto py-10 text-center">
//         <p className="text-gray-500">No blog posts found.</p>
//       </div>
//     )
//   }

//   return (
//     <>
//       <div className='Blog-list-wrap py-12'>
//         <div className="Blog-list-hero">
//           <div className="container mx-auto px-4">
//             <div className="max-w-6xl mx-auto text-center ">
//               <div className="flex justify-center items-center">
//                 <h1 className="text-3xl text-dark-color lg:text-5xl font-gt font-bold"><span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">Our Blog</span></h1>
//               </div>
//               <div>
//                 <p className="text-lg md:text-xl text-gray-500 lg:mt-6 mt-2">Welcome to our blog! Explore our latest articles, insights, and industry updates.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="Comparison-list mt-10">
//           <div className="container mx-auto py-10 px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {posts.map((post) => (
//                 <div
//                   key={post.id}
//                   className="bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden"
//                 >
//                   <div className="w-full aspect-h-9">
//                     {
//                       post.featured_media_url && (
//                         <div className='relative w-full xl:h-72 lg:h-56 h-52'>
//                           <Link href={`/blog/${post.slug}`}>
//                             <Image
//                               src={post.featured_media_url}
//                               alt={post.title.rendered}
//                               className="object-center w-full h-auto"
//                               fill
//                             />
//                           </Link>
//                         </div>
//                       )
//                     }
//                   </div>

//                   <div className="p-4">
//                     <div className="flex items-center gap-4">
//                       {post.date && (
//                         <span className="text-gray-500 text-base">{new Date(post.date).toLocaleDateString('en-US', {
//                           year: 'numeric',
//                           month: 'long',
//                           day: 'numeric',
//                         })}</span>
//                       )}
//                       {post.categories_names && post.categories_names[0] && (
//                         <span className="bg-violet-500 text-white text-xs font-medium px-2.5 py-1 rounded-xl">
//                           {post.categories_names[0]}
//                         </span>
//                       )}
//                     </div>
//                     <div className='mt-2'>
//                       <Link
//                         href={`/blog/${post.slug}`}
//                       >
//                         <h2 className="text-xl font-semibold mb-2">{post.title.rendered}</h2>
//                       </Link>
//                       <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
//                       <Link
//                         href={`/blog/${post.slug}`}
//                         className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center mt-1"
//                       >
//                         Read More
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogList;

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion'; // Import motion from framer-motion

// const fetchMediaUrl = async (mediaId) => {
//   try {
//     const mediaResponse = await fetch(
//       `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${mediaId}`
//     );
//     if (mediaResponse.ok) {
//       const mediaData = await mediaResponse.json();
//       return mediaData.source_url;
//     } else {
//       console.error("Failed to fetch media", mediaId);
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching media:", error);
//     return null;
//   }
// };

// const fetchCategoriesNames = async (categories) => {
//   const categoriesNames = await Promise.all(categories?.map(async (categoryId) => {
//     const categoryResponse = await fetch(
//       `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/categories/${categoryId}`
//     );

//     if (!categoryResponse.ok) {
//       console.error(`Failed to fetch category with id ${categoryId} : ${categoryResponse.status}`)
//       return null;
//     }

//     const category = await categoryResponse.json();
//     return category.name;
//   }));

//   return categoriesNames.filter(Boolean)
// }
// const BlogList = () => {

//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [visiblePosts, setVisiblePosts] = useState(3); // Initial number of posts to display
//   const [allPostsLoaded, setAllPostsLoaded] = useState(false); // Flag to check if all posts are loaded

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.1,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//   };

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?_embed`
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch blog posts: ${response.status}`);
//         }
//         const data = await response.json();

//         const formattedData = await Promise.all(
//           data.map(async (post) => {
//             const categoriesNames = await fetchCategoriesNames(post.categories);
//             const featuredMediaId = post.featured_media;
//             const featuredMediaUrl = featuredMediaId ? await fetchMediaUrl(featuredMediaId) : null;

//             return {
//               ...post,
//               categories_names: categoriesNames,
//               featured_media_url: featuredMediaUrl,
//             };
//           })
//         );
//         setPosts(formattedData);
//         if (formattedData.length <= 3) {
//           setAllPostsLoaded(true);
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   const loadMore = () => {
//     const newVisiblePosts = visiblePosts + 3;
//     setVisiblePosts(newVisiblePosts);

//     if (newVisiblePosts >= posts.length) {
//       setAllPostsLoaded(true); // Set flag when all posts are loaded
//     }
//   };

//   if (loading)
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
//         <div className="flex space-x-2">
//           <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
//           <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
//           <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
//         </div>
//       </div>
//     );
//   if (error) return <p>Error: {error}</p>;
//   if (!posts || posts.length === 0) {
//     return (
//       <div className="container mx-auto py-10 text-center">
//         <p className="text-gray-500">No blog posts found.</p>
//       </div>
//     )
//   }

//   return (
//     <>
//       <div className='Blog-list-wrap py-12'>
//         <div className="Blog-list-hero">
//           <div className="container mx-auto px-4">
//             <div className="max-w-6xl mx-auto text-center ">
//               <div className="flex justify-center items-center">
//                 <h1 className="text-3xl text-dark-color lg:text-5xl font-gt font-bold"><span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">Our Blog</span></h1>
//               </div>
//               <div>
//                 <p className="text-lg md:text-xl text-gray-500 lg:mt-6 mt-2">Welcome to our blog! Explore our latest articles, insights, and industry updates.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="Comparison-list mt-10">
//           <div className="container mx-auto py-10 px-4">
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {posts.slice(0, visiblePosts).map((post) => (
//                 <motion.div
//                   key={post.id}
//                   className="bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden"
//                   variants={cardVariants}
//                 >
//                   <div className="w-full aspect-h-9">
//                     {
//                       post.featured_media_url && (
//                         <div className='relative w-full 2xl:h-72 xl:h-56  h-52'>
//                           <Link href={`/blog/${post.slug}`}>
//                             <Image
//                               src={post.featured_media_url}
//                               alt={post.title.rendered}
//                               className="object-center w-full h-auto"
//                               fill
//                             />
//                           </Link>
//                         </div>
//                       )
//                     }
//                   </div>

//                   <div className="p-4">
//                     <div className="flex items-center gap-4">
//                       {post.date && (
//                         <span className="text-gray-500 text-base">{new Date(post.date).toLocaleDateString('en-US', {
//                           year: 'numeric',
//                           month: 'long',
//                           day: 'numeric',
//                         })}</span>
//                       )}
//                       {post.categories_names && post.categories_names[0] && (
//                         <span className="bg-violet-500 text-white text-xs font-medium px-2.5 py-1 rounded-xl">
//                           {post.categories_names[0]}
//                         </span>
//                       )}
//                     </div>
//                     <div className='mt-2'>
//                       <Link
//                         href={`/blog/${post.slug}`}
//                       >
//                         <h2 className="text-xl font-semibold mb-2">{post.title.rendered}</h2>
//                       </Link>
//                       <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
//                       <Link
//                         href={`/blog/${post.slug}`}
//                         className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center mt-1"
//                       >
//                         Read More
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//             {!allPostsLoaded && (
//               <div className="text-center mt-6">
//                 <button
//                   onClick={loadMore}
//                   className="focus:outline-none inline-block cursor-pointer custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center mt-1"
//                 >
//                   See More
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogList;

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react"; //Import useRef
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

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

const fetchCategoriesNames = async (categories) => {
  const categoriesNames = await Promise.all(
    categories?.map(async (categoryId) => {
      const categoryResponse = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/categories/${categoryId}`
      );

      if (!categoryResponse.ok) {
        console.error(
          `Failed to fetch category with id ${categoryId} : ${categoryResponse.status}`
        );
        return null;
      }

      const category = await categoryResponse.json();
      return category.name;
    })
  );

  return categoriesNames.filter(Boolean);
};

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(6); // Initial visible posts set to 6
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);
  const [categories, setCategories] = useState([]); // State for categories
  const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category

  const [showScrollButtons, setShowScrollButtons] = useState(false); // new state
  const categoryBarRef = useRef(null); // Reference to the category bar container

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?_embed`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch blog posts: ${response.status}`);
        }
        const data = await response.json();

        const formattedData = await Promise.all(
          data.map(async (post) => {
            const categoriesNames = await fetchCategoriesNames(post.categories);
            const featuredMediaId = post.featured_media;
            const featuredMediaUrl = featuredMediaId
              ? await fetchMediaUrl(featuredMediaId)
              : null;

            return {
              ...post,
              categories_names: categoriesNames,
              featured_media_url: featuredMediaUrl,
            };
          })
        );
        setPosts(formattedData);
        if (formattedData.length <= visiblePosts) {
          //Check against visiblePosts
          setAllPostsLoaded(true);
        }

        // ****************************************
        // FETCH CATEGORIES HERE, AFTER POSTS ARE LOADED
        // ****************************************
        const fetchAllCategories = async () => {
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/categories`
            );
            if (!response.ok) {
              throw new Error(`Failed to fetch categories: ${response.status}`);
            }
            const data = await response.json();

            // Filter out categories that don't have associated posts
            const categoriesWithPosts = data.filter((category) =>
              formattedData.some((post) =>
                post.categories.includes(category.id)
              )
            );

            setCategories(categoriesWithPosts);
          } catch (error) {
            console.error("Error fetching categories:", error);
            setError(error.message); // Or handle error appropriately
          } finally {
            setLoading(false);
          }
        };

        await fetchAllCategories(); // Call it here!
      } catch (err) {
        setError(err.message);
      } finally {
        if (!categories) setLoading(false);
      }
    };

    fetchPosts();
    // REMOVE this line:  fetchAllCategories(); // Fetch categories on component mount.  Now called inside fetchPosts.
  }, [visiblePosts]); //Re-run when visiblePosts update, but NOT posts!

  // useEffect to check for horizontal overflow and update showScrollButtons state
  useEffect(() => {
    const checkOverflow = () => {
      if (categoryBarRef.current) {
        setShowScrollButtons(
          categoryBarRef.current.scrollWidth >
            categoryBarRef.current.clientWidth
        );
      }
    };

    // Initial check
    checkOverflow();

    // Listen for window resize events
    window.addEventListener("resize", checkOverflow);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [categories]);

  const loadMore = () => {
    const newVisiblePosts = visiblePosts + 3;
    setVisiblePosts(newVisiblePosts);

    if (newVisiblePosts >= filteredPosts.length) {
      setAllPostsLoaded(true);
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setVisiblePosts(6); // Reset visible posts when category changes - back to 6
    setAllPostsLoaded(false); // Reset all posts loaded flag
  };

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

  const shouldShowLoadMore =
    filteredPosts.length > visiblePosts && !allPostsLoaded; //Check against visiblePosts

  const blogPostVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const scrollCategoryBar = (scrollAmount) => {
    if (categoryBarRef.current) {
      categoryBarRef.current.scrollLeft += scrollAmount;
    }
  };

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
        <div className="flex space-x-2">
          <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
          <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
          <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
        </div>
      </div>
    );
  if (error) return <p>Error: {error}</p>;
  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto py-10 text-center">
        <p className="text-gray-500">No blog posts found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="Blog-list-wrap py-12">
        <div className="Blog-list-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center ">
              <div className="flex justify-center items-center">
                <h1 className="text-3xl text-dark-color lg:text-5xl font-gt font-bold">
                  <span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">
                    Our Blog
                  </span>
                </h1>
              </div>
              <div>
                <p className="text-lg md:text-xl text-gray-500 lg:mt-6 mt-2">
                  Welcome to our blog! Explore our latest articles, insights,
                  and industry updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Bar */}
        <div className="Category Bar py-10 relative">
          <div className="container mx-auto px-4">
            <div className="sm:mx-0 mx-12">
              <div
                className="flex items-center gap-4 overflow-x-auto scroll-smooth text-nowrap "
                ref={categoryBarRef}
              >
                <button
                  className={`px-4 py-2 rounded-full border text-gray-900 font-medium cursor-pointer focus:outline-none ${
                    selectedCategory === null
                      ? "custom-gradient text-white"
                      : ""
                  }`}
                  onClick={() => handleCategorySelect(null)}
                >
                  All Posts
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full border text-gray-900 font-medium cursor-pointer focus:outline-none ${
                      selectedCategory === category.id
                        ? "custom-gradient text-white"
                        : ""
                    }`}
                    onClick={() => handleCategorySelect(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              {/* Scroll Buttons (Conditionally Rendered) */}
              {showScrollButtons && (
                <>
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 h-12 bg-white bg-opacity-75 hover:bg-opacity-90 text-gray-600 p-3"
                    onClick={() => scrollCategoryBar(-100)} // adjust scroll amount as needed
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 h-12 bg-white bg-opacity-75 hover:bg-opacity-90 text-gray-600 p-3"
                    onClick={() => scrollCategoryBar(100)} // adjust scroll amount as needed
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="Comparison-list">
          <div className="container mx-auto py-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.slice(0, visiblePosts).map((post) => (
                <motion.div
                  key={post.id}
                  className="bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden"
                  variants={blogPostVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="w-full aspect-h-9">
                    {post.featured_media_url && (
                      <div className="relative">
                        <Link href={`/blog/${post.slug}`}>
                          <Image
                            src={post.featured_media_url}
                            alt={post.title.rendered}
                            className="object-center w-full h-auto"
                            width={1000}
                            height={1000}
                            priority={posts.indexOf(post) < visiblePosts} //Prioritize the first 6
                          />
                        </Link>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-4">
                      {post.date && (
                        <span className="text-gray-500 text-base">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      )}
                      {post.categories_names && post.categories_names[0] && (
                        <span className="bg-violet-500 text-white text-xs font-medium px-2.5 py-1 rounded-xl">
                          {post.categories_names[0]}
                        </span>
                      )}
                    </div>
                    <div className="mt-2">
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-semibold mb-2">
                          {post.title.rendered}
                        </h2>
                      </Link>
                      <p
                        className="text-gray-600 mb-2"
                        dangerouslySetInnerHTML={{
                          __html:
                            post.excerpt.rendered
                              .split(" ")
                              .slice(0, 32)
                              .join(" ") + "[...]",
                        }}
                      />
                      <Link
                        href={`/blog/${post.slug}`}
                        className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-6 py-1.5 transform text-center mt-1"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {shouldShowLoadMore && (
              <div className="text-center mt-6">
                <button
                  onClick={loadMore}
                  className="focus:outline-none inline-block cursor-pointer custom-gradient text-white text-base font-medium rounded-full px-12 py-3 transform text-center mt-1"
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
