// import React, { useState, useEffect } from 'react';
// import InstagramAdvice from '../components/Advice/InstagramAdvice';

// const CompanyPage = () => {
//     const [adviceData, setAdviceData] = useState([]);
//     const [visibleCardCount, setVisibleCardCount] = useState(6);
//     const [loading, setLoading] = useState(true);


//     useEffect(() => {
//         const fetchAdvice = async () => {
//             setLoading(true);
//           try {
//             const response = await fetch(
//               `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//             );
//              if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//             const data = await response.json();
//             setAdviceData(data);
//           } catch (error) {
//               console.error("Error fetching advice data:", error);
//           } finally {
//              setLoading(false);
//           }

//         };

//         fetchAdvice();
//       }, []);

//     const handleViewMore = () => {
//         setVisibleCardCount(prevCount => prevCount + 6)
//       }

//     if(loading){
//          return (
//             <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
//                 <div className="flex space-x-2">
//                     <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
//                     <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
//                     <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
//                 </div>
//             </div>
//         );
//     }

//   return (

//     <>
//       <div className="Company-list-wrap py-12">
//         <div className="Comparison-list-hero">
//           <div className="container mx-auto px-4">
//             <div className="max-w-6xl mx-auto text-center ">
//               <div className="flex justify-center items-center">
//                 <h1 className="text-3xl text-dark-color md:text-5xl font-gt font-bold mt-6">Expert Service Reviews: <span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">Tested & Analyzed.</span></h1>
//               </div>
//               <div>
//                 <p className="text-lg md:text-xl text-gray-500 mt-6">Confused about which service to choose? Let our expert reviews guide you. We rigorously test each one so you can be sure you're making the right choice.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="Comparison-list mt-10">
//           <div className="container mx-auto px-4">
//              <InstagramAdvice 
//                  adviceData={adviceData}
//                  showViewMoreButton={adviceData.length > visibleCardCount}
//                  handleViewMore={handleViewMore}
//                  visibleCardCount={visibleCardCount}
//               />
//           </div>
//         </div>
//       </div>
//     </>

//   );
// };
// export default CompanyPage;






import React, { useState, useEffect } from 'react';
import InstagramAdvice from '../components/Advice/InstagramAdvice';

const CompanyPage = () => {
    const [adviceData, setAdviceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allDataLoaded, setAllDataLoaded] = useState(false);

    useEffect(() => {
        const fetchAdvice = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&per_page=20` // Fetch more initial data
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setAdviceData(data);
                if (data.length < 20) {
                    setAllDataLoaded(true); // Set the flag if less than 20 items are fetched initially
                }
            } catch (error) {
                console.error("Error fetching advice data:", error);
            } finally {
                setLoading(false);
            }

        };

        fetchAdvice();
    }, []);

    const handleViewMore = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed&offset=${adviceData.length}&per_page=6`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const newData = await response.json();

        if (newData.length === 0) {
            // No more data to load
            setAllDataLoaded(true);
            return;
        }
        setAdviceData((prevData) => [...prevData, ...newData]);
        if (newData.length < 6) {
            setAllDataLoaded(true); // Set the flag if less than 6 items are fetched
        }
    };


    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
                <div className="flex space-x-2">
                    <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
                    <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
                    <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
                </div>
            </div>
        );
    }

    return (

        <>
            <div className="Company-list-wrap py-12">
                <div className="Comparison-list-hero">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto text-center ">
                            <div className="flex justify-center items-center">
                                <h1 className="text-3xl text-dark-color md:text-5xl font-gt font-bold mt-6">Expert Service Reviews: <span
                                    className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">Tested & Analyzed.</span>
                                </h1>
                            </div>
                            <div>
                                <p className="text-lg md:text-xl text-gray-500 mt-6">Confused about which service to choose? Let our expert reviews guide you. We rigorously test each one so you can be sure you're making the right choice.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Comparison-list mt-10">
                    <div className="container mx-auto px-4">
                        <InstagramAdvice
                            adviceData={adviceData}
                            initialVisibleCardCount={6}
                            handleViewMore={handleViewMore}
                        />
                    </div>
                </div>
            </div>
        </>

    );
};
export default CompanyPage;