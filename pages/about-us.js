import React, { useState } from "react";
import Image from 'next/image';
import about from "../public/images/about-img.png";
import mission from "../public/images/our-mission.jpg";
import member1 from "../public/images/member-1.jpg";
import member2 from "../public/images/member-2.jpeg";
import member3 from "../public/images/member-3.png";
import member4 from "../public/images/member-4.png";
import member5 from "../public/images/member-5.jpg";
import member6 from "../public/images/member-6.jpg";
import member7 from "../public/images/member-7.jpg";
import member8 from "../public/images/member-8.jpg";
import TeamMemberCard from "@/components/About-us/TeamMemberCard";
import TeamMemberPopup from "@/components/About-us/TeamMemberPopup";


const AboutUs = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const teamMembers = [
        {
            id: 1,
            name: "Sarah Miller",
            role: "Social Media Growth Expert",
             description: `Sarah is a seasoned social media strategist with a proven track record of helping businesses and influencers achieve significant growth. She leverages her deep understanding of platform algorithms and engagement tactics to craft winning strategies that drive real results. Sarah is dedicated to helping you navigate the ever-changing social media landscape and unlock your full potential.`,
            image: member1,
        },
        {
            id: 2,
            name: "Marc Jeqab",
            role: "Social Media Expert",
             description: `Marc Jeqab lives and breathes Instagram. With a background in digital marketing and a deep understanding of the platform's nuances, he has helped countless accounts achieve explosive growth. Marc is known for his pragmatic approach and ability to identify winning growth tactics. His motto: "Experiment often, analyze always."`,
            image: member2,
        },
        {
            id: 3,
            name: "James Smith",
            role: "Instagram Growth Expert",
             description: `James Smith is an Instagram growth guru with a knack for simplifying complex strategies. Whether you're just starting or looking to take your account to the next level, James offers practical insights and actionable tips. A firm believer in the power of community building, he is always up to date with the newest trends in engagement strategies.`,
            image: member3,
        },
        {
            id: 4,
            name: "Aliza Thompson",
            role: "Social Media Expert",
             description: `Aliza Thompson is a versatile social media expert with a passion for connecting people and brands. With a background in content creation and a knack for understanding audiences, she develops engaging strategies that drive meaningful results. Aliza is always on the lookout for fresh ways to use the power of social media and loves sharing her latest discoveries.`,
            image: member4,
        },
         {
            id: 5,
             name: "David Lee",
             role: "Lead Designer",
             description: `David Lee is a creative and detail oriented professional. He is excellent at turning complex and mundane ideas into beautiful and easy to understand designs and layouts. David has a degree in Graphic Design and has been creating designs and marketing materials for over 10 years.`,
             image: member5,
         },
        {
            id: 6,
            name: "Casey Jones",
            role: "Social Media Analyst",
             description: `Casey is a data-driven social media analyst with a passion for uncovering hidden insights. She excels at interpreting metrics to fine-tune strategies and maximize performance. Casey's meticulous approach provides crucial intelligence for effective Instagram growth, ensuring that decisions are backed by real data.`,
            image: member6,
        },
        {
            id: 7,
             name: "Chris Garcia",
             role: "Data Scientist",
             description: `Chris Garcia has a background in mathematics and statistics. He's an expert at data science and AI modeling with over 10 years of experience with data analytics. Chris is very passionate about extracting insights and turning data into actionable strategies.`,
             image: member7,
        },
        {
            id: 8,
            name: "Alex Nguyen",
            role: "Instagram Growth Specialist",
            description: `Alex Nguyen is a focused Instagram growth specialist, immersed in the ever-evolving landscape of the platform. With his technical skills and marketing expertise, he is adept at uncovering the most efficient growth strategies for various types of accounts. Alex is always eager to share his knowledge and help others navigate the often-complex world of Instagram growth.`,
            image: member8,
        },
    ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleClosePopup = () => {
    setSelectedMember(null);
  };

    return (
        <>
            <section className="About Us py-12">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-pink">
                        <div className="max-w-3xl mx-auto text-center ">
                            <div className="flex justify-center items-center">
                                <h1 className="text-3xl text-gray-500 md:text-5xl font-gt font-bold mt-6">
                                    <span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">
                                        About Us
                                    </span>
                                </h1>
                            </div>
                            <p className="text-lg md:text-xl text-gray-500 mt-6">
                                Instaadvice provides a first-of-its-kind service to help you navigate the complex world of Instagram growth tools. Easily compare features, prices, and user feedback. We empower you to make informed choices, ensuring your business receives trusted guidance.</p>
                        </div>

                        <div className=" justify-center sm:flex mt-6 max-w-4xl mx-auto">
                            <Image
                                src={about}
                                alt="Company mission"
                                className="rounded-xl shadow-main-shadow w-full"
                                width={500}
                                height={400}
                                priority
                            />
                        </div>
                    </div>

                    {/* Our Mission */}
                    <div className="sm:mt-20 mt-16">
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Text Section */}
                            <div className="w-full lg:w-1/2">
                                <h2 className="md:text-5xl text-3xl font-semibold text-gray-800">Who We Are?</h2>

                                <p className="text-gray-500 text-lg md:text-xl mt-4">
                                    (NAME) is the internet's go-to information hub for Instagram growth services, covering a wide array of tools and providers worldwide.
                                </p>
                                <p className="text-gray-500 text-lg md:text-xl mt-4">Every writer on Instaadvice is either a social media marketing expert or an experienced user of Instagram growth services. The (NAME) community will help you find reliable services, trusted providers, and more to boost your Instagram presence.
                                </p>
                                <p className="text-gray-500 text-lg md:text-xl mt-4">Use our vast, easy-to-use, regularly updated database to find the right Instagram growth service to fit your needs and budget. Results are clear and easy – comparing prices, service stakes, support options, features, and overall user scores.</p>
                                <p className="text-gray-500 text-lg md:text-xl mt-4">Whether you're a seasoned influencer, a business looking to grow, a passionate content creator, or just starting your Instagram journey – start with (NAME).</p>
                            </div>
                            {/* Image Section */}
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src={mission}
                                    alt="Our Mission"
                                    className="rounded-lg shadow-md h-full"
                                    width="auto"
                                    height="auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Team Members */}
                    <div className="sm:mt-20 mt-16  bg-gradient-pink">
                        <div className="text-center max-w-4xl mx-auto">
                            <h2 className="text-3xl text-dark-color md:text-5xl font-gt font-bold">
                                Meet Our Best{" "}
                                <span className="bg-gradient-to-br from-yellow-400 to-orange-600 text-transparent bg-clip-text">
                                    Team Behind (name)
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-500 mt-6">
                                We're a small, yet powerful team of social media experts, analysts, and experienced Instagram users. We're committed to providing clear, unbiased reviews of Instagram growth services to help you succeed.</p>
                        </div>
                        <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 sm:mt-20 mt-16 p-4">
                            {teamMembers.map((member) => (
                                <TeamMemberCard key={member.id} member={member} onClick={() => handleMemberClick(member)} />
                            ))}
                        </div>
                    </div>
                 {selectedMember && <TeamMemberPopup member={selectedMember} onClose={handleClosePopup} />}
                </div>
            </section>

        </>
    );
};

export default AboutUs;