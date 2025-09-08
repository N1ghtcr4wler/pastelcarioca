// Utility to get the correct public asset path for both dev and production
export const getPublicAssetPath = (path: string): string => {
  const basePath = window.location.hostname.includes('github.io') ? '/pastelcarioca' : '';
  return `${basePath}${path}`;
};