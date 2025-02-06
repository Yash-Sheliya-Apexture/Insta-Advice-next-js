// // components/CompanyReview/Sidebar.js
// import React from 'react'
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import { HiOutlinePencilAlt } from "react-icons/hi";


// const Sidebar = ({ data }) => {
//     if (!data) return null;

//     const { title, acf, _embedded } = data;

//     const imageUrl = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

//     return (
//         <>
//             <div className="sidebar-wrap space-y-6">
//                 <div className='flex items-center flex-col border border-gray-300 rounded-xl shadow-md pt-6'>
//                     <div className='space-y-5 text-center w-full px-6 pb-4'>
//                         {imageUrl && (
//                             <div className="relative w-full h-16">
//                                 <Image
//                                     src={imageUrl}
//                                     alt={title?.rendered}
//                                     fill
//                                     className='object-contain'
//                                     sizes="(max-width: 768px) 100vw, 300px"
//                                 />
//                             </div>
//                         )}
//                         <a
//                             href={acf?.visit_site_url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="focus:outline-none block custom-gradient text-white text-lg font-medium rounded-full text-center md:py-4 px-6 py-3 hover:bg-custom-dark transform w-full"
//                         >
//                             Visit {title?.rendered}
//                         </a>
//                     </div>
//                     <div className="overflow-y-auto max-h-42 w-full custom-scroll border-t border-b border-gray-300 ps-6 custom-scrollbar">
//                         <nav>
//                             <ul className='my-1'>
//                                 <li>
//                                     <a href="#rating-breakdown" className="block rounded-tl-md rounded-bl-md px-2 py-2 text-gray-900 font-medium hover:bg-gray-100">Rating Breakdown</a>
//                                 </li>
//                                 <li>
//                                     <a href="#user-reviews"
//                                         className="block rounded-tl-md rounded-bl-md px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">User
//                                         Reviews</a>
//                                 </li>
//                                 <li>
//                                     <a href="#plans-pricing"
//                                         className="block rounded-tl-md rounded-bl-md px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">Plans & Pricing</a>
//                                 </li>
//                                 <li>
//                                     <a href="#company-faq"
//                                         className="block rounded-tl-md rounded-bl-md px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">FAQ</a>
//                                 </li>
//                                 <li>
//                                     <a href="#"
//                                         className="block rounded-tl-md rounded-bl-md px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">Similar
//                                         Companies</a>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>

//                     {/* review */}
//                     <button className='w-full px-6 py-4 duration-300 ease-in-out hover:bg-gray-200/50'>
//                         <div className='flex items-center justify-center gap-2 cursor-pointer'>
//                             <HiOutlinePencilAlt className='text-[#0d80f2] size-6' />
//                             <a className='text-[#0d80f2] hover:text-blue-500 font-medium text-medium'>Write a review</a>
//                         </div>
//                     </button>
//                 </div>

//                 <div className='flex items-center flex-col border border-gray-300 rounded-xl shadow-md pt-6'>
//                     <div className="flex items-center gap-3 w-full px-6 pb-4">
//                         <div className="relative w-16 h-16 border-2 border-gray-300 rounded-full ">
//                             <Image src="/images/happy.png"
//                                 alt="User Avatar"
//                                 fill
//                                 className="object-contain rounded-full "
//                                 sizes="100px" />
//                         </div>
//                         <div className='space-y-0.5'>
//                             <div className="text-[#0b0c0f] font-bold text-[18px]">Matheilda Haze</div>
//                             <div className="text-[#16181DB3] font-medium text-sm">Germany</div>
//                             <div className="text-[#16181DB3] text-sm">
//                                 <span> 24 Jan, 2025 | 06:01</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full border-t border-b border-gray-300 px-6 py-4">
//                         <div className="flex items-center mb-2 gap-2">
//                             <div className="text-[#0b0c0f] font-bold text-xl">5.0</div>
//                             <div className="flex space-x-0.5">
//                                 <FaStar className='text-yellow-500' />
//                                 <FaStar className='text-yellow-500' />
//                                 <FaStar className='text-yellow-500' />
//                                 <FaStar className='text-yellow-500' />
//                                 <FaStar className='text-yellow-500' />
//                             </div>
//                         </div>
//                         <p className="text-gray-900 text-lg font-bold mb-2">
//                             Ultahost has filled my appetite for best hosting option available
//                         </p>
//                         <p className="text-gray-500">
//                             Considering the degree of protection they provide, Ultahost's reasonably priced domain hosting has
//                             amazed me. I like tha...
//                         </p>
//                     </div>

//                     <button className='w-full px-6 py-4 duration-300 ease-in-out hover:bg-gray-200/50'>
//                         <div className='flex items-center justify-center gap-2 cursor-pointer'>
//                             <a className='text-[#0d80f2] hover:text-blue-500 font-medium text-medium'>See all reviews (1,145)</a>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Sidebar





// import React from 'react';
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import { HiOutlinePencilAlt } from "react-icons/hi";

// const Sidebar = ({ data, onOpenModal }) => {
//     if (!data) return null;

//     const { title, acf, _embedded } = data;
//     const imageUrl = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

//     return (
//         <>
//             <div className="sidebar-wrap space-y-6">
//                 <div className='flex items-center flex-col border border-gray-300 rounded-xl shadow-md pt-6'>
//                     <div className='space-y-5 text-center w-full px-6 pb-4'>
//                         {imageUrl && (
//                             <div className="relative w-full h-16">
//                                 <Image
//                                     src={imageUrl}
//                                     alt={title?.rendered}
//                                     fill
//                                     className='object-contain'
//                                     sizes="(max-width: 768px) 100vw, 300px"
//                                 />
//                             </div>
//                         )}
//                         <a
//                             href={acf?.visit_site_url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="focus:outline-none block custom-gradient text-white text-lg font-medium rounded-full text-center md:py-4 px-6 py-3 hover:bg-custom-dark transform w-full"
//                         >
//                             Visit {title?.rendered}
//                         </a>
//                     </div>
//                     <div className="overflow-y-auto max-h-42 w-full custom-scroll border-t border-b border-gray-300 ps-6 custom-scrollbar">
//                         <nav>
//                             <ul className='my-1'>
//                                 <li>
//                                     <a href="#rating-breakdown" className="block rounded-tl-md rounded-bl-md px-2 py-2 text-gray-900 font-medium hover:bg-gray-100">Rating Breakdown</a>
//                                 </li>
//                                 <li>
//                                     <a href="#user-reviews"
//                                         className="block rounded-tl-md rounded-bl-md px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">User
//                                         Reviews</a>
//                                 </li>
//                                 <li>
//                                     <a href="#plans-pricing"
//                                         className="block rounded-tl-md rounded-bl-md px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">Plans & Pricing</a>
//                                 </li>
//                                 <li>
//                                     <a href="#company-faq"
//                                         className="block rounded-tl-md rounded-bl-md px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">FAQ</a>
//                                 </li>
//                                 <li>
//                                     <a href="#"
//                                         className="block rounded-tl-md rounded-bl-md px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">Similar
//                                         Companies</a>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>

//                     {/* review */}
//                     <button
//                         className='w-full px-6 py-4 duration-300 ease-in-out hover:bg-gray-200/50'
//                         onClick={onOpenModal} // Open modal on click
//                     >
//                         <div className='flex items-center justify-center gap-2 cursor-pointer'>
//                             <HiOutlinePencilAlt className='text-[#0d80f2] size-6' />
//                             <span className='text-[#0d80f2] hover:text-blue-500 font-medium text-medium'>Write a review</span>
//                         </div>
//                     </button>
//                 </div>

//                 <div className='flex items-center flex-col border border-gray-300 rounded-xl shadow-md pt-6'>
//                     {/* Placeholder dynamic review, remove if you don't need */}
//                     <div className="flex items-center gap-3 w-full px-6 pb-4">
//                         <div className="relative w-16 h-16 border-2 border-gray-300 rounded-full ">
//                             <Image src="/images/happy.png"
//                                 alt="User Avatar"
//                                 fill
//                                 className="object-contain rounded-full "
//                                 sizes="100px" />
//                         </div>
//                         <div className='space-y-0.5'>
//                             <div className="text-[#0b0c0f] font-bold text-[18px]">Matheilda Haze</div>
//                             <div className="text-[#16181DB3] font-medium text-sm">Germany</div>
//                             <div className="text-[#16181DB3] text-sm">
//                                 <span> 24 Jan, 2025 | 06:01</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full border-t border-b border-gray-300 px-6 py-4">
//                         <div className="flex items-center mb-2 gap-2">
//                             <div className="text-[#0b0c0f] font-bold text-xl">5.0</div>
//                             <div className="flex space-x-0.5">
//                                 <FaStar className='text-yellow-500' />
//                                 <FaStar className='text-yellow-500' />
//                                 <FaStar className='text-yellow-500' />
//                                 <FaStar className='text-yellow-500' />
//                                 <FaStar className='text-yellow-500' />
//                             </div>
//                         </div>
//                         <p className="text-gray-900 text-lg font-bold mb-2">
//                             Ultahost has filled my appetite for best hosting option available
//                         </p>
//                         <p className="text-gray-500">
//                             Considering the degree of protection they provide, Ultahost's reasonably priced domain hosting has
//                             amazed me. I like tha...
//                         </p>
//                     </div>
//                     <button className='w-full px-6 py-4 duration-300 ease-in-out hover:bg-gray-200/50'>
//                         <div className='flex items-center justify-center gap-2 cursor-pointer'>
//                             <a className='text-[#0d80f2] hover:text-blue-500 font-medium text-medium'>See all reviews (1,145)</a>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Sidebar;









// import React from 'react';
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import { HiOutlinePencilAlt } from "react-icons/hi";

// const Sidebar = ({ data, onOpenModal, reviews }) => {
//     if (!data) return null;

//     const { title, acf, _embedded } = data;
//     const imageUrl = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

//     // Get the latest review
//     const latestReview = reviews.length > 0 ? reviews[0] : null;

//     return (
//         <div className="sidebar-wrap space-y-6">
//             <div className="flex items-center flex-col border border-gray-300 rounded-xl shadow-md pt-6">
//                 <div className="space-y-5 text-center w-full px-6 pb-4">
//                     {imageUrl && (
//                         <div className="relative w-full h-16">
//                             <Image
//                                 src={imageUrl}
//                                 alt={title?.rendered}
//                                 fill
//                                 className="object-contain"
//                                 sizes="(max-width: 768px) 100vw, 300px"
//                             />
//                         </div>
//                     )}
//                     <a
//                         href={acf?.visit_site_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="focus:outline-none block custom-gradient text-white text-lg font-medium rounded-full text-center md:py-4 px-6 py-3 hover:bg-custom-dark transform w-full"
//                     >
//                         Visit {title?.rendered}
//                     </a>
//                 </div>
                
//                 {/* Navigation Links */}
//                 <div className="overflow-y-auto max-h-42 w-full custom-scroll border-t border-b border-gray-300 ps-6 custom-scrollbar">
//                     <nav>
//                         <ul className='my-1'>
//                             <li><a href="#rating-breakdown" className="block px-2 py-2 text-gray-900 font-medium hover:bg-gray-100">Rating Breakdown</a></li>
//                             <li><a href="#user-reviews" className="block px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">User Reviews</a></li>
//                             <li><a href="#plans-pricing" className="block px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">Plans & Pricing</a></li>
//                             <li><a href="#company-faq" className="block px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">FAQ</a></li>
//                             <li><a href="#" className="block px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">Similar Companies</a></li>
//                         </ul>
//                     </nav>
//                 </div>

//                 {/* Write a Review Button */}
//                 <button className='w-full px-6 py-4 duration-300 ease-in-out hover:bg-gray-200/50' onClick={onOpenModal}>
//                     <div className='flex items-center justify-center gap-2 cursor-pointer'>
//                         <HiOutlinePencilAlt className='text-[#0d80f2] size-6' />
//                         <span className='text-[#0d80f2] hover:text-blue-500 font-medium text-medium'>Write a review</span>
//                     </div>
//                 </button>
//             </div>

//             {/* Latest Review Section */}
//             <div className='flex items-center flex-col border border-gray-300 rounded-xl shadow-md pt-6'>
//                 {latestReview ? (
//                     <>
//                         <div className="flex items-center gap-3 w-full px-6 pb-4">
//                             <div className="relative w-16 h-16 border-2 border-gray-300 rounded-full">
//                                 <Image src="/images/happy.png" alt="User Avatar" fill className="object-contain rounded-full" sizes="100px" />
//                             </div>
//                             <div className='space-y-0.5'>
//                                 <div className="text-[#0b0c0f] font-bold text-[18px]">{latestReview.userName || "Anonymous"}</div>
//                                 <div className="text-[#16181DB3] font-medium text-sm">Verified User</div>
//                                 <div className="text-[#16181DB3] text-sm">
//                                     <span>{new Date().toLocaleDateString()}</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-full border-t border-b border-gray-300 px-6 py-4">
//                             <div className="flex items-center mb-2 gap-2">
//                                 <div className="text-[#0b0c0f] font-bold text-xl">{latestReview.rating || 0}.0</div>
//                                 <div className="flex space-x-0.5">
//                                     {[...Array(5)].map((_, i) => (
//                                         <FaStar key={i} className={i < latestReview.rating ? 'text-yellow-500' : 'text-gray-300'} />
//                                     ))}
//                                 </div>
//                             </div>
//                             <p className="text-gray-900 text-lg font-bold mb-2">{latestReview.title || "No title provided"}</p>
//                             <p className="text-gray-500">{latestReview.text || "No review content available."}</p>
//                         </div>
//                     </>
//                 ) : (
//                     <div className="w-full border-t border-b border-gray-300 px-6 py-4 text-center text-gray-500">
//                         No reviews yet. Be the first to write one!
//                     </div>
//                 )}

//                 {/* See all reviews button */}
//                 <button className='w-full px-6 py-4 duration-300 ease-in-out hover:bg-gray-200/50'>
//                     <div className='flex items-center justify-center gap-2 cursor-pointer'>
//                         <a className='text-[#0d80f2] hover:text-blue-500 font-medium text-medium'>See all reviews ({reviews.length})</a>
//                     </div>
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Sidebar;






import React from 'react';
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Sidebar = ({ data, onOpenModal, reviews }) => {
    if (!data) return null;

    const { title, acf, _embedded } = data;
    const imageUrl = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

    // Get the latest review
    const latestReview = reviews.length > 0 ? reviews[0] : null;

    return (
        <div className="sidebar-wrap space-y-6">
            <div className="flex items-center flex-col border border-gray-300 rounded-xl shadow-md pt-6">
                <div className="space-y-5 text-center w-full px-6 pb-4">
                    {imageUrl && (
                        <div className="relative w-full h-16">
                            <Image
                                src={imageUrl}
                                alt={title?.rendered}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 300px"
                            />
                        </div>
                    )}
                    <a
                        href={acf?.visit_site_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus:outline-none block custom-gradient text-white text-lg font-medium rounded-full text-center md:py-4 px-6 py-3 hover:bg-custom-dark transform w-full"
                    >
                        Visit {title?.rendered}
                    </a>
                </div>
                {/* Navigation Links */}
                <div className="overflow-y-auto max-h-42 w-full custom-scroll border-t border-b border-gray-300 ps-6 custom-scrollbar">
                    <nav>
                         <ul className='my-1'>
                            <li><a href="#rating-breakdown" className="block px-2 py-2 text-gray-900 font-medium hover:bg-gray-100">Rating Breakdown</a></li>
                            <li><a href="#user-reviews" className="block px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">User Reviews</a></li>
                            <li><a href="#plans-pricing" className="block px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">Plans & Pricing</a></li>
                            <li><a href="#company-faq" className="block px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">FAQ</a></li>
                            <li><a href="#" className="block px-2 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100">Similar Companies</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Write a Review Button */}
                <button className='w-full px-6 py-4 duration-300 ease-in-out hover:bg-gray-200/50' onClick={onOpenModal}>
                    <div className='flex items-center justify-center gap-2 cursor-pointer'>
                        <HiOutlinePencilAlt className='text-[#0d80f2] size-6' />
                        <span className='text-[#0d80f2] hover:text-blue-500 font-medium text-medium'>Write a review</span>
                    </div>
                </button>
            </div>

            {/* Latest Review Section */}
            <div className='flex items-center flex-col border border-gray-300 rounded-xl shadow-md pt-6'>
              {latestReview ? (
                    <>
                         <div className="flex items-center gap-3 w-full px-6 pb-4">
                              <div className="relative w-16 h-16 border-2 border-gray-300 rounded-full">
                                  <Image src="/images/happy.png" alt="User Avatar" fill className="object-contain rounded-full" sizes="100px" />
                              </div>
                             <div className='space-y-0.5'>
                                  <div className="text-[#0b0c0f] font-bold text-[18px]">{latestReview?.userName || "Anonymous"}</div>
                                   <div className="text-[#16181DB3] font-medium text-sm">Verified User</div>
                                     <div className="text-[#16181DB3] text-sm">
                                        <span>{new Date().toLocaleDateString()}</span>
                                    </div>
                            </div>
                       </div>
                         <div className="w-full border-t border-b border-gray-300 px-6 py-4">
                            <div className="flex items-center mb-2 gap-2">
                               <div className="text-[#0b0c0f] font-bold text-xl">{latestReview?.rating || 0}.0</div>
                                <div className="flex space-x-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < (latestReview?.rating || 0) ? 'text-yellow-500' : 'text-gray-300'} />
                                    ))}
                                 </div>
                             </div>
                            <p className="text-gray-900 text-lg font-bold mb-2">{latestReview?.title || "No title provided"}</p>
                           <p className="text-gray-500">{latestReview?.text || "No review content available."}</p>
                      </div>
                   </>
              ) : (
                    <div className="w-full border-t border-b border-gray-300 px-6 py-4 text-center text-gray-500">
                        No reviews yet. Be the first to write one!
                    </div>
                )}

                {/* See all reviews button */}
               <button className='w-full px-6 py-4 duration-300 ease-in-out hover:bg-gray-200/50'>
                    <div className='flex items-center justify-center gap-2 cursor-pointer'>
                        <a href='#user-reviews' className='text-[#0d80f2] hover:text-blue-500 font-medium text-medium'>See all reviews ({reviews?.length || 0})</a>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;