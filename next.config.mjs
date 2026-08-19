/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.vmetalsolutions.com",
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL || "https://www.vmetalsolutions.com",
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://www.vmetalsolutions.com/api",
    WEB_URL: process.env.WEB_URL || "https://www.vmetalsolutions.com",
  },
  trailingSlash: true,
};

export default nextConfig;

