// // components/UserReview.js
// import React from 'react';
// import Image from 'next/image';

// const UserReview = ({ review }) => {
//   return (
//     <div className="p-4 mb-4 border rounded user-review">
//         <div className="flex items-center mb-2">
//             <div className="mr-2">
//                 {review.author_avatar && (
//                     <Image
//                         src={review.author_avatar}
//                         alt={review.author_name}
//                         width={32}
//                         height={32}
//                         className="rounded-full"
//                     />
//                 )}
//             </div>
//           <span className="font-medium">{review.author_name}</span>
//           <span className="ml-auto text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
//         </div>
//         <div className="text-sm">{review.content}</div>
//     </div>
//   );
// };

// export default UserReview;


// // UserReview.js
// import React from 'react';
// import Image from 'next/image';
// import { FaStar } from 'react-icons/fa';

// const UserReview = ({ review }) => {
//     return (
//         <div className='border border-gray-300 rounded-xl shadow-md p-4 mb-4'>
//             <div className="flex items-start gap-3">
//                 <div className="relative w-12 h-12 border-2 border-gray-300 rounded-full ">
//                     <Image src="/images/happy.png"
//                         alt="User Avatar"
//                         fill
//                         className="object-contain rounded-full "
//                         sizes="100px" />
//                 </div>
//                 <div>
//                     <div className="flex items-center mb-2 gap-2">
//                         <div className="text-[#0b0c0f] font-bold text-xl">{review.rating}.0</div>
//                         <div className="flex space-x-0.5">
//                             {Array.from({ length: review.rating }, (_, i) => (
//                                 <FaStar key={i} className='text-yellow-500' />
//                             ))}
//                         </div>
//                     </div>
//                     <p className="text-gray-900 text-lg font-bold mb-2">{review.title}</p>
//                     <p className="text-gray-500">{review.text}</p>
//                     <div className='pt-2 flex items-center gap-2'>
//                         <div className="text-[#16181DB3] font-medium text-sm">{review.userName}</div>
//                         <div className="text-[#16181DB3] text-sm">
//                             <span>{new Date().toLocaleDateString()} | {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserReview;



// components/UserReview.js
import React from 'react';
import Image from 'next/image';
import StarRating from '../StarRating/StarRating'; // Import the StarRating component

const UserReview = ({ review }) => {
    return (
        <div className='border border-gray-300 rounded-xl shadow-md p-4 mb-4'>
            <div className='flex gap-2'>
                <div className="relative w-14 h-14 border-2 border-gray-300 rounded-full ">
                    <Image
                        src="/images/happy.png"
                        alt="User Avatar"
                        fill
                        className="object-contain rounded-full"
                        sizes="100px"
                    />
                </div>
                <div className='flex gap-1 flex-col justify-between'>
                    <div className="text-gray-900 font-medium text-lg">{review.userName}</div>
                    <div className="text-gray-500 text-sm mt-1">
                        <span>
                            {new Date().toLocaleDateString()} | {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-300 mt-4 pt-2'>
                <div className='flex gap-1'>
                    <div className="text-[#0b0c0f] font-bold text-xl">{review.rating}.0</div>
                    {/* Replace the existing star rendering logic with the StarRating component */}
                    <StarRating rating={review.rating} size="text-sm" />
                </div>
                <p className="text-gray-900 text-lg font-bold mb-2">{review.title}</p>
                <p className="text-gray-500">{review.text}</p>
            </div>
        </div>
    );
};

export default UserReview;