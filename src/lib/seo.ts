import type { Metadata } from "next";

export const SITE_NAME = "로드픽";
export const SITE_URL = "https://roadpick.kr";
const defaultTitle = "전국 고속도로 CCTV·휴게소·주유소 안내";
const defaultDescription = "도로별 CCTV와 교통정보, 휴게소 편의시설, 주유소 가격 정보를 확인하세요.";
const defaultImages = [{ url: "/highway_traffic_1.png", width: 1200, height: 630, alt: defaultTitle }];

// Nested Open Graph objects replace their parent in Next.js, so every page
// supplies its own site name, URL and sharing metadata.
export function pageMetadata(input: Metadata, pathname: string = "/"): Metadata {
  const rawTitle = typeof input.title === "string" ? input.title
    : input.title && "absolute" in input.title ? input.title.absolute
    : input.title && "default" in input.title ? input.title.default : defaultTitle;
  const title = (rawTitle || defaultTitle)
    .replace(/\s*[|–—-]\s*(온쉼표(?: 템플스테이)?|로드픽|전국 공항버스 시간표)$/, "")
    .replace(/^(온쉼표|로드픽)\s*[|–—-]\s*/, "");
  const description = input.description || defaultDescription;
  const canonical = input.alternates?.canonical || pathname;
  const url = typeof canonical === "string" ? canonical : pathname;
  const images = input.openGraph?.images || defaultImages;
  return {
    ...input,
    title: input.title && typeof input.title === "object" && "template" in input.title
      ? { default: title, template: "%s" } : title,
    description,
    alternates: { ...input.alternates, canonical },
    openGraph: {
      type: "website", locale: "ko_KR", ...input.openGraph,
      title, description, url, siteName: SITE_NAME, images,
    },
    twitter: {
      card: "summary_large_image", ...input.twitter,
      title, description, images,
    },
  };
}
