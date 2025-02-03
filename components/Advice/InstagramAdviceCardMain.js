import React from "react";
import { FaCheck } from "react-icons/fa6";
import RatingDisplay from './RatingDisplay';
import StarRating from '../StarRating/StarRating';
import Link from 'next/link'; // Import the Link component
import Image from "next/image";

const InstagramAdviceCardMain = ({ data, id }) => {

    let imageUrl = null;
    if (data.acf?.company_logo && data?._embedded?.['wp:featuredmedia']) {
        const mediaItem = data._embedded['wp:featuredmedia'].find(media => media.id === data.acf.company_logo);
        if (mediaItem) {
            imageUrl = mediaItem.source_url;
        }
    }
    const features = data.acf?.features?.split('\n') || [];
    const reviews = parseFloat(data.acf?.user_reviews) || 0;


    const signalPageUrl = `/company/${data.slug}`;
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/4 p-4 text-black flex flex-col items-center justify-center bg-white">
                {imageUrl && (
                    <div className="relative w-full h-16">
                        <Image
                            src={imageUrl}
                            alt={`${data.title?.rendered} Logo`} // Added alt attribute
                            fill
                            className='object-contain'
                            sizes="(max-width: 768px) 100vw, 300px"
                        />
                    </div>
                )}
            </div>
            <div className="w-full lg:w-1/2 p-4 bg-white flex flex-col justify-center">
                <div className="flex justify-between items-center flex-col sm:flex-row">
                    <div className="w-full md:w-1/2 md:mb-0">
                        <ul>
                            {features.map((detail, index) => (
                                <li key={index} className="flex items-center mb-1 md:mb-2">
                                    <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 text-green-500 rounded-full mr-2 md:mr-3">
                                        <FaCheck />
                                    </span>
                                    <span   className='text-md text-gray-500'>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full h-full md:w-1/2 ">
                        <RatingDisplay ratingData={data.acf} reviews={reviews} StarRating={StarRating} />
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/4 border-t-0 lg:border-l-2  border-gray-300 p-4 flex flex-col justify-center items-center">
                <div className="text-gray-800 text-center">
                    <p className="text-xl md:text-2xl font-extrabold">
                        <span className="text-sm font-medium text-gray-800"><span className="text-2xl">${data.acf?.price}</span>/mo</span>
                    </p>
                    {data.acf?.discount && (
                        <span className="text-gray-500 text-sm line-through">${data.acf.discount}/mo</span>
                    )}
                </div>
                <div className="mt-4 flex flex-col w-full gap-2 text-center">
                    <a
                        href={data.acf.visit_site_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus:outline-none custom-gradient text-white text-base font-medium rounded-full px-4 py-3 hover:bg-custom-dark transform"
                    >
                        Visit Site
                    </a>
                    {/* Modified "Read more" Link */}
                    <Link
                        href={signalPageUrl}
                        className="focus:outline-none  bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-full px-4 py-3 transform"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default InstagramAdviceCardMain;