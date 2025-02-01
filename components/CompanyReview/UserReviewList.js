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


import React, { useState } from 'react';
import UserReview from './UserReview';

const UserReviewList = ({ reviews }) => {
    const [visibleReviews, setVisibleReviews] = useState(5); // Initial number of reviews to show

    const loadMoreReviews = () => {
        setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 5); // Increase the number of visible reviews
    };

    const averageRating = reviews.slice(0, visibleReviews).reduce((acc, review) => acc + review.rating, 0) / visibleReviews;

    return (
        <>
            <h3 className="mt-8 mb-4 text-2xl font-semibold">User Reviews</h3>
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
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Read More Reviews
                        </button>
                    )}
                </>
            ) : (
                <p>No reviews available</p>
            )}
        </>
    );
};

export default UserReviewList;