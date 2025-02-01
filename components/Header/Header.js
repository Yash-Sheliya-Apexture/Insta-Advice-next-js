// import React, { useState, useCallback, useEffect } from "react";
// import NavDropdown from "./NavDropdown"; // Adjust import path
// import SearchBar from "./SearchBar"; // Adjust import path
// import { FiMenu, FiX } from "react-icons/fi";
// import Link from "next/link"; // Use next/link for internal navigation
// import Image from 'next/image'
// import logo from "../../public/images/insta-logo.png"; // Use public/images for images
// import classNames from "classnames";


// const Header = () => {
//   const navLinks = [
//     {
//       label: "Hosting types",
//       dropdownItems: [
//         { label: "Web Hosting", link: "/", linkColor: "text-indigo-600" },
//         { label: "Shared Hosting", link: "/shared-hosting" },
//         { label: "WordPress Hosting", tag: "Trendy", link: "/wordpress-hosting" },
//         { label: "Cloud Hosting", link: "/cloud-hosting" },
//         { label: "VPS Hosting", tag: "Hot", link: "/vps-hosting" },
//         { label: "Dedicated Servers", link: "/dedicated-servers" },
//         { label: "Cheap VPS", tag: "Popular", link: "/cheap-vps" },
//         { label: "Reseller Hosting", link: "/reseller-hosting" },
//         { label: "Website Builders", link: "/website-builders" },
//         { label: "Cheap Web Hosting", link: "/cheap-web-hosting" },
//         { label: "Offshore Hosting", link: "/offshore-hosting" },
//         { label: "See all hosting types", link: "/all-hosting-types", bold: true },
//       ],
//     },
//     {
//       label: "Reviews",
//       dropdownItems: [
//         { label: "Hostinger", tag: "Best Overall", link: "/hostinger-review", linkColor: "text-red-500" },
//         { label: "Ultahost", link: "/ultahost-review" },
//         { label: "HostArmada", tag: "Most Affordable", link: "/hostarmada-review" },
//         { label: "FastComet", link: "/fastcomet-review" },
//         { label: "Webdock", tag: "Best VPS Hosting", link: "/webdock-review" },
//         { label: "Kamatera", link: "/kamatera-review" },
//         { label: "IONOS", link: "/ionos-review" },
//         { label: "Verpex Hosting", link: "/verpex-hosting-review" },
//         { label: "InterServer", tag: "Best Value", link: "/interserver-review" },
//         { label: "ChemiCloud", link: "/chemicloud-review" },
//         { label: "A2 Hosting", link: "/a2-hosting-review" },
//         { label: "See all hosting providers", link: "/all-hosting-providers", bold: true },
//       ],
//     },
//     {
//       label: "Comparison",
//       dropdownItems: [
//         { label: "Hostinger vs IONOS", tag: "Most searched", link: "/hostinger-vs-ionos", linkColor: "text-yellow-500" },
//         { label: "Hostinger vs A2 Hosting", link: "/hostinger-vs-a2-hosting" },
//         { label: "HostGator vs A2 Hosting", tag: "Trendy", link: "/hostgator-vs-a2-hosting" },
//         { label: "Hostinger vs HostGator", link: "/hostinger-vs-hostgator" },
//         { label: "Hostinger vs Bluehost", link: "/hostinger-vs-bluehost" },
//         { label: "IONOS vs FastComet", link: "/ionos-vs-fastcomet" },
//         { label: "GoDaddy vs Ultahost", link: "/godaddy-vs-ultahost" },
//         { label: "Bluehost vs IONOS", link: "/bluehost-vs-ionos" },
//       ],
//     },
//     {
//       label: "Resources",
//       dropdownItems: [
//         { label: "Web Hosting Advisor", tag: "Hot", link: "/web-hosting-advisor" },
//         { label: "Who is Hosting?", link: "/who-is-hosting" },
//         { label: "MarketShare", link: "/marketshare" },
//         { label: "Plans Search", tag: "Trendy", link: "/plans-search" },
//         { label: "Articles and Blogs", link: "/articles-and-blogs" },
//         { label: "See all tools", link: "/all-tools", },
//       ],
//     },
//     {
//       label: "Hosting Coupons",
//       dropdownItems: [
//         { label: "Kamatera coupon codes", tag: "Hot", link: "/kamatera-coupons" },
//         { label: "Hostinger coupon codes", link: "/hostinger-coupons" },
//         { label: "Verpex Hosting coupon codes", link: "/verpex-hosting-coupons" },
//         { label: "HostArmada coupon codes", link: "/hostarmada-coupons" },
//         { label: "Ultahost coupon codes", link: "/ultahost-coupons" },
//       ],
//     },
//   ];
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = useCallback(() => {
//     setIsMobileMenuOpen((prev) => {
//       const newMobileMenuOpen = !prev;
//       if (newMobileMenuOpen) {
//         document.body.style.overflow = "hidden"; // Prevent body scroll
//       } else {
//         document.body.style.overflow = "auto"; // Enable body scroll
//       }
//       return newMobileMenuOpen;
//     });
//   }, []);

//   const closeMobileMenu = useCallback(() => {
//     setIsMobileMenuOpen(false);
//     document.body.style.overflow = "auto";
//     setOpenDropdown(null);
//   }, [setOpenDropdown]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1025 && isMobileMenuOpen) {
//         setIsMobileMenuOpen(false);
//         document.body.style.overflow = "auto";
//         setOpenDropdown(null);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [isMobileMenuOpen, setOpenDropdown, setIsMobileMenuOpen]);

//   return (
//     <header className="sticky top-0 bg-white py-4 shadow-md z-50">
//       {/* Overlay when Mobile Menu is open */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-40 blur-sm  lg:hidden"
//           onClick={closeMobileMenu}
//         />
//       )}
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Left Side: Name */}
//           <div className="flex items-center">
//             <Image
//               src={logo}
//               alt="Insta Advice Logo"
//               width={100} // Explicit width for optimization
//               height={50} // Explicit height for optimization
//               className="w-10 h-auto mr-2"
//             />
//             <Link href="/" className="text-xl font-bold text-dark-color">
//               Insta Advice
//             </Link>
//           </div>

//           {/* Center: Navigation Links */}
//           <nav
//             className={classNames(
//               "lg:flex fixed top-0 right-0 bg-white transition-transform duration-700 ease-in-out transform z-50",
//               isMobileMenuOpen
//                 ? "translate-x-0 flex flex-col h-screen overflow-y-auto w-[350px] max-w-[80%] shadow-lg"
//                 : "translate-x-full w-0 lg:translate-x-0 lg:w-auto lg:static lg:flex"
//             )}
//           >
//             {/* Logo, Website Name and Close Button (Mobile Menu) */}
//             {isMobileMenuOpen && (
//               <div className="flex items-center justify-between p-4 border-b border-gray-300">
//                 <div className="flex items-center">
//                   <Image
//                     src={logo}
//                     alt="Insta Advice Logo"
//                     width={100} // Explicit width for optimization
//                     height={50} // Explicit height for optimization
//                     className="w-10 h-auto mr-2"
//                   />
//                   <Link href="/" className="text-xl font-bold text-dark-color">
//                     Insta Advice
//                   </Link>
//                 </div>
//                 <button
//                   onClick={closeMobileMenu}
//                   className="focus:outline-none ml-auto"
//                 >
//                   <FiX className="size-6" />
//                 </button>
//               </div>
//             )}
//             {/* Top Navigation Links */}
//             <div className="lg:flex lg:items-center space-y-2 lg:space-y-0">
//               {navLinks.map((link, index) => (
//                 <NavDropdown
//                   key={index}
//                   label={link.label}
//                   items={link.dropdownItems}
//                   isOpen={openDropdown === link.label}
//                   setOpenDropdown={setOpenDropdown}
//                   isMobileMenuOpen={isMobileMenuOpen}
//                   closeMobileMenu={closeMobileMenu}
//                 />
//               ))}
//             </div>

//             {/* Bottom Sign In and Sign Up buttons for mobile menu */}
//             {isMobileMenuOpen && (
//               <div className="mt-auto border-t border-gray-300 p-4 flex flex-col gap-4">
//                 <button className="text-dark-color bg-gray-300 py-1.5 px-4 rounded-md hover:text-gray-800 font-medium text-start">
//                   <Link href="/signin" onClick={closeMobileMenu} className="text-dark-color bg-gray-300 py-1.5 px-4 rounded-md hover:text-gray-800 font-medium text-start">
//                     Sign in
//                   </Link>
//                 </button>
//                 <button className="bg-gray-900 text-white py-1.5 px-4 rounded-md text-start">
//                   <Link href="/signup" onClick={closeMobileMenu} className="bg-gray-900 text-white py-1.5 px-4 rounded-md text-start">
//                     Sign Up
//                   </Link>
//                 </button>
//               </div>
//             )}
//           </nav>

//           {/* Right Side: Search Bar and Mobile Menu Icon */}
//           <div className="flex items-center gap-2">
//               <SearchBar className="text-gray-500"/>
//             {/* Conditional Menu/Open Button */}
//             <button onClick={toggleMobileMenu} className="block lg:hidden">
//               <FiMenu className="size-6" />
//             </button>

//             <div className="hidden lg:flex gap-4 border-l border-gray-300 pl-4">
//               <button className="text-gray-500 hover:text-gray-800 font-medium">
//                 <Link href="/signin">Sign in</Link>
//               </button>
//               <button className="bg-gray-900 text-white py-1.5 px-4 rounded-md ">
//                 <Link href="/signup">Sign Up</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




// import React, { useState, useCallback, useEffect } from "react";
// import NavDropdown from "./NavDropdown"; // Adjust import path
// import SearchBar from "./SearchBar"; // Adjust import path
// import { FiMenu, FiX } from "react-icons/fi";
// import Link from "next/link"; // Use next/link for internal navigation
// import Image from 'next/image'
// import logo from "../../public/images/insta-logo.png"; // Use public/images for images
// import classNames from "classnames";


// const Header = () => {

//   const navLinks = [
//     {
//       label: "Home",
//       link: "/"
//     },
//     {
//       label: "Service Reviews",
//       dropdownItems: [
//         { label: "Plixi", link: "/company/plixi", tag: "Trendy" },
//         { label: "2 Service", link: "/service-2" },
//         { label: "3 Service", link: "/service-3", tag: "Popular" },
//         { label: "4 Service", link: "/service-4" },
//         { label: "5 Service", link: "/service-5", tag: "Hot" },
//         { label: "See all Reviews", link: "/company", bold: true },
//       ],
//     },
//     {
//       label: "Comparison",
//       dropdownItems: [
//         { label: "Comparison 1", link: "/comparison-1" },
//         { label: "Comparison 2", link: "/comparison-2" },
//         { label: "Comparison 3", link: "/comparison-3" },
//       ],
//     },
//     {
//       label: "About Us",
//       link: "/about-us"
//     },
//     // {
//     //   label: "Blog",
//     //   dropdownItems: [
//     //     { label: "1 Blog", link: "/blog-1" },
//     //     { label: "2 Blog", link: "/blog-2" },
//     //     { label: "3 Blog", link: "/blog-3" },
//     //     { label: "4 Blog", link: "/blog-4" },
//     //     { label: "5 Blog", link: "/blog-5" },
//     //   ],
//     // },
//     {
//       label: "Contact Us",
//       link: "/contact-us",
//     },
//   ];



//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = useCallback(() => {
//     setIsMobileMenuOpen((prev) => {
//       const newMobileMenuOpen = !prev;
//       if (newMobileMenuOpen) {
//         document.body.style.overflow = "hidden"; // Prevent body scroll
//       } else {
//         document.body.style.overflow = "auto"; // Enable body scroll
//       }
//       return newMobileMenuOpen;
//     });
//   }, []);

//   const closeMobileMenu = useCallback(() => {
//     setIsMobileMenuOpen(false);
//     document.body.style.overflow = "auto";
//     setOpenDropdown(null);
//   }, [setOpenDropdown]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1025 && isMobileMenuOpen) {
//         setIsMobileMenuOpen(false);
//         document.body.style.overflow = "auto";
//         setOpenDropdown(null);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [isMobileMenuOpen, setOpenDropdown, setIsMobileMenuOpen]);

//   return (
//     <header className="sticky top-0 bg-white py-4 shadow-md z-50">
//       {/* Overlay when Mobile Menu is open */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-40 blur-sm lg:hidden"
//           onClick={closeMobileMenu}
//         />
//       )}
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Left Side: Name */}
//           <div className="flex items-center">
//             <Image
//               src={logo}
//               alt="Insta Advice Logo"
//               width={100} // Explicit width for optimization
//               height={50} // Explicit height for optimization
//               className="w-10 h-auto mr-2"
//             />
//             <Link href="/" className="text-xl font-bold text-dark-color">
//               Insta Advice
//             </Link>
//           </div>

//           {/* Center: Navigation Links */}
//           <nav
//             className={classNames(
//               "lg:flex fixed top-0 right-0 bg-white transition-transform duration-700 ease-in-out transform z-50",
//               isMobileMenuOpen
//                 ? "translate-x-0 flex flex-col h-screen overflow-y-auto w-[350px] max-w-[80%] shadow-lg"
//                 : "translate-x-full w-0 lg:translate-x-0 lg:w-auto lg:static lg:flex"
//             )}
//           >
//             {/* Logo, Website Name and Close Button (Mobile Menu) */}
//             {isMobileMenuOpen && (
//               <div className="flex items-center justify-between p-4 border-b border-gray-300">
//                 <div className="flex items-center">
//                   <Image
//                     src={logo}
//                     alt="Insta Advice Logo"
//                     width={100} // Explicit width for optimization
//                     height={50} // Explicit height for optimization
//                     className="w-10 h-auto mr-2"
//                   />
//                   <Link href="/" className="text-xl font-bold text-dark-color">
//                     Insta Advice
//                   </Link>
//                 </div>
//                 <button
//                   onClick={closeMobileMenu}
//                   className="focus:outline-none ml-auto"
//                 >
//                   <FiX className="size-6" />
//                 </button>
//               </div>
//             )}

//             {/* Top Navigation Links */}
//             <div className="lg:flex lg:items-center space-y-2 lg:space-y-0">
//               {navLinks.map((link, index) =>
//                 link.dropdownItems ? (
//                   <NavDropdown
//                     key={index}
//                     label={link.label}
//                     items={link.dropdownItems}
//                     isOpen={openDropdown === link.label}
//                     setOpenDropdown={setOpenDropdown}
//                     isMobileMenuOpen={isMobileMenuOpen}
//                     closeMobileMenu={closeMobileMenu}
//                   />
//                 ) : (
//                   <Link href={link.link} key={index} className="px-3 py-2 cursor-pointer text-dark-color font-medium">
//                     {link.label}
//                   </Link>
//                 )
//               )}
//             </div>

//             {/* Bottom Sign In and Sign Up buttons for mobile menu */}
//             {isMobileMenuOpen && (
//               <div className="mt-auto border-t border-gray-300 p-4 flex flex-col gap-4">
//                 <button className="text-dark-color bg-gray-300 py-1.5 px-4 rounded-md hover:text-gray-800 font-medium text-start">
//                   <Link href="/signin" onClick={closeMobileMenu} className="text-dark-color bg-gray-300 py-1.5 px-4 rounded-md hover:text-gray-800 font-medium text-start">
//                     Sign in
//                   </Link>
//                 </button>
//                 <button className="bg-gray-900 text-white py-1.5 px-4 rounded-md text-start">
//                   <Link href="/signup" onClick={closeMobileMenu} className="bg-gray-900 text-white py-1.5 px-4 rounded-md text-start">
//                     Sign Up
//                   </Link>
//                 </button>
//               </div>
//             )}
//           </nav>

//           {/* Right Side: Search Bar and Mobile Menu Icon */}
//           <div className="flex items-center gap-2">
//             <SearchBar className="text-gray-500" />
//             {/* Conditional Menu/Open Button */}
//             <button onClick={toggleMobileMenu} className="block lg:hidden">
//               <FiMenu className="size-6" />
//             </button>

//             <div className="hidden lg:flex gap-4 border-l border-gray-300 pl-4">
//               <button className="text-gray-500 hover:text-gray-800 font-medium">
//                 <Link href="/signin">Sign in</Link>
//               </button>
//               <button className="bg-gray-900 text-white py-1.5 px-4 rounded-md ">
//                 <Link href="/signup">Sign Up</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




import React, { useState, useCallback, useEffect } from "react";
import NavDropdown from "./NavDropdown";
import SearchBar from "./SearchBar";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from 'next/image';
import logo from "../../public/images/insta-logo.png";
import classNames from "classnames";

const Header = () => {
    const navLinks = [
        { label: "Home", link: "/" },
        {
            label: "Service Reviews",
            dropdownItems: [
                { label: "Ascend Viral", link: "/company/ascend-viral", tag: "Most Affordable" },
                { label: "Upgrow", link: "/company/upgrow" },
                { label: "Upleap", link: "/company/upleap"},
                { label: "Path Social", link: "/company/path-social" },
                { label: "Flock Social", link: "/company/flock-social" },
                { label: "Nitreo", link: "/company/nitreo" },
                { label: "kicksta", link: "/company/kicksta" },
                { label: "SocialPilot", link: "/company/socialpilot" },
                { label: "GRAMiety", link: "/company/gramiety" },
                { label: "Plixi", link: "/company/plixi", },
                { label: "See all Reviews", link: "/company", bold: true },
            ],
        },
        {
            label: "Comparison",
            dropdownItems: [
                { label: "AscendViral vs Plixi", link: "/comparison/ascendviral-vs-plixi" },
                { label: "AscendViral vs Upleap", link: "/comparison-2" },
                { label: "AscendViral vs Upgrow", link: "/comparison-3" },
                { label: "Upgrow vs Upleap", link: "/comparison-3" },
                { label: "Upgrow vs Plixi", link: "/comparison-3" },
                { label: "Plixi vs Path social", link: "/comparison-3" },
                { label: "Kicksta vs path social", link: "/comparison-3" },
                { label: "AscendViral vs Path social ", link: "/comparison-3" },
                { label: "See all Comparison", link: "/comparison", bold: true },
            ],
        },
        { label: "About Us", link: "/about-us" },
        { label: "Blog", link: "/post" },
        { label: "Contact", link: "/contact-us"}

    ];

    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "auto";
        setOpenDropdown(null);
    }, [setOpenDropdown]);


    const handleNavLinkClick = useCallback(() => {
        if (isMobileMenuOpen) {
            closeMobileMenu();
        }
        setOpenDropdown(null)
    }, [isMobileMenuOpen, closeMobileMenu, setOpenDropdown]);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => {
            const newMobileMenuOpen = !prev;
            if (newMobileMenuOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
            return newMobileMenuOpen;
        });
    }, []);



    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1025 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = "auto";
                setOpenDropdown(null);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMobileMenuOpen, setOpenDropdown, setIsMobileMenuOpen]);


    return (
        <header className="sticky top-0 bg-white py-4 shadow-md z-50">
            {isMobileMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-40  lg:hidden"
                    onClick={closeMobileMenu}
                />
            )}
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Image
                            src={logo}
                            alt="Insta Advice Logo"
                            width={100} // Explicit width for optimization
                            height={50} // Explicit height for optimization
                            className="w-10 h-auto mr-2"
                        />
                        <Link href="/" className="text-xl font-bold text-dark-color" onClick={handleNavLinkClick} >
                            Insta Advice
                        </Link>
                    </div>

                    <nav
                        className={classNames(
                            "lg:flex fixed top-0 right-0 bg-white transition-transform duration-700 ease-in-out transform z-50",
                            isMobileMenuOpen
                                ? "translate-x-0 flex flex-col h-screen overflow-y-auto w-[350px] max-w-[80%] shadow-lg"
                                : "translate-x-full w-0 lg:translate-x-0 lg:w-auto lg:static lg:flex"
                        )}
                    >
                        {isMobileMenuOpen && (
                            <div className="flex items-center justify-between p-4 border-b border-gray-300">
                                <div className="flex items-center">
                                    <Image
                                        src={logo}
                                        alt="Insta Advice Logo"
                                        width={100} // Explicit width for optimization
                                        height={50} // Explicit height for optimization
                                        className="w-10 h-auto mr-2"
                                    />
                                    <Link href="/" className="text-xl font-bold text-dark-color" onClick={handleNavLinkClick}>
                                        Insta Advice
                                    </Link>
                                </div>
                                <button
                                    onClick={closeMobileMenu}
                                    className="focus:outline-none ml-auto"
                                >
                                    <FiX className="size-6" />
                                </button>
                            </div>
                        )}

                        <div className="lg:flex lg:items-center">
                            {navLinks.map((link, index) =>
                                link.dropdownItems ? (
                                    <NavDropdown
                                        key={index}
                                        label={link.label}
                                        items={link.dropdownItems}
                                        isOpen={openDropdown === link.label}
                                        setOpenDropdown={setOpenDropdown}
                                        isMobileMenuOpen={isMobileMenuOpen}
                                        closeMobileMenu={closeMobileMenu}
                                    />
                                ) : (
                                    <Link href={link.link} key={index} className="px-3 py-2 cursor-pointer text-dark-color font-medium block" onClick={handleNavLinkClick}>
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </div>

                        {isMobileMenuOpen && (
                            <div className="mt-auto border-t border-gray-300 p-4 flex flex-col gap-4">
                                <Link href="/contact-us" className="bg-gray-900 text-center text-white py-1.5 px-4 rounded-md ">Contact Us</Link>
                            </div>
                        )}
                    </nav>

                    <div className="flex items-center gap-2">
                        <SearchBar className="text-gray-500" specificIds={[206, 272, 276]} />
                        <button onClick={toggleMobileMenu} className="block lg:hidden">
                            <FiMenu className="size-6" />
                        </button>

                        {/* <div className="hidden lg:flex gap-4 border-l border-gray-300 pl-4">
                            <Link href="/contact-us" className="bg-gray-900 text-white py-1.5 px-4 rounded-md ">Contact Us</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;