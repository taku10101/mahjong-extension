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
  output: {
    filename: "[name].js",
    publicPath: "/",
  },
  assetPrefix: "./",
};

module.exports = nextConfig;
