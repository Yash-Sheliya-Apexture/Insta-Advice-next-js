import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


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
  const categoriesNames = await Promise.all(categories?.map(async (categoryId) => {
    const categoryResponse = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/categories/${categoryId}`
    );

    if (!categoryResponse.ok) {
      console.error(`Failed to fetch category with id ${categoryId} : ${categoryResponse.status}`)
      return null;
    }

    const category = await categoryResponse.json();
    return category.name;
  }));

  return categoriesNames.filter(Boolean)
}
const BlogList = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


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
            const featuredMediaUrl = featuredMediaId ? await fetchMediaUrl(featuredMediaId) : null;

            return {
              ...post,
              categories_names: categoriesNames,
              featured_media_url: featuredMediaUrl,
            };
          })
        );
        setPosts(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);


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
    )
  }

  return (
    <>
      <div className='Blog-list-wrap py-12'>
        <div className="Blog-list-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center ">
              <div className="flex justify-center items-center">
                <h1 className="text-3xl text-dark-color lg:text-5xl font-gt font-bold"><span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">Our Blog</span></h1>
              </div>
              <div>
                <p className="text-lg md:text-xl text-gray-500 lg:mt-6 mt-2">Welcome to our blog! Explore our latest articles, insights, and industry updates.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Comparison-list mt-10">
          <div className="container mx-auto py-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden"
                >
                  <div className="w-full aspect-h-9">
                    {
                      post.featured_media_url && (
                        <div className='relative w-full xl:h-72 lg:h-56 h-52'>
                          <Link href={`/blog/${post.slug}`}>
                            <Image
                              src={post.featured_media_url}
                              alt={post.title.rendered}
                              className="object-center w-full h-auto"
                              fill
                            />
                          </Link>
                        </div>
                      )
                    }
                  </div>


                  <div className="p-4">
                    <div className="flex items-center gap-4">
                      {post.date && (
                        <span className="text-gray-500 text-base">{new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}</span>
                      )}
                      {post.categories_names && post.categories_names[0] && (
                        <span className="bg-violet-500 text-white text-xs font-medium px-2.5 py-1 rounded-xl">
                          {post.categories_names[0]}
                        </span>
                      )}
                    </div>
                    <div className='mt-2'>
                      <Link
                        href={`/blog/${post.slug}`}
                      >
                        <h2 className="text-xl font-semibold mb-2">{post.title.rendered}</h2>
                      </Link>
                      <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                      <Link
                        href={`/blog/${post.slug}`}
                        className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center mt-1"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;