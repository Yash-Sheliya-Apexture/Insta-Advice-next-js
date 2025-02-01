// import React, { useState, useRef, useEffect } from 'react';
// import { FaSearch, FaTimes } from 'react-icons/fa';
// import Image from 'next/image'; // Import Image component from next/image
// import StarRating from '../StarRating/StarRating'; // Import the StarRating component

// const SearchBar = () => {
//   const [isSearchVisible, setIsSearchVisible] = useState(false);
//   const searchRef = useRef(null);
//   const [searchResults, setSearchResults] = useState([]); //State for results

//   // Sample Search Results Data
//   // Using a constant for the data, but consider a more dynamic way in a production environment.
//   const searchData = [
//     {
//       title: "Result 1",
//       description: "This is the first result.",
//       image: "/images/ionos-logo.webp", // Use relative path
//       rating: 4.5,
//       reviewCount: 123,
//     },
//     {
//       title: "Result 2",
//       description: "This is the second result.",
//       image: "/images/ultahost-logo.png", // Use relative path
//       rating: 3.8,
//       reviewCount: 78,
//     },
//     {
//       title: "Result 3",
//       description: "This is the third result.",
//       image: "/images/hostinger-logo.png", // Use relative path
//       rating: 4.2,
//       reviewCount: 230,
//     },
//   ];


//   const handleSearchClick = () => {
//     setIsSearchVisible(true);
//     document.body.classList.add('overflow-hidden');
//   };

//   const handleCloseSearch = () => {
//     setIsSearchVisible(false);
//     document.body.classList.remove('overflow-hidden');
//   };


//   const handleClickOutside = (event) => {
//     if (searchRef.current && !searchRef.current.contains(event.target)) {
//       setIsSearchVisible(false);
//       document.body.classList.remove('overflow-hidden');
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.body.classList.remove('overflow-hidden');
//     };
//   }, []);

//   useEffect(() => {
//     setSearchResults(searchData); //Initial Data
//   },[]);


//   const renderSearchResults = () => {
//     if (searchResults.length === 0) {
//       return <div className="py-16 text-center text-light-color">No recent searches</div>;
//     }
//     return (
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//         {searchResults.map((result) => (
//           <div key={result.title} className="p-4 border border-gray-300 rounded-xl shadow-sm flex flex-col items-center">
//             <Image
//               src={result.image}
//               alt={result.title}
//               width={100} // Explicit sizes for optimization
//               height={100} // Explicit sizes for optimization
//               className="w-28 h-auto"
//               layout="intrinsic" // Ensures aspect ratio is preserved
//             />
//             <div className="flex flex-col tablet:flex-row items-center gap-3 mt-4">
//               <StarRating rating={result.rating} size="text-2xl text-ga" />
//               <div className="flex space-x-2">
//                 <span className="text-base text-gray-500 font-semibold">{result.rating}</span>
//                 <span className="text-base text-gray-500 font-semibold">({result.reviewCount} Reviews)</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <button onClick={handleSearchClick} className="flex items-center px-2 text-dark-color">
//         <FaSearch className='text-gray-700' />
//       </button>

//       {isSearchVisible && (
//         <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-start py-0 lg:py-4">
//           <div className="relative w-full h-full lg:max-w-2xl p-4 bg-white lg:rounded-3xl rounded-none" ref={searchRef}>
//             <div className="flex relative">
//               <input
//                 type="text"
//                 placeholder="Search docs"
//                 className="border border-gray-300 rounded-3xl py-2 px-3 focus:outline-none focus:border-black w-full pr-10"
//               />
//               <button onClick={handleCloseSearch} className="absolute inset-y-0 right-2 flex items-center px-2 text-dark-color">
//                 <FaTimes />
//               </button>
//             </div>
//             {renderSearchResults()}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Image from 'next/image'; // Import Image component from next/image
import StarRating from '../StarRating/StarRating'; // Import the StarRating component
import Link from 'next/link'; // To navigate to the detailed post page

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // To track the search input
  const searchRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]); //State for results

  const handleSearchClick = () => {
    setIsSearchVisible(true);
    document.body.classList.add('overflow-hidden');
  };

  const handleCloseSearch = () => {
    setIsSearchVisible(false);
    document.body.classList.remove('overflow-hidden');
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchVisible(false);
      document.body.classList.remove('overflow-hidden');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  // Fetch search results dynamically from WordPress API
  // Fetch search results dynamically from WordPress API
  const fetchSearchResults = async (query = '') => {
    try {
      // Fetch posts from WordPress API, search by post title
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&search=${query}`
      );
      const data = await response.json();

      // Format the fetched data to display
      const formattedData = data.map((item) => ({
        title: item.title.rendered,
        // Check if _embedded['wp:featuredmedia'] exists and is an array with at least one item
        image: item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0]
          ? item._embedded['wp:featuredmedia'][0].source_url
          : '/images/default-image.png', // Use default image if not available
        rating: item.acf?.rating || 0,  // Adjust based on your custom field
        reviewCount: item.acf?.user_reviews || 0,  // Adjust based on your custom field
        link: item.link || '/default-post-link',  // Add the link to the full post
      }));

      setSearchResults(formattedData);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };


  useEffect(() => {
    // Fetch initial results without query
    fetchSearchResults();
  }, []);

  // Handle changes in the search input
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update search query
    fetchSearchResults(query); // Fetch results with query
  };

  const renderSearchResults = () => {
    if (searchResults.length === 0) {
      return <div className="py-16 text-center text-light-color">No results found</div>;
    }
    return (
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {searchResults.map((result) => (
          <div key={result.title} className="p-6 border border-gray-300 rounded-xl shadow-lg flex flex-col justify-between items-center bg-white">
            <Image
              src={result.image}
              alt={result.title}
              width={200} // Explicit sizes for optimization
              height={45} // Explicit sizes for optimization
              className="w-44 h-12 object-cover rounded-lg"
              layout="intrinsic" // Ensures aspect ratio is preserved
            />
            <div className="flex flex-col items-center mt-4">
              <div className="flex flex-col tablet:flex-row items-center gap-3 mt-4">
                <StarRating rating={result.rating} size="text-lg" />
                <div className="flex space-x-2">
                  <span className="text-base text-gray-500">{result.rating}</span>
                  <span className="text-base text-gray-500">({result.reviewCount} Reviews)</span>
                </div>
              </div>
              <Link href={result.link} className='text-blue-600 hover:text-blue-800 mt-1 text-sm font-semibold'>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <button onClick={handleSearchClick} className="flex items-center lg:bg-gray-200 bg-transparent p-2 rounded-full text-dark-color">
        <FaSearch className='text-gray-700' />
      </button>

      {isSearchVisible && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-start py-0 lg:py-4">
          <div className="relative w-full h-full lg:max-w-3xl p-4 bg-white lg:rounded-3xl rounded-none" ref={searchRef}>
            <div className="flex relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange} // Trigger search when typing
                placeholder="Search by post title"
                className="border border-gray-300 rounded-3xl py-2 px-3 focus:outline-none focus:border-black w-full pr-10"
              />
              <button onClick={handleCloseSearch} className="absolute inset-y-0 right-2 flex items-center px-2 text-dark-color">
                <FaTimes />
              </button>
            </div>
            {renderSearchResults()}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
