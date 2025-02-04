// import React from "react";
// import Image from 'next/image';

// const TeamMemberPopup = ({ member, onClose }) => {
//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 relative max-w-2xl">
//               <button
//                     onClick={onClose}
//                     className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
//                     aria-label="Close"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                     />
//                 </svg>
//                </button>
//                <div className="flex flex-col md:flex-row gap-6">
//                     <div className="w-full md:w-1/3 flex justify-center">
//                         <Image
//                            src={member.image}
//                            alt={member.name}
//                            className="h-auto w-full object-contain rounded-md"
//                            width={250}
//                            height={250}
//                         />
//                     </div>

//                     <div className="w-full md:w-2/3">
//                         <h3 className="text-3xl font-semibold text-dark-color">{member.name}</h3>
//                         <p className="text-light-color font-medium mt-1">{member.role}</p>
//                         <p className="text-gray-700 mt-4 text-base whitespace-pre-line">{member.description}</p>
//                     </div>
//                  </div>
//             </div>
//         </div>
//     );
// };

// export default TeamMemberPopup;





// import React, { useEffect, useRef } from "react";
// import Image from 'next/image';

// const TeamMemberPopup = ({ member, onClose }) => {
//     const popupRef = useRef(null);

//     useEffect(() => {
//         const popupElement = popupRef.current;
//         if (popupElement) {
//              // Force a reflow to ensure the animation plays on initial render
//           void popupElement.offsetWidth; // This line is crucial to trigger animation on mounting
//           popupElement.classList.add('popup-zoom-in-active');
//          }
  
//           const handleClickOutside = (event) => {
//               if (popupRef.current && !popupRef.current.contains(event.target)) {
//                   handleClose();
//               }
//           };
  
//           document.addEventListener("mousedown", handleClickOutside);
  
//           return () => {
//               document.removeEventListener("mousedown", handleClickOutside);
//           };
//       }, [onClose]);
      
//      const handleClose = () => {
//         const popupElement = popupRef.current;
//         if(popupElement) {
//           popupElement.classList.remove('popup-zoom-in-active');
//          popupElement.addEventListener('transitionend', () => {
//             onClose();
//          }, { once: true }); // Ensure the onClose only happens once
//         } else {
//             onClose(); // if popupElement is null close popup
//         }
//     };


//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75" >
//             <div
//               ref={popupRef}
//               className="bg-white rounded-xl shadow-lg overflow-hidden p-6 relative max-w-2xl popup-zoom-in-container "
//             >
//               <button
//                     onClick={handleClose}
//                     className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
//                     aria-label="Close"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                     />
//                 </svg>
//                </button>
//                <div className="flex flex-col md:flex-row gap-6">
//                     <div className="w-full md:w-1/3 flex justify-center">
//                         <Image
//                            src={member.image}
//                            alt={member.name}
//                            className="h-auto w-full object-contain rounded-md"
//                            width={250}
//                            height={250}
//                         />
//                     </div>

//                     <div className="w-full md:w-2/3">
//                         <h3 className="text-3xl font-semibold text-dark-color">{member.name}</h3>
//                         <p className="text-light-color font-medium mt-1">{member.role}</p>
//                         <p className="text-gray-700 mt-4 text-base whitespace-pre-line">{member.description}</p>
//                     </div>
//                  </div>
//             </div>
//         </div>
//     );
// };

// export default TeamMemberPopup;





import React, { useEffect, useRef } from "react";
import Image from 'next/image';

const TeamMemberPopup = ({ member, onClose }) => {
    const popupRef = useRef(null);

    useEffect(() => {
        const popupElement = popupRef.current;

        // Disable scrolling on the body when the popup opens
        document.body.style.overflow = 'hidden';


        if (popupElement) {
            // Force a reflow to ensure the animation plays on initial render
            void popupElement.offsetWidth; // This line is crucial to trigger animation on mounting
            popupElement.classList.add('popup-zoom-in-active');
        }

        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Re-enable scrolling when the component unmounts (popup closes)
            document.body.style.overflow = '';
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const handleClose = () => {
        const popupElement = popupRef.current;

        // Re-enable scrolling before closing so the animation doesn't get cut off.
        document.body.style.overflow = '';


        if (popupElement) {
            popupElement.classList.remove('popup-zoom-in-active');
            popupElement.addEventListener('transitionend', () => {
                onClose();
            }, { once: true }); // Ensure the onClose only happens once
        } else {
            onClose(); // if popupElement is null close popup
        }
    };


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75" >
            <div
                ref={popupRef}
                className="bg-white flex justify-center items-center sm:rounded-xl rounded-none shadow-lg overflow-hidden p-6 relative max-w-2xl popup-zoom-in-container h-screen sm:h-auto"
            >
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                    aria-label="Close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <Image
                            src={member.image}
                            alt={member.name}
                            className="h-52 sm:h-auto w-full object-contain rounded-md"
                            width={250}
                            height={250}
                        />
                    </div>

                    <div className="w-full md:w-2/3">
                        <h3 className="text-3xl font-semibold text-dark-color">{member.name}</h3>
                        <p className="text-light-color font-medium mt-1">{member.role}</p>
                        <p className="text-gray-700 mt-4 text-base whitespace-pre-line">{member.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberPopup;