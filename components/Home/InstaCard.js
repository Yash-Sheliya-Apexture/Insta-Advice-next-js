






// import React from "react";
// import Image from "next/image";
// import StarRating from "../StarRating/StarRating";
// import { FaCheck } from "react-icons/fa6";
// import Link from "next/link";

// const HostCard = React.memo(({ logo, rating, features, reviews, visitSiteUrl, signalPageUrl, isMiddleCard, ranking }) => {
//   return (
//     <div className={`bg-white relative p-5 rounded-xl shadow-main-shadow transition-shadow duration-300 overflow-hidden flex flex-col justify-between min-h-[300px] ${isMiddleCard ? 'lg:-mt-6 mt-0 lg:mb-3 mb-0 border-2 border-light-royal-blue' : ''}`}>
//       {/* Logo */}
//       <div className="flex justify-center my-2">
//         <div className="relative w-62 h-14">
//           <Image
//             src={logo}
//             alt="Logo"
//             fill
//             className="h-12 object-contain"
//              sizes="(max-width: 768px) 100vw, 200px"
//           />
//         </div>
//       </div>
//       {/* Ranking */}
//       {ranking && (
//         <div className="absolute right-0 top-0 bg-amaranth px-4 py-1 rounded-bl-lg">
//           <span className="text-sm text-white">{ranking}</span>
//         </div>
//       )}
//       {/* Star Rating */}
//       <div className="mt-3 text-center">
//         <StarRating rating={rating} position="start" />
//       </div>


//       {/* Reviews & Rating */}
//       <div className="flex justify-between text-center mt-2">
//         <div className="inline-flex gap-1">
//           <span className="text-sm text-gray-500">Rating:</span>
//           <span className="text-sm font-semibold text-gray-900">{rating}/5</span>
//         </div>
//         <div className="inline-flex gap-1">
//           <span className="text-sm text-gray-500">User Reviews:</span>
//           <span className="text-sm font-semibold text-gray-900">{reviews}+</span>
//         </div>
//       </div>

//       {/* Features */}
//       <div className="mt-3">
//         {features.length > 0 ? (
//           features.map((feature, index) => (
//             <p key={index} className="text-gray-500 text-sm flex items-center mb-2">
//               <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 text-green-500 rounded-full mr-2 md:mr-3">
//                 <FaCheck />
//               </span>
//               {feature}
//             </p>
//           ))
//         ) : (
//           <p className="text-gray-500 text-sm">No features listed</p>
//         )}
//       </div>

//       {/* Buttons */}
//       <div className="mt-4 flex gap-2">
//         {/* Visit Site Button */}
//         <a
//           href={visitSiteUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="focus:outline-none w-1/2 custom-gradient text-white text-base font-medium rounded-full px-4 py-3 hover:bg-blue-600 transform text-center"
//         >
//           Visit Site
//         </a>
//         {/* Read More Button */}
//         <Link
//           href={signalPageUrl}
//           className="focus:outline-none w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-full px-4 py-3 transform text-center"
//         >
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// });


// export default HostCard;




// import React from "react";
// import Image from "next/image";
// import StarRating from "../StarRating/StarRating";
// import { FaCheck } from "react-icons/fa6";
// import Link from "next/link";

// const InstaCard = React.memo(({ logo, averageRating, totalReviews, features, visitSiteUrl, signalPageUrl, isMiddleCard, ranking }) => {
//   const rating = parseFloat(averageRating) || 0;
//   return (

//     <div
//       className={`bg-white relative p-5 rounded-xl shadow-main-shadow transition-shadow duration-300 overflow-hidden flex flex-col justify-between min-h-[300px] ${isMiddleCard ? 'lg:-mt-6 mt-0 lg:mb-3 mb-0 bg-custum-gradient-background rounded-2xl border-4 border-transparent animate-border' : ''}`}
//     >
//       {/* Logo */}
//       <div className="flex justify-center my-2">
//         <div className="relative w-62 h-14">
//           <Image
//             src={logo}
//             alt="Logo"
//             fill
//             className="h-12 object-contain"
//             sizes="(max-width: 768px) 100vw, 200px"
//           />
//         </div>
//       </div>
//       {/* Ranking */}
//       {ranking && (
//         <div className="absolute right-0 top-0 bg-amaranth px-4 py-1 rounded-bl-lg">
//           <span className="text-sm text-white">{ranking}</span>
//         </div>
//       )}
//       {/* Star Rating */}
//       <div className="mt-3 text-center">
//         <StarRating rating={rating} size="text-sm" />  {/* CHECK: Correct Prop and Placement*/}
//       </div>

//       {/* Reviews & Rating */}
//       <div className="flex justify-between text-center mt-2">
//         <div className="inline-flex gap-1">
//           <span className="text-sm text-gray-500">Rating:</span>
//           <span className="text-sm font-semibold text-gray-900">{averageRating}/5</span>
//         </div>
//         <div className="inline-flex gap-1">
//           <span className="text-sm text-gray-500">User Reviews:</span>
//           <span className="text-sm font-semibold text-gray-900">{totalReviews}+</span>
//         </div>
//       </div>

//       {/* Features */}
//       <div className="mt-3">
//         {features.length > 0 ? (
//           features.map((feature, index) => (
//             <p key={index} className="text-gray-500 text-sm flex items-center mb-2">
//               <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 text-green-500 rounded-full mr-2 md:mr-3">
//                 <FaCheck />
//               </span>
//               {feature}
//             </p>
//           ))
//         ) : (
//           <p className="text-gray-500 text-sm">No features listed</p>
//         )}
//       </div>

//       {/* Buttons */}
//       <div className="mt-4 flex gap-2">
//         {/* Visit Site Button */}
//         <a
//           href={visitSiteUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="focus:outline-none w-1/2 custom-gradient text-white text-base font-medium rounded-full px-4 py-3 hover:bg-blue-600 transform text-center"
//         >
//           Visit Site
//         </a>
//         {/* Read More Button */}
//         <Link
//           href={signalPageUrl}
//           className="focus:outline-none w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-full px-4 py-3 transform text-center"
//         >
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// });

// export default InstaCard;








import React from "react";
import Image from "next/image";
import StarRating from "../StarRating/StarRating";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const InstaCard = React.memo(({ logo, averageRating, totalReviews, features, visitSiteUrl, signalPageUrl, isMiddleCard, ranking }) => {
  const rating = parseFloat(averageRating) || 0;
  const cardClasses = `bg-white relative p-5 rounded-xl shadow-main-shadow transition-shadow duration-300 overflow-hidden flex flex-col justify-between min-h-[300px] ${isMiddleCard ? 'lg:-mt-6 mt-0 lg:mb-3 mb-0 bg-custum-gradient-background rounded-2xl border-4 border-transparent animate-border' : ''}`;

  return (
    <div className={cardClasses}>
      {/* Logo */}
      <div className="flex justify-center my-2">
        <div className="relative w-32 h-14">  {/* Adjusted width */}
          <Image
            src={logo}
            alt="Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 128px" // Adjusted sizes
          />
        </div>
      </div>
      {/* Ranking */}
      {ranking && (
        <div className="absolute right-0 top-0 bg-amaranth px-4 py-1 rounded-bl-lg">
          <span className="text-sm text-white">{ranking}</span>
        </div>
      )}
      {/* Star Rating */}
      <div className="mt-3 text-center">
        <StarRating rating={rating} size="text-sm" />
      </div>

      {/* Reviews & Rating */}
      <div className="flex justify-between text-center mt-2">
        <div className="inline-flex gap-1">
          <span className="text-sm text-gray-500">Rating:</span>
          <span className="text-sm font-semibold text-gray-900">{averageRating}/5</span>
        </div>
        <div className="inline-flex gap-1">
          <span className="text-sm text-gray-500">User Reviews:</span>
          <span className="text-sm font-semibold text-gray-900">{totalReviews}+</span>
        </div>
      </div>

      {/* Features */}
      <div className="mt-3">
        {features.length > 0 ? (
          features.map((feature, index) => (
            <p key={index} className="text-gray-500 text-sm flex items-center mb-2">
              <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 text-green-500 rounded-full mr-2 md:mr-3">
                <FaCheck />
              </span>
              {feature}
            </p>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No features listed</p>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        {/* Visit Site Button */}
        <a
          href={visitSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus:outline-none w-1/2 custom-gradient text-white text-base font-medium rounded-full px-4 py-3 hover:bg-blue-600 transform text-center"
        >
          Visit Site
        </a>
        {/* Read More Button */}
        <Link
          href={signalPageUrl}
          className="focus:outline-none w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-full px-4 py-3 transform text-center"
        >
          Read More
        </Link>
      </div>
    </div>
  );
});

export default InstaCard;