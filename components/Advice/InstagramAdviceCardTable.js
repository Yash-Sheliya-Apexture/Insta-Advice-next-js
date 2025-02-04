// import React from "react";
// import { IoIosArrowDown } from "react-icons/io";
// const InstagramAdviceCardTable = ({
//     showAllPlans,
//     plansData,
//     handleShowAllPlans,
// }) => {
//     const cardPlanTable = plansData?.plan_table_data
//         ? plansData.plan_table_data.split('\n').map(row => row.split('|'))
//         : [];
//     const header = cardPlanTable?.[0] || [];
//     const rows = cardPlanTable?.slice(1) || [];
//     const buttonLink = plansData?.plan_table_button_link || null;
//     return (
//       <>
//             <div
//                 className={`overflow-hidden transition-all duration-500 ease-linear -mb-[1px] ${
//                    showAllPlans ? "max-h-96" : "max-h-0"
//                }`}
//           >
//               {showAllPlans && (
//                   <div className="overflow-x-auto">
//                         <table className="w-full border-collapse table-auto bg-gray-100">
//                           <thead>
//                              {header && (
//                                 <tr className=" border-b border-gray-300 text-nowrap bg-gray-100">
//                                    {header.map((header, index) => (
//                                          <th key={index} className="p-3 font-bold text-left text-gray-700 capitalize">
//                                                {header}
//                                             </th>
//                                        ))}
//                                    <th className="p-3 font-bold text-left text-gray-700 capitalize" >
//                                      More Details
//                                     </th>
//                                 </tr>
//                             )}
//                          </thead>
//                          <tbody>
//                               {rows.map((row, index) => (
//                                   <tr key={index} className="text-nowrap hover:bg-gray-100 transition">
//                                        {row.map((cell, cellIndex) => (
//                                             <td key={cellIndex} className="border-b border-gray-300 p-3 text-gray-700">
//                                                  {cell}
//                                                </td>
//                                          ))}
//                                          <td className="border-b border-gray-300 p-3 text-gray-700">
//                                             {buttonLink && (
//                                               <a href={buttonLink} target="_blank" rel="noopener noreferrer"
//                                                    className=" custom-gradient text-white block py-2 px-4 rounded-full text-center font-medium hover:opacity-90 transition text-sm"
//                                               >
//                                                   Visit Site
//                                                </a>
//                                             )}
//                                         </td>
//                                    </tr>
//                                ))}
//                            </tbody>
//                       </table>
//                    </div>
//                )}
//        </div>
//             <hr className="border border-gray-300"/>
//             {/* Modified button with single rotating arrow */}
//             <button
//                 onClick={handleShowAllPlans}
//                 className={`w-full text-center font-medium py-4 rounded transition-colors flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer ${
//                     showAllPlans ? "bg-gray-100" : "hover:bg-gray-100"
//                  }`}
//            >
//                 {showAllPlans ? "Hide All Plans" : "Show All Plans"}
//                <span
//                     className={`transition-transform duration-300 ${
//                        showAllPlans ? "rotate-180" : "rotate-0"
//                    }`}
//                 >
//                    <IoIosArrowDown />
//                 </span>
//            </button>
//      </>
//     );
// };

// export default InstagramAdviceCardTable;



import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const InstagramAdviceCardTable = ({
    showAllPlans,
    plansData,
    handleShowAllPlans,
    id,
}) => {
    const cardPlanTable = plansData?.plan_table_data
        ? plansData.plan_table_data.split('\n').map(row => row.split('|'))
        : [];
    const header = cardPlanTable?.[0] || [];
    const rows = cardPlanTable?.slice(1) || [];
    const buttonLink = plansData?.plan_table_button_link || null;
    return (
        <>
            <div
                className={`overflow-hidden transition-all duration-500 ease-linear -mb-[1px] ${
                    showAllPlans ? "max-h-96" : "max-h-0"
                }`}
            >
                {showAllPlans && (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse table-auto bg-gray-100">
                            <thead>
                            {header && (
                                <tr className=" border-b border-gray-300 text-nowrap bg-gray-100">
                                    {header.map((header, index) => (
                                        <th key={index} className="p-3 font-bold text-left text-gray-700 capitalize">
                                            {header}
                                        </th>
                                    ))}
                                    <th className="p-3 font-bold text-left text-gray-700 capitalize" >
                                        More Details
                                    </th>
                                </tr>
                            )}
                            </thead>
                            <tbody>
                            {rows.map((row, index) => (
                                <tr key={index} className="text-nowrap hover:bg-gray-100 transition">
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="border-b border-gray-300 p-3 text-gray-700">
                                            {cell}
                                        </td>
                                    ))}
                                    <td className="border-b border-gray-300 p-3 text-gray-700">
                                        {buttonLink && (
                                            <a href={buttonLink} target="_blank" rel="noopener noreferrer"
                                               className=" custom-gradient text-white block py-2 px-4 rounded-full text-center font-medium hover:opacity-90 transition text-sm"
                                            >
                                                Visit Site
                                            </a>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <hr className="border border-gray-300"/>
            {/* Modified button with single rotating arrow */}
            <button
                onClick={() => handleShowAllPlans(id)}
                className={`w-full text-center font-medium py-4 rounded transition-colors flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer ${
                    showAllPlans ? "bg-gray-100" : "hover:bg-gray-100"
                }`}
            >
                {showAllPlans ? "Hide All Plans" : "Show All Plans"}
                <span
                    className={`transition-transform duration-300 ${
                        showAllPlans ? "rotate-180" : "rotate-0"
                    }`}
                >
                   <IoIosArrowDown />
                </span>
            </button>
        </>
    );
};

export default InstagramAdviceCardTable;