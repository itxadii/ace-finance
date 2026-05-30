import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.acecapitalhub.in";
  const routes = [
    "",
    "/about",
    "/contact",
    "/emicalculator",
    "/cookie-policy",
    "/privacy",
    "/terms",
    "/home-loan",
    "/personal-loan",
    "/business-loan",
    "/loan-against-property",
    "/auto-loan",
    "/insurance",
    "/mutual-funds",
    "/commodity-currency",
    "/shares-trading",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
