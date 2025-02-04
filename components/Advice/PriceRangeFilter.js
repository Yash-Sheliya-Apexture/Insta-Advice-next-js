import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const PriceRangeFilter = ({ onPriceChange, isOpen, setIsOpen }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [tempMinPrice, setTempMinPrice] = useState('');
    const [tempMaxPrice, setTempMaxPrice] = useState('');
    const dropdownRef = useRef(null);


    const handleMinChange = (e) => {
        setTempMinPrice(e.target.value);
    };

    const handleMaxChange = (e) => {
        setTempMaxPrice(e.target.value);
    };

    const handleApply = () => {
        setMinPrice(tempMinPrice);
        setMaxPrice(tempMaxPrice);
        setIsOpen(false); // Close on apply
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            // When opening, store current values as temporary
            setTempMinPrice(minPrice);
            setTempMaxPrice(maxPrice);
        }
    };

    useEffect(() => {
        // Debounce or throttle this effect to avoid excessive updates
        const timeoutId = setTimeout(() => {
            if ((minPrice === '' || !isNaN(Number(minPrice))) && (maxPrice === '' || !isNaN(Number(maxPrice)))) {
                onPriceChange({ min: minPrice === '' ? null : Number(minPrice), max: maxPrice === '' ? null : Number(maxPrice) });
            }
        }, 300); // Delay of 300ms

        return () => clearTimeout(timeoutId);
    }, [minPrice, maxPrice, onPriceChange]);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef, setIsOpen]);

    return (
        <div className="relative">
            <button
                onClick={handleToggle}
                className={`flex items-center justify-between w-full py-1 px-2 rounded focus:outline-none  text-gray-700 border border-gray-300 hover:border-gray-400  ${isOpen ? 'bg-gray-100' : ''}`}
            >
                Price
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {isOpen && (
                <div ref={dropdownRef} className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-md z-10 p-4">
                    <div className="mb-2">
                        <label htmlFor="min-price" className="block text-gray-700 text-sm font-bold mb-1">
                            Min
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-gray-500">
                                $
                            </span>
                            <input
                                type="number"
                                id="min-price"
                                className="shadow appearance-none border rounded w-full py-2 px-3 pl-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="0"
                                value={tempMinPrice}
                                onChange={handleMinChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="max-price" className="block text-gray-700 text-sm font-bold mb-1">
                            Max
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-gray-500">
                                $
                            </span>
                            <input
                                type="number"
                                id="max-price"
                                className="shadow appearance-none border rounded w-full py-2 px-3 pl-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="15000"
                                value={tempMaxPrice}
                                onChange={handleMaxChange}
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleApply}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-full"
                    >
                        Apply
                    </button>
                </div>
            )}
        </div>
    );
};

export default PriceRangeFilter;