// Utility function to resolve asset paths correctly for both development and production
export function getAssetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development mode, return the original path
  if (import.meta.env.DEV) {
    return '/' + cleanPath;
  }
  
  // In production, add the base path
  const basePath = import.meta.env.BASE_URL || '/';
  return basePath + cleanPath;
}

// Helper function for responsive images (handles pipe-separated paths)
export function getResponsiveImagePaths(imagePath) {
  if (!imagePath) return { desktop: '', mobile: '' };
  
  if (imagePath.includes('|')) {
    const [desktop, mobile] = imagePath.split('|');
    return {
      desktop: getAssetPath(desktop),
      mobile: getAssetPath(mobile)
    };
  }
  
  return {
    desktop: getAssetPath(imagePath),
    mobile: getAssetPath(imagePath)
  };
}