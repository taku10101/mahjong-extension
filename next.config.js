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
  output: "export",
  assetPrefix: "./", // 画像、cssなどを反映させる
};

module.exports = nextConfig;
