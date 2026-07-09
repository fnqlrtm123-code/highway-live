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

  // 3. 고속도로 휴게소 개별 맛집/편의시설 상세 페이지
  const restAreaPages = serviceAreas.map((area) => ({
    url: `${baseUrl}/rest-areas/${encodeURIComponent(area.slug)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...roadPages, ...restAreaPages];
}
