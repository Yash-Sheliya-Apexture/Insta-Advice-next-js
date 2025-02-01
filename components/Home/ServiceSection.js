import React from 'react';

// You can use the Next.js Image component for better optimization
import Image from 'next/image';

// Importing assets from the public folder
import img1 from '../../public/images/1.png';
import img2 from '../../public/images/2.png';
import img3 from '../../public/images/3.png';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="rounded-xl p-6 flex flex-col items-start space-y-4 shadow-main-shadow bg-white">
      <div className="flex items-center w-16 h-16 rounded-xl mb-4">
        <Image src={icon} alt="" className="w-14 h-14" width={56} height={56} />
      </div>
      <h3 className="text-2xl font-semibold text-dark-color">{title}</h3>
      <p className="text-light-color text-base">{description}</p>
    </div>
  );
};

const ServiceSection = () => {
  const services = [
    {
      title: 'First Ever Dedicated Review Platform',
      description:
        'Stop relying on unreliable Instagram advice. Instaadvice is the first platform dedicated to reviewing growth services. We provide in-depth analysis and data to help you make informed choices and find the perfect fit for your needs.',
      icon: img1,
    },
    {
      title: 'Expert Analysis, Real Data',
      description:
        'We personally test each service, providing real, hands-on insights and data, not generic reviews. Trust our experts to give you the information you can actually use to grow.',
      icon: img2,
    },
    {
      title: 'Safe & Secure Choices',
      description:
        "Avoid risky Instagram growth services! We carefully vet each one for safety, Instagram compliance, and effectiveness. With Instaadvice, explore services confidently, knowing we've done the hard work to keep you safe.",
      icon: img3,
    }
  ];

  return (
    <section className="Service py-12">
      <div className="container mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#833ab479] via-[#fd1d1d74] to-[#fcb045ac] rounded-3xl shadow-xl p-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-gt font-bold text-dark-color">Why Choose Insta advice?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:mt-10 mt-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
