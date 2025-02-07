// // ReviewModal.js
// import React, { useState } from 'react';
// import { FaStar } from 'react-icons/fa';

// const ReviewModal = ({ onClose, onAddReview }) => {
//     const [rating, setRating] = useState(0);
//     const [hoveredStar, setHoveredStar] = useState(0);
//     const [userName, setUserName] = useState('');
//     const [reviewTitle, setReviewTitle] = useState('');
//     const [reviewText, setReviewText] = useState('');

//     const handleStarClick = (starValue) => {
//         setRating(starValue);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (rating === 0) {
//             alert("Please select rating");
//             return;
//         }

//         // Escape double quotes in review text for JSON safety
//         const escapedReviewText = reviewText.replace(/"/g, '\\"');

//         const newReview = {
//             rating,
//             userName,
//             title: reviewTitle,
//             text: escapedReviewText  // Save the escaped version
//         };

//         await onAddReview(newReview);
//         onClose();
//     };
//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50">
//             <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6">Write a Review</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="userName" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//                         <input type="text" id="userName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Name" value={userName} onChange={e => setUserName(e.target.value)} required />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="reviewTitle" className="block text-gray-700 text-sm font-bold mb-2">Review Title</label>
//                         <input type="text" id="reviewTitle" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter review title" value={reviewTitle} onChange={e => setReviewTitle(e.target.value)} required />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="reviewText" className="block text-gray-700 text-sm font-bold mb-2">Your Review</label>
//                         <textarea id="reviewText" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Write your review" value={reviewText} onChange={e => setReviewText(e.target.value)} rows="4" required />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
//                         <div className="flex items-center">
//                             {[...Array(5)].map((_, index) => (
//                                 <FaStar
//                                     key={index}
//                                     className={`cursor-pointer ${index < (hoveredStar || rating) ? 'text-yellow-500' : 'text-gray-300'
//                                         }`}
//                                     onMouseEnter={() => setHoveredStar(index + 1)}
//                                     onMouseLeave={() => setHoveredStar(0)}
//                                     onClick={() => handleStarClick(index + 1)}
//                                 />
//                             ))}
//                         </div>
//                     </div>

//                     <div className="flex justify-end">
//                         <button type="button" onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 px-4 mr-2 text-lg rounded-full cursor-pointer">
//                             Cancel
//                         </button>
//                         <button type="submit" className="focus:outline-none custom-gradient text-white text-lg rounded-full text-center px-6 py-2 hover:bg-custom-dark transform cursor-pointer">
//                             Submit Review
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ReviewModal;



// // ReviewModal.js
// import React, { useState } from 'react';
// import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

// const ReviewModal = ({ onClose, onAddReview }) => {
//     const [rating, setRating] = useState(0);
//     const [hoveredStar, setHoveredStar] = useState(0);
//     const [userName, setUserName] = useState('');
//     const [reviewTitle, setReviewTitle] = useState('');
//     const [reviewText, setReviewText] = useState('');
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state


//     const handleStarClick = (starValue) => {
//         setRating(starValue);
//     };

//     const handleHalfStarClick = (starValue) => {
//         setRating(starValue - 0.5);
//     };

//     const validateForm = () => {
//         let isValid = true;
//         const newErrors = {};

//         if (!userName.trim()) {
//             newErrors.userName = "Please enter your name.";
//             isValid = false;
//         }
//         if (!reviewTitle.trim()) {
//             newErrors.reviewTitle = "Please enter a review title.";
//             isValid = false;
//         }
//         if (!reviewText.trim()) {
//             newErrors.reviewText = "Please enter your review text.";
//             isValid = false;
//         }
//          if (reviewText.includes('"')) {
//                 const quoteCount = (reviewText.match(/"/g) || []).length; // Count double quotes
//                 if (quoteCount > 2) {
//                     newErrors.reviewText = 'Review text can only contain one pair of double quotes.';
//                     isValid = false;
//                 }
//             }

//         if (rating === 0) {
//             newErrors.rating = "Please select a rating.";
//             isValid = false;
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!validateForm()) {
//             return;
//         }

//         setIsSubmitting(true); // Disable the submit button during submission

//         const newReview = {
//             rating,
//             userName,
//             title: reviewTitle,
//             text: reviewText
//         };

//         try {
//             await onAddReview(newReview);
//             onClose(); // Close the modal only on successful submission
//         } catch (err) {
//             setErrors({ general: `Failed to submit review: ${err.message || 'Unknown error'}` }); // Set a general error
//             console.error("Error submitting review:", err);
//         } finally {
//             setIsSubmitting(false); // Re-enable the submit button
//         }
//     };

//     const handleReviewTextChange = (e) => {
//         const text = e.target.value;
//         setReviewText(text);
//     }


//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50">
//             <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6">Write a Review</h2>
//                 {errors.general && <div className="text-red-500 mb-4">{errors.general}</div>} {/* Display general error */}
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="userName" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//                         <input
//                             type="text"
//                             id="userName"
//                             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.userName ? 'border-red-500' : ''}`}
//                             placeholder="Enter your Name"
//                             value={userName}
//                             onChange={e => setUserName(e.target.value)}
//                             onFocus={() => setErrors({...errors, userName:null})}

//                         />
//                         {errors.userName && <p className="text-red-500 text-xs italic">{errors.userName}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="reviewTitle" className="block text-gray-700 text-sm font-bold mb-2">Review Title</label>
//                         <input
//                             type="text"
//                             id="reviewTitle"
//                             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.reviewTitle ? 'border-red-500' : ''}`}
//                             placeholder="Enter review title"
//                             value={reviewTitle}
//                             onChange={e => setReviewTitle(e.target.value)}
//                             onFocus={() => setErrors({...errors, reviewTitle:null})}
//                         />
//                         {errors.reviewTitle && <p className="text-red-500 text-xs italic">{errors.reviewTitle}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="reviewText" className="block text-gray-700 text-sm font-bold mb-2">Your Review</label>
//                         <textarea
//                             id="reviewText"
//                             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.reviewText ? 'border-red-500' : ''}`}
//                             placeholder="Write your review"
//                             value={reviewText}
//                             onChange={handleReviewTextChange}
//                             rows="4"
//                             onFocus={() => setErrors({...errors, reviewText:null})}
//                         />
//                         {errors.reviewText && <p className="text-red-500 text-xs italic">{errors.reviewText}</p>}
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
//                         <div className="flex items-center">
//                             {[...Array(5)].map((_, index) => (
//                                 <React.Fragment key={index}>
//                                     <FaStar
//                                         className={`cursor-pointer ${index + 1 <= (hoveredStar || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
//                                         onMouseEnter={() => setHoveredStar(index + 1)}
//                                         onMouseLeave={() => setHoveredStar(0)}
//                                         onClick={() => handleStarClick(index + 1)}
//                                     />
//                                     {index + 1 > rating && ( // Show half star only if the full star isn't already filled
//                                         <FaStarHalfAlt
//                                             className={`cursor-pointer ${rating > index && rating < index + 1 ? 'text-yellow-500' : 'text-gray-300'}`}
//                                             onMouseEnter={() => setHoveredStar(index + 0.5)}
//                                             onMouseLeave={() => setHoveredStar(0)}
//                                             onClick={() => handleHalfStarClick(index + 1)}
//                                         />
//                                     )}
//                                 </React.Fragment>
//                             ))}
//                         </div>
//                         {errors.rating && <p className="text-red-500 text-xs italic">{errors.rating}</p>}
//                     </div>

//                     <div className="flex justify-end">
//                         <button type="button" onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 px-4 mr-2 text-lg rounded-full cursor-pointer">
//                             Cancel
//                         </button>
//                         <button
//                             type="submit"
//                             className={`focus:outline-none custom-gradient text-white text-lg rounded-full text-center px-6 py-2 hover:bg-custom-dark transform cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//                             disabled={isSubmitting} // Disable the button while submitting
//                         >
//                             {isSubmitting ? 'Submitting...' : 'Submit Review'}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ReviewModal;



import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ReviewModal = ({ onClose, onAddReview }) => {
    const [rating, setRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [userName, setUserName] = useState('');
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

    const handleStarClick = (starValue) => {
        setRating(starValue);
    };

    const handleHalfStarClick = (starValue) => {
        setRating(starValue - 0.5);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        const checkForCurlyQuotes = (text) => {
            return text.includes('“') || text.includes('”');
        };

        if (!userName.trim()) {
            newErrors.userName = "Please enter your name.";
            isValid = false;
        } else if (checkForCurlyQuotes(userName)) {
            newErrors.userName = 'Name cannot contain curly quotes (“ or ”). Please use regular double quotes (").';
            isValid = false;
        }

        if (!reviewTitle.trim()) {
            newErrors.reviewTitle = "Please enter a review title.";
            isValid = false;
        } else if (checkForCurlyQuotes(reviewTitle)) {
            newErrors.reviewTitle = 'Review title cannot contain curly quotes (“ or ”). Please use regular double quotes (").';
            isValid = false;
        }

        if (!reviewText.trim()) {
            newErrors.reviewText = "Please enter your review text.";
            isValid = false;
        } else if (checkForCurlyQuotes(reviewText)) {
            newErrors.reviewText = 'Review text cannot contain curly quotes (“ or ”). Please use regular double quotes (").';
            isValid = false;
        }

        if (rating === 0) {
            newErrors.rating = "Please select a rating.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true); // Disable the submit button during submission

        const newReview = {
            rating,
            userName,
            title: reviewTitle,
            text: reviewText
        };

        try {
            await onAddReview(newReview);
            onClose(); // Close the modal only on successful submission
        } catch (err) {
            setErrors({ general: `Failed to submit review: ${err.message || 'Unknown error'}` }); // Set a general error
            console.error("Error submitting review:", err);
        } finally {
            setIsSubmitting(false); // Re-enable the submit button
        }
    };

    const handleReviewTextChange = (e) => {
        const text = e.target.value;
        setReviewText(text);
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Write a Review</h2>
                {errors.general && <div className="text-red-500 mb-4">{errors.general}</div>} {/* Display general error */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="userName"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.userName ? 'border-red-500' : ''}`}
                            placeholder="Enter your Name"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            onFocus={() => setErrors({ ...errors, userName: null })}

                        />
                        {errors.userName && <p className="text-red-500 text-xs italic">{errors.userName}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="reviewTitle" className="block text-gray-700 text-sm font-bold mb-2">Review Title</label>
                        <input
                            type="text"
                            id="reviewTitle"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.reviewTitle ? 'border-red-500' : ''}`}
                            placeholder="Enter review title"
                            value={reviewTitle}
                            onChange={e => setReviewTitle(e.target.value)}
                            onFocus={() => setErrors({ ...errors, reviewTitle: null })}
                        />
                        {errors.reviewTitle && <p className="text-red-500 text-xs italic">{errors.reviewTitle}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="reviewText" className="block text-gray-700 text-sm font-bold mb-2">Your Review</label>
                        <textarea
                            id="reviewText"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.reviewText ? 'border-red-500' : ''}`}
                            placeholder="Write your review"
                            value={reviewText}
                            onChange={handleReviewTextChange}
                            rows="4"
                            onFocus={() => setErrors({ ...errors, reviewText: null })}
                        />
                        {errors.reviewText && <p className="text-red-500 text-xs italic">{errors.reviewText}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <React.Fragment key={index}>
                                    <FaStar
                                        className={`cursor-pointer ${index + 1 <= (hoveredStar || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                                        onMouseEnter={() => setHoveredStar(index + 1)}
                                        onMouseLeave={() => setHoveredStar(0)}
                                        onClick={() => handleStarClick(index + 1)}
                                    />
                                    {index + 1 > rating && (
                                        <FaStarHalfAlt
                                            className={`cursor-pointer ${rating > index && rating < index + 1 ? 'text-yellow-500' : 'text-gray-300'}`}
                                            onMouseEnter={() => setHoveredStar(index + 0.5)}
                                            onMouseLeave={() => setHoveredStar(0)}
                                            onClick={() => handleHalfStarClick(index + 1)}
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        {errors.rating && <p className="text-red-500 text-xs italic">{errors.rating}</p>}
                    </div>

                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 px-4 mr-2 text-lg rounded-full cursor-pointer">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`focus:outline-none custom-gradient text-white text-lg rounded-full text-center px-6 py-2 hover:bg-custom-dark transform cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isSubmitting} // Disable the button while submitting
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Review'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;