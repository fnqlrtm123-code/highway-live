import { NextResponse } from "next/server";
import { getRoadList } from "@/lib/roadData";
import { serviceAreas } from "@/lib/data";

export const dynamic = "force-static";

export async function GET() {
  const siteUrl = "https://highway.mrbrisbaneinsouth.kr";
  const pubDate = new Date().toUTCString();

  // 1. Highway road items
  const roads = getRoadList();
  const roadItems = roads.map((road) => {
    const escapedName = road.name
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

    const title = `${escapedName} 교통상황, 정체 구간 및 CCTV 영상`;
    const link = `${siteUrl}/traffic/${encodeURIComponent(road.slug)}`;
    
    const description = road.description
      ? road.description
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;")
      : "";

    return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  });

  // 2. Service area items
  const areaItems = serviceAreas.map((area) => {
    const escapedName = area.name
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

    const directionSuffix = area.directionName ? `(${area.directionName})` : "";
    const title = `${escapedName}${directionSuffix} 휴게소 맛집 추천, 편의시설, 주유소 요금 안내`;
    const link = `${siteUrl}/rest-areas/${encodeURIComponent(area.slug)}`;
    
    const description = `${escapedName}${directionSuffix} 휴게소의 대표 음식 메뉴 추천, 전기차 충전 및 수소차 충전 현황, 주유소 브랜드 및 편의시설 정보를 종합 제공합니다.`
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

    return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  });

  const itemsXml = [...roadItems, ...areaItems].join("\n");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>로드픽 - 고속도로 교통상황 및 휴게소 정보</title>
    <link>${siteUrl}</link>
    <description>전국 고속도로 노선별 실시간 교통 소통 상황, 사고 통제 정보, 실시간 CCTV 영상, 주요 휴게소 맛집 메뉴 및 주유소 요금 정보를 확인하세요.</description>
    <language>ko</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
