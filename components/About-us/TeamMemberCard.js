import React from "react";
import Image from 'next/image';

const TeamMemberCard = ({ member, onClick }) => {
    return (
        <div
            className="bg-white flex flex-col items-center rounded-xl shadow-md overflow-hidden p-4 cursor-pointer"
            onClick={onClick} // Call onClick prop function
        >
            <Image
                src={member.image}
                alt={member.name}
                className="h-auto w-48 object-cover"
                width="auto"
                height="auto"
            />
            <div className="p-4 w-full text-center">
                <h3 className="text-xl font-semibold text-dark-color">
                    {member.name}
                </h3>
                <p className="text-light-color">{member.role}</p>
            </div>
        </div>
    );
};
export default TeamMemberCard;