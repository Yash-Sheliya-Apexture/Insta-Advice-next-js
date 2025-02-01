// import React from 'react';
// import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

// const StarRating = ({ rating, size = "text-sm" }) => {
//   const validRating = typeof rating === 'number' && !isNaN(rating) ? rating : 0;
//     const fullStars = Math.floor(validRating);
//     const hasHalfStar = validRating % 1 >= 0.5;
//     const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

//     return (
//        <div className="flex items-center justify-center gap-1">
//             {[...Array(fullStars)].map((_, i) => (
//                 <FaStar key={`full-${i}`} className={`text-yellow-400 ${size}`} />
//            ))}
//           {hasHalfStar && <FaStarHalfAlt  className={`text-yellow-400 ${size}`} />}
//            {[...Array(emptyStars)].map((_, i) => (
//                  <FaStar key={`empty-${i}`} className={`text-gray-300 ${size}`} />
//            ))}
//        </div>
//    );
// };
// export default StarRating;


import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating, size = "text-sm" }) => {
  const validRating = typeof rating === 'number' && !isNaN(rating) ? rating : 0;
    const fullStars = Math.floor(validRating);
    const hasHalfStar = validRating % 1 >= 0.5;
    const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

    return (
       <div className="flex items-center gap-1">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} className={`text-yellow-400 ${size}`} />
           ))}
          {hasHalfStar && <FaStarHalfAlt  className={`text-yellow-400 ${size}`} />}
           {[...Array(emptyStars)].map((_, i) => (
                 <FaStar key={`empty-${i}`} className={`text-gray-300 ${size}`} />
           ))}
       </div>
   );
};
export default StarRating;