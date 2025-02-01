// pages/advice-list.js
import React, { useState, useEffect } from 'react';
import AdviceCard from '../components/AdviceCard';

const AdviceList = () => {
  const [advicePosts, setAdvicePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvicePosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
        );
         if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
         }
        const data = await response.json();
        setAdvicePosts(data);
      } catch (err) {
          setError(err.message);
      } finally {
          setLoading(false);
      }
    };
      fetchAdvicePosts();
  }, []);

  if (loading) {
     return <div className="text-center mt-10">Loading...</div>;
  }
  if (error) {
    return <div className="text-center mt-10">Error: {error}</div>;
  }
  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">All Instagram Advice Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advicePosts.map((post) => (
                 <AdviceCard key={post.id} advice={post} />
             ))}
        </div>
     </div>
  );
};

export default AdviceList;