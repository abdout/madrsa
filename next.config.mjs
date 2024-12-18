/** @type {import('next').NextConfig} */

const path = require('path'); // Import the path module

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@clerk/elements": path.resolve(__dirname, "node_modules/@clerk/elements"),
    };
    return config;
  },
};

module.exports = nextConfig;