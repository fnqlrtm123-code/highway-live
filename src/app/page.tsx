import { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  description: "전국 고속도로 실시간 교통상황 및 CCTV, 휴게소 주유소 휘발유·경유 최저가 가격 비교, 전기차 충전소 위치 및 급속 충전기 현황을 로드픽에서 한눈에 확인하세요.",
  keywords: [
    "고속도로 주유소 가격",
    "고속도로 휴게소 주유소",
    "고속도로 CCTV",
    "고속도로 전기차 충전소"
  ]
};

export default function Home() {
  return <HomeClient />;
}
