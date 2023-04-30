/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
    // typedRoutes: true,
  },
};

module.exports = nextConfig;
