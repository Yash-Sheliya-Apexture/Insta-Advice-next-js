const ExpertSection = () => {
    const experts = [
        {
            name: "Alex Johnson",
            title: "Server Hosting Expert",
            image: "/images/expert-1.jpg",  // Update path for Next.js
            description:
                "Alex has over a decade of experience in server hosting, ensuring maximum uptime and seamless performance for businesses of all sizes. This is a longer description to test the dynamic height.",
            backgroundColor: 'bg-[#ffe4e6]' // Add a background color class
        },
        {
            name: "Sarah Chen",
            title: "Web Hosting Specialist",
            image: "/images/expert-2.jpg",  // Update path for Next.js
            description:
                "Sarah specializes in web hosting solutions, delivering fast and reliable hosting environments for websites and applications.",
            backgroundColor: 'bg-[#c8fecd]'
        },
        {
            name: "David Kim",
            title: "Database Hosting Expert",
            image: "/images/expert-3.jpg",  // Update path for Next.js
            description:
                "David is an expert in managing database hosting solutions, ensuring high availability and scalability for data-intensive applications.",
            backgroundColor: 'bg-[#dfdeff]'
        },
        {
            name: "Emily White",
            title: "Cloud Hosting Consultant",
            image: "/images/expert-4.jpg",  // Update path for Next.js
            description:
                "Emily helps businesses transition to the cloud with tailored hosting solutions that maximize efficiency and reduce costs.",
            backgroundColor: 'bg-[#fdf6b2]'
        },
        {
            name: "Michael Brown",
            title: "Cybersecurity Hosting Specialist",
            image: "/images/expert-5.jpg",  // Update path for Next.js
            description:
                "Michael focuses on secure hosting solutions, protecting your data and systems from cyber threats and vulnerabilities. This is another long description to test the dynamic height.",
            backgroundColor: 'bg-[#dfdeff]'
        },
        {
            name: "Olivia Davis",
            title: "Customer Support for Hosting",
            image: "/images/expert-6.jpg",  // Update path for Next.js
            description:
                "Olivia leads our customer support team, ensuring that clients receive timely assistance for all their hosting-related needs.",
            backgroundColor: 'bg-[#ffe4e6]'
        },
    ];

    return (
        <section className="AboutUs py-12 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-gt font-bold text-dark-color">
                        Meet Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ff0569] via-[#ff3bbd] to-[#ff0569]">
                            Hosting Experts
                        </span>
                    </h2>
                    <p className="text-light-color text-lg md:text-xl font-medium mt-6 ">
                        At Insta Advice for Hosting, our team of skilled professionals is dedicated to
                        providing top-notch hosting solutions. From servers to cybersecurity, we
                        have the expertise to keep your digital presence running smoothly.
                    </p>
                </div>

                <div className="sm:mt-20 mt-16">
                    <div className="relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {experts.map((expert, index) => (
                                <div
                                    key={index}
                                    className={`border border-gray-300 shadow-main-shadow rounded-xl p-6 w-full ${expert.backgroundColor}`}
                                >
                                    <div className="flex justify-center items-center mb-4">
                                        <div className="relative rounded-full overflow-hidden w-32 h-32">
                                            <img
                                                src={expert.image}
                                                alt={expert.name}
                                                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-bold text-dark-color">{expert.name}</h2>
                                        <h3 className="text-lg font-medium text-dark-color">{expert.title}</h3>
                                        <p className="text-light-color text-base">{expert.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertSection;
