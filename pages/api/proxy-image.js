// // pages/api/proxy-image.js
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req, res) {
// const { imageUrl } = req.query;

// if (!imageUrl) {
// return res.status(400).json({ error: 'Image URL is required' });
// }

// try {
//     const imageResponse = await fetch(imageUrl, {
//         headers: {
//             'Cache-Control': 'no-cache'
//         }
//     })


//     if (!imageResponse.ok) {
//     return res.status(imageResponse.status).json({ error: `Failed to fetch image: ${imageResponse.statusText}` });
//     }

//     const imageBuffer = await imageResponse.arrayBuffer()

//     res.setHeader('Content-Type', imageResponse.headers.get('Content-Type'));
//     res.setHeader('Cache-Control', 'no-cache')
//     res.send(Buffer.from(imageBuffer))
// } catch (error) {
//     console.error("Error proxying image:", error);
//     res.status(500).json({ error: 'Error fetching image' });
// }
// }



// pages/api/proxy-image.js
// import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
    const { imageUrl } = req.query;

    if (!imageUrl) {
        return res.status(400).json({ error: 'Image URL is required' });
    }

    try {
        const imageResponse = await fetch(imageUrl, {
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });

        if (!imageResponse.ok) {
            console.error(`Failed to fetch image from ${imageUrl}:`, imageResponse.status, imageResponse.statusText);
            return res.status(imageResponse.status).json({ error: `Failed to fetch image: ${imageResponse.statusText}` });
        }

        const imageBuffer = await imageResponse.arrayBuffer();

        res.setHeader('Content-Type', imageResponse.headers.get('Content-Type'));
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // Re-add for the proxy response
        res.setHeader('Pragma', 'no-cache');  // For older clients
        res.setHeader('Expires', '0');        // For very old clients
        res.send(Buffer.from(imageBuffer));

    } catch (error) {
        console.error("Error proxying image:", error);
        res.status(500).json({ error: 'Error fetching image' });
    }
}