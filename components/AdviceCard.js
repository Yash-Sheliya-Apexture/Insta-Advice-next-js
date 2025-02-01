import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AdviceCard = ({ advice }) => {
  let imageUrl = null;
  if (advice.acf?.company_logo && Array.isArray(advice.acf.company_logo) && advice.acf.company_logo.length > 0) {
    imageUrl = advice.acf.company_logo[0]?.url;
  } else if (advice.acf?.company_logo && advice?._embedded?.['wp:featuredmedia']) {
    const mediaItem = advice._embedded['wp:featuredmedia'].find(media => media.id === advice.acf.company_logo);
    if (mediaItem) {
      imageUrl = mediaItem.source_url;
    }
  }
  const cardPlanTable = advice.acf?.plan_table_data
    ? advice.acf.plan_table_data.split('\n').map(row => row.split(','))
    : [];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-4">
      {imageUrl && (
        <div className="relative">
          <div className='w-full relative'>
            <Image
              src={imageUrl}
              alt="Company Logo"
              width={500}
              height={500}
              style={{ objectFit: 'cover' }}
              priority={true}
            />
          </div>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{advice?.title?.rendered}</h2>
        {advice.acf?.ranking && <p className="text-gray-700 mb-2">Ranking: {advice.acf.ranking}</p>}
        {advice.acf?.features && <p className="text-gray-700 mb-2">{advice.acf.features}</p>}
        {advice.acf?.rating && <p className="text-gray-600 mb-2">Rating: {advice.acf.rating}</p>}
        {advice.acf?.review_text && <p className="text-gray-600 mb-2">{advice.acf.review_text}</p>}
        {advice.acf?.price && <p className="text-green-600 font-bold mb-2">Price: {advice.acf.price}</p>}
        {advice.acf?.discount && <p className="text-gray-600 mb-2">Discount: {advice.acf.discount}</p>}
        {advice.acf?.coupons && <p className="text-gray-600 mb-2">Coupons: {advice.acf.coupons}</p>}
        {cardPlanTable && cardPlanTable.length > 0 && (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-400">
              <thead>
                <tr>
                  {cardPlanTable[0].map((header, index) => (
                    <th key={index} className="border border-gray-400 p-2 bg-gray-100 font-semibold text-center capitalize">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cardPlanTable.slice(1).map((row, index) => (
                  <tr key={index}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-gray-400 p-2 text-center">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {advice.acf?.visit_site_url && (
          <a href={advice.acf.visit_site_url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Visit Site
          </a>
        )}
        <Link href={`/advice/${advice.id}`} className="inline-block mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default AdviceCard;