// import React, { useState, useEffect, useRef } from "react";
// import FilterBar from "./FilterBar";
// import InstagramAdviceCardMain from "./InstagramAdviceCardMain";
// import InstagramAdviceCardTable from "./InstagramAdviceCardTable";
// import StarRating from "../StarRating/StarRating";

// const InstagramAdvice = ({ adviceData, initialVisibleCardCount, handleViewMore, initialDataLoaded }) => {
//     const [filteredCards, setFilteredCards] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [visibleCardCount, setVisibleCardCount] = useState(initialVisibleCardCount);
//     const [currentFilters, setCurrentFilters] = useState({});
//     const [minPrice, setMinPrice] = useState("");
//     const [maxPrice, setMaxPrice] = useState("");
//     const [sortOption, setSortOption] = useState("Rating"); // Initialize with "Rating"
//     const adviceDataRef = useRef(adviceData);

//     useEffect(() => {
//         if (adviceData) {
//             adviceDataRef.current = adviceData;

//             // Extract unique categories
//             const uniqueCategories = [
//                 ...new Set(
//                     adviceData.flatMap((post) =>
//                         post.class_list
//                             ?.filter((cls) => cls.startsWith("categories-"))
//                             .map((cls) => cls.replace("categories-", ""))
//                     )
//                 ),
//             ];

//             setCategories(uniqueCategories);

//             // Apply default sorting by Rating (high to low)
//             applyFilters(adviceData, currentFilters, minPrice, maxPrice, "Rating");
//         }
//     }, [adviceData]);

//     useEffect(() => {
//         applyFilters(adviceDataRef.current, currentFilters, minPrice, maxPrice, sortOption);
//     }, [currentFilters, minPrice, maxPrice, sortOption]);

//     const filters = [
//         {
//             name: "Price",
//             options: [],
//         },
//         {
//             name: "Sort",
//             options: ["Price High to Low", "Price Low to High", "Rating"],
//         },
//         {
//             name: "Category",
//             options: Array.from(categories.values()),
//         },
//     ];

//     const applyFilters = (data, filters, minPrice, maxPrice, sortOption) => {
//         let newFilteredCards = [...data];

//         // Price Range Filter
//         if (minPrice !== "" && maxPrice !== "") {
//             newFilteredCards = newFilteredCards.filter(card => {
//                 const price = parseFloat(card?.acf?.price);
//                 return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
//             });
//         }

//         // Sorting (applied AFTER price range)
//         if (sortOption) {
//             if (sortOption === "Price High to Low") {
//                 newFilteredCards.sort((a, b) => parseFloat(b.acf?.price) - parseFloat(a.acf?.price));
//             } else if (sortOption === "Price Low to High") {
//                 newFilteredCards.sort((a, b) => parseFloat(a.acf?.price) - parseFloat(b.acf?.price));
//             } else if (sortOption === "Rating") {
//                 newFilteredCards.sort((a, b) => {
//                     const ratingA = parseFloat(a.acf?.rating) || 0;
//                     const ratingB = parseFloat(b.acf?.rating) || 0;
//                     return ratingB - ratingA;
//                 });
//             }
//         }

//         // Category Filter (applied AFTER sorting)
//         if (filters.Category) {
//             newFilteredCards = newFilteredCards.filter(card =>
//                 card.class_list?.some(cls => cls === `categories-${filters.Category}`)
//             );
//         }

//         setFilteredCards(newFilteredCards);
//         setVisibleCardCount(initialVisibleCardCount);
//     };

//     const handleFilterChange = (filterName, selectedOption) => {
//         setCurrentFilters(prevFilters => ({
//             ...prevFilters,
//             [filterName]: selectedOption,
//         }));
//     };

//     const handleRemoveFilter = (filterName) => {
//         const { [filterName]: removed, ...rest } = currentFilters;
//         setCurrentFilters(rest);
//     };

//     const handlePriceRangeChange = (min, max) => {
//         setMinPrice(min);
//         setMaxPrice(max);
//     };

//     const handleSortChange = (option) => {
//         setSortOption(option);
//     };

//     const handleRemoveSort = () => {
//         setSortOption("Rating"); // Reset to "Rating" when sort is removed
//     };

//     const handleShowAllPlans = (id) => {
//         setFilteredCards((prevFilteredCards) => {
//             return prevFilteredCards.map((card) => {
//                 if (card.id === id) {
//                     return { ...card, showAllPlans: !card.showAllPlans };
//                 }
//                 return card;
//             });
//         });
//     };

//     const handleViewMoreClick = () => {
//         handleViewMore();
//         setVisibleCardCount((prevCount) => prevCount + initialVisibleCardCount);
//     };

//     const showViewMoreButton = visibleCardCount < filteredCards.length;

//     return (
//         <div className="InstagramAdviceCard">
//             <FilterBar
//                 filters={filters}
//                 onFilterChange={handleFilterChange}
//                 onRemoveFilter={handleRemoveFilter}
//                 onPriceRangeChange={handlePriceRangeChange}
//                 minPrice={minPrice}
//                 maxPrice={maxPrice}
//                 setMinPrice={setMinPrice}
//                 setMaxPrice={setMaxPrice}
//                 sortOption={sortOption}
//                 onSortChange={handleSortChange}
//                 onRemoveSort={handleRemoveSort}
//                 initialDataLoaded={initialDataLoaded}
//                 currentFilters={currentFilters}
//             />
//             {filteredCards.length === 0 ? (
//                 <div className="text-center py-4">No data found.</div>
//             ) : (
//                 <>
//                     {filteredCards.slice(0, visibleCardCount).map((data) => (
//                         <div
//                             key={data.id}
//                             className="border-2 border-gray-300 shadow-sm rounded-2xl overflow-hidden flex flex-col mb-8"
//                         >
//                             <InstagramAdviceCardMain data={data} StarRating={StarRating} id={data.id} />
//                             <InstagramAdviceCardTable
//                                 showAllPlans={data.showAllPlans}
//                                 plansData={data.acf}
//                                 handleShowAllPlans={handleShowAllPlans}
//                                 id={data.id}
//                             />
//                         </div>
//                     ))}
//                     {showViewMoreButton && (
//                         <div className="text-center mt-6">
//                             <button
//                                 onClick={handleViewMoreClick}
//                                 className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center"
//                             >
//                                 View More
//                             </button>
//                         </div>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default InstagramAdvice;



// import React, { useState, useEffect, useRef } from "react";
// import FilterBar from "./FilterBar";
// import InstagramAdviceCardMain from "./InstagramAdviceCardMain";
// import InstagramAdviceCardTable from "./InstagramAdviceCardTable";
// import StarRating from "../StarRating/StarRating";

// const InstagramAdvice = ({
//     adviceData,
//     initialVisibleCardCount,
//     handleViewMore,
//     initialDataLoaded // Use the passed prop
// }) => {
//     const [filteredCards, setFilteredCards] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [visibleCardCount, setVisibleCardCount] = useState(initialVisibleCardCount);
//     const [currentFilters, setCurrentFilters] = useState({});
//     const [minPrice, setMinPrice] = useState("");
//     const [maxPrice, setMaxPrice] = useState("");
//     const [sortOption, setSortOption] = useState("Rating"); // Initialize with "Rating"

//     const adviceDataRef = useRef(adviceData);
//     const [dataLoaded, setDataLoaded] = useState(false);  //Local data loading state

//     useEffect(() => {
//         if (adviceData) {
//             adviceDataRef.current = adviceData;
//             setDataLoaded(true); // Set dataLoaded to true when adviceData is available

//             // Extract unique categories
//             const uniqueCategories = [
//                 ...new Set(
//                     adviceData.flatMap((post) =>
//                         post.class_list
//                             ?.filter((cls) => cls.startsWith("categories-"))
//                             .map((cls) => cls.replace("categories-", ""))
//                     )
//                 ),
//             ];

//             setCategories(uniqueCategories);

//             // Apply default sorting by Rating (high to low)
//             applyFilters(adviceData, currentFilters, minPrice, maxPrice, "Rating");
//             //setIsInitialLoad(false);
//         }
//     }, [adviceData]);

//     useEffect(() => {
//         if (dataLoaded) { // Only apply filters after adviceData has loaded
//             applyFilters(adviceDataRef.current, currentFilters, minPrice, maxPrice, sortOption);
//         }
//     }, [currentFilters, minPrice, maxPrice, sortOption, dataLoaded]); //Add dataloaded to dependency

//      const fetchReviews = async (postId) => {
//        const jwt = localStorage.getItem("jwtToken");
//        if (!jwt) return [];
//        try {
//          const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/comments?post=${postId}`;
//          const response = await fetch(apiUrl, {
//            headers: {
//              Authorization: `Bearer ${jwt}`,
//            },
//          });

//          if (!response.ok) {
//            const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
//            console.error("Response error when fetching comments:", message);
//            try {
//              const responseBody = await response.json();
//              console.error("Response body:", responseBody);
//            } catch (e) {
//              console.error("Response body not available");
//            }
//            throw new Error(message);
//          }

//          const comments = await response.json();

//          const formattedReviews = comments
//            .map((comment) => {
//              try {
//                // Decode HTML entities
//                const tempElement = document.createElement("div");
//                tempElement.innerHTML = comment.content.rendered;

//                // Get the decoded text content
//                let decodedString = tempElement.textContent;

//                // Use a regex that replaces leading and trailing <p> and <br> tags with nothing
//                decodedString = decodedString
//                  .replace(/^(<p>|<br\/?>)*|<\/?p>|<\/?br\s*\/?>$/g, "")
//                  .trim();

//                // Replace curly quotes with standard double quotes
//                decodedString = decodedString.replace(/[“”]/g, '"');

//                // Replace specific unicode characters that might cause issues
//                decodedString = decodedString.replace(/[\u2018\u2019]/g, "'"); // Replace smart single quotes
//                decodedString = decodedString.replace(/[\u201C\u201D]/g, '"'); // Replace smart double quotes

//                // Ensure the string is wrapped in curly braces
//                if (
//                  !decodedString.startsWith("{") &&
//                  !decodedString.endsWith("}")
//                ) {
//                  decodedString = `{${decodedString}}`;
//                }

//                // Parse the JSON content
//                try {
//                  const content = JSON.parse(decodedString);
//                  return {
//                    id: comment.id,
//                    rating: content?.rating || 0,
//                    userName: content?.userName || "",
//                    title: content?.title || "",
//                    text: content?.text || "",
//                  };
//                } catch (parseError) {
//                  console.error(
//                    "Error parsing content after cleanup: ",
//                    decodedString,
//                    parseError
//                  );
//                  return null;
//                }
//              } catch (e) {
//                console.error(
//                  "Error parsing comment content:",
//                  comment.content.rendered,
//                  e
//                );
//                return null;
//              }
//            })
//            .filter(Boolean);

//          return formattedReviews;
//        } catch (err) {
//          console.error("Error fetching review from WordPress", err);
//          return [];
//        }
//      };

//     const filters = [
//         {
//             name: "Price",
//             options: [],
//         },
//         {
//             name: "Sort",
//             options: ["Price High to Low", "Price Low to High"],
//         },
//         {
//             name: "Category",
//             options: Array.from(categories.values()),
//         },
//     ];

//     const applyFilters = async (data, filters, minPrice, maxPrice, sortOption) => {
//         let newFilteredCards = [...data];

//          // Fetch reviews and calculate average rating and total reviews for each card
//          const cardsWithReviews = await Promise.all(
//            newFilteredCards.map(async (card) => {
//              const reviews = await fetchReviews(card.id);
//              const totalReviews = reviews.length;
//              const averageRating =
//                totalReviews > 0
//                  ? reviews.reduce((sum, review) => sum + review.rating, 0) /
//                    totalReviews
//                  : 0;
//              return {
//                ...card,
//                averageRating,
//                totalReviews,
//              };
//            })
//          );

//          newFilteredCards = cardsWithReviews;

//         // Price Range Filter
//         if (minPrice !== "" && maxPrice !== "") {
//             newFilteredCards = newFilteredCards.filter(card => {
//                 const price = parseFloat(card?.acf?.price);
//                 return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
//             });
//         }

//         // Sorting (applied AFTER price range)
//         if (sortOption) {
//             if (sortOption === "Price High to Low") {
//                 newFilteredCards.sort((a, b) => parseFloat(b.acf?.price) - parseFloat(a.acf?.price));
//             } else if (sortOption === "Price Low to High") {
//                 newFilteredCards.sort((a, b) => parseFloat(a.acf?.price) - parseFloat(b.acf?.price));
//             } else if (sortOption === "Rating") {
//                 newFilteredCards.sort((a, b) => {
//                     const ratingA = parseFloat(a.averageRating) || 0;
//                     const ratingB = parseFloat(b.averageRating) || 0;
//                     return ratingB - ratingA;
//                 });
//             }
//         }

//         // Category Filter (applied AFTER sorting)
//         if (filters.Category) {
//             newFilteredCards = newFilteredCards.filter(card =>
//                 card.class_list?.some(cls => cls === `categories-${filters.Category}`)
//             );
//         }

//         setFilteredCards(newFilteredCards);
//         setVisibleCardCount(initialVisibleCardCount);
//     };

//     const handleFilterChange = (filterName, selectedOption) => {
//         setCurrentFilters(prevFilters => ({
//             ...prevFilters,
//             [filterName]: selectedOption,
//         }));
//     };

//     const handleRemoveFilter = (filterName) => {
//         const { [filterName]: removed, ...rest } = currentFilters;
//         setCurrentFilters(rest);
//     };

//     const handlePriceRangeChange = (min, max) => {
//         setMinPrice(min);
//         setMaxPrice(max);
//     };

//     const handleSortChange = (option) => {
//         setSortOption(option);
//     };

//     const handleRemoveSort = () => {
//         setSortOption("Rating"); // Reset to "Rating" when sort is removed
//     };

//     const handleShowAllPlans = (id) => {
//         setFilteredCards((prevFilteredCards) => {
//             return prevFilteredCards.map((card) => {
//                 if (card.id === id) {
//                     return { ...card, showAllPlans: !card.showAllPlans };
//                 }
//                 return card;
//             });
//         });
//     };

//     const handleViewMoreClick = () => {
//         handleViewMore();
//         setVisibleCardCount((prevCount) => prevCount + initialVisibleCardCount);
//     };

//     const showViewMoreButton = visibleCardCount < filteredCards.length;

//     return (
//         <div className="InstagramAdviceCard">
//             <FilterBar
//                 filters={filters}
//                 onFilterChange={handleFilterChange}
//                 onRemoveFilter={handleRemoveFilter}
//                 onPriceRangeChange={handlePriceRangeChange}
//                 minPrice={minPrice}
//                 maxPrice={maxPrice}
//                 setMinPrice={setMinPrice}
//                 setMaxPrice={setMaxPrice}
//                 sortOption={sortOption}
//                 onSortChange={handleSortChange}
//                 onRemoveSort={handleRemoveSort}
//                 initialDataLoaded={initialDataLoaded} // Pass the prop
//                 currentFilters={currentFilters}
//             />
//             {filteredCards.length === 0 ? (
//                 <div className="text-center py-4">No data found.</div>
//             ) : (
//                 <>
//                     {filteredCards.slice(0, visibleCardCount).map((data) => (
//                         <div
//                             key={data.id}
//                             className="border-2 border-gray-300 shadow-sm rounded-2xl overflow-hidden flex flex-col mb-8"
//                         >
//                             <InstagramAdviceCardMain data={data} StarRating={StarRating} id={data.id} averageRating={data.averageRating} totalReviews={data.totalReviews} />
//                             <InstagramAdviceCardTable
//                                 showAllPlans={data.showAllPlans}
//                                 plansData={data.acf}
//                                 handleShowAllPlans={handleShowAllPlans}
//                                 id={data.id}
//                             />
//                         </div>
//                     ))}
//                     {showViewMoreButton && (
//                         <div className="text-center mt-6">
//                             <button
//                                 onClick={handleViewMoreClick}
//                                 className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center"
//                             >
//                                 View More
//                             </button>
//                         </div>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default InstagramAdvice;






// // InstagramAdvice.js
// import React, { useState, useEffect, useRef } from "react";
// import FilterBar from "./FilterBar";
// import InstagramAdviceCardMain from "./InstagramAdviceCardMain";
// import InstagramAdviceCardTable from "./InstagramAdviceCardTable";
// import StarRating from "../StarRating/StarRating";

// const InstagramAdvice = ({
//     adviceData,
//     initialVisibleCardCount,
//     handleViewMore,
//     initialDataLoaded // Use the passed prop
// }) => {
//     const [filteredCards, setFilteredCards] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [visibleCardCount, setVisibleCardCount] = useState(initialVisibleCardCount);
//     const [currentFilters, setCurrentFilters] = useState({});
//     const [minPrice, setMinPrice] = useState("");
//     const [maxPrice, setMaxPrice] = useState("");
//     const [sortOption, setSortOption] = useState("Rating"); // Initialize with "Rating"

//     const adviceDataRef = useRef(adviceData);
//     const [dataLoaded, setDataLoaded] = useState(false);  //Local data loading state

//     useEffect(() => {
//         if (adviceData) {
//             adviceDataRef.current = adviceData;
//             setDataLoaded(true); // Set dataLoaded to true when adviceData is available

//             // Extract unique categories
//             const uniqueCategories = [
//                 ...new Set(
//                     adviceData.flatMap((post) =>
//                         post.class_list
//                             ?.filter((cls) => cls.startsWith("categories-"))
//                             .map((cls) => cls.replace("categories-", ""))
//                     )
//                 ),
//             ];

//             setCategories(uniqueCategories);

//             // Apply default sorting by Rating (high to low)
//             applyFilters(adviceData, currentFilters, minPrice, maxPrice, "Rating");
//             //setIsInitialLoad(false);
//         }
//     }, [adviceData]);

//     useEffect(() => {
//         if (dataLoaded) { // Only apply filters after adviceData has loaded
//             applyFilters(adviceDataRef.current, currentFilters, minPrice, maxPrice, sortOption);
//         }
//     }, [currentFilters, minPrice, maxPrice, sortOption, dataLoaded]); //Add dataloaded to dependency

//     const filters = [
//         {
//             name: "Price",
//             options: [],
//         },
//         {
//             name: "Sort",
//             options: ["Price High to Low", "Price Low to High"],
//         },
//         {
//             name: "Category",
//             options: Array.from(categories.values()),
//         },
//     ];

//     const applyFilters = (data, filters, minPrice, maxPrice, sortOption) => {
//         let newFilteredCards = [...data];

//         // Price Range Filter
//         if (minPrice !== "" && maxPrice !== "") {
//             newFilteredCards = newFilteredCards.filter(card => {
//                 const price = parseFloat(card?.acf?.price);
//                 return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
//             });
//         }

//         // Sorting (applied AFTER price range)
//         if (sortOption) {
//             if (sortOption === "Price High to Low") {
//                 newFilteredCards.sort((a, b) => parseFloat(b.acf?.price) - parseFloat(a.acf?.price));
//             } else if (sortOption === "Price Low to High") {
//                 newFilteredCards.sort((a, b) => parseFloat(a.acf?.price) - parseFloat(b.acf?.price));
//             } else if (sortOption === "Rating") {
//                 newFilteredCards.sort((a, b) => {
//                     const ratingA = parseFloat(a.acf?.rating) || 0;
//                     const ratingB = parseFloat(b.acf?.rating) || 0;
//                     return ratingB - ratingA;
//                 });
//             }
//         }

//         // Category Filter (applied AFTER sorting)
//         if (filters.Category) {
//             newFilteredCards = newFilteredCards.filter(card =>
//                 card.class_list?.some(cls => cls === `categories-${filters.Category}`)
//             );
//         }

//         setFilteredCards(newFilteredCards);
//         setVisibleCardCount(initialVisibleCardCount);
//     };

//     const handleFilterChange = (filterName, selectedOption) => {
//         setCurrentFilters(prevFilters => ({
//             ...prevFilters,
//             [filterName]: selectedOption,
//         }));
//     };

//     const handleRemoveFilter = (filterName) => {
//         const { [filterName]: removed, ...rest } = currentFilters;
//         setCurrentFilters(rest);
//     };

//     const handlePriceRangeChange = (min, max) => {
//         setMinPrice(min);
//         setMaxPrice(max);
//     };

//     const handleSortChange = (option) => {
//         setSortOption(option);
//     };

//     const handleRemoveSort = () => {
//         setSortOption("Rating"); // Reset to "Rating" when sort is removed
//     };

//     const handleShowAllPlans = (id) => {
//         setFilteredCards((prevFilteredCards) => {
//             return prevFilteredCards.map((card) => {
//                 if (card.id === id) {
//                     return { ...card, showAllPlans: !card.showAllPlans };
//                 }
//                 return card;
//             });
//         });
//     };

//     const handleViewMoreClick = () => {
//         handleViewMore();
//         setVisibleCardCount((prevCount) => prevCount + initialVisibleCardCount);
//     };

//     const showViewMoreButton = visibleCardCount < filteredCards.length;

//     return (
//         <div className="InstagramAdviceCard">
//             <FilterBar
//                 filters={filters}
//                 onFilterChange={handleFilterChange}
//                 onRemoveFilter={handleRemoveFilter}
//                 onPriceRangeChange={handlePriceRangeChange}
//                 minPrice={minPrice}
//                 maxPrice={maxPrice}
//                 setMinPrice={setMinPrice}
//                 setMaxPrice={setMaxPrice}
//                 sortOption={sortOption}
//                 onSortChange={handleSortChange}
//                 onRemoveSort={handleRemoveSort}
//                 initialDataLoaded={initialDataLoaded} // Pass the prop
//                 currentFilters={currentFilters}
//             />
//             {filteredCards.length === 0 ? (
//                 <div className="text-center py-4">No data found.</div>
//             ) : (
//                 <>
//                     {filteredCards.slice(0, visibleCardCount).map((data) => (
//                         <div
//                             key={data.id}
//                             className="border-2 border-gray-300 shadow-sm rounded-2xl overflow-hidden flex flex-col mb-8"
//                         >
//                             <InstagramAdviceCardMain data={data} StarRating={StarRating} id={data.id} />
//                             <InstagramAdviceCardTable
//                                 showAllPlans={data.showAllPlans}
//                                 plansData={data.acf}
//                                 handleShowAllPlans={handleShowAllPlans}
//                                 id={data.id}
//                             />
//                         </div>
//                     ))}
//                     {showViewMoreButton && (
//                         <div className="text-center mt-6">
//                             <button
//                                 onClick={handleViewMoreClick}
//                                 className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center"
//                             >
//                                 View More
//                             </button>
//                         </div>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default InstagramAdvice;




// // components/Advice/InstagramAdvice.js
// import React, { useState, useEffect, useRef } from "react";
// import FilterBar from "./FilterBar";
// import InstagramAdviceCardMain from "./InstagramAdviceCardMain";
// import InstagramAdviceCardTable from "./InstagramAdviceCardTable";
// import StarRating from "../StarRating/StarRating";

// const InstagramAdvice = ({
//     adviceData,
//     initialVisibleCardCount,
//     handleViewMore,
// }) => {
//     const [filteredCards, setFilteredCards] = useState(adviceData); // Initialize with all advice data
//     const [categories, setCategories] = useState([]);
//     const [visibleCardCount, setVisibleCardCount] = useState(initialVisibleCardCount);
//     const [currentFilters, setCurrentFilters] = useState({});
//     const [minPrice, setMinPrice] = useState("");
//     const [maxPrice, setMaxPrice] = useState("");
//     const [sortOption, setSortOption] = useState("Rating"); // Initialize with "Rating"

//     useEffect(() => {
//         // Extract unique categories
//         if (adviceData) {
//             const uniqueCategories = [
//                 ...new Set(
//                     adviceData.flatMap((post) =>
//                         post.class_list
//                             ?.filter((cls) => cls.startsWith("categories-"))
//                             .map((cls) => cls.replace("categories-", ""))
//                     )
//                 ),
//             ];
//             setCategories(uniqueCategories);
//         }
//         applyFilters(adviceData, currentFilters, minPrice, maxPrice, sortOption);
//     }, [adviceData]);

//     const filters = [
//         {
//             name: "Price",
//             options: [],
//         },
//         {
//             name: "Sort",
//             options: ["Price High to Low", "Price Low to High"],
//         },
//         {
//             name: "Category",
//             options: Array.from(categories.values()),
//         },
//     ];

//     useEffect(() => {
//         applyFilters(adviceData, currentFilters, minPrice, maxPrice, sortOption);
//         setVisibleCardCount(initialVisibleCardCount);
//     }, [currentFilters, minPrice, maxPrice, sortOption]);


//     const applyFilters = (data, filters, minPrice, maxPrice, sortOption) => {
//         let newFilteredCards = [...data];

//         // Price Range Filter
//         if (minPrice !== "" && maxPrice !== "") {
//             newFilteredCards = newFilteredCards.filter(card => {
//                 const price = parseFloat(card?.acf?.price);
//                 return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
//             });
//         }

//         // Sorting (applied AFTER price range)
//         if (sortOption) {
//             if (sortOption === "Price High to Low") {
//                 newFilteredCards.sort((a, b) => parseFloat(b.acf?.price) - parseFloat(a.acf?.price));
//             } else if (sortOption === "Price Low to High") {
//                 newFilteredCards.sort((a, b) => parseFloat(a.acf?.price) - parseFloat(b.acf?.price));
//             } else if (sortOption === "Rating") {
//                 newFilteredCards.sort((a, b) => {
//                     const ratingA = parseFloat(a.acf?.rating) || 0;
//                     const ratingB = parseFloat(b.acf?.rating) || 0;
//                     return ratingB - ratingA;
//                 });
//             }
//         }

//         // Category Filter (applied AFTER sorting)
//         if (filters.Category) {
//             newFilteredCards = newFilteredCards.filter(card =>
//                 card.class_list?.some(cls => cls === `categories-${filters.Category}`)
//             );
//         }

//         setFilteredCards(newFilteredCards);
//     };
//     const handleFilterChange = (filterName, selectedOption) => {
//         setCurrentFilters(prevFilters => ({
//             ...prevFilters,
//             [filterName]: selectedOption,
//         }));
//     };

//     const handleRemoveFilter = (filterName) => {
//         const { [filterName]: removed, ...rest } = currentFilters;
//         setCurrentFilters(rest);
//     };

//     const handlePriceRangeChange = (min, max) => {
//         setMinPrice(min);
//         setMaxPrice(max);
//     };

//     const handleSortChange = (option) => {
//         setSortOption(option);
//     };

//     const handleRemoveSort = () => {
//         setSortOption("Rating"); // Reset to "Rating" when sort is removed
//     };
//     const handleShowAllPlans = (id) => {
//         setFilteredCards((prevFilteredCards) => {
//             return prevFilteredCards.map((card) => {
//                 if (card.id === id) {
//                     return { ...card, showAllPlans: !card.showAllPlans };
//                 }
//                 return card;
//             });
//         });
//     };

//     const handleViewMoreClick = () => {
//         handleViewMore();
//         setVisibleCardCount((prevCount) => prevCount + initialVisibleCardCount);
//     };

//     const showViewMoreButton = visibleCardCount < filteredCards.length;

//     return (
//         <div className="InstagramAdviceCard">
//             <FilterBar
//                 filters={filters}
//                 onFilterChange={handleFilterChange}
//                 onRemoveFilter={handleRemoveFilter}
//                 onPriceRangeChange={handlePriceRangeChange}
//                 minPrice={minPrice}
//                 maxPrice={maxPrice}
//                 setMinPrice={setMinPrice}
//                 setMaxPrice={setMaxPrice}
//                 sortOption={sortOption}
//                 onSortChange={handleSortChange}
//                 onRemoveSort={handleRemoveSort}
//                 currentFilters={currentFilters}
//             />
//             {filteredCards.length === 0 ? (
//                 <div className="text-center py-4">No data found.</div>
//             ) : (
//                 <>
//                     {filteredCards.slice(0, visibleCardCount).map((data) => (
//                         <div
//                             key={data.id}
//                             className="border-2 border-gray-300 shadow-sm rounded-2xl overflow-hidden flex flex-col mb-8"
//                         >
//                             <InstagramAdviceCardMain data={data} StarRating={StarRating} id={data.id} />
//                             <InstagramAdviceCardTable
//                                 showAllPlans={data.showAllPlans}
//                                 plansData={data.acf}
//                                 handleShowAllPlans={handleShowAllPlans}
//                                 id={data.id}
//                             />
//                         </div>
//                     ))}
//                     {showViewMoreButton && (
//                         <div className="text-center mt-6">
//                             <button
//                                 onClick={handleViewMoreClick}
//                                 className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center"
//                             >
//                                 View More
//                             </button>
//                         </div>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default InstagramAdvice;






// components/Advice/InstagramAdvice.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import FilterBar from "./FilterBar";
import InstagramAdviceCardMain from "./InstagramAdviceCardMain";
import InstagramAdviceCardTable from "./InstagramAdviceCardTable";
import StarRating from "../StarRating/StarRating";

const InstagramAdvice = ({
    adviceData,
    initialVisibleCardCount,
    handleViewMore,
}) => {
    const [filteredCards, setFilteredCards] = useState(adviceData); // Initialize with all advice data
    const [categories, setCategories] = useState([]);
    const [visibleCardCount, setVisibleCardCount] = useState(initialVisibleCardCount);
    const [currentFilters, setCurrentFilters] = useState({});
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sortOption, setSortOption] = useState("Rating"); // Initialize with "Rating"
    const [jwt, setJwt] = useState(null);

    useEffect(() => {
        const fetchJWT = async () => {
            try {
                const authUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/jwt-auth/v1/token`;
                const username = process.env.NEXT_PUBLIC_WORDPRESS_USERNAME;
                const password = process.env.NEXT_PUBLIC_WORDPRESS_PASSWORD;
                const response = await fetch(authUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    })
                });
                if (!response.ok) {
                    const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
                    console.error("Response error when getting the token:", message);
                    try {
                        const responseBody = await response.json();
                        console.error("Response body:", responseBody);
                    }
                    catch (e) {
                        console.error("Response body not available")
                    }
                    throw new Error(message)
                }

                const data = await response.json();
                setJwt(data.token);


            } catch (err) {
                console.error("Error fetching JWT", err);
            }
        };
        fetchJWT()
    }, [])

    const fetchRatingsAndReviews = useCallback(async (postId) => {
        if (!jwt) {
            return { averageRating: 0, totalReviews: 0 };
        }

        try {
            let allReviews = [];
            let page = 1;
            let totalPages = 1; // Assume at least one page initially

            while (page <= totalPages) {
                const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/comments?post=${postId}&page=${page}`;
                const response = await fetch(apiUrl, {
                    headers: {
                        "Authorization": `Bearer ${jwt}`,
                    },
                });

                if (!response.ok) {
                    const message = `HTTP error! Status: ${response.status} - ${response.statusText}`;
                    console.error("Response error when fetching comments:", message);
                    try {
                        const responseBody = await response.json();
                        console.error("Response body:", responseBody);
                    } catch (e) {
                        console.error("Response body not available");
                    }
                    throw new Error(message);
                }

                const comments = await response.json();
                allReviews = allReviews.concat(comments);  // Accumulate comments
                totalPages = parseInt(response.headers.get('X-WP-TotalPages'), 10) || 1; // Get total pages from headers
                page++;
            }

            const formattedReviews = allReviews.map(comment => {
                try {
                    // Decode HTML entities
                    const tempElement = document.createElement('div');
                    tempElement.innerHTML = comment.content.rendered;

                    // Get the decoded text content
                    let decodedString = tempElement.textContent;

                    // Helper function to safely parse JSON.
                    const safeJsonParse = (str) => {
                        try {
                            // Basic sanitization to remove control characters
                            str = str.replace(/[\x00-\x1F\x7F-\x9F]/g, "");

                            // Aggressive sanitization of problematic characters
                            str = str
                                .replace(/[“”]/g, '"')  // Curly quotes to straight quotes
                                .replace(/[\r\n]+/g, "\\n") // Line breaks to escaped newlines
                                .replace(/\\+/g, "\\")  // Remove excessive backslashes
                                .replace(/'/g, "'"); // Replace single quotes with HTML entity

                            // Remove any remaining HTML tags
                            str = str.replace(/<[^>]*>/g, "");

                            // Attempt to extract JSON object from a larger string
                            let start = str.indexOf("{");
                            let end = str.lastIndexOf("}");
                            if (start !== -1 && end !== -1 && start < end) {
                                str = str.substring(start, end + 1);
                            }

                            // Basic validation to ensure it looks like JSON
                            if (!str.trim().startsWith("{") || !str.trim().endsWith("}")) {
                                console.warn("String does not appear to be a JSON object:", str);
                                return null;
                            }
                            return JSON.parse(str);
                        } catch (e) {
                            console.error("Error parsing JSON:", str, e);
                            return null;
                        }
                    };

                    // Attempt to parse the content
                    let content = safeJsonParse(decodedString);

                    // If the content is null return null for the whole review
                    if (!content) {
                        return null;
                    }

                    return {
                        id: comment.id,
                        rating: content?.rating || 0,
                        userName: content?.userName || "",
                        title: content?.title || "",
                        text: content?.text || "",
                        rawText: content?.text,
                    };
                } catch (e) {
                    console.error("Error parsing comment content:", comment.content.rendered, e);
                    return null;
                }
            }).filter(Boolean);
            const totalRating = formattedReviews.reduce((acc, review) => acc + review.rating, 0);
            const averageRating = formattedReviews.length > 0 ? totalRating / formattedReviews.length : 0;
            return {
                averageRating: averageRating.toFixed(1),
                totalReviews: formattedReviews.length,
            };
        } catch (err) {
            console.error("Error fetching ratings and reviews:", err);
            return { averageRating: 0, totalReviews: 0 };
        }
    }, [jwt]);

    useEffect(() => {
        // Extract unique categories
        if (adviceData) {
            const uniqueCategories = [
                ...new Set(
                    adviceData.flatMap((post) =>
                        post.class_list
                            ?.filter((cls) => cls.startsWith("categories-"))
                            .map((cls) => cls.replace("categories-", ""))
                    )
                ),
            ];
            setCategories(uniqueCategories);
        }

        const fetchDataWithRatings = async () => {
            if (adviceData && jwt) {
                const newData = await Promise.all(
                    adviceData.map(async (post) => {
                        const { averageRating, totalReviews } = await fetchRatingsAndReviews(
                            post.id
                        );
                        return { ...post, averageRating, totalReviews };
                    })
                );
                applyFilters(newData, currentFilters, minPrice, maxPrice, sortOption);
            }
        };
        fetchDataWithRatings()

    }, [adviceData, jwt, fetchRatingsAndReviews]);

    const filters = [
        {
            name: "Price",
            options: [],
        },
        {
            name: "Sort",
            options: ["Price High to Low", "Price Low to High"],
        },
        {
            name: "Category",
            options: Array.from(categories.values()),
        },
    ];

    useEffect(() => {
        applyFilters(adviceData, currentFilters, minPrice, maxPrice, sortOption);
        setVisibleCardCount(initialVisibleCardCount);
    }, [currentFilters, minPrice, maxPrice, sortOption]);


    const applyFilters = (data, filters, minPrice, maxPrice, sortOption) => {
        let newFilteredCards = [...data];

        // Price Range Filter
        if (minPrice !== "" && maxPrice !== "") {
            newFilteredCards = newFilteredCards.filter(card => {
                const price = parseFloat(card?.acf?.price);
                return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
            });
        }

        // Sorting (applied AFTER price range)
        if (sortOption) {
            if (sortOption === "Price High to Low") {
                newFilteredCards.sort((a, b) => parseFloat(b.acf?.price) - parseFloat(a.acf?.price));
            } else if (sortOption === "Price Low to High") {
                newFilteredCards.sort((a, b) => parseFloat(a.acf?.price) - parseFloat(b.acf?.price));
            } else if (sortOption === "Rating") {
                newFilteredCards.sort((a, b) => {
                    const ratingA = parseFloat(a.averageRating) || 0;
                    const ratingB = parseFloat(b.averageRating) || 0;
                    return ratingB - ratingA;
                });
            }
        }

        // Category Filter (applied AFTER sorting)
        if (filters.Category) {
            newFilteredCards = newFilteredCards.filter(card =>
                card.class_list?.some(cls => cls === `categories-${filters.Category}`)
            );
        }

        setFilteredCards(newFilteredCards);
    };
    const handleFilterChange = (filterName, selectedOption) => {
        setCurrentFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: selectedOption,
        }));
    };

    const handleRemoveFilter = (filterName) => {
        const { [filterName]: removed, ...rest } = currentFilters;
        setCurrentFilters(rest);
    };

    const handlePriceRangeChange = (min, max) => {
        setMinPrice(min);
        setMaxPrice(max);
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const handleRemoveSort = () => {
        setSortOption("Rating"); // Reset to "Rating" when sort is removed
    };
    const handleShowAllPlans = (id) => {
        setFilteredCards((prevFilteredCards) => {
            return prevFilteredCards.map((card) => {
                if (card.id === id) {
                    return { ...card, showAllPlans: !card.showAllPlans };
                }
                return card;
            });
        });
    };

    const handleViewMoreClick = () => {
        handleViewMore();
        setVisibleCardCount((prevCount) => prevCount + initialVisibleCardCount);
    };

    const showViewMoreButton = visibleCardCount < filteredCards.length;

    return (
        <div className="InstagramAdviceCard">
            <FilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
                onRemoveFilter={handleRemoveFilter}
                onPriceRangeChange={handlePriceRangeChange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                sortOption={sortOption}
                onSortChange={handleSortChange}
                onRemoveSort={handleRemoveSort}
                currentFilters={currentFilters}
            />
            {filteredCards.length === 0 ? (
                <div className="text-center py-4">No data found.</div>
            ) : (
                <>
                    {filteredCards.slice(0, visibleCardCount).map((data) => (
                        <div
                            key={data.id}
                            className="border-2 border-gray-300 shadow-sm rounded-2xl overflow-hidden flex flex-col mb-8"
                        >
                            <InstagramAdviceCardMain data={data} StarRating={StarRating} id={data.id} averageRating={data.averageRating} totalReviews={data.totalReviews} />
                            <InstagramAdviceCardTable
                                showAllPlans={data.showAllPlans}
                                plansData={data.acf}
                                handleShowAllPlans={handleShowAllPlans}
                                id={data.id}
                            />
                        </div>
                    ))}
                    {showViewMoreButton && (
                        <div className="text-center mt-6">
                            <button
                                onClick={handleViewMoreClick}
                                className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center"
                            >
                                View More
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default InstagramAdvice;