const DEFAULT_SITE_URL = "https://www.vmetalsolutions.com";

export function getSiteUrl() {
  const configuredUrl = process.env.WEB_URL?.trim() || DEFAULT_SITE_URL;

  try {
    const url = new URL(configuredUrl);

    if (url.hostname === "vmetalsolutions.com") {
      url.hostname = "www.vmetalsolutions.com";
    }

    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function toCanonicalPath(pathname = "/") {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
}

export function buildSiteUrl(pathname = "/") {
  return new URL(toCanonicalPath(pathname), `${getSiteUrl()}/`).toString();
}
