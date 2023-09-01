/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [ "poi-b1bm.onrender.com"],
        formats: ['image/avif', 'image/webp']
    },
};

module.exports = nextConfig;
