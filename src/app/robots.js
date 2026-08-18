import { getSiteUrl } from "@/utils/seo";

export const dynamic = "force-static";

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
