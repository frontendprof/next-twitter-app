/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com',
      'cyberweb8.github.io',
      'randomuser.me',
    ],
  },
};

module.exports = nextConfig;
