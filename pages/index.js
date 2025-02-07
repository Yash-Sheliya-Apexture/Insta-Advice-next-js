// // pages/index.js
// import React, { useState, useEffect, useCallback } from "react";
// import Hero from "../components/Home/Hero";
// import ServiceSection from "../components/Home/ServiceSection";
// import InstagramAdvice from "@/components/Advice/InstagramAdvice";
// import OfferSection from "@/components/Home/OfferSection";
// import Seo from "@/components/Seo";

// const Home = () => {
//     const [adviceData, setAdviceData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [allDataLoaded, setAllDataLoaded] = useState(false);

//     const fetchAdvice = useCallback(async () => {  // Use useCallback
//         setLoading(true);
//         try {
//             const response = await fetch(
//                 `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&per_page=20`
//             );
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const data = await response.json();
//             setAdviceData(data);
//             if (data.length < 20) {
//                 setAllDataLoaded(true);
//             }
//         } catch (error) {
//             console.error("Error fetching advice data:", error);
//         } finally {
//             setLoading(false);
//         }
//     }, []);

//     useEffect(() => {
//         fetchAdvice();
//     }, [fetchAdvice]);  // Add fetchAdvice to the dependency array

//     const handleViewMore = async () => {
//         const response = await fetch(
//             `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&offset=${adviceData.length}&per_page=6`
//         );
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const newData = await response.json();

//         if (newData.length === 0) {
//             setAllDataLoaded(true);
//             return;
//         }
//         setAdviceData((prevData) => [...prevData, ...newData]);
//         if (newData.length < 6) {
//             setAllDataLoaded(true);
//         }
//     };

//     return (
//         <>
//             <Seo
//                 title="Instagram Growth Advice & Comparison Tool"
//                 description="Get reliable advice and compare Instagram growth tools to make informed choices and boost your Instagram presence. Trusted by influencers and businesses."
//                 ogType="website"
//                 path="/"
//             />
//             <Hero adviceData={adviceData} loading={loading} />
//             <div className="Comparison-list py-10">
//                 <div className="container mx-auto px-4">
//                     {!loading && (
//                         <InstagramAdvice
//                             adviceData={adviceData}
//                             initialVisibleCardCount={6}
//                             handleViewMore={handleViewMore}
//                         />
//                     )}
//                 </div>
//             </div>
//             <ServiceSection />
//             <OfferSection />
//             {loading && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
//                     <div className="flex space-x-2">
//                         <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
//                         <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
//                         <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Home;









// // pages/index.js (No Changes)
// import React, { useState, useEffect, useCallback } from "react";
// import Hero from "../components/Home/Hero";
// import ServiceSection from "../components/Home/ServiceSection";
// import InstagramAdvice from "@/components/Advice/InstagramAdvice";
// import OfferSection from "@/components/Home/OfferSection";
// import Seo from "@/components/Seo";

// const Home = () => {
//   const [adviceData, setAdviceData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [allDataLoaded, setAllDataLoaded] = useState(false);

//   const fetchAdvice = useCallback(async () => {  // Use useCallback
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&per_page=20`
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setAdviceData(data);
//       if (data.length < 20) {
//         setAllDataLoaded(true);
//       }
//     } catch (error) {
//       console.error("Error fetching advice data:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchAdvice();
//   }, [fetchAdvice]);  // Add fetchAdvice to the dependency array

//   const handleViewMore = async () => {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&offset=${adviceData.length}&per_page=6`
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const newData = await response.json();

//     if (newData.length === 0) {
//       setAllDataLoaded(true);
//       return;
//     }
//     setAdviceData((prevData) => [...prevData, ...newData]);
//     if (newData.length < 6) {
//       setAllDataLoaded(true);
//     }
//   };

//   return (
//     <>
//       <Seo
//         title="Instagram Growth Advice & Comparison Tool"
//         description="Get reliable advice and compare Instagram growth tools to make informed choices and boost your Instagram presence. Trusted by influencers and businesses."
//         ogType="website"
//         path="/"
//       />
//       <Hero adviceData={adviceData} loading={loading} />
//       <div className="Comparison-list py-10">
//         <div className="container mx-auto px-4">
//           {!loading && (
//             <InstagramAdvice
//               adviceData={adviceData}
//               initialVisibleCardCount={6}
//               handleViewMore={handleViewMore}
//             />
//           )}
//         </div>
//       </div>
//       <ServiceSection />
//       <OfferSection />
//       {loading && (
//         <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
//           <div className="flex space-x-2">
//             <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
//             <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
//             <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;



import React, { useState, useEffect, useCallback } from "react";
import Hero from "../components/Home/Hero";
import ServiceSection from "../components/Home/ServiceSection";
import InstagramAdvice from "@/components/Advice/InstagramAdvice";
import OfferSection from "@/components/Home/OfferSection";
import Seo from "@/components/Seo";

const Home = () => {
  const [adviceData, setAdviceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  const fetchAdvice = useCallback(async () => {  // Use useCallback
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&per_page=20`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setAdviceData(data);
      if (data.length < 20) {
        setAllDataLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching advice data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);  // Add fetchAdvice to the dependency array

  const handleViewMore = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&offset=${adviceData.length}&per_page=6`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const newData = await response.json();

    if (newData.length === 0) {
      setAllDataLoaded(true);
      return;
    }
    setAdviceData((prevData) => [...prevData, ...newData]);
    if (newData.length < 6) {
      setAllDataLoaded(true);
    }
  };

  return (
    <>
      <Seo
        title="Instagram Growth Advice & Comparison Tool"
        description="Get reliable advice and compare Instagram growth tools to make informed choices and boost your Instagram presence. Trusted by influencers and businesses."
        ogType="website"
        path="/"
      />
      <Hero />
      <div className="Comparison-list py-10">
        <div className="container mx-auto px-4">
          {loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
              <div className="flex space-x-2">
                <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
                <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
                <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
              </div>
            </div>
          )}
          {!loading && (
            <InstagramAdvice
              adviceData={adviceData}
              initialVisibleCardCount={6}
              handleViewMore={handleViewMore}
            />
          )}
        </div>
      </div>
      <ServiceSection />
      <OfferSection />
    </>
  );
};

export default Home;