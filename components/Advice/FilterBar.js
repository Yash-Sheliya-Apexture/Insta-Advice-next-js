// import React, { useState, useRef, useEffect } from "react";
// import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";

// const FilterBar = ({
//     filters,
//     onFilterChange,
//     onRemoveFilter,
//     onPriceRangeChange,
//     minPrice: initialMinPrice,
//     maxPrice: initialMaxPrice,
//     setMinPrice,
//     setMaxPrice,
//     sortOption,
//     onSortChange,
//     onRemoveSort,
//     initialDataLoaded,
//     currentFilters
// }) => {
//     const [openDropdown, setOpenDropdown] = useState(null);
//     const dropdownRef = useRef(null);
//     const [selectedOptions, setSelectedOptions] = useState({...currentFilters});
//     const [tempMinPrice, setTempMinPrice] = useState(initialMinPrice || "");
//     const [tempMaxPrice, setTempMaxPrice] = useState(initialMaxPrice || "");
//     const [isPriceFilterActive, setIsPriceFilterActive] = useState(initialMinPrice !== "" || initialMaxPrice !== "");
//     const [isSortFilterActive, setIsSortFilterActive] = useState(sortOption !== "Rating"); //Modified
//     const [internalSortOption, setInternalSortOption] = useState(sortOption);
//     const [initialLoadCompleted, setInitialLoadCompleted] = useState(initialDataLoaded) // Added a new State

//     useEffect(() => {
//         setInitialLoadCompleted(initialDataLoaded)
//     },[initialDataLoaded])

//     // Update temp prices when initial props change
//     useEffect(() => {
//         setTempMinPrice(initialMinPrice || "");
//     }, [initialMinPrice]);

//     useEffect(() => {
//         setTempMaxPrice(initialMaxPrice || "");
//     }, [initialMaxPrice]);

//     useEffect(() => {
//         setSelectedOptions(currentFilters);
//     }, [currentFilters]);

//     useEffect(() => {
//         setIsPriceFilterActive(initialMinPrice !== "" || initialMaxPrice !== "");
//     }, [initialMinPrice, initialMaxPrice]);

//     useEffect(() => {
//         setIsSortFilterActive(sortOption !== "Rating");
//         setInternalSortOption(sortOption);
//     }, [sortOption]);

//     const handleDropdownToggle = (filterName) => {
//         setOpenDropdown(openDropdown === filterName ? null : filterName);
//     };

//     const handleOptionSelect = (filterName, option) => {
//         setSelectedOptions((prev) => ({
//             ...prev,
//             [filterName]: option,
//         }));
//         onFilterChange(filterName, option);
//         setOpenDropdown(null);
//     };

//     const handleRemoveFilter = (filterName) => {
//         const newSelectedOptions = { ...selectedOptions };
//         delete newSelectedOptions[filterName];

//         setSelectedOptions(newSelectedOptions);
//         onFilterChange(filterName, null); // Notify parent that filter is removed
//     };

//     const handleRemovePriceFilter = () => {
//         // Dynamically clear price values in parent
//         setMinPrice("");
//         setMaxPrice("");

//         // Update local temporary state as well
//         setTempMinPrice("");
//         setTempMaxPrice("");

//         onPriceRangeChange("", ""); // Clear the price range in parent
//         setIsPriceFilterActive(false);
//     };

//     const handleApplyPriceRange = () => {
//         onPriceRangeChange(tempMinPrice, tempMaxPrice);
//         setMinPrice(tempMinPrice);
//         setMaxPrice(tempMaxPrice);
//         setOpenDropdown(null);
//         setIsPriceFilterActive(true);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setOpenDropdown(null);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);

//     const handleRemoveSortFilter = () => {
//         onRemoveSort(); // Clear the sort option in the parent component
//         setIsSortFilterActive(false);
//         setInternalSortOption(null);
//     };

//     const handleClearAllFilters = () => {
//         // Clear Price Filter
//         setMinPrice("");
//         setMaxPrice("");
//         setTempMinPrice("");
//         setTempMaxPrice("");
//         onPriceRangeChange("", "");
//         setIsPriceFilterActive(false);

//         // Clear Sort Filter
//         onRemoveSort();
//         setIsSortFilterActive(false);
//         setInternalSortOption(null);

//         // Clear all other Filters (Category, etc.)
//         Object.keys(selectedOptions).forEach((filterName) => {
//             onFilterChange(filterName, null); // Clear each filter
//         });

//         setSelectedOptions({}); // Clear the selectedOptions state

//         //Force the Sort Filter button to be rerendered
//         onSortChange("Rating");
//         setIsSortFilterActive(true);
//         setInternalSortOption("Rating")
//     }
//     const renderButtonContent = (filter) => {
//         if (filter.name === 'Price') {
//             const priceText = `Price: ${initialMinPrice ? '$' + initialMinPrice : ''} - ${initialMaxPrice ? '$' + initialMaxPrice : ''}`;

//             return (
//                 <div className="flex items-center gap-1">
//                     {priceText}
//                     {isPriceFilterActive && (
//                         <span
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleRemovePriceFilter();
//                             }}
//                             className="focus:outline-none cursor-pointer"
//                         >
//                             <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm"/>
//                         </span>
//                     )}
//                     {openDropdown === filter.name ? <IoIosArrowUp/> : <IoIosArrowDown/>}
//                 </div>
//             );
//         }

//         const sortLabel = () => {
//             if (internalSortOption === "Price High to Low"){
//                 return "Price High to Low"
//             } else if (internalSortOption === "Price Low to High") {
//                 return "Price Low to High"
//             } else {
//                 return "Rating"
//             }
//         }

//         if (filter.name === "Sort" && internalSortOption && internalSortOption !=="Rating") { //modified
//             return (
//                 <div className="flex items-center gap-1">
//                     {`Sort: ${sortLabel()}`}
//                     {isSortFilterActive && (
//                         <span
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleRemoveSortFilter();
//                             }}
//                             className="focus:outline-none cursor-pointer"
//                         >
//                             <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm"/>
//                         </span>
//                     )}
//                 </div>
//             );
//         }

//         if (selectedOptions[filter.name]) {
//             return (
//                 <div className="flex items-center gap-1">
//                     {`${filter.name}: ${selectedOptions[filter.name]}`}
//                     <span
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             handleRemoveFilter(filter.name);
//                         }}
//                         className="focus:outline-none cursor-pointer"
//                     >
//                         <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm"/>
//                     </span>
//                 </div>
//             );
//         } else {
//             return (
//                 <>
//                     {filter.name}
//                     {openDropdown === filter.name ? <IoIosArrowUp/> : <IoIosArrowDown/>}
//                 </>
//             );
//         }
//     };

//     const handleSortSelect = (option) => {
//         onSortChange(option); // Notify the parent component of the selected sort option
//         setOpenDropdown(null); // Close the dropdown after selection
//         setIsSortFilterActive(true);
//         setInternalSortOption(option);
//     };

//     const isFilterApplied = () => {
//         return (
//             Object.keys(selectedOptions).length > 0 ||
//             isPriceFilterActive ||
//             (internalSortOption && internalSortOption!== "Rating")
//         );
//     };


//     return (
//         <>
//             <h2 className="text-xl font-semibold mb-3">Filters</h2>
//             <div className="flex flex-wrap gap-2 items-center pb-6">
//                 {filters.map((filter) => {
//                     const isFilterSelected = selectedOptions[filter.name] ||
//                     (filter.name === "Sort" && internalSortOption && internalSortOption!== "Rating") ||
//                     (filter.name === "Price" && isPriceFilterActive);

//                     return (
//                         <div key={filter.name} className="relative">
//                             <button
//                                 onClick={() => handleDropdownToggle(filter.name)}
//                                 className={`flex items-center gap-1 py-1 px-2 rounded-md  focus:outline-none whitespace-nowrap
//                                 ${isFilterSelected
//                                         ? "bg-blue-100 text-blue-800"
//                                         : "border border-gray-300 hover:border-gray-400"
//                                     }
//                                 `}
//                             >
//                                 {renderButtonContent(filter)}
//                             </button>
//                             {openDropdown === filter.name && filter.name === 'Sort' && filter.options && (
//                                 <div
//                                     ref={dropdownRef}
//                                     className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-md z-10"
//                                 >
//                                     {filter.options.map((option, index) => (
//                                         <div
//                                             key={index}
//                                             className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
//                                             onClick={() => handleSortSelect(option)}
//                                         >
//                                             {option}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                             {openDropdown === filter.name && filter.name === 'Price' && (
//                                 <div
//                                     ref={dropdownRef}
//                                     className="absolute top-full left-0 mt-1 w-54 bg-white border border-gray-300 rounded-md shadow-md z-10 p-4"
//                                 >
//                                     <div className="flex flex-col items-center gap-2 mb-3">
//                                         <div>
//                                             <label htmlFor="minPrice"
//                                                    className="block text-sm font-medium text-gray-700">Min</label>
//                                             <input
//                                                 type="number"
//                                                 id="minPrice"
//                                                 className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full"
//                                                 placeholder="0"
//                                                 value={tempMinPrice}
//                                                 onChange={(e) => setTempMinPrice(e.target.value)}
//                                             />
//                                         </div>
//                                         <div>
//                                             <label htmlFor="maxPrice"
//                                                    className="block text-sm font-medium text-gray-700">Max</label>
//                                             <input
//                                                 type="number"
//                                                 id="maxPrice"
//                                                 className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full"
//                                                 placeholder="15000"
//                                                 value={tempMaxPrice}
//                                                 onChange={(e) => setTempMaxPrice(e.target.value)}
//                                             />
//                                         </div>
//                                     </div>
//                                     <button
//                                         onClick={handleApplyPriceRange}
//                                         className="focus:outline-none w-full cursor-pointer custom-gradient text-white text-base font-medium rounded-full px-4 py-2 hover:bg-custom-dark transform"
//                                     >
//                                         Apply
//                                     </button>
//                                 </div>
//                             )}
//                             {openDropdown === filter.name && filter.name !== 'Price' && filter.name !== "Sort" && (
//                                 <div
//                                     ref={dropdownRef}
//                                     className="absolute top-full left-0 mt-1 w-auto min-w-72 bg-white border border-gray-300 rounded-md shadow-md z-10 overflow-hidden"
//                                 >
//                                     {filter.options.map((option, index) => (
//                                         <div
//                                             key={index}
//                                             className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
//                                             onClick={() => handleOptionSelect(filter.name, option)}
//                                         >
//                                             {option}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     );
//                 })}
//                 {isFilterApplied() || initialLoadCompleted === false && (
//                     <button
//                         onClick={handleClearAllFilters}
//                         className="flex items-center gap-1 py-1 px-2 rounded-md cursor-pointer bg-gray-900 text-white border border-gray-900 focus:outline-none whitespace-nowrap"
//                     >
//                         Clear All
//                     </button>
//                 )}
//             </div>
//         </>
//     );
// };

// export default FilterBar;







// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";

// const FilterBar = ({
//     filters,
//     onFilterChange,
//     onRemoveFilter,
//     onPriceRangeChange,
//     minPrice: initialMinPrice,
//     maxPrice: initialMaxPrice,
//     setMinPrice,
//     setMaxPrice,
//     sortOption,
//     onSortChange,
//     onRemoveSort,
//     initialDataLoaded,
//     currentFilters
// }) => {
//     const [openDropdown, setOpenDropdown] = useState(null);
//     const dropdownRef = useRef(null);
//     const [selectedOptions, setSelectedOptions] = useState({...currentFilters});
//     const [tempMinPrice, setTempMinPrice] = useState(initialMinPrice || "");
//     const [tempMaxPrice, setTempMaxPrice] = useState(initialMaxPrice || "");
//     const [isPriceFilterActive, setIsPriceFilterActive] = useState(initialMinPrice !== "" || initialMaxPrice !== "");
//     const [isSortFilterActive, setIsSortFilterActive] = useState(sortOption !== ""); //Modified
//     const [internalSortOption, setInternalSortOption] = useState(sortOption);
//     const [initialLoadCompleted, setInitialLoadCompleted] = useState(initialDataLoaded) // Added a new State

//     useEffect(() => {
//         setInitialLoadCompleted(initialDataLoaded)
//     },[initialDataLoaded])

//     // Update temp prices when initial props change
//     useEffect(() => {
//         setTempMinPrice(initialMinPrice || "");
//     }, [initialMinPrice]);

//     useEffect(() => {
//         setTempMaxPrice(initialMaxPrice || "");
//     }, [initialMaxPrice]);

//     useEffect(() => {
//         setSelectedOptions(currentFilters);
//     }, [currentFilters]);

//     useEffect(() => {
//         setIsPriceFilterActive(initialMinPrice !== "" || initialMaxPrice !== "");
//     }, [initialMinPrice, initialMaxPrice]);

//     useEffect(() => {
//         setIsSortFilterActive(sortOption !== "Rating");
//         // setInternalSortOption(sortOption);
//     }, [sortOption]);

//     const handleDropdownToggle = (filterName) => {
//         setOpenDropdown(openDropdown === filterName ? null : filterName);
//     };

//     const handleOptionSelect = (filterName, option) => {
//         setSelectedOptions((prev) => ({
//             ...prev,
//             [filterName]: option,
//         }));
//         onFilterChange(filterName, option);
//         setOpenDropdown(null);
//     };

//     const handleRemoveFilter = (filterName) => {
//         const newSelectedOptions = { ...selectedOptions };
//         delete newSelectedOptions[filterName];

//         setSelectedOptions(newSelectedOptions);
//         onFilterChange(filterName, null); // Notify parent that filter is removed
//     };

//     const handleRemovePriceFilter = () => {
//         // Dynamically clear price values in parent
//         setMinPrice("");
//         setMaxPrice("");

//         // Update local temporary state as well
//         setTempMinPrice("");
//         setTempMaxPrice("");

//         onPriceRangeChange("", ""); // Clear the price range in parent
//         setIsPriceFilterActive(false);
//     };

//     const handleApplyPriceRange = () => {
//         onPriceRangeChange(tempMinPrice, tempMaxPrice);
//         setMinPrice(tempMinPrice);
//         setMaxPrice(tempMaxPrice);
//         setOpenDropdown(null);
//         setIsPriceFilterActive(true);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setOpenDropdown(null);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);

//     const handleRemoveSortFilter = () => {
//         onRemoveSort(); // Clear the sort option in the parent component
//         setIsSortFilterActive(false);
//         // setInternalSortOption(null);
//     };

//     const handleClearAllFilters = () => {
//         // Clear Price Filter
//         setMinPrice("");
//         setMaxPrice("");
//         setTempMinPrice("");
//         setTempMaxPrice("");
//         onPriceRangeChange("", "");
//         setIsPriceFilterActive(false);

//         // Clear Sort Filter
//         onRemoveSort();
//         setIsSortFilterActive(false);
//         // setInternalSortOption(null);

//         // Clear all other Filters (Category, etc.)
//         Object.keys(selectedOptions).forEach((filterName) => {
//             onFilterChange(filterName, null); // Clear each filter
//         });

//         setSelectedOptions({}); // Clear the selectedOptions state

//         //Force the Sort Filter button to be rerendered
//         // onSortChange("Rating");
//         setIsSortFilterActive(true);
//         // setInternalSortOption("Rating")
//     }
//     const renderButtonContent = (filter) => {
//         if (filter.name === 'Price') {
//             let priceText = "Price"; // Default text when no price is selected

//             if (initialMinPrice || initialMaxPrice) {
//                 priceText = `Price: ${initialMinPrice ? '$' + initialMinPrice : ''} - ${initialMaxPrice ? '$' + initialMaxPrice : ''}`;
//             }

//             return (
//                 <div className="flex items-center gap-1">
//                     {priceText}
//                     {isPriceFilterActive && (
//                         <span
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleRemovePriceFilter();
//                             }}
//                             className="focus:outline-none cursor-pointer"
//                         >
//                             <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm"/>
//                         </span>
//                     )}
//                     {openDropdown === filter.name ? <IoIosArrowUp/> : <IoIosArrowDown/>}
//                 </div>
//             );
//         }

//         const sortLabel = () => {
//             if (internalSortOption === "Price High to Low"){
//                 return "Price High to Low"
//             } else {
//                 return "Price Low to High"
//             }
//         }

//         if (filter.name === "Sort" && internalSortOption && internalSortOption !=="Rating") { //modified
//             return (
//                 <div className="flex items-center gap-1">
//                     {`Sort: ${sortLabel()}`}
//                     {isSortFilterActive && (
//                         <span
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleRemoveSortFilter();
//                             }}
//                             className="focus:outline-none cursor-pointer"
//                         >
//                             <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm"/>
//                         </span>
//                     )}
//                 </div>
//             );
//         }

//         if (selectedOptions[filter.name]) {
//             return (
//                 <div className="flex items-center gap-1">
//                     {`${filter.name}: ${selectedOptions[filter.name]}`}
//                     <span
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             handleRemoveFilter(filter.name);
//                         }}
//                         className="focus:outline-none cursor-pointer"
//                     >
//                         <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm"/>
//                     </span>
//                 </div>
//             );
//         } else {
//             return (
//                 <>
//                     {filter.name}
//                     {openDropdown === filter.name ? <IoIosArrowUp/> : <IoIosArrowDown/>}
//                 </>
//             );
//         }
//     };

//     const handleSortSelect = (option) => {
//         onSortChange(option); // Notify the parent component of the selected sort option
//         setOpenDropdown(null); // Close the dropdown after selection
//         setIsSortFilterActive(true);
//         setInternalSortOption(option);
//     };

//     const isFilterApplied = () => {
//         return (
//             Object.keys(selectedOptions).length > 0 ||
//             isPriceFilterActive ||
//             (internalSortOption && internalSortOption!== "Rating")
//         );
//     };


//     return (
//         <>
//             <h2 className="text-xl font-semibold mb-3">Filters</h2>
//             <div className="flex flex-wrap gap-2 items-center pb-6">
//                 {filters.map((filter) => {
//                     const isFilterSelected = selectedOptions[filter.name] ||
//                     (filter.name === "Sort" && internalSortOption && internalSortOption!== "Rating") ||
//                     (filter.name === "Price" && isPriceFilterActive);

//                     return (
//                         <div key={filter.name} className="relative">
//                             <button
//                                 onClick={() => handleDropdownToggle(filter.name)}
//                                 className={`flex items-center gap-1 py-1 px-2 rounded-md cursor-pointer focus:outline-none whitespace-nowrap ${isFilterSelected ? "bg-blue-100 text-blue-800" : "border border-gray-300 hover:border-gray-400"}`}
//                             >
//                                 {renderButtonContent(filter)}
//                             </button>
//                             {openDropdown === filter.name && filter.name === 'Sort' && filter.options && (
//                                 <div
//                                     ref={dropdownRef}
//                                     className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-md z-10"
//                                 >
//                                     {filter.options.map((option, index) => (
//                                         <div
//                                             key={index}
//                                             className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
//                                             onClick={() => handleSortSelect(option)}
//                                         >
//                                             {option}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                             {openDropdown === filter.name && filter.name === 'Price' && (
//                                 <div
//                                     ref={dropdownRef}
//                                     className="absolute top-full left-0 mt-1 w-54 bg-white border border-gray-300 rounded-md shadow-md z-10 p-4"
//                                 >
//                                     <div className="flex flex-col items-center gap-2 mb-3">
//                                         <div>
//                                             <label htmlFor="minPrice"
//                                                    className="block text-sm font-medium text-gray-700">Min</label>
//                                             <input
//                                                 type="number"
//                                                 id="minPrice"
//                                                 className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full"
//                                                 placeholder="0"
//                                                 value={tempMinPrice}
//                                                 onChange={(e) => setTempMinPrice(e.target.value)}
//                                             />
//                                         </div>
//                                         <div>
//                                             <label htmlFor="maxPrice"
//                                                    className="block text-sm font-medium text-gray-700">Max</label>
//                                             <input
//                                                 type="number"
//                                                 id="maxPrice"
//                                                 className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full"
//                                                 placeholder="15000"
//                                                 value={tempMaxPrice}
//                                                 onChange={(e) => setTempMaxPrice(e.target.value)}
//                                             />
//                                         </div>
//                                     </div>
//                                     <button
//                                         onClick={handleApplyPriceRange}
//                                         className="focus:outline-none w-full cursor-pointer custom-gradient text-white text-base font-medium rounded-full px-4 py-2 hover:bg-custom-dark transform"
//                                     >
//                                         Apply
//                                     </button>
//                                 </div>
//                             )}
//                             {openDropdown === filter.name && filter.name !== 'Price' && filter.name !== "Sort" && (
//                                 <div
//                                     ref={dropdownRef}
//                                     className="absolute top-full left-0 mt-1 w-auto min-w-64 bg-white border border-gray-300 rounded-md shadow-md z-10 overflow-hidden"
//                                 >
//                                     {filter.options.map((option, index) => (
//                                         <div
//                                             key={index}
//                                             className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
//                                             onClick={() => handleOptionSelect(filter.name, option)}
//                                         >
//                                             {option}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     );
//                 })}
//                 {isFilterApplied() || initialLoadCompleted === false && (
//                     <button
//                         onClick={handleClearAllFilters}
//                         className="flex items-center gap-1 py-1 px-2 rounded-md cursor-pointer bg-gray-900 text-white border border-gray-900 focus:outline-none whitespace-nowrap"
//                     >
//                         Clear All
//                     </button>
//                 )}
//             </div>
//         </>
//     );
// };

// export default FilterBar;









// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";

// const FilterBar = ({
//     filters,
//     onFilterChange,
//     onRemoveFilter,
//     onPriceRangeChange,
//     minPrice: initialMinPrice,
//     maxPrice: initialMaxPrice,
//     setMinPrice,
//     setMaxPrice,
//     sortOption,
//     onSortChange,
//     onRemoveSort,
//     currentFilters
// }) => {
//     const [openDropdown, setOpenDropdown] = useState(null);
//     const dropdownRef = useRef(null);
//     const [selectedOptions, setSelectedOptions] = useState({...currentFilters});
//     const [tempMinPrice, setTempMinPrice] = useState(initialMinPrice || "");
//     const [tempMaxPrice, setTempMaxPrice] = useState(initialMaxPrice || "");
//     const [isPriceFilterActive, setIsPriceFilterActive] = useState(initialMinPrice !== "" || initialMaxPrice !== "");
//     const [isSortFilterActive, setIsSortFilterActive] = useState(sortOption !== "Rating"); //Modified
//     const [internalSortOption, setInternalSortOption] = useState(sortOption);
//     const [shouldUpdateOnFilterChange, setShouldUpdateOnFilterChange] = useState(false);


//     // Update temp prices when initial props change
//     useEffect(() => {
//         setTempMinPrice(initialMinPrice || "");
//     }, [initialMinPrice]);

//     useEffect(() => {
//         setTempMaxPrice(initialMaxPrice || "");
//     }, [initialMaxPrice]);

//     useEffect(() => {
//         setSelectedOptions(currentFilters);
//     }, [currentFilters]);

//     useEffect(() => {
//         setIsPriceFilterActive(initialMinPrice !== "" || initialMaxPrice !== "");
//     }, [initialMinPrice, initialMaxPrice]);

//     useEffect(() => {
//         setIsSortFilterActive(sortOption !== "Rating");
//         setInternalSortOption(sortOption);
//     }, [sortOption]);

//     useEffect(() => {
//         // Update local state based on initial props or when currentFilters change
//         setShouldUpdateOnFilterChange(true);
//     }, [currentFilters, initialMinPrice, initialMaxPrice, sortOption]);

//     const handleDropdownToggle = (filterName) => {
//         setOpenDropdown(openDropdown === filterName ? null : filterName);
//     };

//     const handleOptionSelect = (filterName, option) => {
//         setSelectedOptions((prev) => ({
//             ...prev,
//             [filterName]: option,
//         }));
//         onFilterChange(filterName, option);
//         setOpenDropdown(null);
//     };

//     const handleRemoveFilter = (filterName) => {
//         const newSelectedOptions = { ...selectedOptions };
//         delete newSelectedOptions[filterName];

//         setSelectedOptions(newSelectedOptions);
//         onFilterChange(filterName, null); // Notify parent that filter is removed
//     };

//     const handleRemovePriceFilter = () => {
//         // Dynamically clear price values in parent
//         setMinPrice("");
//         setMaxPrice("");

//         // Update local temporary state as well
//         setTempMinPrice("");
//         setTempMaxPrice("");

//         onPriceRangeChange("", ""); // Clear the price range in parent
//         setIsPriceFilterActive(false);
//     };

//     const handleApplyPriceRange = () => {
//         onPriceRangeChange(tempMinPrice, tempMaxPrice);
//         setMinPrice(tempMinPrice);
//         setMaxPrice(tempMaxPrice);
//         setOpenDropdown(null);
//         setIsPriceFilterActive(true);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setOpenDropdown(null);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownRef]);

//     const handleRemoveSortFilter = () => {
//         onRemoveSort(); // Clear the sort option in the parent component
//         setIsSortFilterActive(false);
//         setInternalSortOption("Rating");
//     };

//     const handleClearAllFilters = () => {
//         // Clear Price Filter
//         setMinPrice("");
//         setMaxPrice("");
//         setTempMinPrice("");
//         setTempMaxPrice("");
//         onPriceRangeChange("", "");
//         setIsPriceFilterActive(false);

//         onSortChange("Rating");
//         setIsSortFilterActive(false);
//         setInternalSortOption("Rating")

//         // Clear all other Filters (Category, etc.)
//         Object.keys(selectedOptions).forEach((filterName) => {
//             onFilterChange(filterName, null); // Clear each filter
//         });

//         setSelectedOptions({}); // Clear the selectedOptions state
//     }
//     const renderButtonContent = (filter) => {
//         if (filter.name === 'Price') {
//             let priceText = "Price"; // Default text when no price is selected

//             if (initialMinPrice || initialMaxPrice) {
//                 priceText = `Price: ${initialMinPrice ? '$' + initialMinPrice : ''} - ${initialMaxPrice ? '$' + initialMaxPrice : ''}`;
//             }

//             return (
//                 <div className="flex items-center gap-1 justify-between md:w-auto w-full">
//                     {priceText}
//                     {isPriceFilterActive && (
//                         <span
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleRemovePriceFilter();
//                             }}
//                             className="focus:outline-none cursor-pointer"
//                         >
//                             <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm"/>
//                         </span>
//                     )}
//                     {openDropdown === filter.name ? <IoIosArrowUp/> : <IoIosArrowDown/>}
//                 </div>
//             );
//         }

//         const sortLabel = () => {
//             if (internalSortOption === "Price High to Low"){
//                 return "Price High to Low"
//             } else {
//                 return "Price Low to High"
//             }
//         }

//         if (filter.name === "Sort" && internalSortOption && internalSortOption !=="Rating") { //modified
//             return (
//                 <div className="flex items-center gap-1">
//                     {`Sort: ${sortLabel()}`}
//                     {isSortFilterActive && (
//                         <span
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleRemoveSortFilter();
//                             }}
//                             className="focus:outline-none cursor-pointer"
//                         >
//                             <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm"/>
//                         </span>
//                     )}
//                 </div>
//             );
//         }

//         if (selectedOptions[filter.name]) {
//             return (
//                 <div className="flex items-center gap-1">
//                     {`${filter.name}: ${selectedOptions[filter.name]}`}
//                     <span
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             handleRemoveFilter(filter.name);
//                         }}
//                         className="focus:outline-none cursor-pointer"
//                     >
//                         <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm"/>
//                     </span>
//                 </div>
//             );
//         } else {
//             return (
//                 <>
//                     {filter.name}
//                     {openDropdown === filter.name ? <IoIosArrowUp/> : <IoIosArrowDown/>}
//                 </>
//             );
//         }
//     };

//     const handleSortSelect = (option) => {
//         onSortChange(option); // Notify the parent component of the selected sort option
//         setOpenDropdown(null); // Close the dropdown after selection
//         setIsSortFilterActive(true);
//         setInternalSortOption(option);
//     };

//     const isFilterApplied = () => {
//         return (
//             Object.keys(selectedOptions).length > 0 ||
//             isPriceFilterActive ||
//             (internalSortOption && internalSortOption!== "Rating")
//         );
//     };


//     return (
//         <>
//             <h2 className="text-xl font-semibold mb-3">Filters</h2>
//             <div className="flex flex-wrap gap-2 items-center pb-6">
//                 {filters.map((filter) => {
//                     const isFilterSelected = selectedOptions[filter.name] ||
//                     (filter.name === "Sort" && internalSortOption && internalSortOption!== "Rating") ||
//                     (filter.name === "Price" && isPriceFilterActive);

//                     return (
//                         <div key={filter.name} className="relative md:w-auto w-full">
//                             <button
//                                 onClick={() => handleDropdownToggle(filter.name)}
//                                 className={`flex items-center justify-between gap-1 py-1 px-2 rounded-md cursor-pointer focus:outline-none whitespace-nowrap  md:w-auto w-full ${isFilterSelected ? "bg-blue-100 text-blue-800" : "border border-gray-300 hover:border-gray-400"}`}
//                             >
//                                 {renderButtonContent(filter)}
//                             </button>
//                             {openDropdown === filter.name && filter.name === 'Sort' && filter.options && (
//                                 <div
//                                     ref={dropdownRef}
//                                     className="absolute top-full left-0 mt-1  bg-white border border-gray-300 rounded-md shadow-md z-10 md:w-48 w-full"
//                                 >
//                                     {filter.options.map((option, index) => (
//                                         <div
//                                             key={index}
//                                             className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
//                                             onClick={() => handleSortSelect(option)}
//                                         >
//                                             {option}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                             {openDropdown === filter.name && filter.name === 'Price' && (
//                                 <div
//                                     ref={dropdownRef}
//                                     className="absolute top-full left-0 mt-1 md:min-w-64 md:w-auto w-full bg-white border border-gray-300 rounded-md shadow-md z-10 p-4"
//                                 >
//                                     <div className="flex flex-col items-center gap-2 mb-3">
//                                         <div className="relative w-full">
//                                             <label htmlFor="minPrice"
//                                                    className="block text-sm font-medium text-gray-700">Min</label>
//                                             <input
//                                                 type="number"
//                                                 id="minPrice"
//                                                 className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full"
//                                                 placeholder="0"
//                                                 value={tempMinPrice}
//                                                 onChange={(e) => setTempMinPrice(e.target.value)}
//                                             />
//                                         </div>
//                                         <div  className="relative w-full">
//                                             <label htmlFor="maxPrice"
//                                                    className="block text-sm font-medium text-gray-700">Max</label>
//                                             <input
//                                                 type="number"
//                                                 id="maxPrice"
//                                                 className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full"
//                                                 placeholder="15000"
//                                                 value={tempMaxPrice}
//                                                 onChange={(e) => setTempMaxPrice(e.target.value)}
//                                             />
//                                         </div>
//                                     </div>
//                                     <button
//                                         onClick={handleApplyPriceRange}
//                                         className="focus:outline-none w-full cursor-pointer custom-gradient text-white text-base font-medium rounded-full px-4 py-2 hover:bg-custom-dark transform"
//                                         >
//                                         Apply
//                                     </button>
//                                 </div>
//                             )}
//                             {openDropdown === filter.name && filter.name !== 'Price' && filter.name !== "Sort" && (
//                                 <div
//                                     ref={dropdownRef}
//                                     className="absolute top-full left-0 mt-1 md:min-w-64 md:w-auto w-full bg-white border border-gray-300 rounded-md shadow-md z-10 overflow-hidden"
//                                 >
//                                     {filter.options.map((option, index) => (
//                                         <div
//                                             key={index}
//                                             className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
//                                             onClick={() => handleOptionSelect(filter.name, option)}
//                                         >
//                                             {option}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

// export default FilterBar;









import React from "react";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
import ClickAwayListener from "@mui/material/ClickAwayListener"; // Material-UI ClickAwayListener

const FilterBar = ({
  filters,
  onFilterChange,
  onRemoveFilter,
  onPriceRangeChange,
  minPrice: initialMinPrice,
  maxPrice: initialMaxPrice,
  setMinPrice,
  setMaxPrice,
  sortOption,
  onSortChange,
  onRemoveSort,
  currentFilters,
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState({ ...currentFilters });
  const [tempMinPrice, setTempMinPrice] = useState(initialMinPrice || "");
  const [tempMaxPrice, setTempMaxPrice] = useState(initialMaxPrice || "");
  const [isPriceFilterActive, setIsPriceFilterActive] = useState(
    initialMinPrice !== "" || initialMaxPrice !== ""
  );
  const [isSortFilterActive, setIsSortFilterActive] = useState(
    sortOption !== "Rating"
  ); //Modified
  const [internalSortOption, setInternalSortOption] = useState(sortOption);
  const [shouldUpdateOnFilterChange, setShouldUpdateOnFilterChange] =
    useState(false);

  // Update temp prices when initial props change
  useEffect(() => {
    setTempMinPrice(initialMinPrice || "");
  }, [initialMinPrice]);

  useEffect(() => {
    setTempMaxPrice(initialMaxPrice || "");
  }, [initialMaxPrice]);

  useEffect(() => {
    setSelectedOptions(currentFilters);
  }, [currentFilters]);

  useEffect(() => {
    setIsPriceFilterActive(initialMinPrice !== "" || initialMaxPrice !== "");
  }, [initialMinPrice, initialMaxPrice]);

  useEffect(() => {
    setIsSortFilterActive(sortOption !== "Rating");
    setInternalSortOption(sortOption);
  }, [sortOption]);

  useEffect(() => {
    // Update local state based on initial props or when currentFilters change
    setShouldUpdateOnFilterChange(true);
  }, [currentFilters, initialMinPrice, initialMaxPrice, sortOption]);

  const handleDropdownToggle = (filterName) => {
    setOpenDropdown(openDropdown === filterName ? null : filterName);
  };

  const handleOptionSelect = (filterName, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [filterName]: option,
    }));
    onFilterChange(filterName, option);
    setOpenDropdown(null);
  };

  const handleRemoveFilter = (filterName) => {
    const newSelectedOptions = { ...selectedOptions };
    delete newSelectedOptions[filterName];

    setSelectedOptions(newSelectedOptions);
    onFilterChange(filterName, null); // Notify parent that filter is removed
  };

  const handleRemovePriceFilter = () => {
    // Dynamically clear price values in parent
    setMinPrice("");
    setMaxPrice("");

    // Update local temporary state as well
    setTempMinPrice("");
    setTempMaxPrice("");

    onPriceRangeChange("", ""); // Clear the price range in parent
    setIsPriceFilterActive(false);
  };

  const handleApplyPriceRange = () => {
    onPriceRangeChange(tempMinPrice, tempMaxPrice);
    setMinPrice(tempMinPrice);
    setMaxPrice(tempMaxPrice);
    setOpenDropdown(null);
    setIsPriceFilterActive(true);
  };

  const handleRemoveSortFilter = () => {
    onRemoveSort(); // Clear the sort option in the parent component
    setIsSortFilterActive(false);
    setInternalSortOption("Rating");
  };

  const handleClearAllFilters = () => {
    // Clear Price Filter
    setMinPrice("");
    setMaxPrice("");
    setTempMinPrice("");
    setTempMaxPrice("");
    onPriceRangeChange("", "");
    setIsPriceFilterActive(false);

    onSortChange("Rating");
    setIsSortFilterActive(false);
    setInternalSortOption("Rating");

    // Clear all other Filters (Category, etc.)
    Object.keys(selectedOptions).forEach((filterName) => {
      onFilterChange(filterName, null); // Clear each filter
    });

    setSelectedOptions({}); // Clear the selectedOptions state
  };
  const renderButtonContent = (filter) => {
    if (filter.name === "Price") {
      let priceText = "Price"; // Default text when no price is selected

      if (initialMinPrice || initialMaxPrice) {
        priceText = `Price: ${initialMinPrice ? "$" + initialMinPrice : ""} - ${
          initialMaxPrice ? "$" + initialMaxPrice : ""
        }`;
      }

      return (
        <div className="flex items-center gap-1 justify-between md:w-auto w-full">
          {priceText}
          {isPriceFilterActive && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleRemovePriceFilter();
              }}
              className="focus:outline-none cursor-pointer"
            >
              <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm" />
            </span>
          )}
          {openDropdown === filter.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      );
    }

    const sortLabel = () => {
      if (internalSortOption === "Price High to Low") {
        return "Price High to Low";
      } else {
        return "Price Low to High";
      }
    };

    if (
      filter.name === "Sort" &&
      internalSortOption &&
      internalSortOption !== "Rating"
    ) {
      //modified
      return (
        <div className="flex items-center gap-1">
          {`Sort: ${sortLabel()}`}
          {isSortFilterActive && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveSortFilter();
              }}
              className="focus:outline-none cursor-pointer"
            >
              <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm" />
            </span>
          )}
        </div>
      );
    }

    if (selectedOptions[filter.name]) {
      return (
        <div className="flex items-center gap-1">
          {`${filter.name}: ${selectedOptions[filter.name]}`}
          <span
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveFilter(filter.name);
            }}
            className="focus:outline-none cursor-pointer"
          >
            <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm" />
          </span>
        </div>
      );
    } else {
      return (
        <>
          {filter.name}
          {openDropdown === filter.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </>
      );
    }
  };

  const handleSortSelect = (option) => {
    onSortChange(option); // Notify the parent component of the selected sort option
    setOpenDropdown(null); // Close the dropdown after selection
    setIsSortFilterActive(true);
    setInternalSortOption(option);
  };

  const isFilterApplied = () => {
    return (
      Object.keys(selectedOptions).length > 0 ||
      isPriceFilterActive ||
      (internalSortOption && internalSortOption !== "Rating")
    );
  };

  const handleClickAway = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-3">Filters</h2>
      <div className="flex flex-wrap gap-2 items-center pb-6">
        {filters.map((filter) => {
          const isFilterSelected =
            selectedOptions[filter.name] ||
            (filter.name === "Sort" &&
              internalSortOption &&
              internalSortOption !== "Rating") ||
            (filter.name === "Price" && isPriceFilterActive);

          return (
            <div key={filter.name} className="relative md:w-auto w-full">
              <button
                onClick={() => handleDropdownToggle(filter.name)}
                className={`flex items-center justify-between gap-1 py-1 px-2 rounded-md cursor-pointer focus:outline-none whitespace-nowrap  md:w-auto w-full ${
                  isFilterSelected
                    ? "bg-blue-100 text-blue-800"
                    : "border border-gray-300 hover:border-gray-400"
                }`}
              >
                {renderButtonContent(filter)}
              </button>
              {openDropdown === filter.name &&
                filter.name === "Sort" &&
                filter.options && (
                  <ClickAwayListener onClickAway={handleClickAway}>
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 mt-1  bg-white border border-gray-300 rounded-md shadow-md z-10 md:w-48 w-full"
                    >
                      {filter.options.map((option, index) => (
                        <div
                          key={index}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSortSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </ClickAwayListener>
                )}
              {openDropdown === filter.name && filter.name === "Price" && (
                <ClickAwayListener onClickAway={handleClickAway}>
                  <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 mt-1 md:min-w-64 md:w-auto w-full bg-white border border-gray-300 rounded-md shadow-md z-10 p-4"
                  >
                    <div className="flex flex-col items-center gap-2 mb-3">
                      <div className="relative w-full">
                        <label
                          htmlFor="minPrice"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Min
                        </label>
                        <input
                          type="number"
                          id="minPrice"
                          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full"
                          placeholder="0"
                          value={tempMinPrice}
                          onChange={(e) => setTempMinPrice(e.target.value)}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="maxPrice"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Max
                        </label>
                        <input
                          type="number"
                          id="maxPrice"
                          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-full"
                          placeholder="15000"
                          value={tempMaxPrice}
                          onChange={(e) => setTempMaxPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      onClick={handleApplyPriceRange}
                      className="focus:outline-none w-full cursor-pointer custom-gradient text-white text-base font-medium rounded-full px-4 py-2 hover:bg-custom-dark transform"
                    >
                      Apply
                    </button>
                  </div>
                </ClickAwayListener>
              )}
              {openDropdown === filter.name &&
                filter.name !== "Price" &&
                filter.name !== "Sort" && (
                  <ClickAwayListener onClickAway={handleClickAway}>
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 mt-1 md:min-w-64 md:w-auto w-full bg-white border border-gray-300 rounded-md shadow-md z-10 overflow-hidden"
                    >
                      {filter.options.map((option, index) => (
                        <div
                          key={index}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          onClick={() =>
                            handleOptionSelect(filter.name, option)
                          }
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </ClickAwayListener>
                )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilterBar;