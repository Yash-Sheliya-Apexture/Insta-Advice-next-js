// // pages/api/sitemap.xml.js
// import { NextApiRequest, NextApiResponse } from 'next';
// import { allPosts } from '@/utils/posts';

// const generateSitemap = async (req) => {
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//     const posts = await allPosts();
//     const blogPostUrls = posts
//         .map((post) => {
//             return `
//                 <url>
//                     <loc>${baseUrl}/blog/${post.slug}</loc>
//                     <lastmod>${post.modified}</lastmod>
//                     <priority>0.7</priority>
//                 </url>
//                 `;
//         })
//         .join('');

//     return `<?xml version="1.0" encoding="UTF-8"?>
//             <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//                 <url>
//                     <loc>${baseUrl}</loc>
//                     <lastmod>${new Date().toISOString()}</lastmod>
//                     <priority>1.0</priority>
//                 </url>
//                 <url>
//                     <loc>${baseUrl}/blog</loc>
//                     <lastmod>${new Date().toISOString()}</lastmod>
//                     <priority>0.8</priority>
//                 </url>
//                 ${blogPostUrls}
//             </urlset>
//             `;
// };

// export default async function handler(req, res) {
//     res.setHeader('Content-Type', 'text/xml');
//     const sitemap = await generateSitemap(req);
//     res.send(sitemap);
// }


// pages/api/sitemap.xml.js



// import { getAllPosts } from '../../lib/posts';  // Adjust path if needed.  Example!

// export default async function handler(req, res) {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';  // Fallback for dev
//   const posts = await getAllPosts(); // Replace with your actual data fetching!

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       <url>
//         <loc>${baseUrl}</loc>
//         <lastmod>${new Date().toISOString()}</lastmod>
//         <changefreq>daily</changefreq>
//         <priority>1.0</priority>
//       </url>
//       ${posts
//         .map((post) => {
//           return `
//             <url>
//               <loc>${baseUrl}/posts/${post.slug}</loc>  // Adjust URL
//               <lastmod>${new Date().toISOString()}</lastmod> // Consider using post.updatedAt if available
//               <changefreq>weekly</changefreq>
//               <priority>0.8</priority>
//             </url>
//           `;
//         })
//         .join('')}
//     </urlset>`;

//   res.setHeader('Content-Type', 'application/xml');
//   res.status(200).send(sitemap);
// }

// pages/api/sitemap.xml.js

// pages/sitemap.xml.js



// pages/sitemap.xml.js
export const getServerSideProps = async ({ res }) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const wordpressUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;
  
    if (!wordpressUrl) {
      console.error("NEXT_PUBLIC_WORDPRESS_URL is not defined");
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 500;
      res.write('Error: WordPress URL not defined');
      res.end();
      return { props: {} };
    }
  
    try {
      const [companyComparisonPosts, generalPosts, instagramAdvicePosts] = await Promise.all([
        fetch(`${wordpressUrl}/wp-json/wp/v2/company_comparison`).then(res => res.json()),
        fetch(`${wordpressUrl}/wp-json/wp/v2/posts`).then(res => res.json()),
        fetch(`${wordpressUrl}/wp-json/wp/v2/Instagram_Advice`).then(res => res.json()),
      ]);
  
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>${baseUrl}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>
          <url>
            <loc>${baseUrl}/company</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>
          <url>
            <loc>${baseUrl}/blog</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>
          <url>
            <loc>${baseUrl}/comparison</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>
          <url>
            <loc>${baseUrl}/about-us</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>
          <url>
            <loc>${baseUrl}/contact-us</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>
          <url>
            <loc>${baseUrl}/terms-and-service</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>
          <url>
            <loc>${baseUrl}/privacy-policy</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>
          ${instagramAdvicePosts
            .map(post => {
              return `
                <url>
                  <loc>${baseUrl}/company/${post.slug || post.id}</loc>
                  <lastmod>${new Date(post.modified || post.date).toISOString()}</lastmod>
                  <changefreq>weekly</changefreq>
                  <priority>0.8</priority>
                </url>
              `;
            })
            .join('')}
          ${generalPosts
            .map(post => {
              return `
                <url>
                  <loc>${baseUrl}/blog/${post.slug || post.id}</loc>
                  <lastmod>${new Date(post.modified || post.date).toISOString()}</lastmod>
                  <changefreq>weekly</changefreq>
                  <priority>0.8</priority>
                </url>
              `;
            })
            .join('')}
          ${companyComparisonPosts
            .map(post => {
              return `
                <url>
                  <loc>${baseUrl}/comparison/${post.slug || post.id}</loc>
                  <lastmod>${new Date(post.modified || post.date).toISOString()}</lastmod>
                  <changefreq>weekly</changefreq>
                  <priority>0.8</priority>
                </url>
              `;
            })
            .join('')}
        </urlset>`;
  
      res.setHeader('Content-Type', 'application/xml');
      res.write(sitemap);
      res.end();
      return {
        props: {},
      };
    } catch (error) {
      console.error("Error generating sitemap:", error);
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 500;
      res.write('Error generating sitemap');
      res.end();
      return { props: {} };
    }
  };
  
  function Sitemap() {
    return null;
  }
  
  export default Sitemap;