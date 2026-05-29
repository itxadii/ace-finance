import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // makes site static (VERY IMPORTANT)

  images: {
    unoptimized: true, // required for static export
  },

  trailingSlash: true, // better for SEO consistency

  reactStrictMode: true,

  // Add this block to fix the styled-components hydration issue globally
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;