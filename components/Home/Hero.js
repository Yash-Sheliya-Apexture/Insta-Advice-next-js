// import React, { useMemo } from "react";
// import Image from "next/image"; // Use Next.js Image component
// import HostCard from './HeroHostCard'; // Assuming HostCard is inside a 'Hero' folder

// const Hero = () => {
//   const hostData = useMemo(
//     () => [
//       {
//         id: 1,
//         logo: "/images/ionos-logo.webp", // Image paths should be relative to the public folder
//         rating: 5,
//         reviews: "1,856", // Added reviews here
//         features: [
//           "Top Security with SSL Certificates",
//           "Unlimited websites",
//           "30-day Money-back Guarantee",
//         ],
//       },
//       {
//         id: 2,
//         logo: "/images/ultahost-logo.png", // Image paths should be relative to the public folder
//         rating: 3,
//         reviews: "1,237", // Added reviews here
//         features: [
//           "Free Daily Backups",
//           "High Performance Servers",
//           "Free Trial – 30 Day Money Back",
//         ],
//       },
//       {
//         id: 3,
//         logo: "/images/hostinger-logo.png", // Image paths should be relative to the public folder
//         rating: 4.7,
//         reviews: "987", // Added reviews here
//         features: [
//           "99.9% Uptime Guarantee",
//           "Free Domain Registration",
//           "Risk-free 30 Days Moneyback guarantee",
//         ],
//       },
//     ],
//     []
//   );

//   return (
//     <section className="relative bg-gradient-to-br from-teal-600 to-blue-500 text-white py-8 md:py-16 overflow-hidden">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//           {/* Text Content */}
//           <div className="lg:w-1/2">
//             <span className="text-lg md:text-xl">Updated on December 7, 2024</span>
//             <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
//               Start, grow and manage your online business
//             </h1>
//             <p className="text-lg md:text-xl font-medium mt-6 ">
//               Experience the difference: Our expertise transforms websites into
//               lucrative ventures, setting new standards for online success.
//             </p>
//             <button className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-main-shadow transition duration-300 mt-4">
//               Get Started Today
//             </button>
//           </div>

//           {/* Hero Image */}
//           <div className="lg:w-1/2 hidden justify-center md:flex">
//             <Image
//               src="/images/hosting.jpg" // Image should be in the public folder
//               alt="Illustration of online growth"
//               width={600} // Specify width for Image component
//               height={400} // Specify height for Image component
//               className="max-w-full h-auto rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Host Cards */}
//         <div className="mt-8 md:mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
//           {hostData.map((host) => (
//             <HostCard key={host.id} {...host} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import HostCard from "./HeroHostCard";
// import Link from "next/link";

// const Hero = () => {
//   const [hostData, setHostData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHosts = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//         );
//         if (!response.ok) throw new Error("Failed to fetch data");
//         const data = await response.json();

//         // Transform API data to match HostCard structure
//         const formattedData = data.map((item) => {
//           let imageUrl = "/images/default-logo.png"; // Default logo

//           // Extract image from _embedded['wp:featuredmedia']
//           if (item.acf?.company_logo && item._embedded?.["wp:featuredmedia"]) {
//             const mediaItem = item._embedded["wp:featuredmedia"].find(
//               (media) => media.id === item.acf.company_logo
//             );
//             if (mediaItem) {
//               imageUrl = mediaItem.source_url;
//             }
//           }

//           return {
//             id: item.id,
//             logo: imageUrl,
//             rating: parseFloat(item.acf?.rating) || 0,
//             reviews: item.acf?.user_reviews || "0",
//             features: item.acf?.features?.split("\n") || [],
//             visitSiteUrl: item.acf?.visit_site_url,
//             signalPageUrl: `/company/${item.slug}`
//           };
//         });
//         setHostData(formattedData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHosts();
//   }, []);

//   return (
//     <section className="relative bg-gradient-to-br from-teal-600 to-blue-500 text-white py-8 md:py-16 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//           {/* Text Content */}
//           <div className="lg:w-1/2">
//             <span className="text-lg md:text-xl">Updated on January 30, 2025</span>
//             <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
//             Plan Your Instagram Growth, Grow Your Audience, Build Your Brand
//             </h1>
//             <p className="text-lg md:text-xl font-medium mt-6">
//             We help you choose the ideal growth tools that get you real followers, engagement, and brand visibility.
//             </p>
//             <Link href="/company" className="inline-block bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-main-shadow transition duration-300 mt-4">
//               Get Started Today
//             </Link>
//           </div>

//           {/* Hero Image */}
//           <div className="lg:w-1/2 hidden justify-center md:flex">
//             <Image
//               src="/images/hosting.jpg"
//               alt="Illustration of online growth"
//               width={600}
//               height={400}
//               className="max-w-full h-auto rounded-lg"
//               priority // Add priority for above-the-fold image
//               // layout="intrinsic" // Ensures aspect ratio is preserved
//             />
//           </div>
//         </div>

//         {/* Host Cards */}
//         <div className="mt-8 md:mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
//           {loading && <p className="text-center text-white">Loading hosts...</p>}
//           {error && <p className="text-center text-red-400">{error}</p>}
//           {hostData.map((host) => (
//             <HostCard key={host.id} {...host} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import HostCard from "./HeroHostCard";
// import Link from "next/link";

// const Hero = () => {
//   const [hostData, setHostData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const targetPostIds = [206, 272, 276];

//   useEffect(() => {
//     const fetchHosts = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//         );
//         if (!response.ok) throw new Error("Failed to fetch data");
//         const data = await response.json();

//           // Create a map for faster lookup
//           const dataMap = new Map(data.map(item => [item.id, item]));

//           // Use targetPostIds to map and order the posts
//            const orderedData = targetPostIds.reduce((acc,id)=>{
//              const item = dataMap.get(id)
//              if(item){
//                  acc.push(item)
//              }
//              return acc;
//             },[]);

//          // Transform API data to match HostCard structure
//          const formattedData = orderedData.map((item) => {
//           let imageUrl = "/images/default-logo.png"; // Default logo

//           // Extract image from _embedded['wp:featuredmedia']
//           if (item.acf?.company_logo && item._embedded?.["wp:featuredmedia"]) {
//             const mediaItem = item._embedded["wp:featuredmedia"].find(
//               (media) => media.id === item.acf.company_logo
//             );
//             if (mediaItem) {
//               imageUrl = mediaItem.source_url;
//             }
//           }

//           return {
//             id: item.id,
//             logo: imageUrl,
//             rating: parseFloat(item.acf?.rating) || 0,
//             reviews: item.acf?.user_reviews || "0",
//             features: item.acf?.features?.split("\n") || [],
//             visitSiteUrl: item.acf?.visit_site_url,
//             signalPageUrl: `/company/${item.slug}`
//           };
//         });
//         setHostData(formattedData);

//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHosts();
//   }, []);

//   return (
//     <section className="relative bg-gradient-to-br from-teal-600 to-blue-500 text-white py-8 md:py-16 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//           {/* Text Content */}
//           <div className="lg:w-1/2">
//             <span className="text-lg md:text-xl">Updated on January 30, 2025</span>
//             <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
//             Plan Your Instagram Growth, Grow Your Audience, Build Your Brand
//             </h1>
//             <p className="text-lg md:text-xl font-medium mt-6">
//             We help you choose the ideal growth tools that get you real followers, engagement, and brand visibility.
//             </p>
//             <Link href="/company" className="inline-block bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-main-shadow transition duration-300 mt-4">
//               Get Started Today
//             </Link>
//           </div>

//           {/* Hero Image */}
//           <div className="lg:w-1/2 hidden justify-center md:flex">
//             <Image
//               src="/images/hosting.jpg"
//               alt="Illustration of online growth"
//               width={600}
//               height={400}
//               className="max-w-full h-auto rounded-lg"
//               priority // Add priority for above-the-fold image
//               // layout="intrinsic" // Ensures aspect ratio is preserved
//             />
//           </div>
//         </div>

//         {/* Host Cards */}
//         <div className="mt-8 md:mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
//           {loading && <p className="text-center text-white">Loading hosts...</p>}
//           {error && <p className="text-center text-red-400">{error}</p>}
//           {hostData.map((host) => (
//             <HostCard key={host.id} {...host} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import HostCard from "./HeroHostCard";
// import Link from "next/link";

// const Hero = () => {
//   const [hostData, setHostData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const targetPostIds = [206, 272, 276];

//   useEffect(() => {
//     const fetchHosts = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//         );
//         if (!response.ok) throw new Error("Failed to fetch data");
//         const data = await response.json();

//         // Create a map for faster lookup
//         const dataMap = new Map(data.map(item => [item.id, item]));

//         // Use targetPostIds to map and order the posts
//         const orderedData = targetPostIds.reduce((acc, id) => {
//           const item = dataMap.get(id);
//           if (item) {
//             acc.push(item);
//           }
//           return acc;
//         }, []);

//         // Transform API data to match HostCard structure
//         const formattedData = orderedData.map((item) => {
//           let imageUrl = "/images/default-logo.png"; // Default logo

//           // Extract image from _embedded['wp:featuredmedia']
//           if (item.acf?.company_logo && item._embedded?.["wp:featuredmedia"]) {
//             const mediaItem = item._embedded["wp:featuredmedia"].find(
//               (media) => media.id === item.acf.company_logo
//             );
//             if (mediaItem) {
//               imageUrl = mediaItem.source_url;
//             }
//           }

//           return {
//             id: item.id,
//             logo: imageUrl,
//             rating: parseFloat(item.acf?.rating) || 0,
//             reviews: item.acf?.user_reviews || "0",
//             features: item.acf?.features?.split("\n") || [],
//             visitSiteUrl: item.acf?.visit_site_url,
//             signalPageUrl: `/company/${item.slug}`,
//           };
//         });
//         setHostData(formattedData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHosts();
//   }, []);

//   return (
//     <section className="relative bg-gradient-to-br from-teal-600 to-blue-500 text-white py-8 md:py-16 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-center gap-6">
//           {/* Text Content */}
//           <div className="max-w-6xl text-center">
//             <span className="text-lg md:text-xl">Updated on January 30, 2025</span>
//             <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
//               Plan Your Instagram Growth, Grow Your Audience, Build Your Brand
//             </h1>
//             <p className="text-lg md:text-xl font-medium mt-6">
//               We help you choose the ideal growth tools that get you real
//               followers, engagement, and brand visibility.
//             </p>
//             <Link
//               href="/company"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-10 py-4 hover:bg-blue-600 transform text-center mt-2"
//             >
//               Get Started Today
//             </Link>
//           </div>
//         </div>

//         {/* Host Cards */}
//         <div className="mt-8 md:mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
//           {loading && <p className="text-center text-white">Loading hosts...</p>}
//           {error && <p className="text-center text-red-400">{error}</p>}
//           {hostData.map((host) => (
//             <HostCard key={host.id} {...host} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import HostCard from "./HeroHostCard";
// import Link from "next/link";

// const Hero = () => {
//   const [hostData, setHostData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const targetPostIds = [206, 272, 276];

//   useEffect(() => {
//     const fetchHosts = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//         );
//         if (!response.ok) throw new Error("Failed to fetch data");
//         const data = await response.json();

//         // Create a map for faster lookup
//         const dataMap = new Map(data.map((item) => [item.id, item]));

//         // Use targetPostIds to map and order the posts
//         const orderedData = targetPostIds.reduce((acc, id) => {
//           const item = dataMap.get(id);
//           if (item) {
//             acc.push(item);
//           }
//           return acc;
//         }, []);

//         // Transform API data to match HostCard structure
//         const formattedData = orderedData.map((item) => {
//           let imageUrl = "/images/default-logo.png"; // Default logo

//           // Extract image from _embedded['wp:featuredmedia']
//           if (item.acf?.company_logo && item._embedded?.["wp:featuredmedia"]) {
//             const mediaItem = item._embedded["wp:featuredmedia"].find(
//               (media) => media.id === item.acf.company_logo
//             );
//             if (mediaItem) {
//               imageUrl = mediaItem.source_url;
//             }
//           }

//           return {
//             id: item.id,
//             logo: imageUrl,
//             rating: parseFloat(item.acf?.rating) || 0,
//             reviews: item.acf?.user_reviews || "0",
//             features: item.acf?.features?.split("\n") || [],
//             visitSiteUrl: item.acf?.visit_site_url,
//             signalPageUrl: `/company/${item.slug}`,
//           };
//         });
//         setHostData(formattedData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHosts();
//   }, []);


  
//   return (
//     <section className="relative py-8 md:py-16 overflow-hidden bg-[linear-gradient(180deg,hsla(0,0%,100%,0)_0%,#4f3bea)]">
//       <div className="container mx-auto px-4 ">
//         <div className="flex items-center justify-center gap-6">
//           {/* Text Content */}
//           <div className="max-w-6xl text-center">
//             <span className="text-lg md:text-xl">
//               Updated on January 30, 2025
//             </span>
//             <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
//               Plan Your Instagram Growth, Grow Your Audience, Build Your Brand
//             </h1>
//             <p className="text-lg md:text-xl font-medium mt-6">
//               We help you choose the ideal growth tools that get you real
//               followers, engagement, and brand visibility.
//             </p>
//             <Link
//               href="/company"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-10 py-4 hover:bg-blue-600 transform text-center mt-2"
//             >
//               Get Started Today
//             </Link>
//           </div>
//         </div>

//         {/* Host Cards */}
//         <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
//           {loading && (
//             <p className="text-center text-white">Loading hosts...</p>
//           )}
//           {error && <p className="text-center text-red-400">{error}</p>}
//           {hostData.map((host) => (
//             <HostCard key={host.id} {...host} />
//           ))}
//         </div>
//       </div>
//       <div className="w-full h-[450px] absolute inset-0 flex justify-center items-center -z-1">
//         <Image
//           src="images/landing-hero-overlay.svg"
//           className="w-full h-[300px]"
//           fill
//           alt="Picture of the author"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useEffect, useState } from "react";
import Image from "next/image";
import HostCard from "./HeroHostCard";
import Link from "next/link";

const Hero = () => {
    const [hostData, setHostData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const targetPostIds = [206, 272, 276];

    useEffect(() => {
        const fetchHosts = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
                );
                if (!response.ok) throw new Error("Failed to fetch data");
                const data = await response.json();


                  const dataMap = new Map(data.map((item) => [item.id, item]));

                   const orderedData = targetPostIds.reduce((acc, id) => {
                    const item = dataMap.get(id);
                     if (item) {
                        acc.push(item);
                     }
                       return acc;
                   }, []);


                  const formattedData = orderedData.map((item) => {
                    let imageUrl = "/images/default-logo.png";

                    if (item.acf?.company_logo && item._embedded?.["wp:featuredmedia"]) {
                       const mediaItem = item._embedded["wp:featuredmedia"].find(
                        (media) => media.id === item.acf.company_logo
                      );
                      if (mediaItem) {
                            imageUrl = mediaItem.source_url;
                       }
                     }

                    return {
                       id: item.id,
                      logo: imageUrl,
                       rating: parseFloat(item.acf?.rating) || 0,
                       reviews: item.acf?.user_reviews || "0",
                       features: item.acf?.features?.split("\n") || [],
                      visitSiteUrl: item.acf?.visit_site_url,
                        signalPageUrl: `/company/${item.slug}`,
                      ranking: item.acf?.ranking || null,
                    };
                });
                  setHostData(formattedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHosts();
    }, []);



    return (
      <section className="relative py-8 md:py-16 overflow-hidden bg-[linear-gradient(180deg,hsla(0,0%,100%,0)_0%,#4f3bea)]">
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-center gap-6">
            {/* Text Content */}
            <div className="max-w-6xl text-center">
              <span className="text-lg md:text-xl">
                Updated on January 30, 2025
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                Plan Your Instagram Growth, Grow Your Audience, Build Your Brand
              </h1>
              <p className="text-lg md:text-xl font-medium mt-6">
                We help you choose the ideal growth tools that get you real
                followers, engagement, and brand visibility.
              </p>
              <Link
                href="/company"
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-10 py-4 hover:bg-blue-600 transform text-center mt-2"
              >
                Get Started Today
              </Link>
            </div>
          </div>

           {/* Host Cards */}
          <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
            {loading && (
              <p className="text-center text-white">Loading Insta Advice...</p>
            )}
            {error && <p className="text-center text-red-400">{error}</p>}
            {hostData.map((host, index) => (
              <HostCard key={host.id} {...host} isMiddleCard={index === 1} />
            ))}
          </div>
        </div>
         <div className="w-full h-[450px] absolute inset-0 flex justify-center items-center -z-1">
             <Image
               src="images/landing-hero-overlay.svg"
               className="w-full h-[300px]"
               fill
                alt="Picture of the author"
             />
           </div>
      </section>
    );
};

export default Hero;