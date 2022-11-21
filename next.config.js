/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["reqres.in"],
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
