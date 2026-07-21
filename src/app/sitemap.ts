import { getRoadList } from "@/lib/roadData";
import { serviceAreas, cctvPoints, highways } from "@/lib/data";
import { REGIONS } from "@/lib/regionHelper";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://highway.mrbrisbaneinsouth.kr";

  // 1. 기본 정적 페이지 목록
  const staticPages = [
    "",
    "/traffic",
    "/rest-areas",
    "/gas",
    "/ev",
    "/food",
    "/toll",
    "/region",
    "/ranking",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. 실시간 교통상황 개별 도로 상세 페이지
  const roads = getRoadList();
  const roadPages = roads.map((road) => ({
    url: `${baseUrl}/traffic/${encodeURIComponent(road.slug)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));


  // 4. 고속도로 휴게소 상세 페이지들
  const restAreaMainPages = serviceAreas.map((area) => ({
    url: `${baseUrl}/rest-areas/${encodeURIComponent(area.slug)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 4-1. 휴게소 음식/맛집 탭 서브페이지
  const restAreaFoodPages = serviceAreas.map((area) => ({
    url: `${baseUrl}/rest-areas/${encodeURIComponent(area.slug)}/food`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // 4-2. 휴게소 편의시설 탭 서브페이지
  const restAreaFacilityPages = serviceAreas.map((area) => ({
    url: `${baseUrl}/rest-areas/${encodeURIComponent(area.slug)}/facilities`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // 5. 주유소 상세 페이지
  const gasPages = serviceAreas.map((area) => ({
    url: `${baseUrl}/gas/${encodeURIComponent(area.slug)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // 6. 전기차 충전 상세 페이지
  const evPages = serviceAreas.map((area) => ({
    url: `${baseUrl}/ev/${encodeURIComponent(area.slug)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));


  // 8. 개별 CCTV 플레이어 페이지 (CCTV 색인 생성용)
  const cctvDetailPages = cctvPoints.map((cctv) => ({
    url: `${baseUrl}/cctv/${cctv.highwaySlug}/${cctv.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  // 9. 지역별 상세 페이지들
  const regionPages = REGIONS.map((reg) => ({
    url: `${baseUrl}/region/${reg.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...roadPages,
    ...restAreaMainPages,
    ...restAreaFoodPages,
    ...restAreaFacilityPages,
    ...gasPages,
    ...evPages,
    ...cctvDetailPages,
    ...regionPages
  ];
}
