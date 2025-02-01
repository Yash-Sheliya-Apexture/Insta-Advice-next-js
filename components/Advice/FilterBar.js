// import React, { useState, useRef, useEffect } from "react";
// import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";

// const FilterBar = ({ filters, onFilterChange }) => {
//     const [openDropdown, setOpenDropdown] = useState(null);
//     const dropdownRef = useRef(null);
//     const [selectedOptions, setSelectedOptions] = useState({});

//     const handleDropdownToggle = (filterName) => {
//         setOpenDropdown(openDropdown === filterName ? null : filterName);
//     };

//     const handleOptionSelect = (filterName, option) => {
//         setSelectedOptions((prev) => ({
//             ...prev,
//             [filterName]: option,
//         }));
//         onFilterChange(filterName, option);
//        setOpenDropdown(null);
//     };

//     const handleRemoveFilter = (filterName) => {
//         setSelectedOptions((prev) => {
//             const { [filterName]: removed, ...rest } = prev;
//            return rest;
//         });
//         onFilterChange(filterName, null);
//     };

//   //handle click outside
//   useEffect(() => {
//         const handleClickOutside = (event) => {
//           if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setOpenDropdown(null);
//           }
//       };

//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//   }, [dropdownRef]);

//     const renderButtonContent = (filter) => {
//         if (selectedOptions[filter.name]) {
//            return (
//                <div className="flex items-center gap-1">
//                    {`${filter.name}: ${selectedOptions[filter.name]}`}
//                     <button
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             handleRemoveFilter(filter.name);
//                         }}
//                         className="focus:outline-none"
//                     >
//                          <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm" />
//                     </button>
//                 </div>
//            );
//         } else {
//            return (
//                 <>
//                     {filter.name}
//                     {openDropdown === filter.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
//                 </>
//            );
//         }
//     };

//     return (
//         <>
//             <h2 className="text-xl font-semibold mb-3">Filters</h2>
//             <div className="flex flex-wrap gap-2 items-center pb-6">
//                 {filters.map((filter) => (
//                     <div key={filter.name} className="relative">
//                         <button
//                             onClick={() => handleDropdownToggle(filter.name)}
//                             className={`flex items-center gap-1 py-1 px-2 rounded-md  focus:outline-none whitespace-nowrap
//                     ${
//                         selectedOptions[filter.name]
//                             ? "bg-blue-100 text-blue-800"
//                             : "border border-gray-300 hover:border-gray-400"
//                     }
//                     `}
//                         >
//                             {renderButtonContent(filter)}
//                         </button>
//                         {openDropdown === filter.name && (
//                             <div
//                                 ref={dropdownRef}
//                                 className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-md z-10"
//                            >
//                                 {filter.options.map((option, index) => (
//                                     <div
//                                         key={index}
//                                         className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
//                                         onClick={() => handleOptionSelect(filter.name, option)}
//                                     >
//                                         {option}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//            </div>
//         </>
//     );
// };
// export default FilterBar;



import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";

const FilterBar = ({ filters, onFilterChange, onRemoveFilter }) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);
    const [selectedOptions, setSelectedOptions] = useState({});

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
        setSelectedOptions((prev) => {
            const { [filterName]: removed, ...rest } = prev;
            return rest;
        });
        onRemoveFilter(filterName); // Call the onRemoveFilter function passed from parent
    };

    //handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const renderButtonContent = (filter) => {
        if (selectedOptions[filter.name]) {
            return (
                <div className="flex items-center gap-1">
                    {`${filter.name}: ${selectedOptions[filter.name]}`}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveFilter(filter.name);
                        }}
                        className="focus:outline-none"
                    >
                        <IoMdClose className="text-blue-600 hover:text-blue-900 text-sm" />
                    </button>
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

    return (
        <>
            <h2 className="text-xl font-semibold mb-3">Filters</h2>
            <div className="flex flex-wrap gap-2 items-center pb-6">
                {filters.map((filter) => (
                    <div key={filter.name} className="relative">
                        <button
                            onClick={() => handleDropdownToggle(filter.name)}
                            className={`flex items-center gap-1 py-1 px-2 rounded-md  focus:outline-none whitespace-nowrap
                            ${
                                selectedOptions[filter.name]
                                    ? "bg-blue-100 text-blue-800"
                                    : "border border-gray-300 hover:border-gray-400"
                            }
                            `}
                        >
                            {renderButtonContent(filter)}
                        </button>
                        {openDropdown === filter.name && (
                            <div
                                ref={dropdownRef}
                                className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-md z-10"
                            >
                                {filter.options.map((option, index) => (
                                    <div
                                        key={index}
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleOptionSelect(filter.name, option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default FilterBar;
