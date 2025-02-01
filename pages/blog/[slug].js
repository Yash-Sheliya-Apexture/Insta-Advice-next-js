// // pages/blog/[slug].js
// import { notFound } from 'next/navigation';
// import React, { useState, useEffect } from 'react';

// const fetchMediaUrl = async (mediaId) => {
//     try {
//         const mediaResponse = await fetch(
//             `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${mediaId}`
//         );
//         if (mediaResponse.ok) {
//             const mediaData = await mediaResponse.json();
//             return mediaData.source_url;
//         } else {
//            console.error("Failed to fetch media", mediaId, mediaResponse.status);
//             return null;
//         }
//     } catch (error) {
//         console.error("Error fetching media:", error);
//         return null;
//     }
// };

// const fetchCategoriesNames = async (categories) => {
//     try{
//       const categoriesNames = await Promise.all(categories?.map(async (categoryId) => {
//         const categoryResponse = await fetch(
//           `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/categories/${categoryId}`
//         );

//         if(!categoryResponse.ok){
//           console.error(`Failed to fetch category with id ${categoryId} : ${categoryResponse.status}`)
//           return null;
//         }

//         const category = await categoryResponse.json();
//         return category.name;
//       }));

//       return categoriesNames.filter(Boolean)
//     } catch (error){
//         console.error("Error fetching categories:", error);
//         return [];
//     }

// }

// export async function generateStaticParams() {
//     try {
//       const response = await fetch(
//           `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts`
//       );

//     if(!response.ok){
//         throw new Error(`Failed to fetch posts for static params ${response.status}`);
//     }

//     const posts = await response.json();

//       return posts.map((post) => ({
//           slug: post.slug,
//       }));
//     } catch (error) {
//       console.error('Error in generateStaticParams:', error);
//       return []; // return empty array to avoid error.
//     }
// }

// const BlogPost = ({ params }) => {
//      // Initial check if params is defined and has slug
//     if (!params || !params.slug) {
//         return (
//             <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
//                 Loading...
//             </div>
//         );
//     }
//     const { slug } = params;
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//          // Only proceed if slug is defined
//          if (!slug) {
//              return;
//          }
//         const fetchPost = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await fetch(
//                     `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`
//                 );
//                 if (!response.ok) {
//                      notFound()
//                 }
//                 const data = await response.json();

//                 if (!data || data.length === 0) {
//                     notFound();
//                 }
//                 const postData = data[0];
//                 const categoriesNames = await fetchCategoriesNames(postData.categories);
//                 const featuredMediaId = postData.featured_media;
//                 const featuredMediaUrl = featuredMediaId ? await fetchMediaUrl(featuredMediaId) : null;

//                  const formattedData = {
//                    ...postData,
//                     categories_names: categoriesNames,
//                     featured_media_url: featuredMediaUrl,
//                 };
//                  setPost(formattedData);

//             } catch (err) {
//                 setError(err.message);
//             } finally{
//                 setLoading(false);
//             }
//         };
//         fetchPost();
//     }, [slug]);


//     if (loading) {
//         return (
//             <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
//                 Loading...
//             </div>
//         );
//     }
//     if (error) return <p>Error: {error}</p>;
//     if (!post) return <p>Post not found</p>


//   return (
//     <div className="container mx-auto py-10">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="aspect-w-16 aspect-h-9">
//             {
//               post.featured_media_url && (
//                 <img
//                   src={post.featured_media_url}
//                   alt={post.title.rendered}
//                   className="object-cover w-full h-full"
//                   style={{ maxHeight: '400px', objectFit: 'cover' }}
//                 />
//               )
//             }
//           </div>
//           <div className="p-4">
//             <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
//             {post.date &&  (
//                     <p className="text-gray-500 text-sm mb-2">
//                         {new Date(post.date).toLocaleDateString('en-US', {
//                         year: 'numeric',
//                          month: 'long',
//                         day: 'numeric',
//                         })}
//                     </p>
//                   )}
//             {post.categories_names && post.categories_names[0] && (
//                 <div className="mb-4">
//                     <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded text-xs inline-block">
//                         {post.categories_names[0]}
//                    </span>
//                 </div>
//             )}
//             <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
//           </div>
//         </div>
//     </div>
//   );
// };

// export default BlogPost;


// // pages/blog/[slug].js
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import React from 'react';

// const SingleBlogPage = ({ post, error }) => {
//     const router = useRouter();

//     // While fallback is true, Next.js might still be generating the page
//     if (router.isFallback) {
//         return (
//             <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
//                 Loading...
//             </div>
//         );
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     if (!post) {
//         return <p>Post not found</p>;
//     }

//     return (
//         <div className="container mx-auto py-10">
//             <Link href="/blog">&larr; Back to Blog
//             </Link>
//             <article className="mt-6">
//                 <h1 className="text-3xl font-bold mb-2">{post.title.rendered}</h1>
//                 {post.date && (
//                     <p className="text-gray-500 mb-4">
//                         {new Date(post.date).toLocaleDateString('en-US', {
//                             year: 'numeric',
//                             month: 'long',
//                             day: 'numeric',
//                         })}
//                     </p>
//                 )}
//                 {post.featured_media_url && (
//                     <img
//                         src={post.featured_media_url}
//                         alt={post.title.rendered}
//                         className="w-full h-auto my-4"
//                     />
//                 )}
//                 <div
//                     className="prose"
//                     dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//                 />
//             </article>
//         </div>
//     );
// };

// export async function getStaticPaths() {
//     try {
//         // Fetch all posts to generate the paths for static generation.
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts`
//         );
//         const posts = await res.json();

//         // Create a path for each post using its slug.
//         const paths = posts.map((post) => ({
//             params: { slug: post.slug },
//         }));

//         return { paths, fallback: true };
//     } catch (error) {
//         console.error('Error fetching posts for paths:', error);
//         return { paths: [], fallback: true };
//     }
// }

// export async function getStaticProps({ params }) {
//     try {
//         // Fetch the post using its slug.
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${params.slug}`
//         );
//         const posts = await res.json();

//         // If no post is found, return notFound to show the 404 page.
//         if (!posts.length) {
//             return {
//                 notFound: true,
//             };
//         }

//         const post = posts[0];

//         // If the post has a featured image, fetch its URL.
//         let featured_media_url = null;
//         if (post.featured_media) {
//             const mediaRes = await fetch(
//                 `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${post.featured_media}`
//             );
//             if (mediaRes.ok) {
//                 const mediaData = await mediaRes.json();
//                 featured_media_url = mediaData.source_url;
//             }
//         }

//         // Attach the featured media URL to the post.
//         post.featured_media_url = featured_media_url;

//         return {
//             props: {
//                 post,
//             },
//             // Optionally, revalidate the page every 10 seconds (Incremental Static Regeneration)
//             revalidate: 10,
//         };
//     } catch (error) {
//         console.error('Error fetching post:', error);
//         return {
//             props: {
//                 error: error.message,
//             },
//         };
//     }
// }

// export default SingleBlogPage;



// // pages/blog/[slug].js
// import { useRouter } from 'next/router';
// import React from 'react';

// const SingleBlogPage = ({ post, error }) => {
//   const router = useRouter();

//   // When using fallback: "blocking", this is rarely hit
//   if (router.isFallback) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
//         <div className="flex space-x-2">
//           <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
//           <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
//           <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!post) {
//     return <p>Post not found</p>;
//   }

//   return (
//     <div className="container mx-auto py-10">
//       <article className="mt-6">
//         <h1 className="text-3xl font-bold mb-2">{post.title.rendered}</h1>
//         {post.date && (
//           <p className="text-gray-500 mb-2">
//             {new Date(post.date).toLocaleDateString('en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric',
//             })}
//           </p>
//         )}
//         {/* Display Categories if available */}
//         {post.categories_names && post.categories_names.length > 0 && (
//           <div className="mb-4">
//             <span className="font-semibold">Categories: </span>
//             {post.categories_names.map((cat, index) => (
//               <span key={cat}>
//                 {cat}
//                 {index < post.categories_names.length - 1 ? ', ' : ''}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* Display Featured Image if exists */}
//         {post.featured_media_url && (
//           <img
//             src={post.featured_media_url}
//             alt={post.title.rendered}
//             className="w-full h-auto my-4"
//           />
//         )}

//         {/* Render the post content */}
//         <div
//           className="prose"
//           dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//         />
//       </article>
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   try {
//     // Fetch all posts to generate the paths for static generation.
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts`
//     );
//     const posts = await res.json();

//     // Create a path for each post using its slug.
//     const paths = posts.map((post) => ({
//       params: { slug: post.slug },
//     }));

//     // Use "blocking" to ensure full data is loaded before the page renders
//     return { paths, fallback: 'blocking' };
//   } catch (error) {
//     console.error('Error fetching posts for paths:', error);
//     return { paths: [], fallback: 'blocking' };
//   }
// }

// export async function getStaticProps({ params }) {
//   try {
//     // Fetch the post using its slug.
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${params.slug}`
//     );
//     const posts = await res.json();

//     // If no post is found, return notFound to show the 404 page.
//     if (!posts.length) {
//       return {
//         notFound: true,
//       };
//     }

//     const post = posts[0];

//     // If the post has a featured image, fetch its URL.
//     let featured_media_url = null;
//     if (post.featured_media) {
//       const mediaRes = await fetch(
//         `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${post.featured_media}`
//       );
//       if (mediaRes.ok) {
//         const mediaData = await mediaRes.json();
//         featured_media_url = mediaData.source_url;
//       }
//     }
//     post.featured_media_url = featured_media_url;

//     // Fetch category names if categories exist.
//     if (post.categories && post.categories.length > 0) {
//       const categoriesNames = await Promise.all(
//         post.categories.map(async (categoryId) => {
//           const catRes = await fetch(
//             `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/categories/${categoryId}`
//           );
//           if (catRes.ok) {
//             const catData = await catRes.json();
//             return catData.name;
//           }
//           return null;
//         })
//       );
//       // Filter out any null values.
//       post.categories_names = categoriesNames.filter(Boolean);
//     }

//     return {
//       props: {
//         post,
//       },
//       // Optionally, revalidate the page every 10 seconds (Incremental Static Regeneration)
//       revalidate: 10,
//     };
//   } catch (error) {
//     console.error('Error fetching post:', error);
//     return {
//       props: {
//         error: error.message,
//       },
//     };
//   }
// }

// export default SingleBlogPage;



// pages/blog/[slug].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SingleBlogPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    // State for the post data
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch blog post data based on the slug,
    // then fetch the featured media URL and categories
    useEffect(() => {
        const fetchPostData = async () => {
            if (!slug) return;
            setLoading(true);
            setError(null);
            try {
                // Fetch post data by slug
                const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}`;
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                if (data.length === 0) {
                    throw new Error("Post not found");
                }

                // Use the first (and should be the only) post in the result array
                const fetchedPost = data[0];

                // Fetch featured media if available
                if (fetchedPost.featured_media) {
                    try {
                        const mediaRes = await fetch(
                            `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${fetchedPost.featured_media}`
                        );
                        if (mediaRes.ok) {
                            const mediaData = await mediaRes.json();
                            fetchedPost.featured_media_url = mediaData.source_url;
                        }
                    } catch (mediaErr) {
                        console.error("Error fetching featured media:", mediaErr);
                    }
                }

                // Fetch category names if categories exist
                if (fetchedPost.categories && fetchedPost.categories.length > 0) {
                    try {
                        const categoriesNames = await Promise.all(
                            fetchedPost.categories.map(async (catId) => {
                                const catRes = await fetch(
                                    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/categories/${catId}`
                                );
                                if (catRes.ok) {
                                    const catData = await catRes.json();
                                    return catData.name;
                                }
                                return null;
                            })
                        );
                        fetchedPost.categories_names = categoriesNames.filter(Boolean);
                    } catch (catErr) {
                        console.error("Error fetching categories:", catErr);
                    }
                }

                setPost(fetchedPost);
            } catch (err) {
                console.error("Error fetching post data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPostData();
    }, [slug]);

    if (loading) {
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

    if (error) {
        return <div className="mt-10 text-center">Error: {error}</div>;
    }

    if (!post) {
        return <div className="mt-10 text-center">No post found.</div>;
    }

    return (
        <div className="single-blog-page">
            <div className="max-w-5xl mx-auto py-10">
                <div class="single-blog-hero text-center">
                    <h1 class="text-3xl text-gray-900 md:text-5xl font-gt font-bold mt-6">
                        {post.title.rendered}
                    </h1>
                    <div class="flex justify-center items-center gap-4 mt-4">
                        <span class="text-gray-500 text-base">{post.date && (
                            <p className="text-gray-500">
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        )}</span>
                        <span class="bg-violet-500 text-white text-xs font-medium px-2.5 py-1 rounded-xl">
                            {post.categories_names.map((cat, index) => (
                                <span key={cat}>
                                    {cat}
                                    {index < post.categories_names.length - 1 ? ", " : ""}
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
                <article className="mt-6">
                    {/* Optionally display featured image if available */}
                    {post.featured_media_url && (
                        <div className="w-full relative">
                            <img
                                src={post.featured_media_url}
                                alt={post.title.rendered}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    )}
                    {/* Render post content */}
                    <div
                        className="prose"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                </article>
            </div>
        </div>
    );
};

export default SingleBlogPage;
