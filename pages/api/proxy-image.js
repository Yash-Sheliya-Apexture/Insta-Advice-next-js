// pages/api/proxy-image.js
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
const { imageUrl } = req.query;

if (!imageUrl) {
return res.status(400).json({ error: 'Image URL is required' });
}

try {
    const imageResponse = await fetch(imageUrl, {
        headers: {
            'Cache-Control': 'no-cache'
        }
    })


    if (!imageResponse.ok) {
    return res.status(imageResponse.status).json({ error: `Failed to fetch image: ${imageResponse.statusText}` });
    }

    const imageBuffer = await imageResponse.arrayBuffer()

    res.setHeader('Content-Type', imageResponse.headers.get('Content-Type'));
    res.setHeader('Cache-Control', 'no-cache')
    res.send(Buffer.from(imageBuffer))
} catch (error) {
    console.error("Error proxying image:", error);
    res.status(500).json({ error: 'Error fetching image' });
}
}