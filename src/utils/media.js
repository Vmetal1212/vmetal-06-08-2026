export const BASE_URL = 'https://www.vmetalsolutions.com';

export const getStrapiMediaUrl = (path, fallback = '/images/asset2.avif') => {
  if (!path) {
    return fallback;
  }

  return `${BASE_URL}${path}`;
};