export function getStrapiMedia(url) {
  if (!url) return "";

  if (url.startsWith("http")) return url;

  return `https://www.vmetalsolutions.com${url}`;
}
