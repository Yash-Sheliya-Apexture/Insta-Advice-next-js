// import React, { useState, useEffect } from "react";
// import FilterBar from "./FilterBar";
// import InstagramAdviceCardMain from "./InstagramAdviceCardMain";
// import InstagramAdviceCardTable from "./InstagramAdviceCardTable";
// import StarRating from "../StarRating/StarRating";

// const InstagramAdvice = ({ adviceData, showViewMoreButton, handleViewMore, visibleCardCount }) => {
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");

//    useEffect(() => {
//        if (adviceData) {
//            // Extract unique categories
//            const uniqueCategories = [
//                ...new Set(
//                    adviceData.flatMap((post) =>
//                        post.class_list
//                            ?.filter((cls) => cls.startsWith("categories-"))
//                            .map((cls) => cls.replace("categories-", ""))
//                    )
//                ),
//            ];

//            setCategories(uniqueCategories);
//            setFilteredCards(adviceData); // Initially show all posts
//        }
//    }, [adviceData]);



//   const filters = [
//     {
//       name: "Price",
//       options: ["Under $5", "$5-$10", "Over $10"],
//     },
//     {
//       name: "Sort",
//       options: ["Price High to Low", "Price Low to High", "Rating"],
//     },
//     {
//       name: "Category",
//       options: Array.from(categories.values()),
//     },
//   ];

//   const handleFilterChange = (filterName, selectedOption) => {
//     let newFilteredCards = [...adviceData];

//     // Apply price filter
//     if (filterName === "Price") {
//       if (selectedOption === "Under $5") {
//         newFilteredCards = newFilteredCards.filter(card => parseFloat(card?.acf?.price) < 5);
//       } else if (selectedOption === "$5-$10") {
//         newFilteredCards = newFilteredCards.filter(card => parseFloat(card?.acf?.price) >= 5 && parseFloat(card?.acf?.price) <= 10);
//       } else if (selectedOption === "Over $10") {
//         newFilteredCards = newFilteredCards.filter(card => parseFloat(card?.acf?.price) > 10);
//       }
//     }

//     // Apply sorting
//     if (filterName === "Sort") {
//       if (selectedOption === "Price High to Low") {
//         newFilteredCards.sort((a, b) => parseFloat(b.acf?.price) - parseFloat(a.acf?.price));
//       } else if (selectedOption === "Price Low to High") {
//         newFilteredCards.sort((a, b) => parseFloat(a.acf?.price) - parseFloat(b.acf?.price));
//       } else if (selectedOption === "Rating") {
//         newFilteredCards.sort((a, b) => parseFloat(b.acf?.rating) - parseFloat(a.acf?.rating));
//       }
//     }
//     // Apply category filter based on class_list
//     if (filterName === "Category") {
//       if (selectedOption !== "") {
//         // Filter posts by selected category (matches class_list)
//         newFilteredCards = newFilteredCards.filter(card =>
//           card.class_list?.some(cls => cls === `categories-${selectedOption}`)
//         );
//       } else {
//         // If no category is selected, show all posts
//         newFilteredCards = [...adviceData];
//       }
//     }
//        setFilteredCards(newFilteredCards);

//   };

//   const handleShowAllPlans = (id) => {
//     setFilteredCards((prevFilteredCards) => {
//       return prevFilteredCards.map((card) => {
//         if (card.id === id) {
//           return { ...card, showAllPlans: !card.showAllPlans };
//         }
//         return card;
//       });
//     });
//   };

//   const handleRemoveFilter = (filterName) => {
//     if (filterName === "Category") {
//       // Reset the selected category and show all posts
//       setSelectedCategory("");
//         setFilteredCards(adviceData);

//     }
//   };

//   return (
//     <div className="InstagramAdviceCard">
//       <FilterBar
//         filters={filters}
//         onFilterChange={handleFilterChange}
//         onRemoveFilter={handleRemoveFilter}
//       />
//       {filteredCards.slice(0, visibleCardCount).map((data) => (
//         <div
//           key={data.id}
//           className="border-2 border-gray-300 shadow-sm rounded-2xl overflow-hidden flex flex-col mb-8"
//         >
//           <InstagramAdviceCardMain data={data} StarRating={StarRating} id={data.id} />
//           <InstagramAdviceCardTable
//             showAllPlans={data.showAllPlans}
//             plansData={data.acf}
//             handleShowAllPlans={() => handleShowAllPlans(data.id)}
//           />
//         </div>
//       ))}
//       {showViewMoreButton && (
//         <div className="text-center mt-6">
//           <button
//             onClick={handleViewMore}
//             className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center"
//           >
//             View More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InstagramAdvice;



// import React, { useState, useEffect, useRef } from "react";
// import FilterBar from "./FilterBar";
// import InstagramAdviceCardMain from "./InstagramAdviceCardMain";
// import InstagramAdviceCardTable from "./InstagramAdviceCardTable";
// import StarRating from "../StarRating/StarRating";

// const InstagramAdvice = ({ adviceData, initialVisibleCardCount, handleViewMore, initialDataLoaded }) => {
//     const [filteredCards, setFilteredCards] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState("");
//     const [visibleCardCount, setVisibleCardCount] = useState(initialVisibleCardCount);
//     const [currentFilters, setCurrentFilters] = useState({});
//     const [minPrice, setMinPrice] = useState("");
//     const [maxPrice, setMaxPrice] = useState("");
//     const [sortOption, setSortOption] = useState("Rating");
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
//             const defaultSortedData = [...adviceData].sort((a, b) => {
//                 // Sort by Rating in descending order
//                 const ratingA = parseFloat(a.acf?.rating) || 0; // Handle missing ratings as 0
//                 const ratingB = parseFloat(b.acf?.rating) || 0; // Handle missing ratings as 0
//                 return ratingB - ratingA;
//             });

//             applyFilters(defaultSortedData, currentFilters, minPrice, maxPrice, sortOption);
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
//         setSortOption(null);
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

// const InstagramAdvice = ({ adviceData, initialVisibleCardCount, handleViewMore, initialDataLoaded }) => {
//     const [filteredCards, setFilteredCards] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState("");
//     const [visibleCardCount, setVisibleCardCount] = useState(initialVisibleCardCount);
//     const [currentFilters, setCurrentFilters] = useState({});
//     const [minPrice, setMinPrice] = useState("");
//     const [maxPrice, setMaxPrice] = useState("");
//     const [sortOption, setSortOption1] = useState("Rating");
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
//             const defaultSortedData = [...adviceData].sort((a, b) => {
//                 // Sort by Rating in descending order
//                 const ratingA = parseFloat(a.acf?.rating) || 0; // Handle missing ratings as 0
//                 const ratingB = parseFloat(b.acf?.rating) || 0; // Handle missing ratings as 0
//                 return ratingB - ratingA;
//             });

//             applyFilters(defaultSortedData, currentFilters, minPrice, maxPrice, sortOption,sortOption);
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
//         setSortOption1(option);
//     };

//     const handleRemoveSort = () => {
//         setSortOption1(null);
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


// InstagramAdvice.js
import React, { useState, useEffect, useRef } from "react";
import FilterBar from "./FilterBar";
import InstagramAdviceCardMain from "./InstagramAdviceCardMain";
import InstagramAdviceCardTable from "./InstagramAdviceCardTable";
import StarRating from "../StarRating/StarRating";

const InstagramAdvice = ({
    adviceData,
    initialVisibleCardCount,
    handleViewMore,
    initialDataLoaded // Use the passed prop
}) => {
    const [filteredCards, setFilteredCards] = useState([]);
    const [categories, setCategories] = useState([]);
    const [visibleCardCount, setVisibleCardCount] = useState(initialVisibleCardCount);
    const [currentFilters, setCurrentFilters] = useState({});
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sortOption, setSortOption] = useState("Rating"); // Initialize with "Rating"

    const adviceDataRef = useRef(adviceData);
    const [dataLoaded, setDataLoaded] = useState(false);  //Local data loading state

    useEffect(() => {
        if (adviceData) {
            adviceDataRef.current = adviceData;
            setDataLoaded(true); // Set dataLoaded to true when adviceData is available

            // Extract unique categories
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

            // Apply default sorting by Rating (high to low)
            applyFilters(adviceData, currentFilters, minPrice, maxPrice, "Rating");
            //setIsInitialLoad(false);
        }
    }, [adviceData]);

    useEffect(() => {
        if (dataLoaded) { // Only apply filters after adviceData has loaded
            applyFilters(adviceDataRef.current, currentFilters, minPrice, maxPrice, sortOption);
        }
    }, [currentFilters, minPrice, maxPrice, sortOption, dataLoaded]); //Add dataloaded to dependency

    const filters = [
        {
            name: "Price",
            options: [],
        },
        {
            name: "Sort",
            options: ["Price High to Low", "Price Low to High", "Rating"],
        },
        {
            name: "Category",
            options: Array.from(categories.values()),
        },
    ];

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
                    const ratingA = parseFloat(a.acf?.rating) || 0;
                    const ratingB = parseFloat(b.acf?.rating) || 0;
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
        setVisibleCardCount(initialVisibleCardCount);
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
                initialDataLoaded={initialDataLoaded} // Pass the prop
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
                            <InstagramAdviceCardMain data={data} StarRating={StarRating} id={data.id} />
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