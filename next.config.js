/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "extensions/dist",
  experimental: {
    images: {
      unoptimized: true, // Imageタグをexport可能にする
    },
  },
  assetPrefix: "./",
};

module.exports = nextConfig;
