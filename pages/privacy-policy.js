// import React from "react";
// import Head from "next/head";

// const PrivacyPolicy = () => {
//     const policyContent = [
//         {
//             title: "Information We Collect:",
//             content: (
//                 <>
//                     <p>
//                         We collect limited information when you interact with Instaadvice:
//                     </p>
//                     <ul className="list-disc list-inside mt-2">
//                         <li>
//                             <span className="font-semibold">Non-Personal Data:</span> This
//                             includes general information like your browser type, device
//                             information, and how you navigate our site. This data is anonymous
//                             and helps us understand how our site is used.
//                         </li>
//                         <li>
//                             <span className="font-semibold">Contact Information:</span> If you
//                             choose to contact us through our contact form or email, you'll
//                             voluntarily provide us with your name and email address. We use
//                             this information only to respond to your inquiries and provide
//                             support.
//                         </li>
//                     </ul>
//                     <p className="mt-2">
//                         We do not collect any sensitive personal data such as physical
//                         address or phone numbers when you visit our website.
//                     </p>
//                 </>
//             ),
//         },
//         {
//             title: "How We Use Your Information:",
//             content: (
//                 <>
//                     <p>We use your information in the following ways:</p>
//                     <ul className="list-disc list-inside mt-2">
//                         <li>
//                             <span className="font-semibold">Improve Our Site:</span>{" "}
//                             Non-personal data allows us to see how users interact with our
//                             site, which helps us improve user experience and functionality.
//                         </li>
//                         <li>
//                             <span className="font-semibold">Respond to Inquiries:</span> If
//                             you contact us through our contact form or email, we will use your
//                             name and email address to respond to your questions and provide
//                             any support you may require.
//                         </li>
//                         <li>
//                             <span className="font-semibold">Analyze Trends:</span> We may use
//                             anonymized, aggregated data to analyze overall website usage
//                             patterns. This helps us make Instaadvice better for everyone.
//                         </li>
//                     </ul>
//                     <p className="mt-2">
//                         We don't use your data for anything else. We are not going to sell
//                         your information.
//                     </p>
//                 </>
//             ),
//         },
//         {
//             title: "Cookies and Tracking:",
//             content:
//                 "We may use cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences and provide a more efficient browsing experience. You have the ability to control your cookie settings through your browser. We believe in using cookies responsibly and only for necessary reasons to enhance your visit to our site.",
//         },
//         {
//             title: "Third-Party Services:",
//             content:
//                 "We may use third-party services to help us improve our site. These third-party services may have their own privacy policies, and we advise you to review them separately. We carefully select providers that prioritize user privacy, and we do not share any personally identifiable information with them other than what is required.",
//         },
//         {
//             title: "Data Security:",
//             content:
//                 "We take reasonable steps to protect your information from unauthorized access, disclosure, or alteration. While we use industry-standard security measures, no online method of transmission or storage is completely secure. Therefore, we cannot guarantee the absolute security of your data, and you acknowledge this risk.",
//         },
//         {
//             title: "Children's Privacy:",
//             content:
//                 "Instaadvice is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child under 13, we will immediately take steps to delete that information. We are strongly committed to protecting children's privacy.",
//         },
//         {
//             title: "Changes to This Policy:",
//             content:
//                 "We may update this privacy policy periodically. We will post any changes on this page, so please check back from time to time. Your continued use of the site indicates your acceptance of any changes made to this policy.",
//         },
//         {
//             title: "Contact Us:",
//             content:
//                 "If you have any questions about our privacy policy or how we handle your data, please don't hesitate to contact us via our contact form or email. We are here to assist you and address your concerns as quickly as possible. Thank you for trusting Instaadvice with your privacy. We're committed to providing you with valuable advice while protecting your information.",
//         },
//     ];
//     const getGeometricBackground = (index) => {
//         const baseClass = "absolute inset-0 pointer-events-none overflow-hidden hidden sm:block";
//         const colorClasses = ["bg-blue-200", "bg-green-200", "bg-yellow-200"];
//         const colorIndex = index % 3;
//         const baseColorClass = colorClasses[colorIndex];

//         // Create a more complex geometric background with overlapping layers
//         if (index % 2 !== 0) {
//             return (
//                 <div className={baseClass}>
//                     <div
//                         className={`absolute top-1/4 left-1/4 w-1/2 h-1/2 transform rotate-45  ${baseColorClass} opacity-30`}
//                     ></div>
//                     <div
//                         className={`absolute bottom-0 right-0 w-1/2 h-1/2 transform -rotate-45  ${baseColorClass} opacity-30`}
//                     ></div>
//                 </div>
//             );
//         }
//         return (
//             <div className={baseClass}>
//                 <div
//                     className={`absolute top-1/4 right-1/4 w-1/2 h-1/2 transform rotate-45  ${baseColorClass} opacity-30`}
//                 ></div>
//                 <div
//                     className={`absolute bottom-0 left-0 w-1/2 h-1/2 transform -rotate-45  ${baseColorClass} opacity-30`}
//                 ></div>
//             </div>
//         );
//     };

//     return (
//         <>
//             <Head>
//                 <title>Privacy Policy | Instaadvice</title>
//                 <meta
//                     name="description"
//                     content="Read our Privacy Policy to understand how we handle your data at Instaadvice."
//                 />
//             </Head>
//             <section className="privacy-policy bg-gray-50 py-12">
//                 <div className="container mx-auto">
//                     <div className="mb-8">
//                         <h1 className="text-4xl font-bold text-gray-800 text-center">
//                             Privacy Policy
//                         </h1>
//                         <p className="text-center mt-6 text-xl text-gray-500">
//                             At Instaadvice, we highly value your privacy and are dedicated to
//                             protecting your personal information. This policy outlines how we
//                             collect, use, and safeguard your data when you visit our website.
//                             We've kept it simple and clear because transparency is important to
//                             us.
//                         </p>
//                     </div>
//                     <div className="space-y-6">
//                         {policyContent.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="relative bg-white rounded-lg overflow-hidden shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
//                             >
//                                 {getGeometricBackground(index)}
//                                 <div className="relative z-10">
//                                     <h2 className="text-2xl font-semibold text-gray-800 mb-3">
//                                         {item.title}
//                                     </h2>
//                                     <div className="text-gray-700 leading-relaxed">
//                                         {item.content}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default PrivacyPolicy;


import React from "react";
import Head from "next/head";
import { FcDownRight  } from "react-icons/fc";


const PrivacyPolicy = () => {
  const policyContent = [
    {
      title: "Information We Collect:",
      content: (
        <>
          <p>
            We collect limited information when you interact with Instaadvice:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">Non-Personal Data:</span> This
              includes general information like your browser type, device
              information, and how you navigate our site. This data is anonymous
              and helps us understand how our site is used.
            </li>
            <li>
              <span className="font-semibold">Contact Information:</span> If you
              choose to contact us through our contact form or email, you'll
              voluntarily provide us with your name and email address. We use
              this information only to respond to your inquiries and provide
              support.
            </li>
          </ul>
          <p className="mt-2">
            We do not collect any sensitive personal data such as physical
            address or phone numbers when you visit our website.
          </p>
        </>
      ),
    },
    {
      title: "How We Use Your Information:",
      content: (
        <>
          <p>We use your information in the following ways:</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">Improve Our Site:</span>{" "}
              Non-personal data allows us to see how users interact with our
              site, which helps us improve user experience and functionality.
            </li>
            <li>
              <span className="font-semibold">Respond to Inquiries:</span> If
              you contact us through our contact form or email, we will use your
              name and email address to respond to your questions and provide
              any support you may require.
            </li>
            <li>
              <span className="font-semibold">Analyze Trends:</span> We may use
              anonymized, aggregated data to analyze overall website usage
              patterns. This helps us make Instaadvice better for everyone.
            </li>
          </ul>
          <p className="mt-2">
            We don't use your data for anything else. We are not going to sell
            your information.
          </p>
        </>
      ),
    },
    {
      title: "Cookies and Tracking:",
      content:
        "We may use cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences and provide a more efficient browsing experience. You have the ability to control your cookie settings through your browser. We believe in using cookies responsibly and only for necessary reasons to enhance your visit to our site.",
    },
    {
      title: "Third-Party Services:",
      content:
        "We may use third-party services to help us improve our site. These third-party services may have their own privacy policies, and we advise you to review them separately. We carefully select providers that prioritize user privacy, and we do not share any personally identifiable information with them other than what is required.",
    },
    {
      title: "Data Security:",
      content:
        "We take reasonable steps to protect your information from unauthorized access, disclosure, or alteration. While we use industry-standard security measures, no online method of transmission or storage is completely secure. Therefore, we cannot guarantee the absolute security of your data, and you acknowledge this risk.",
    },
    {
      title: "Children's Privacy:",
      content:
        "Instaadvice is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child under 13, we will immediately take steps to delete that information. We are strongly committed to protecting children's privacy.",
    },
    {
      title: "Changes to This Policy:",
      content:
        "We may update this privacy policy periodically. We will post any changes on this page, so please check back from time to time. Your continued use of the site indicates your acceptance of any changes made to this policy.",
    },
    {
      title: "Contact Us:",
      content:
        "If you have any questions about our privacy policy or how we handle your data, please don't hesitate to contact us via our contact form or email. We are here to assist you and address your concerns as quickly as possible. Thank you for trusting Instaadvice with your privacy. We're committed to providing you with valuable advice while protecting your information.",
    },
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy | Instaadvice</title>
        <meta
          name="description"
          content="Read our Privacy Policy to understand how we handle your data at Instaadvice."
        />
      </Head>
      <section className="privacy-policy bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 text-center">
              Privacy Policy
            </h1>
            <p className="text-center mt-6 text-xl text-gray-500">
              At Instaadvice, we highly value your privacy and are dedicated to
              protecting your personal information. This policy outlines how we
              collect, use, and safeguard your data when you visit our website.
              We've kept it simple and clear because transparency is important to
              us.
            </p>
          </div>
          <div className="space-y-6">
            {policyContent.map((item, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                  <FcDownRight /> {item.title}
                </h2>
                <div className="text-gray-700 leading-relaxed px-10">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;