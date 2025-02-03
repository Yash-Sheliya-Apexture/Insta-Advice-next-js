 // pages/api/robots.txt.js
 import { NextApiRequest, NextApiResponse } from 'next';

 const generateRobotsTxt = () => {
     return `User-agent: *
     Allow: /
 
     # (Optional) Specify a sitemap
     Sitemap: ${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml
     `;
 };
 
 export default function handler(req, res) {
     res.setHeader('Content-Type', 'text/plain');
     res.send(generateRobotsTxt());
 }