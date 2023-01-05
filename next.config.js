/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateRobotsTxt: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/support",
        destination: "https://gradientlabs.ai/contact",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "https://gradientlabs.ai/contact",
        permanent: true,
      },
      {
        source: "/legal",
        destination: "https://gradientlabs.ai/legal",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "https://gradientlabs.ai/privacy-policy",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
