// Utility to get the correct public asset path for both dev and production
export const getPublicAssetPath = (path: string): string => {
  const basePath = import.meta.env.PROD ? '/pastelcarioca' : '';
  return `${basePath}${path}`;
};