import meta from "@/utils/meta.json";
import mildSteel from "@/utils/mild_steel.json";
import mildPipes from "@/utils/mild_pipes.json";
import { buildSiteUrl, toCanonicalPath } from "@/utils/seo";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "about",
  "accessories",
  "products",
  "services",
  "blogs",
  "contactus",
  "inquiry",
  "privacy",
];

const serviceRoutes = [
  "services/cut-to-length",
  "services/slitting",
  "services/corrugation-profiling",
  "services/zc-purlin",
];

async function fetchCmsSlugs(collection) {
  const apiUrl = process.env.API_URL;

  if (!apiUrl) {
    return [];
  }

  try {
    const response = await fetch(
      `${apiUrl}/api/${collection}?fields[0]=slug&pagination[pageSize]=100`,
      {
        next: { revalidate },
      }
    );

    if (!response.ok) {
      return [];
    }

    const payload = await response.json();

    return (payload?.data || [])
      .map((item) => item?.attributes?.slug)
      .filter(Boolean);
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const now = new Date();
  const routes = new Set();

  staticRoutes.forEach((route) => routes.add(toCanonicalPath(route)));
  serviceRoutes.forEach((route) => routes.add(toCanonicalPath(route)));

  meta.forEach((item) => routes.add(toCanonicalPath(`products/${item.slug}`)));
  mildSteel.forEach((item) =>
    routes.add(toCanonicalPath(`products/ms-structure/${item.slug}`))
  );
  mildPipes.sub_products.forEach((item) =>
    routes.add(toCanonicalPath(`products/ms-pipes/${item.slug}`))
  );

  const [productSlugs, serviceSlugs, blogSlugs] = await Promise.all([
    fetchCmsSlugs("products"),
    fetchCmsSlugs("services"),
    fetchCmsSlugs("blogs"),
  ]);

  productSlugs.forEach((slug) => routes.add(toCanonicalPath(`products/${slug}`)));
  serviceSlugs.forEach((slug) => routes.add(toCanonicalPath(`services/${slug}`)));
  blogSlugs.forEach((slug) => routes.add(toCanonicalPath(`blogs/${slug}`)));

  return Array.from(routes).map((route) => ({
    url: buildSiteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route.startsWith("/products/") || route.startsWith("/services/")
          ? 0.8
          : 0.7,
  }));
}
