import { ServiceArea } from './data';

export interface RegionInfo {
  slug: string;
  name: string;
  fullName: string;
}

export const REGIONS: RegionInfo[] = [
  { slug: 'gyeongbuk', name: '경북', fullName: '경상북도' },
  { slug: 'gyeonggi', name: '경기', fullName: '경기도' },
  { slug: 'chungbuk', name: '충북', fullName: '충청북도' },
  { slug: 'jeonbuk', name: '전북', fullName: '전라북도' },
  { slug: 'chungnam', name: '충남', fullName: '충청남도' },
  { slug: 'gangwon', name: '강원', fullName: '강원도' },
  { slug: 'gyeongnam', name: '경남', fullName: '경상남도' },
  { slug: 'jeonnam', name: '전남', fullName: '전라남도' },
  { slug: 'daegu', name: '대구', fullName: '대구광역시' },
  { slug: 'ulsan', name: '울산', fullName: '울산광역시' },
  { slug: 'seoul', name: '서울', fullName: '서울특별시' },
  { slug: 'daejeon', name: '대전', fullName: '대전광역시' },
  { slug: 'busan', name: '부산', fullName: '부산광역시' },
];

export function getRegionOfRestArea(area: ServiceArea): string {
  const lat = area.latitude;
  const lng = area.longitude;
  const name = area.name;

  // 1. Specific overrides based on rest area names
  if (name.includes('서울만남') || name.includes('서울하이패스')) return 'seoul';
  if (name.includes('의왕') || name.includes('구리') || name.includes('시흥하늘') || name.includes('서하남')) return 'gyeonggi';
  if (name.includes('외동') || name.includes('양북') || name.includes('현풍') || name.includes('논공')) return 'gyeongbuk';
  if (name.includes('장유') || name.includes('김해금관가야') || name.includes('서부산')) return 'gyeongnam';
  if (name.includes('금산인삼랜드')) return 'chungnam';
  if (name.includes('벌곡')) return 'chungnam'; // 벌곡휴게소는 충남 논산시 벌곡면
  if (name.includes('지리산') || name.includes('강천산')) return 'jeonbuk';
  if (name.includes('곡성') || name.includes('백양사') || name.includes('보성녹차') || name.includes('장흥정남진')) return 'jeonnam';
  if (name.includes('덕유산') || name.includes('진안마이산')) return 'jeonbuk';
  
  if (name.includes('치악') || name.includes('횡성') || name.includes('문막') || 
      name.includes('평창') || name.includes('강릉') || name.includes('동해') || 
      name.includes('옥계') || name.includes('구정') || name.includes('양양') || 
      name.includes('홍천') || name.includes('내린천')) {
    return 'gangwon';
  }

  // 2. Broad coordinate-based boundaries
  
  // Seoul
  if (lat > 37.45 && lat < 37.7 && lng > 126.8 && lng < 127.18) {
    return 'seoul';
  }
  
  // Gangwon-do
  if (lat > 37.0 && lat < 38.6 && lng > 127.85) {
    return 'gangwon';
  }
  
  // Gyeonggi-do
  if (lat > 36.9 && lat < 38.3 && lng > 126.4 && lng < 127.85) {
    return 'gyeonggi';
  }

  // Daejeon
  if (lat > 36.15 && lat < 36.45 && lng > 127.25 && lng < 127.5) {
    return 'daejeon';
  }

  // Chungcheongbuk-do
  if (lat > 35.9 && lat < 37.2 && lng > 127.4 && lng < 128.8) {
    return 'chungbuk';
  }

  // Chungcheongnam-do
  if (lat > 35.85 && lat < 37.1 && lng > 125.9 && lng < 127.4) {
    return 'chungnam';
  }

  // Jeollabuk-do
  if (lat > 35.35 && lat < 36.15 && lng > 126.3 && lng < 127.9) {
    return 'jeonbuk';
  }

  // Jeollanam-do
  if (lat > 34.0 && lat < 35.35 && lng > 125.8 && lng < 127.75) {
    return 'jeonnam';
  }

  // Daegu
  if (lat > 35.7 && lat < 36.0 && lng > 128.35 && lng < 128.75) {
    return 'daegu';
  }

  // Gyeongsangbuk-do
  if (lat > 35.5 && lat < 37.1 && lng > 127.75 && lng < 129.5) {
    return 'gyeongbuk';
  }

  // Ulsan
  if (lat > 35.35 && lat < 35.7 && lng > 129.1 && lng < 129.45) {
    return 'ulsan';
  }

  // Busan
  if (lat > 35.0 && lat < 35.3 && lng > 128.8 && lng < 129.3) {
    return 'busan';
  }

  // Gyeongsangnam-do
  if (lat > 34.4 && lat < 35.8 && lng > 127.4 && lng < 129.35) {
    return 'gyeongnam';
  }

  // Fallback
  return 'gyeonggi';
}
