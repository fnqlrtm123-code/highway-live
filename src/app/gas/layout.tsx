import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고속도로 알뜰주유소 기름값 및 전기차 충전소 조회",
  description: "전국 고속도로 노선의 ex-oil 알뜰주유소별 휘발유 경유 LPG 최저가 가격 비교 및 전기차(EV) 급속 충전기 수량과 수소차 충전 현황을 한눈에 조회할 수 있는 가이드입니다.",
  keywords: [
    "고속도로 주유소 가격",
    "고속도로 최저가 주유소",
    "알뜰주유소 기름값",
    "고속도로 전기차 충전소",
    "수소차 충전소",
  ],
};

export default function GasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
