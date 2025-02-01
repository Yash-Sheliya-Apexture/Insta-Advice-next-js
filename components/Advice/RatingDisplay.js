import React from "react";
import StarRating from "../StarRating/StarRating";

const RatingDisplay = ({ ratingData, reviews }) => {

   const rating = parseFloat(ratingData.rating) || 0;
    return (
        <div
            className="relative w-full overflow-hidden cursor-pointer h-40"
        >
            <div
                className={`absolute w-full h-full transition-transform duration-300 flex items-center justify-center`}
           >
                <div className="w-full text-center">
                  <div>
                     <h2 className="text-lg font-semibold text-gray-800 mb-1">
                        Overall Score
                     </h2>
                      <div className="flex justify-center items-center font-medium mb-2">
                         <span className="text-lg">{rating}</span>
                         <span className="text-lg">/5</span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                      {rating > 0 ? <StarRating rating={rating} size={"text-base"} /> : null }
                        {reviews > 0 && (
                           <p className="text-gray-600 text-sm mt-2">
                                {reviews}+ User Reviews
                            </p>
                         )}
                  </div>
               </div>
          </div>
       </div>
    );
};
export default RatingDisplay;