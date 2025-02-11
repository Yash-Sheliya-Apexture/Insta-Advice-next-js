// Example Component (you can adjust names)
// import React from 'react';

// const LoadingSpinner = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50"> {/* Increased z-index */}
//       <div className="flex space-x-2">
//         <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
//         <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
//         <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
//       </div>
//     </div>
//   );
// };

// export default LoadingSpinner;



// Example Component (you can adjust names)
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"> {/* Increased z-index */}
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
        <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
        <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;