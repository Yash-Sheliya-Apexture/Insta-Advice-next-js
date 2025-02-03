// // pages/index.js
// import React from 'react';

// const Home = () => {


//   return (
//     <>

//     </>
//   );
// };

// export default Home;




// // pages/index.js
// import React, { useEffect, useState } from "react";
// import Hero from "../components/Home/Hero";
// import ServiceSection from "../components/Home/ServiceSection";
// import InstagramAdvice from "@/components/Advice/InstagramAdvice";
// import OfferSection from "@/components/Home/OfferSection";


// const Home = () => {
//   const [adviceData, setAdviceData] = useState([]);

//   useEffect(() => {
//     const fetchAdvice = async () => {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//       );
//       const data = await response.json();
//       setAdviceData(data);
//     };

//     fetchAdvice();
//   }, []);

//   // Assuming you want to pass only the first 10 ids to Home
//   const filteredAdviceData = adviceData.slice(5, 6);

//   return (
//     <div>
//       <Hero />
//       <div className="Comparison-list py-10">
//         <div className="container mx-auto px-4">
//           <InstagramAdvice adviceData={filteredAdviceData} />
//         </div>
//       </div>
//       <ServiceSection />
//       <OfferSection />
//     </div>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from "react";
// import Hero from "../components/Home/Hero";
// import ServiceSection from "../components/Home/ServiceSection";
// import InstagramAdvice from "@/components/Advice/InstagramAdvice";
// import OfferSection from "@/components/Home/OfferSection";


// const Home = () => {
//   const [adviceData, setAdviceData] = useState([]);
//   const [visibleCardCount, setVisibleCardCount] = useState(6);
//     const [loading, setLoading] = useState(true)


//   useEffect(() => {
//     const fetchAdvice = async () => {
//       setLoading(true)
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//       );
//       const data = await response.json();
//       setAdviceData(data);
//      setLoading(false)
//     };

//     fetchAdvice();
//   }, []);

//   const handleViewMore = () => {
//     setVisibleCardCount((prevCount) => prevCount + 6);
//   };


//   return (
//     <div>
//       <Hero />
//       <div className="Comparison-list py-10">
//         <div className="container mx-auto px-4">
//           {
//               !loading && <InstagramAdvice
//               adviceData={adviceData.slice(0, 6)}
//                 showViewMoreButton={false}
//                 handleViewMore={handleViewMore}
//             />
//           }

//         </div>
//       </div>
//       <ServiceSection />
//       <OfferSection />
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from "react";
// import Hero from "../components/Home/Hero";
// import ServiceSection from "../components/Home/ServiceSection";
// import InstagramAdvice from "@/components/Advice/InstagramAdvice";
// import OfferSection from "@/components/Home/OfferSection";

// const Home = () => {
//     const [adviceData, setAdviceData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [visibleCardCount, setVisibleCardCount] = useState(6);


//     useEffect(() => {
//         const fetchAdvice = async () => {
//             setLoading(true);
//             try {
//                 const response = await fetch(
//                     `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//                 );
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setAdviceData(data);
//             } catch (error) {
//                 console.error("Error fetching advice data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAdvice();
//     }, []);


//     const handleViewMore = () => {
//         setVisibleCardCount((prevCount) => prevCount + 6);
//     };



//     return (
//         <div>
//             <Hero />
//             <div className="Comparison-list py-10">
//                 <div className="container mx-auto px-4">
//                     {
//                         !loading && <InstagramAdvice
//                             adviceData={adviceData} // Pass the FULL data here
//                             showViewMoreButton={adviceData.length > visibleCardCount}
//                             handleViewMore={handleViewMore}
//                             visibleCardCount={visibleCardCount}
//                         />
//                     }
//                 </div>
//             </div>
//             <ServiceSection />
//             <OfferSection />
//         </div>
//     );
// };

// export default Home;





// import React, { useEffect, useState } from "react";
// import Hero from "../components/Home/Hero";
// import ServiceSection from "../components/Home/ServiceSection";
// import InstagramAdvice from "@/components/Advice/InstagramAdvice";
// import OfferSection from "@/components/Home/OfferSection";

// const Home = () => {
//     const [adviceData, setAdviceData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [visibleCardCount, setVisibleCardCount] = useState(6);


//     useEffect(() => {
//         const fetchAdvice = async () => {
//             setLoading(true);
//             try {
//                 const response = await fetch(
//                     `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//                 );
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setAdviceData(data);
//             } catch (error) {
//                 console.error("Error fetching advice data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAdvice();
//     }, []);


//     const handleViewMore = () => {
//         setVisibleCardCount((prevCount) => prevCount + 6);
//     };



//     return (
//         <>
//             <Hero />
//             <div className="Comparison-list py-10">
//                 <div className="container mx-auto px-4">
//                     {
//                         !loading && <InstagramAdvice
//                             adviceData={adviceData} // Pass the FULL data here
//                             showViewMoreButton={adviceData.length > visibleCardCount}
//                             handleViewMore={handleViewMore}
//                             visibleCardCount={visibleCardCount}
//                         />
//                     }
//                 </div>
//             </div>
//             <ServiceSection />
//             <OfferSection />
//         </>
//     );
// };

// export default Home;


// pages/index.js
import React, { useEffect, useState } from "react";
import Hero from "../components/Home/Hero";
import ServiceSection from "../components/Home/ServiceSection";
import InstagramAdvice from "@/components/Advice/InstagramAdvice";
import OfferSection from "@/components/Home/OfferSection";
import Seo from "@/components/Seo"; // Import the Seo component

const Home = () => {
  const [adviceData, setAdviceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCardCount, setVisibleCardCount] = useState(6);

  useEffect(() => {
    const fetchAdvice = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAdviceData(data);
      } catch (error) {
        console.error("Error fetching advice data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvice();
  }, []);

  const handleViewMore = () => {
    setVisibleCardCount((prevCount) => prevCount + 6);
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
          {!loading && (
            <InstagramAdvice
              adviceData={adviceData} // Pass the FULL data here
              showViewMoreButton={adviceData.length > visibleCardCount}
              handleViewMore={handleViewMore}
              visibleCardCount={visibleCardCount}
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