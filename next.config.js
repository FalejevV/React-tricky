/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ['@react-three/postprocessing']
};

module.exports = nextConfig;
