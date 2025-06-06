/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/menu',
        destination: '/menu.pdf',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
