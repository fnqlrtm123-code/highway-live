import { getRoadList } from "@/lib/roadData";
import { serviceAreas } from "@/lib/data";
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
    "/toll",
    "/region",
    "/ranking",
    "/privacy",
    "/terms",
    "/facilities",
    "/notice",
    "/forecast",
    "/broadcast",
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

  // 3. 고속도로 노선 일반 상세 페이지
  const highwayPages = roads.map((road) => ({
    url: `${baseUrl}/highways/${encodeURIComponent(road.slug)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // 4. 고속도로 휴게소 개별 맛집/편의시설 상세 페이지
  const restAreaPages = serviceAreas.map((area) => ({
    url: `${baseUrl}/rest-areas/${encodeURIComponent(area.slug)}`,
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

  // 7. 편의시설 카테고리 상세 페이지
  const facilitySlugs = ['baby-room', 'shower', 'sleep', 'dog', 'pharmacy', 'atm'];
  const facilityPages = facilitySlugs.map((slug) => ({
    url: `${baseUrl}/facilities/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...roadPages,
    ...highwayPages,
    ...restAreaPages,
    ...gasPages,
    ...evPages,
    ...facilityPages
  ];
}
