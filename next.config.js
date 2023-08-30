/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["127.0.0.1"],
        formats: ['image/avif', 'image/webp']
    },
};

module.exports = nextConfig;
