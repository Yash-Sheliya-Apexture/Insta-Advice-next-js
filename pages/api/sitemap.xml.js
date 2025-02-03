// pages/api/sitemap.xml.js
import { NextApiRequest, NextApiResponse } from 'next';
import { allPosts } from '@/utils/posts';

const generateSitemap = async (req) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const posts = await allPosts();
    const blogPostUrls = posts
        .map((post) => {
            return `
                <url>
                    <loc>${baseUrl}/blog/${post.slug}</loc>
                    <lastmod>${post.modified}</lastmod>
                    <priority>0.7</priority>
                </url>
                `;
        })
        .join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <url>
                    <loc>${baseUrl}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <priority>1.0</priority>
                </url>
                <url>
                    <loc>${baseUrl}/blog</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <priority>0.8</priority>
                </url>
                ${blogPostUrls}
            </urlset>
            `;
};

export default async function handler(req, res) {
    res.setHeader('Content-Type', 'text/xml');
    const sitemap = await generateSitemap(req);
    res.send(sitemap);
}