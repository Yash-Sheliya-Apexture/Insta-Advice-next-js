// import React from "react";
// import Head from 'next/head';

// const TermsOfService = () => {
//   const termsContent = [
//     {
//       title: "Your Agreement",
//       content:
//         "By accessing or using Insta Advice, you're agreeing to these terms. Think of it as a digital handshake – a confirmation that we're all on the same page. If you don’t agree with any part of these terms, please don’t use our site. We want this to be a positive experience for everyone.",
//     },
//     {
//       title: "What We Do",
//       content:
//         "Insta Advice is a platform that provides reviews, analyses, and insights into various Instagram growth tools. We personally test and analyze these tools to offer our perspective and help you make informed decisions. We aim to cut through the noise and provide clear, honest assessments to guide your choices. We’re your reliable source for Instagram growth tool reviews!",
//     },
//     {
//       title: "Our Content",
//       content:
//         'We strive to provide accurate and helpful reviews and analyses based on our testing and experiences. However, the effectiveness of Instagram tools can vary significantly, and our reviews reflect our findings at the time of testing. We cannot guarantee specific results when you use the tools we review. Our content is provided "as is," and you are responsible for the decisions you make. We\'re here to offer our insights, not promise guaranteed growth.',
//     },
//     {
//       title: "Your Responsibility",
//       content:
//         "You are responsible for how you use the information and tool recommendations provided by Insta Advice. Please do not use our site or recommendations for any illegal, harmful, or unethical practices. We value a respectful and positive community for all. Respect other users and their perspectives, and be thoughtful about your engagement. Be a responsible digital citizen!",
//     },
//     {
//       title: "Intellectual Property",
//       content:
//         "The content on Insta Advice, including reviews, analyses, text, graphics, logos, and our unique assessments, is owned by us or our partners and is protected by copyright laws. You may use our content for your personal research to inform your tool choices but do not copy, reproduce, or distribute it without our explicit permission. We've poured our expertise into creating this, please respect our intellectual property.",
//     },
//     {
//       title: "Third-Party Links",
//       content:
//         "Our site may feature links to third-party websites, including the websites of the Instagram growth tools we review. We are not responsible for the content, accuracy, or security of these external sites. Use them with care, and verify information for yourself. Click wisely, and always do your due diligence!",
//     },
//     {
//       title: "Limitations of Liability",
//       content:
//         "We are not liable for any indirect, incidental, or consequential damages that may arise from your use of Insta Advice or any tools we recommend. We are committed to providing thorough, honest reviews, but the world of Instagram tools can be unpredictable. Consider our advice as a well-informed opinion, not a guaranteed path to success. We are not responsible for your decisions and experiences with third-party tools.",
//     },
//     {
//       title: "Governing Law and Jurisdiction",
//       content:
//         "These Terms of Service and your use of Insta Advice are governed by the laws. Any legal actions related to this agreement will be brought exclusively in the courts. We believe in clarity and want to ensure that both parties are aware of the legal framework governing this relationship.",
//     },
//     {
//       title: "Changes and Termination",
//       content:
//         "We may update these Terms of Service periodically. We’ll aim to notify you about any significant changes. We also reserve the right to terminate your access to our site if you violate these terms. We’re always looking to improve and aim to make Insta Advice as useful as possible.",
//     },
//   ];

//   const getGeometricBackground = (index) => {
//     const baseClass = "absolute inset-0 pointer-events-none overflow-hidden hidden sm:block";
//     const colorClasses = ["bg-blue-200", "bg-green-200", "bg-yellow-200"];
//     const colorIndex = index % 3;
//     const baseColorClass = colorClasses[colorIndex];

//     // Create a more complex geometric background with overlapping layers
//     if (index % 2 !== 0) {
//       return (
//         <div className={baseClass}>
//           <div
//             className={`absolute top-1/4 left-1/4 w-1/2 h-1/2 transform rotate-45  ${baseColorClass} opacity-30`}
//           ></div>
//           <div
//             className={`absolute bottom-0 right-0 w-1/2 h-1/2 transform -rotate-45  ${baseColorClass} opacity-30`}
//           ></div>
//         </div>
//       );
//     }
//     return (
//       <div className={baseClass}>
//         <div
//           className={`absolute top-1/4 right-1/4 w-1/2 h-1/2 transform rotate-45  ${baseColorClass} opacity-30`}
//         ></div>
//         <div
//           className={`absolute bottom-0 left-0 w-1/2 h-1/2 transform -rotate-45  ${baseColorClass} opacity-30`}
//         ></div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Head>
//         <title>Terms of Service | Insta Advice</title>
//         <meta name="description" content="Read our Terms of Service for using Insta Advice." />
//       </Head>
//        <section className="trems-conditions bg-gray-50 py-12">
//       <div className="container mx-auto">
//         <div className="mb-8">
//           <h2 className="text-4xl font-bold text-gray-900 text-center">
//             Terms of Service
//           </h2>
//           <p className="text-center mt-6 text-xl text-gray-500">
//             Welcome to (Insta Advice)! We’re excited to have you explore our
//             platform and discover insights into the best Instagram growth tools.
//             Before you dive in, please take a few moments to read through our
//             straightforward terms of service. It’s important info, but we’ve
//             kept it concise.
//           </p>
//         </div>
//         <div className="space-y-6">
//           {termsContent.map((term, index) => (
//             <div
//               key={index}
//               className="relative bg-white rounded-lg overflow-hidden shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Geometric background */}
//               {getGeometricBackground(index)}
//               {/* Content */}
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-3">
//                   {term.title}
//                 </h3>
//                 <p className="text-gray-500 leading-relaxed">{term.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//     </>

//   );
// };

// export default TermsOfService;


import React from "react";
import Head from 'next/head';
import { FcDownRight  } from "react-icons/fc";


const TermsOfService = () => {
  const termsContent = [
    {
      title: "Your Agreement",
      content:
        "By accessing or using Insta Advice, you're agreeing to these terms. Think of it as a digital handshake – a confirmation that we're all on the same page. If you don’t agree with any part of these terms, please don’t use our site. We want this to be a positive experience for everyone.",
    },
    {
      title: "What We Do",
      content:
        "Insta Advice is a platform that provides reviews, analyses, and insights into various Instagram growth tools. We personally test and analyze these tools to offer our perspective and help you make informed decisions. We aim to cut through the noise and provide clear, honest assessments to guide your choices. We’re your reliable source for Instagram growth tool reviews!",
    },
    {
      title: "Our Content",
      content:
        'We strive to provide accurate and helpful reviews and analyses based on our testing and experiences. However, the effectiveness of Instagram tools can vary significantly, and our reviews reflect our findings at the time of testing. We cannot guarantee specific results when you use the tools we review. Our content is provided "as is," and you are responsible for the decisions you make. We\'re here to offer our insights, not promise guaranteed growth.',
    },
    {
      title: "Your Responsibility",
      content:
        "You are responsible for how you use the information and tool recommendations provided by Insta Advice. Please do not use our site or recommendations for any illegal, harmful, or unethical practices. We value a respectful and positive community for all. Respect other users and their perspectives, and be thoughtful about your engagement. Be a responsible digital citizen!",
    },
    {
      title: "Intellectual Property",
      content:
        "The content on Insta Advice, including reviews, analyses, text, graphics, logos, and our unique assessments, is owned by us or our partners and is protected by copyright laws. You may use our content for your personal research to inform your tool choices but do not copy, reproduce, or distribute it without our explicit permission. We've poured our expertise into creating this, please respect our intellectual property.",
    },
    {
      title: "Third-Party Links",
      content:
        "Our site may feature links to third-party websites, including the websites of the Instagram growth tools we review. We are not responsible for the content, accuracy, or security of these external sites. Use them with care, and verify information for yourself. Click wisely, and always do your due diligence!",
    },
    {
      title: "Limitations of Liability",
      content:
        "We are not liable for any indirect, incidental, or consequential damages that may arise from your use of Insta Advice or any tools we recommend. We are committed to providing thorough, honest reviews, but the world of Instagram tools can be unpredictable. Consider our advice as a well-informed opinion, not a guaranteed path to success. We are not responsible for your decisions and experiences with third-party tools.",
    },
    {
      title: "Governing Law and Jurisdiction",
      content:
        "These Terms of Service and your use of Insta Advice are governed by the laws. Any legal actions related to this agreement will be brought exclusively in the courts. We believe in clarity and want to ensure that both parties are aware of the legal framework governing this relationship.",
    },
    {
      title: "Changes and Termination",
      content:
        "We may update these Terms of Service periodically. We’ll aim to notify you about any significant changes. We also reserve the right to terminate your access to our site if you violate these terms. We’re always looking to improve and aim to make Insta Advice as useful as possible.",
    },
  ];


  return (
    <>
      <Head>
        <title>Terms of Service | Insta Advice</title>
        <meta name="description" content="Read our Terms of Service for using Insta Advice." />
      </Head>
       <section className="trems-conditions bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            Terms of Service
          </h2>
          <p className="text-center mt-6 text-xl text-gray-500">
            Welcome to (Insta Advice)! We’re excited to have you explore our
            platform and discover insights into the best Instagram growth tools.
            Before you dive in, please take a few moments to read through our
            straightforward terms of service. It’s important info, but we’ve
            kept it concise.
          </p>
        </div>
        <div className="space-y-6">
          {termsContent.map((term, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-4">
              <FcDownRight /> {term.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{term.content}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
    </>

  );
};

export default TermsOfService;