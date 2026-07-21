import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고속도로 통행료 요금 예측 계산기",
  description: "출발지와 목적지를 선택하여 차종별(1종 승용차부터 대형 화물차까지) 고속도로 예상 통행료 요금 및 대략적인 이동 거리를 자동 연산해 주는 요금 계산기 서비스입니다.",
  keywords: [
    "고속도로 통행료 계산",
    "고속도로 요금표",
    "하이패스 카드 요금",
    "통행료 할인 대상",
    "차종별 통행료",
  ],
};

export default function TollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
