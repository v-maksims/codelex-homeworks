/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['images.immediate.co.uk'],
    },
};

module.exports = nextConfig;
