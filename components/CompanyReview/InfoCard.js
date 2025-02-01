import React from "react";
import StarRating from "../StarRating/StarRating";

const InfoCard = ({ data }) => {
    if (!data) return null;

    const { acf ,title} = data;

    const rating = parseFloat(acf?.rating) || 0;
    const reviews = parseFloat(acf?.user_reviews) || 0;
    const pricing = acf?.pricing_plans?.split("\n") || [];
    const splitPricingLine = (line) => {
        const match = line.match(/([\D\s]+?)(\$\s*[\d\.]+[\s-]*[\$\d\.]*)/);
        if (match) {
            return [match[1].trim(), match[2].trim()];
        }
        return [line.trim(), ""]; // Return as a single line if no price pattern is found
    };
    return (
        <div className="flex flex-col justify-between gap-4 md:flex-row bg-white md:p-10 p-5 border border-gray-300 shadow-md rounded-2xl -mt-28">
            <div className="flex flex-col items-center justify-center md:p-4 p-0 md:border border-0 order-1 border-gray-300 rounded-xl md:w-1/4 space-y-2">
                <span className="text-4xl font-bold text-gray-800">
                    {rating.toFixed(1)}{" "}
                </span>
                <StarRating rating={rating} size="text-base" />
                <p className="text-gray-600 text-center">
                    Based on expert ratings and {reviews} user reviews
                </p>
            </div>
            <div className="flex flex-col items-start justify-start flex-1 gap-6 md:p-4 p-0 md:border border-0 md:order-2 order-3 border-gray-300 rounded-xl md:flex-row">
                <div className="flex-1 w-full">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">
                        Pricing
                    </h3>
                    <ul className="text-gray-700 space-y-3">
                        {pricing?.map((item, index) => {
                            const [label, price] = splitPricingLine(item);
                            return (
                                <li key={index}>
                                    <span className="font-medium">{label}</span>
                                    <span className="float-right">{price}</span>
                                </li>
                            );
                        })}
                        <li className="mt-2 font-medium text-blue-500 text-right"><a href="#plans-pricing">Show all</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center md:p-4 p-0 md:border border-0 md:order-3 order-2 border-gray-300 rounded-xl md:w-1/4">
                <a
                    href={acf?.visit_site_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none custom-gradient text-white text-lg font-medium rounded-full text-center md:py-4 px-6 py-3 hover:bg-custom-dark transform w-full"
                >
                    Visit {title?.rendered} 
                </a>
            </div>
        </div>
    );
};

export default InfoCard;