// import React from "react";
// import Image from 'next/image';

// const TeamMemberCard = ({ member, onClick }) => {
//     return (
//         <div
//             className="bg-white flex flex-col items-center rounded-xl shadow-md overflow-hidden p-4 cursor-pointer"
//             onClick={onClick} // Call onClick prop function
//         >
//             <Image
//                 src={member.image}
//                 alt={member.name}
//                 className="h-auto w-48 object-cover"
//                 width="auto"
//                 height="auto"
//             />
//             <div className="p-4 w-full text-center">
//                 <h3 className="text-xl font-semibold text-dark-color">
//                     {member.name}
//                 </h3>
//                 <p className="text-light-color">{member.role}</p>
//             </div>
//         </div>
//     );
// };
// export default TeamMemberCard;


import React from "react";
import Image from "next/image";

const TeamMemberCard = ({ member, onClick }) => {
  return (
    <div className="bg-white flex flex-col items-center rounded-xl shadow-md overflow-hidden p-4 border border-gray-200 cursor-pointer" onClick={onClick}>
      <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          style={{ // New style property
            objectFit: "cover", // Equivalent of objectFit
            objectPosition: "center",
          }}
          sizes="(max-width: 768px) 100vw, 200px" // Responsive sizes
          priority // Optionally add priority for first few images
        />
      </div>

      <div className="w-full text-center">
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sm text-gray-500">{member.role}</p>
      </div>
    </div>
  );
};
export default TeamMemberCard;