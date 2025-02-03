// ReviewModal.js
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewModal = ({ onClose, onAddReview }) => {
    const [rating, setRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [userName, setUserName] = useState('');
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewText, setReviewText] = useState('');

    const handleStarClick = (starValue) => {
        setRating(starValue);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (rating === 0) {
            alert("Please select rating");
            return;
        }

        const newReview = {
            rating,
            userName,
            title: reviewTitle,
            text: reviewText
        };

        await onAddReview(newReview);
        onClose();
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Write a Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="text" id="userName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Name" value={userName} onChange={e => setUserName(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="reviewTitle" className="block text-gray-700 text-sm font-bold mb-2">Review Title</label>
                        <input type="text" id="reviewTitle" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter review title" value={reviewTitle} onChange={e => setReviewTitle(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="reviewText" className="block text-gray-700 text-sm font-bold mb-2">Your Review</label>
                        <textarea id="reviewText" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Write your review" value={reviewText} onChange={e => setReviewText(e.target.value)} rows="4" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={`cursor-pointer ${index < (hoveredStar || rating) ? 'text-yellow-500' : 'text-gray-300'
                                        }`}
                                    onMouseEnter={() => setHoveredStar(index + 1)}
                                    onMouseLeave={() => setHoveredStar(0)}
                                    onClick={() => handleStarClick(index + 1)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 px-4 mr-2 text-lg rounded-full cursor-pointer">
                            Cancel
                        </button>
                        <button type="submit" className="focus:outline-none custom-gradient text-white text-lg rounded-full text-center px-6 py-2 hover:bg-custom-dark transform cursor-pointer">
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;