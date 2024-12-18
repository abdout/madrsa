/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias, // Important: keep existing aliases
      "@clerk/elements": path.resolve(__dirname, "node_modules/@clerk/elements"),
    };
    return config;
  },
};

export default nextConfig;
