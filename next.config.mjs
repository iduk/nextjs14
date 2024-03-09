/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  remotePatterns:[
    {
      protocol: 'https',
      hostname: 'image.tmdb.org',
      port: '',
      pathname: '/',
    },
  ],
};

export default nextConfig;
