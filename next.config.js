/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponents: true,
    reactRoot: true,
    externalDir: true,
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
