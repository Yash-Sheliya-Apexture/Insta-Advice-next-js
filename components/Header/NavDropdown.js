// // NavDropdown.js
// import React, { useRef, useEffect } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { FaArrowRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import classNames from "classnames";

// const tagStyles = {
//   Hot: "bg-orange-100 text-orange-600",
//   Trendy: "bg-green-100 text-green-600",
//   Popular: "bg-blue-100 text-blue-600",
//   "Best Overall": "bg-purple-100 text-purple-600",
//   "Most Affordable": "bg-yellow-100 text-yellow-600",
//   "Best VPS Hosting": "bg-pink-100 text-pink-600",
//   "Best Value": "bg-gray-100 text-gray-600",
//   "Most searched": "bg-lime-100 text-lime-600",
// };

// const NavDropdown = ({
//   label,
//   items,
//   isOpen,
//   setOpenDropdown,
//   isMobileMenuOpen,
//   closeMobileMenu,
// }) => {
//   const dropdownRef = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (buttonRef.current && buttonRef.current.contains(event.target)) {
//         return;
//       }
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleOutsideClick);
//     } else {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [isOpen, setOpenDropdown]);

//   return (
//     <div
//       className={classNames("px-3 py-2 relative", {
//         "z-20": isOpen && isMobileMenuOpen,
//       })}
//       ref={dropdownRef}
//     >
//       <button
//         onClick={() => setOpenDropdown(isOpen ? null : label)}
//         ref={buttonRef}
//         className="text-base text-dark-color font-medium focus:outline-none flex items-center justify-between w-full"
//         aria-haspopup="true"
//         aria-expanded={isOpen}
//       >
//         {label}
//         <IoIosArrowDown
//           className={`ml-1 h-4 w-4 fill-current transition-transform duration-300 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </button>
//       <nav
//         className={classNames(
//           "absolute top-[40px] lg:top-[56px] bg-white border rounded-xl shadow-md z-10 transform transition-all duration-300 ease-in-out text-nowrap",
//           isOpen
//             ? "opacity-100 scale-100 translate-y-0"
//             : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
//           {
//             "w-full left-0 top-full overflow-y-auto": isMobileMenuOpen,
//             "max-h-[calc(100vh_-_220px)]": isMobileMenuOpen,
//             "w-96": isOpen && !isMobileMenuOpen,
//           }
//         )}
//       >
//         <ul className="">
//           {items.map((item, index) => (
//             <li key={index} className="">
//               <Link
//                 to={item.link}
//                 onClick={closeMobileMenu}
//                 // className={classNames(
//                 //   "block px-5 py-2.5 relative flex items-center justify-between text-sm rounded-lg",
//                 //   item.bold ? "text-blue-600 font-medium hover:text-blue-700" : "text-light-color",
//                 //   item.linkColor || "hover:text-dark-color", // Apply hover effect only if linkColor is not present
//                 //   { "hover:text-dark-color": !item.linkColor } // Explicitly remove hover effect when linkColor exists
//                 // )}

//                 className={classNames(
//                   "block px-5 py-2.5 relative flex items-center justify-between text-sm rounded-lg",
//                   {
//                     "text-blue-600 font-medium hover:text-blue-800": item.bold,
//                     "text-light-color hover:text-dark-color":
//                       !item.bold && !item.linkColor,
//                     [item.linkColor]: item.linkColor,
//                   }
//                 )}
//               >
//                 {item.label}
//                 {item.bold && <FaArrowRight className="w-4 h-4 ml-1" />}
//                 {item.tag && (
//                   <span
//                     className={`ml-2 text-xs font-medium px-2 py-0.5 rounded ${
//                       tagStyles[item.tag] || ""
//                     }`}
//                   >
//                     {item.tag}
//                   </span>
//                 )}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default NavDropdown;


import React, { useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link"; // Import Link from next/link
import classNames from "classnames";

const tagStyles = {
  Hot: "bg-orange-100 text-orange-600",
  Trendy: "bg-green-100 text-green-600",
  Popular: "bg-blue-100 text-blue-600",
  "Best Overall": "bg-purple-100 text-purple-600",
  "Most Affordable": "bg-yellow-100 text-yellow-600",
  "Expert's Choice": "bg-pink-200 text-pink-900",
  "Best VPS Hosting": "bg-pink-100 text-pink-600",
  "Best Value": "bg-gray-100 text-gray-600",
  "Most searched": "bg-lime-100 text-lime-600",
};

const NavDropdown = ({
  label,
  items,
  isOpen,
  setOpenDropdown,
  isMobileMenuOpen,
  closeMobileMenu,
}) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, setOpenDropdown]);


  return (
    <div
      className={classNames("relative", {
        "z-20": isOpen && isMobileMenuOpen,
      })}
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpenDropdown(isOpen ? null : label)}
        ref={buttonRef}
        className="text-base px-3 py-2 cursor-pointer text-dark-color font-medium focus:outline-none flex items-center justify-between w-full"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}
        <IoIosArrowDown
          className={`ml-1 h-4 w-4 fill-current transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <nav
        className={classNames(
          "absolute top-[40px] lg:top-[47px] z-10 transform transition-all duration-300 ease-in-out text-nowrap p-2.5",
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
          {
            "w-full left-0 top-full overflow-y-auto": isMobileMenuOpen,
            "max-h-[calc(100vh_-_220px)]": isMobileMenuOpen,
            "w-96": isOpen && !isMobileMenuOpen,
          }
        )}
      >
        <ul className="bg-white border border-gray-300 rounded-xl shadow-md"> {/* Add space-y-2 for better spacing */}
          {items.map((item) => (
            <li key={item.label}>
              <Link href={item.link} onClick={closeMobileMenu}
                className={classNames(
                  "px-4 py-2.5 relative flex items-center justify-between text-sm rounded-lg",
                  {
                    "text-blue-600 font-medium hover:text-blue-800": item.bold,
                    "text-light-color hover:text-dark-color":
                      !item.bold && !item.linkColor,
                    [item.linkColor]: item.linkColor,
                  }
                )}
              >
                {item.label}
                {item.bold && <FaArrowRight className="w-4 h-4 ml-1" />}
                {item.tag && (
                  <span
                    className={`ml-2 text-xs font-medium px-2 py-0.5 rounded ${tagStyles[item.tag]}`}
                  >
                    {item.tag}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavDropdown;