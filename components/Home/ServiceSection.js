import React from 'react';

// You can use the Next.js Image component for better optimization
import Image from 'next/image';

// Importing assets from the public folder
import img1 from '../../public/images/1.png';
import img2 from '../../public/images/2.png';
import img3 from '../../public/images/3.png';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="rounded-xl p-6 flex flex-col items-start space-y-4 shadow-main-shadow bg-white hover:-translate-y-4 duration-300">
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
      <div className="container mx-auto relative px-4">
        <div className="bg-gradient-to-br from-[#833ab479] via-[#fd1d1d74] to-[#fcb045ac] rounded-3xl shadow-xl p-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-dark-color">Why Choose Instaadvice?</h2>
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





// import React from 'react';
// import Image from 'next/image';

// // Importing assets from the public folder
// import img1 from '../../public/images/1.png';
// import img2 from '../../public/images/2.png';
// import img3 from '../../public/images/3.png';

// const ServiceCard = ({ title, description, icon, index }) => {
//   const gradientColors = [
//     ['#6a11cb', '#2575fc'], // Purple to Blue
//     ['#ff512f', '#dd2476'], // Red to Pink
//     ['#43cea2', '#185a9d'], // Green to Blue
//   ];

//   const [color1, color2] = gradientColors[index % gradientColors.length];

//   // Use index to slightly change the animation keyframe for variation
//   const animationDelay = (index * 0.3) + 's';

//   return (
//     <div
//       className="relative rounded-3xl p-6 overflow-hidden transform transition-transform duration-500 hover:scale-105 shadow-lg"
//       style={{
//         background: `linear-gradient(to right, ${color1}, ${color2})`,
//         color: 'white',
//       }}
//     >
//       {/* Abstract Shapes - Absolutely positioned, but within card */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
//         {[...Array(6)].map((_, i) => {
//           const size = Math.random() * 50 + 30; // Random size between 30px and 80px
//           const x = Math.random() * 100; // Random x position
//           const y = Math.random() * 100; // Random y position
//           const speed = Math.random() * 3 + 2; // Random animation speed

//           return (
//             <div
//               key={i}
//               className="absolute rounded-full bg-white"
//               style={{
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 left: `${x}%`,
//                 top: `${y}%`,
//                 animation: `float ${speed}s ease-in-out infinite`,
//                 animationDelay: `${Math.random() * 2}s`,
//               }}
//             />
//           );
//         })}
//       </div>

//       <div className="relative z-10 flex flex-col items-start space-y-4">
//         <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center shadow">
//           <Image src={icon} alt="" className="w-12 h-12 object-contain" width={48} height={48} />
//         </div>
//         <h3 className="text-xl font-bold">{title}</h3>
//         <p className="text-sm">{description}</p>
//       </div>
//       <style jsx>{`
//           @keyframes float {
//               0% {
//                   transform: translateY(0) translateX(0);
//                   opacity: 0.3;
//               }
//               50% {
//                   transform: translateY(-10px) translateX(5px);
//                   opacity: 0.6;
//               }
//               100% {
//                   transform: translateY(0) translateX(0);
//                   opacity: 0.3;
//               }
//           }
//       `}</style>
//     </div>
//   );
// };

// const ServiceSection = () => {
//   const services = [
//     {
//       title: 'Dedicated Review Platform',
//       description:
//         'Stop relying on unreliable advice.  Get data-driven insights to make informed choices and find the perfect growth service.',
//       icon: img1,
//     },
//     {
//       title: 'Expert Analysis & Real Data',
//       description:
//         'We test each service personally, providing real, hands-on insights. Trust our experts to give you the information you actually need.',
//       icon: img2,
//     },
//     {
//       title: 'Safe & Secure Choices',
//       description:
//         "Avoid risky services! We carefully vet each service for safety and compliance. Explore services confidently, knowing we've done the hard work.",
//       icon: img3,
//     },
//   ];

//   return (
//     <section className="Service py-16">
//       <div className="container mx-auto px-4">
//         <div className="relative">
//           <div className="text-center max-w-3xl mx-auto mb-8">
//             <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Why Choose Insta advice ?
//             </h2>
//             <p className="text-lg md:text-xl text-gray-600">
//               Find the right growth service and maximize your results with our expert reviews.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <ServiceCard key={index} {...service} index={index} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;