// components/Home/ReviewCard.js
import StarRating from '../StarRating/StarRating';

const ReviewCard = ({ reviewerName, avatarUrl, location, rating, comment }) => {
  return (
    <div className="bg-white border rounded-3xl shadow-md p-6 flex flex-col items-start relative mt-8 text-dark-color">
      <div className="top-4 left-4 text-4xl">“</div>
      <div className="text-lg mb-4 leading-relaxed">{comment}</div>

      <div className="flex items-center w-full mt-4">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={`Avatar of ${reviewerName}`}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div className="flex-1">
          <div className="font-bold">{reviewerName}</div>
          {location && <div className="text-sm text-light-color">{location}</div>}
        </div>
        <div className="flex items-center">
          <StarRating rating={rating} />
          <span className="ml-2 font-medium">{rating}.0</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;