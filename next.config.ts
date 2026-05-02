import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // makes site static (VERY IMPORTANT)

  images: {
    unoptimized: true, // required for static export
  },

  trailingSlash: true, // better for SEO consistency

  reactStrictMode: true,
};

export default nextConfig;