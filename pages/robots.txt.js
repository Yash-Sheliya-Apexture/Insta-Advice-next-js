// //  // pages/api/robots.txt.js
// //  import { NextApiRequest, NextApiResponse } from 'next';

// //  const generateRobotsTxt = () => {
// //      return `User-agent: *
// //      Allow: /
 
// //      # (Optional) Specify a sitemap
// //      Sitemap: ${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml
// //      `;
// //  };
 
// //  export default function handler(req, res) {
// //      res.setHeader('Content-Type', 'text/plain');
// //      res.send(generateRobotsTxt());
// //  }


// export default function robots() {
//     return {
//       rules: [
//         {
//           userAgent: 'Googlebot',
//           allow: ['/'],
//           disallow: ['/private/'],
//         },
//         {
//           userAgent: ['Applebot', 'Bingbot'],
//           disallow: ['/'],
//         },
//       ],
//       sitemap: 'http://localhost:3000/sitemap.xml',
//     }
//   }


// pages/api/robots.txt.js


// pages/robots.txt.js

export const getServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    console.warn("NEXT_PUBLIC_BASE_URL is not defined in environment variables.");
    res.setHeader('Content-Type', 'text/plain');
    res.write("User-agent: *\nDisallow: /"); // Or a basic config
    res.end();
    return { props: {} }; // Important: Must return props, even empty, to avoid errors.
  }

  const robotsTxtContent = `
    User-agent: *
    Allow: /

    Sitemap: ${baseUrl}/sitemap.xml
  `;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxtContent);
  res.end();
  return { props: {} };
}

function Robots() {
  return null;
}

export default Robots;
