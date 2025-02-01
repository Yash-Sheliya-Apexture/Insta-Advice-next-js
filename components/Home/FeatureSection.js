import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import img1 from '../../public/images/feature-img.jpg';
import img2 from '../../public/images/feature-img-2.jpg';
import Button from '@/ui/Button'; // Assuming Button component is inside /components

const FeatureSection = () => {

  return (
    <section className="Feature bg-gray-800 py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* First Row: Image on Left, Content on Right */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="relative rounded-xl overflow-hidden mb-6 md:mb-0 md:mr-6 w-full md:w-1/2">
            <Image
              src={img1}
              alt="People chatting"
              className="w-full h-[450px] object-cover object-center rounded-3xl"
              width={700}
              height={450}
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Instagram Growth, Powered By Real People
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed">
              It's time to let social media experts handle your Instagram growth. 
              Get 100% real and targeted Instagram followers with your new Personal Growth Assistant.
            </p>
            <Button type="button">Learn More</Button>
          </div>
        </div>

        {/* Second Row: Content on Left, Image on Right */}
        <div className="flex flex-col items-start md:items-center md:flex-row-reverse mt-14">
          <div className="relative rounded-xl overflow-hidden mb-6 md:mb-0 md:ml-6 w-full md:w-1/2">
            <Image
              src={img2}
              alt="People walking in forest"
              className="w-full h-[450px] object-cover object-center rounded-3xl"
              width={700}
              height={450}
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              We'll Help You Find Your Real Fans On Instagram
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed">
              There's no Instagram account that we can't grow! We'll help you find a real, 
              targeted audience. Any niche. Any country. Any language. Any account.
            </p>
            <Button>Start Your Free Trial</Button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-500 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-gray-800 to-transparent"></div>
      </div>
    </section>
  );
};

export default FeatureSection;
