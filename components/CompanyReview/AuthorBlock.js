// components/AuthorBlock.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AuthorBlock = ({ acf, modifiedDate, jwt }) => {
  const [authorImageUrl, setAuthorImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthorImage = async () => {
      if (!acf?.author_image) {
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${acf.author_image}`,
            {
              headers: {
                Authorization: `Bearer ${jwt}`,
              },
            }
          );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const image = await response.json();
        setAuthorImageUrl(image.source_url);
      } catch (error) {
        console.error('Error fetching author image:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthorImage();
  }, [acf?.author_image, jwt]); // Add jwt as a dependency here

  if (loading) {
    return (
      <div className="flex items-start mb-8">
        <div className="mr-4">
          <div className="bg-gray-200 rounded-full w-14 h-14 animate-pulse"></div>
        </div>
        <div>
          <h3 className="font-medium">{acf?.author_name}</h3>
          <p className="text-sm text-gray-500">{acf?.author_title}</p>
          <p className="text-xs text-gray-500">Updated at {new Date(modifiedDate).toLocaleDateString()}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center mb-4 justify-between flex-wrap">
      <div className="flex items-cente">
        {authorImageUrl && (
          <div className="mr-4">
            <Image
              src={authorImageUrl}
              alt={acf?.author_name}
              width={56}
              height={56}
              className="rounded-full border-2 border-gray-300"
            />
          </div>
        )}
        <div>
          <h3 className="font-semibold text-xl">{acf?.author_name}</h3>
          <p className="text-gray-500">{acf?.author_title}</p>
        </div>
      </div>
      <div className='updated-data'>
        <p className="text-lg text-gray-500">Updated at {new Date(modifiedDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default AuthorBlock;