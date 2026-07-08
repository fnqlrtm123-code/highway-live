export const getRestAreaThumbnail = (highwaySlug: string): string => {
  switch (highwaySlug) {
    case 'gyeongbu':
      return '/images/thumbnails/gyeongbu.jpg';
    case 'seohaean':
      return '/images/thumbnails/seohaean.jpg';
    case 'yeongdong':
      return '/images/thumbnails/yeongdong.jpg';
    case 'namhae':
      return '/images/thumbnails/gangbyeon.jpg';
    case 'jungbu':
      return '/images/thumbnails/olympic.jpg';
    default:
      return '/images/thumbnails/default.jpg';
  }
};

/**
 * Returns the actual rest area photo if available from the public dataset.
 * Falls back to the highway-level thumbnail if no specific photo is provided.
 */
export const getRestAreaImage = (restAreaSlug: string, highwaySlug: string): string => {
  const specificImages = [
    'geochang-seoul',
    'geochang-busan',
    'jirisan-seoul',
    'jirisan-busan',
    'hanamdeurim-both',
    'sancheong-both',
    'sancheong-both-1',
    'danyangpalgyeong-both',
    'danyangpalgyeong-busan',
    'uiwang-seoul',
    'haman-busan',
    'haman-busan-1',
    'hamyang-both',
    'hamyang-both-1'
  ];

  if (specificImages.includes(restAreaSlug)) {
    return `/images/rest-areas/${restAreaSlug}.jpg`;
  }

  return getRestAreaThumbnail(highwaySlug);
};
