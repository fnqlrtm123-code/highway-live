import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "전국 고속도로 휴게소 맛집 메뉴 및 편의시설 목록",
  description: "경부선, 영동선, 서해안선 등 전국 고속도로 노선의 모든 상하행 휴게소 대표 시그니처 메뉴와 브랜드 입점 매장, 수유실/샤워실 등 주요 편의시설 정보를 모아 제공합니다.",
  keywords: [
    "고속도로 휴게소 맛집",
    "휴게소 추천 메뉴",
    "전국 휴게소 편의시설",
    "휴게소 대표음식",
    "휴게소 맛집 랭킹",
  ],
};

export default function RestAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
