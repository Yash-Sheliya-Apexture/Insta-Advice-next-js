// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'api.rahulkumark13.sg-host.com',
//          pathname: '/**',
//       },
//       {
//           protocol: 'https',
//           hostname: 'rahulkumark13.sg-host.com',
//           pathname: '/**',
//         },
//         {
//          protocol: 'http',
//             hostname: 'rahulkumark13.sg-host.com',
//            pathname: '/**',
//         }
//     ],
//   },
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//       domains: ['api.rahulkumark13.sg-host.com'], // Add your image host here
//   },
// };

// module.exports = nextConfig;






// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: '/robots.txt',
//         destination: '/api/robots'
//       },
//       {
//         source: '/sitemap.xml',
//         destination: '/api/sitemap.xml'
//       }
//     ];
//   },
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'rahulkumark13.sg-host.com',
//         port: '',
//         pathname: '/wp-content/uploads/**',
//       },
//       {
//         protocol: 'http',
//         hostname: 'rahulkumark13.sg-host.com',
//         port: '',
//         pathname: '/wp-content/uploads/**',
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/robots.txt.js' //  Page route for robots.txt
      },
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml.js' // Page route for sitemap.xml
      }
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rahulkumark13.sg-host.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'rahulkumark13.sg-host.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;