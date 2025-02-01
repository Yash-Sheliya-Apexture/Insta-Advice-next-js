// import React, { useState, useEffect } from "react";
// import FilterBar from "./FilterBar";
// import InstagramAdviceCardMain from "./InstagramAdviceCardMain";
// import InstagramAdviceCardTable from "./InstagramAdviceCardTable";
// import StarRating from "./StarRating"; // Import the StarRating component

// const InstagramAdvice = () => {
//     const [advicePosts, setAdvicePosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [filteredCards, setFilteredCards] = useState([]);

//     useEffect(() => {
//         const fetchAdvicePosts = async () => {
//             try {
//                 const response = await fetch(
//                     `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//                 );
//                  if (!response.ok) {
//                      throw new Error(`HTTP error! Status: ${response.status}`);
//                  }
//                 const data = await response.json();
//                setAdvicePosts(data);
//                 setFilteredCards(data);
//             } catch (err) {
//               setError(err.message);
//             } finally {
//               setLoading(false);
//            }
//           };
//             fetchAdvicePosts();
//       }, []);

//     const filters = [
//          {
//             name: "Price",
//              options: ["Under $5", "$5-$10", "Over $10"],
//           },
//           {
//              name: "Disk Type",
//             options: ["SSD", "HDD", "NVMe"],
//            },
//           {
//            name: "Disk Space",
//             options: ["10 GB", "50 GB", "100 GB", "Unlimited"],
//          },
//         {
//              name: "Payment Type",
//               options: ["Monthly", "Annually"],
//           },
//           {
//             name: "Sort",
//               options: ["Price High to Low", "Price Low to High", "Rating"],
//           },
//     ];

//     const handleFilterChange = (filterName, selectedOption) => {
//        let newFilteredCards = [...advicePosts];

//         if (filterName === "Price") {
//             if (selectedOption === "Under $5") {
//                  newFilteredCards = newFilteredCards.filter(card => parseFloat(card?.acf?.price) < 5);
//              } else if (selectedOption === "$5-$10") {
//                  newFilteredCards = newFilteredCards.filter(card => parseFloat(card?.acf?.price) >= 5 && parseFloat(card?.acf?.price) <= 10);
//             } else if (selectedOption === "Over $10") {
//                newFilteredCards = newFilteredCards.filter(card => parseFloat(card?.acf?.price) > 10);
//             }
//        }
//          if (filterName === "Disk Type") {
//              if (selectedOption === "SSD") {
//                   newFilteredCards = newFilteredCards.filter(card => card?.acf?.features?.toLowerCase()?.includes("ssd"));
//             } else if (selectedOption === "HDD") {
//                   newFilteredCards = newFilteredCards.filter(card => card?.acf?.features?.toLowerCase()?.includes("hdd"));
//             } else if (selectedOption === "NVMe") {
//                   newFilteredCards = newFilteredCards.filter(card => card?.acf?.features?.toLowerCase()?.includes("nvme"));
//            }
//          }
//          if (filterName === "Disk Space") {
//                newFilteredCards = newFilteredCards.filter(card =>
//                   card?.acf?.plan_table_data?.toLowerCase().includes(selectedOption.toLowerCase().replace(/\s/g, ''))
//              );
//           }

//           if (filterName === "Sort") {
//             if (selectedOption === "Price High to Low") {
//               newFilteredCards.sort((a, b) => parseFloat(b.acf?.price) - parseFloat(a.acf?.price));
//             } else if (selectedOption === "Price Low to High") {
//                newFilteredCards.sort((a, b) => parseFloat(a.acf?.price) - parseFloat(b.acf?.price));
//             } else if (selectedOption === "Rating") {
//                newFilteredCards.sort((a, b) => parseFloat(b.acf?.rating) - parseFloat(a.acf?.rating));
//             }
//         }
//       setFilteredCards(newFilteredCards);
//     };
//     const handleShowAllPlans = (id) => {
//          setFilteredCards((prevFilteredCards) => {
//               return prevFilteredCards.map((card) => {
//                   if (card.id === id) {
//                        return { ...card, showAllPlans: !card.showAllPlans };
//                  }
//                    return card;
//               });
//         });
//     };

//    if (loading) {
//        return <div className="text-center mt-10">Loading...</div>;
//     }

//    if (error) {
//       return <div className="text-center mt-10">Error: {error}</div>;
//    }
//   return (
//      <section className="InstagramAdviceCard py-12">
//        <div className="container mx-auto">
//             <FilterBar filters={filters} onFilterChange={handleFilterChange} />
//            {filteredCards.map((data) => (
//               <div
//                   key={data.id}
//                   className="border-2 border-gray-300 shadow-sm rounded-2xl overflow-hidden flex flex-col mb-8"
//               >
//                     <InstagramAdviceCardMain
//                          data={data}
//                         StarRating={StarRating}
//                        id={data.id}
//                   />
//                   <InstagramAdviceCardTable
//                      showAllPlans={data.showAllPlans}
//                       plansData={data.acf}
//                       handleShowAllPlans={() => handleShowAllPlans(data.id)}
//                  />
//              </div>
//           ))}
//      </div>
//   </section>
//   );
// };
// export default InstagramAdvice;




// import React, { useState, useEffect } from "react";
// import FilterBar from "./FilterBar";
// import InstagramAdviceCardMain from "./InstagramAdviceCardMain";
// import InstagramAdviceCardTable from "./InstagramAdviceCardTable";
// import StarRating from "../StarRating/StarRating";

// const InstagramAdvice = () => {
//   const [advicePosts, setAdvicePosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [categories, setCategories] = useState([]); // State to store categories
//   const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

//   useEffect(() => {
//     const fetchAdvicePosts = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();

//         // Extract unique categories from the class_list field (e.g., 'categories-promising')
//         const uniqueCategories = [
//           ...new Set(
//             data.flatMap(post =>
//               post.class_list?.filter(cls => cls.startsWith("categories-")).map(cls => cls.replace("categories-", ""))
//             )
//           ),
//         ];

//         setCategories(uniqueCategories);
//         setAdvicePosts(data);
//         setFilteredCards(data); // Initially show all posts
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAdvicePosts(); // Fetch advice posts and categories
//   }, []);

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
//       name: "Category", // Category filter
//       options: categories, // Dynamically populate options
//     },
//   ];

//   const handleFilterChange = (filterName, selectedOption) => {
//     let newFilteredCards = [...advicePosts];

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
//         newFilteredCards = [...advicePosts];
//       }
//     }

//     setFilteredCards(newFilteredCards);
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
//       setFilteredCards(advicePosts); // Show all posts again
//     }
//   };

//   if (loading) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
//         <div className="flex space-x-2">
//           <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
//           <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
//           <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center mt-10">Error: {error}</div>;
//   }

//   return (
//     <div className="InstagramAdviceCard">
//       <FilterBar filters={filters} onFilterChange={handleFilterChange} onRemoveFilter={handleRemoveFilter} />
//       {filteredCards.map((data) => (
//         <div
//           key={data.id}
//           className="border-2 border-gray-300 shadow-sm rounded-2xl overflow-hidden flex flex-col mb-8"
//         >
//           <InstagramAdviceCardMain
//             data={data}
//             StarRating={StarRating}
//             id={data.id}
//           />
//           <InstagramAdviceCardTable
//             showAllPlans={data.showAllPlans}
//             plansData={data.acf}
//             handleShowAllPlans={() => handleShowAllPlans(data.id)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InstagramAdvice;





// import React, { useState, useEffect } from "react";
// import FilterBar from "./FilterBar";
// import InstagramAdviceCardMain from "./InstagramAdviceCardMain";
// import InstagramAdviceCardTable from "./InstagramAdviceCardTable";
// import StarRating from "../StarRating/StarRating";

// const InstagramAdvice = ({ adviceData, showViewMoreButton, handleViewMore }) => {
//   const [advicePosts, setAdvicePosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   useEffect(() => {
//     const fetchAdvicePosts = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/instagram_advice?_embed`
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();

//         // Extract unique categories from the class_list field (e.g., 'categories-promising')
//         const uniqueCategories = [
//           ...new Set(
//             data.flatMap(post =>
//               post.class_list?.filter(cls => cls.startsWith("categories-")).map(cls => cls.replace("categories-", ""))
//             )
//           ),
//         ];

//         setCategories(uniqueCategories);
//         setAdvicePosts(data);
//         setFilteredCards(data); // Initially show all posts
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAdvicePosts(); // Fetch advice posts and categories
//   }, []);

//   useEffect(() => {
//     if (adviceData) {
//       setFilteredCards(adviceData);
//     }
//   }, [adviceData]);

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
//     let newFilteredCards = [...advicePosts];

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
//         newFilteredCards = [...advicePosts];
//       }
//     }
//     setFilteredCards(newFilteredCards);
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
//       setFilteredCards(advicePosts); // Show all posts again
//     }
//   };


//   if (loading) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
//         <div className="flex space-x-2">
//           <span className="w-4 h-4 bg-light-royal-blue rounded-full animate-bounce [animation-delay:-0.2s]"></span>
//           <span className="w-4 h-4 bg-purple-heart rounded-full animate-bounce"></span>
//           <span className="w-4 h-4 bg-amaranth rounded-full animate-bounce [animation-delay:0.2s]"></span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center mt-10">Error: {error}</div>;
//   }

//   return (
//     <div className="InstagramAdviceCard">
//       <FilterBar
//         filters={filters}
//         onFilterChange={handleFilterChange}
//         onRemoveFilter={handleRemoveFilter}
//       />
//       {filteredCards.map((data) => (
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
//            //setFilteredCards(adviceData); // Initially show all posts
//        }
//    }, [adviceData]);



//     useEffect(() => {
//     if (adviceData) {
//         setFilteredCards(adviceData.slice(0, visibleCardCount));
//     }
//   }, [adviceData, visibleCardCount]);
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
//     setFilteredCards(newFilteredCards.slice(0, visibleCardCount));
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
//         setFilteredCards(adviceData.slice(0, visibleCardCount));

//     }
//   };

//   return (
//     <div className="InstagramAdviceCard">
//       <FilterBar
//         filters={filters}
//         onFilterChange={handleFilterChange}
//         onRemoveFilter={handleRemoveFilter}
//       />
//       {filteredCards.map((data) => (
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



import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import InstagramAdviceCardMain from "./InstagramAdviceCardMain";
import InstagramAdviceCardTable from "./InstagramAdviceCardTable";
import StarRating from "../StarRating/StarRating";

const InstagramAdvice = ({ adviceData, showViewMoreButton, handleViewMore, visibleCardCount }) => {
  const [filteredCards, setFilteredCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

   useEffect(() => {
       if (adviceData) {
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
           setFilteredCards(adviceData); // Initially show all posts
       }
   }, [adviceData]);



  const filters = [
    {
      name: "Price",
      options: ["Under $5", "$5-$10", "Over $10"],
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

  const handleFilterChange = (filterName, selectedOption) => {
    let newFilteredCards = [...adviceData];

    // Apply price filter
    if (filterName === "Price") {
      if (selectedOption === "Under $5") {
        newFilteredCards = newFilteredCards.filter(card => parseFloat(card?.acf?.price) < 5);
      } else if (selectedOption === "$5-$10") {
        newFilteredCards = newFilteredCards.filter(card => parseFloat(card?.acf?.price) >= 5 && parseFloat(card?.acf?.price) <= 10);
      } else if (selectedOption === "Over $10") {
        newFilteredCards = newFilteredCards.filter(card => parseFloat(card?.acf?.price) > 10);
      }
    }

    // Apply sorting
    if (filterName === "Sort") {
      if (selectedOption === "Price High to Low") {
        newFilteredCards.sort((a, b) => parseFloat(b.acf?.price) - parseFloat(a.acf?.price));
      } else if (selectedOption === "Price Low to High") {
        newFilteredCards.sort((a, b) => parseFloat(a.acf?.price) - parseFloat(b.acf?.price));
      } else if (selectedOption === "Rating") {
        newFilteredCards.sort((a, b) => parseFloat(b.acf?.rating) - parseFloat(a.acf?.rating));
      }
    }
    // Apply category filter based on class_list
    if (filterName === "Category") {
      if (selectedOption !== "") {
        // Filter posts by selected category (matches class_list)
        newFilteredCards = newFilteredCards.filter(card =>
          card.class_list?.some(cls => cls === `categories-${selectedOption}`)
        );
      } else {
        // If no category is selected, show all posts
        newFilteredCards = [...adviceData];
      }
    }
       setFilteredCards(newFilteredCards);

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

  const handleRemoveFilter = (filterName) => {
    if (filterName === "Category") {
      // Reset the selected category and show all posts
      setSelectedCategory("");
        setFilteredCards(adviceData);

    }
  };

  return (
    <div className="InstagramAdviceCard">
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onRemoveFilter={handleRemoveFilter}
      />
      {filteredCards.slice(0, visibleCardCount).map((data) => (
        <div
          key={data.id}
          className="border-2 border-gray-300 shadow-sm rounded-2xl overflow-hidden flex flex-col mb-8"
        >
          <InstagramAdviceCardMain data={data} StarRating={StarRating} id={data.id} />
          <InstagramAdviceCardTable
            showAllPlans={data.showAllPlans}
            plansData={data.acf}
            handleShowAllPlans={() => handleShowAllPlans(data.id)}
          />
        </div>
      ))}
      {showViewMoreButton && (
        <div className="text-center mt-6">
          <button
            onClick={handleViewMore}
            className="focus:outline-none inline-block custom-gradient text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transform text-center"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default InstagramAdvice;