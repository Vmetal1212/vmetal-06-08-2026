import { getSiteUrl } from "@/utils/seo";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/uploads/", "/api/"],
      },
    ],
    sitemap: new URL("/sitemap.xml", `${getSiteUrl()}/`).toString(),
    host: getSiteUrl(),
  };
}
