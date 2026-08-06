/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.vmetalsolutions.com",
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    WEB_URL: process.env.WEB_URL,
  },
  trailingSlash: true,
};
export default nextConfig;
