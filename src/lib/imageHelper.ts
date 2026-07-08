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
