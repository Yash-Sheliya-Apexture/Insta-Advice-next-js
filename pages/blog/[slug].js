// // pages/blog/[slug].js
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// const SingleBlogPage = () => {
//     const router = useRouter();
//     const { slug } = router.query;

//     // State for the post data
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Fetch blog post data based on the slug,
//     // then fetch the featured media URL and categories
//     useEffect(() => {
//         const fetchPostData = async () => {
//             if (!slug) return;
//             setLoading(true);
//             setError(null);
//             try {
//                 // Fetch post data by slug
//                 const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}`;
//                 const response = await fetch(apiUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 if (data.length === 0) {
//                     throw new Error("Post not found");
//                 }

//                 // Use the first (and should be the only) post in the result array
//                 const fetchedPost = data[0];

//                 // Fetch featured media if available
//                 if (fetchedPost.featured_media) {
//                     try {
//                         const mediaRes = await fetch(
//                             `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${fetchedPost.featured_media}`
//                         );
//                         if (mediaRes.ok) {
//                             const mediaData = await mediaRes.json();
//                             fetchedPost.featured_media_url = mediaData.source_url;
//                         }
//                     } catch (mediaErr) {
//                         console.error("Error fetching featured media:", mediaErr);
//                     }
//                 }

//                 // Fetch category names if categories exist
//                 if (fetchedPost.categories && fetchedPost.categories.length > 0) {
//                     try {
//                         const categoriesNames = await Promise.all(
//                             fetchedPost.categories.map(async (catId) => {
//                                 const catRes = await fetch(
//                                     `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/categories/${catId}`
//                                 );
//                                 if (catRes.ok) {
//                                     const catData = await catRes.json();
//                                     return catData.name;
//                                 }
//                                 return null;
//                             })
//                         );
//                         fetchedPost.categories_names = categoriesNames.filter(Boolean);
//                     } catch (catErr) {
//                         console.error("Error fetching categories:", catErr);
//                     }
//                 }

//                 setPost(fetchedPost);
//             } catch (err) {
//                 console.error("Error fetching post data:", err);
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPostData();
//     }, [slug]);

//     if (loading) {
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

//     if (error) {
//         return <div className="mt-10 text-center">Error: {error}</div>;
//     }

//     if (!post) {
//         return <div className="mt-10 text-center">No post found.</div>;
//     }

//     return (
//         <div className="single-blog-page">
//             <div className="max-w-5xl mx-auto py-10">
//                 <div class="single-blog-hero text-center">
//                     <h1 class="text-3xl text-gray-900 md:text-5xl font-gt font-bold mt-6">
//                         {post.title.rendered}
//                     </h1>
//                     <div class="flex justify-center items-center gap-4 mt-4">
//                         <span class="text-gray-500 text-base">{post.date && (
//                             <p className="text-gray-500">
//                                 {new Date(post.date).toLocaleDateString("en-US", {
//                                     year: "numeric",
//                                     month: "long",
//                                     day: "numeric",
//                                 })}
//                             </p>
//                         )}</span>
//                         <span class="bg-violet-500 text-white text-xs font-medium px-2.5 py-1 rounded-xl">
//                             {post.categories_names.map((cat, index) => (
//                                 <span key={cat}>
//                                     {cat}
//                                     {index < post.categories_names.length - 1 ? ", " : ""}
//                                 </span>
//                             ))}
//                         </span>
//                     </div>
//                 </div>
//                 <article className="mt-6">
//                     {/* Optionally display featured image if available */}
//                     {post.featured_media_url && (
//                         <div className="w-full relative">
//                             <img
//                                 src={post.featured_media_url}
//                                 alt={post.title.rendered}
//                                 className="w-full h-auto rounded-xl"
//                             />
//                         </div>
//                     )}
//                     {/* Render post content */}
//                     <div
//                         className="prose"
//                         dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//                     />
//                 </article>
//             </div>
//         </div>
//     );
// };

// export default SingleBlogPage;




import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Seo from "@/components/Seo"; // Import the Seo component

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
                const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`;
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

                // Use _embed media if available
                if (fetchedPost._embedded && fetchedPost._embedded["wp:featuredmedia"] && fetchedPost._embedded["wp:featuredmedia"][0]?.source_url) {
                    fetchedPost.featured_media_url = fetchedPost._embedded["wp:featuredmedia"][0]?.source_url;
                }


                //fetch rank math seo data from post api
                 const seoRes = await fetch(
                     `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/rankmath/v1/getHead?url=${encodeURIComponent(
                        `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`
                      )}`
                  );

                if(seoRes.ok){
                    const seoData = await seoRes.json();
                    fetchedPost.seoData = seoData;

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
      <>
         <Seo
            title={post.seoData?.title || post.title.rendered}
            description={post.seoData?.description ||  post.excerpt.rendered.replace(/<[^>]*>/g, '')}
            image={post.seoData?.og_image || post.featured_media_url}
           path={`/blog/${post.slug}`}
            ogType="article"
         />
        <div className="single-blog-page">
            <div className="max-w-5xl mx-auto py-10">
                <div className="single-blog-hero text-center">
                    <h1 className="text-3xl text-gray-900 md:text-5xl font-gt font-bold mt-6">
                        {post.title.rendered}
                    </h1>
                    <div className="flex justify-center items-center gap-4 mt-4">
                        <span className="text-gray-500 text-base">{post.date && (
                            <p className="text-gray-500">
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        )}</span>
                        <span className="bg-violet-500 text-white text-xs font-medium px-2.5 py-1 rounded-xl">
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
        </>
    );
};

export default SingleBlogPage;