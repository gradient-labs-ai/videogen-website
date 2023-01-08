/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateRobotsTxt: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: 'https://gradientlabs.ai/contact',
        permanent: true,
      },
      {
        source: '/support',
        destination: 'https://gradientlabs.ai/support',
        permanent: true,
      },
      {
        source: '/legal',
        destination: 'https://gradientlabs.ai/legal',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
