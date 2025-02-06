// // components/UserReviewList.js
// import React from 'react';
// import UserReview from './UserReview'; // Make sure the path to the component is correct

// const UserReviewList = ({ reviews }) => {
//     return (
//         <div>
//             <h3 className="mb-4 text-lg font-semibold">User Reviews</h3>
//             {reviews && reviews.length > 0 ? (
//             reviews.map(review => (
//                  <UserReview key={review.id} review={review} />
//             ))
//              ) : (
//                <p>No reviews available</p>
//               )}
//         </div>
//     )
// }
// export default UserReviewList;





// // UserReviewList.js
// import React from 'react';
// import UserReview from './UserReview';

// const UserReviewList = ({ reviews }) => {
//     return (
//         <>
//             <h3 className="mt-8 mb-4 text-2xl font-semibold">User Reviews</h3>
//             {reviews && reviews.length > 0 ? (
//                 reviews.map(review => (
//                     review ? <UserReview key={review.id} review={review} /> : null
//                 ))
//             ) : (
//                 <p>No reviews available</p>
//             )}
//         </>
//     )
// }
// export default UserReviewList;






// import React, { useState } from 'react';
// import UserReview from './UserReview';

// const UserReviewList = ({ reviews }) => {
//     const [visibleReviews, setVisibleReviews] = useState(5); // Initial number of reviews to show

//     const loadMoreReviews = () => {
//         setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 5); // Increase the number of visible reviews
//     };

//     const averageRating = reviews.slice(0, visibleReviews).reduce((acc, review) => acc + review.rating, 0) / visibleReviews;

//     return (
//         <>
//             <h3 className="mt-8 mb-4 text-2xl font-semibold" id="user-reviews">User Reviews</h3>
//             <div className="mb-4">
//                 <span className="text-lg font-bold">Average Rating: </span>
//                 <span className="text-lg">{averageRating.toFixed(1)}</span>
//             </div>
//             {reviews && reviews.length > 0 ? (
//                 <>
//                     {reviews.slice(0, visibleReviews).map(review => (
//                         review ? <UserReview key={review.id} review={review} /> : null
//                     ))}
//                     {reviews.length > visibleReviews && (
//                         <button
//                             onClick={loadMoreReviews}
//                             className="mt-4 focus:outline-none custom-gradient cursor-pointer text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center"
//                         >
//                             Read More Reviews
//                         </button>
//                     )}
//                 </>
//             ) : (
//                 <p>No reviews available</p>
//             )}
//         </>
//     );
// };

// export default UserReviewList;



// // components/CompanyReview/UserReviewList.js
// import React, { useState, useEffect } from 'react';
// import UserReview from './UserReview';

// const UserReviewList = ({ reviews, setAverageRatingForInfoCard, setTotalReviewsForInfoCard }) => {  // Added props to send the average to the InfoCard
//     const [visibleReviews, setVisibleReviews] = useState(5); // Initial number of reviews to show
//     const [averageRating, setAverageRating] = useState(0);


//     useEffect(() => {
//         const calculateAverage = () => {
//             if (reviews && reviews.length > 0) {
//                 const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
//                 const avg = totalRating / reviews.length;
//                 setAverageRating(avg);
//                 setAverageRatingForInfoCard(avg)
//                 setTotalReviewsForInfoCard(reviews.length)
//             } else {
//                 setAverageRating(0);
//                 setAverageRatingForInfoCard(0)
//                 setTotalReviewsForInfoCard(0)
//             }
//         }

//         calculateAverage();
//     }, [reviews, setAverageRatingForInfoCard, setTotalReviewsForInfoCard]);


//     const loadMoreReviews = () => {
//         setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 5); // Increase the number of visible reviews
//     };


//     return (
//         <>
//             <h3 className="mt-8 mb-4 text-2xl font-semibold" id="user-reviews">User Reviews</h3>
//             <div className="mb-4">
//                 <span className="text-lg font-bold">Average Rating: </span>
//                 <span className="text-lg">{averageRating.toFixed(1)}</span>
//             </div>
//             {reviews && reviews.length > 0 ? (
//                 <>
//                     {reviews.slice(0, visibleReviews).map(review => (
//                         review ? <UserReview key={review.id} review={review} /> : null
//                     ))}
//                     {reviews.length > visibleReviews && (
//                         <button
//                             onClick={loadMoreReviews}
//                             className="mt-4 focus:outline-none custom-gradient cursor-pointer text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center"
//                         >
//                             Read More Reviews
//                         </button>
//                     )}
//                 </>
//             ) : (
//                 <p>No reviews available</p>
//             )}
//         </>
//     );
// };

// export default UserReviewList;


import React, { useState, useEffect } from 'react';
import UserReview from './UserReview';

const UserReviewList = ({ reviews, setAverageRatingForInfoCard, setTotalReviewsForInfoCard }) => {  // Added props to send the average to the InfoCard
    const [visibleReviews, setVisibleReviews] = useState(5); // Initial number of reviews to show
    const [averageRating, setAverageRating] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);


    useEffect(() => {
        const calculateAverage = () => {
            if (reviews && reviews.length > 0) {
                const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
                const avg = totalRating / reviews.length;
                setAverageRating(avg);
                setAverageRatingForInfoCard(avg)
            } else {
                setAverageRating(0);
                setAverageRatingForInfoCard(0)
            }
        }

        calculateAverage();

        // Update total reviews count
        setReviewCount(reviews.length);
        setTotalReviewsForInfoCard(reviews.length);
    }, [reviews, setAverageRatingForInfoCard, setTotalReviewsForInfoCard]);


    const loadMoreReviews = () => {
        setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 5); // Increase the number of visible reviews
    };


    return (
        <>
            <h3 className="mt-8 mb-4 text-2xl font-semibold" id="user-reviews">User Reviews</h3>
            <div className="mb-4">
                <span className="text-lg font-bold">Average Rating: </span>
                <span className="text-lg">{averageRating.toFixed(1)}</span>
            </div>
            {reviews && reviews.length > 0 ? (
                <>
                    {reviews.slice(0, visibleReviews).map(review => (
                        review ? <UserReview key={review.id} review={review} /> : null
                    ))}
                    {reviews.length > visibleReviews && (
                        <button
                            onClick={loadMoreReviews}
                            className="mt-4 focus:outline-none custom-gradient cursor-pointer text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center"
                        >
                            Read More Reviews
                        </button>
                    )}
                </>
            ) : (
                <p>No reviews available</p>
            )}
             <div className="mb-4">
                <span className="text-lg font-bold">Total Reviews: </span>
                <span className="text-lg">{reviewCount}</span>
            </div>
        </>
    );
};

export default UserReviewList;