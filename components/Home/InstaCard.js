import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const InstaCard = ({ logo, averageRating, totalReviews, features, visitSiteUrl, signalPageUrl, ranking, isMiddleCard = false }) => {

    const cardClasses = `relative p-6 rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 ${isMiddleCard ? 'bg-amaranth text-white' : 'bg-white'}`;
    const buttonClasses = `mt-4 py-2 px-4 rounded-full font-medium transition-colors duration-200 ease-in-out ${isMiddleCard ? 'bg-white text-amaranth hover:bg-gray-100 hover:text-amaranth' : 'bg-amaranth text-white hover:bg-purple-700'}`;

    return (
        <div className={cardClasses}>
            {ranking && (
                <div className="absolute top-3 left-3 bg-yellow-500 text-white text-sm font-bold px-2 py-1 rounded">
                    #{ranking}
                </div>
            )}

            <div className="flex items-center justify-between mb-4">
                <div className="w-20 h-20 relative">
                    <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
                </div>
                <div className="text-sm font-medium flex items-center">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                    {averageRating} ({totalReviews} reviews)
                </div>
            </div>

            <ul className="list-disc pl-5 mb-4">
                {features && features.map((feature, index) => (
                    <li key={index} className="text-sm">{feature}</li>
                ))}
            </ul>

            <div className="flex justify-between items-center">
                <a href={visitSiteUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
                    Visit Site
                </a>
                <Link href={signalPageUrl} className="text-amaranth hover:text-purple-700 font-medium">
                    More Details
                </Link>
            </div>
        </div>
    );
};

export default InstaCard;