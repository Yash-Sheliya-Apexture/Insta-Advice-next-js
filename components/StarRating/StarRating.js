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


// import React from 'react';
// import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

// const StarRating = ({ rating, size = "text-sm" }) => {
//   const validRating = typeof rating === 'number' && !isNaN(rating) ? rating : 0;
//     const fullStars = Math.floor(validRating);
//     const hasHalfStar = validRating % 1 >= 0.5;
//     const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

//     return (
//        <div className="flex items-center gap-1">
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





// import React from 'react';
// import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

// const StarRating = ({ rating, size = "text-sm" }) => {
//     // **1. Input Validation and Sanitization:**
//     const validRating = (typeof rating === 'number' && !isNaN(rating)) ? rating : 0; // Ensure rating is a number and not NaN
//     const maxRating = 5; // Define maximum rating
//     const safeRating = Math.min(maxRating, Math.max(0, validRating)); // Clamp rating between 0 and maxRating

//     // **2. Calculate Star Counts:**
//     const fullStars = Math.floor(safeRating);         // Integer number of full stars
//     const hasHalfStar = (safeRating - fullStars) >= 0.5;  // Does the rating have a half star?
//     const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

//     // **3. Render the Star Rating:**
//     return (
//         <div className="flex items-center gap-1">
//             {/* Full Stars */}
//             {[...Array(fullStars)].map((_, i) => (
//                 <FaStar key={`full-${i}`} className={`text-yellow-400 ${size}`} />
//             ))}

//             {/* Half Star */}
//             {hasHalfStar && <FaStarHalfAlt key="half" className={`text-yellow-400 ${size}`} />}

//             {/* Empty Stars */}
//             {[...Array(emptyStars)].map((_, i) => (
//                 <FaStar key={`empty-${i}`} className={`text-gray-300 ${size}`} />
//             ))}
//         </div>
//     );
// };

// export default StarRating;


import React from 'react';
import { Rating } from '@mui/material';
import { styled } from '@mui/system';  // Import styled for custom styling

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#faaf00', // Example: Custom star color
    },
    '& .MuiRating-iconHover': {
        color: '#faaf00',  // Example: Custom hover color
    },
});

const StarRating = ({ rating}) => {
    const validRating = (typeof rating === 'number' && !isNaN(rating)) ? rating : 0;
    const safeRating = Math.min(5, Math.max(0, validRating));

    return (
        <div className="flex items-center">
            <StyledRating
                name="read-only-rating"
                value={safeRating}
                precision={0.1} // Allow fractional stars if needed
                readOnly  // Make it read-only to just display the rating
            />
        </div>
    );
};

export default StarRating;