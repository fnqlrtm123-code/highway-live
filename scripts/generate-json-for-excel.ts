import { getRoadList } from "../src/lib/roadData";
import { serviceAreas, highways } from "../src/lib/data";
import { REGIONS } from "../src/lib/regionHelper";
import * as fs from "fs";
import * as path from "path";

const baseUrl = "https://highway.mrbrisbaneinsouth.kr";

interface RowData {
  title: string;
  url: string;
  cta: string;
}

const rows: RowData[] = [];

// 1. Static Pages
const staticConfigs = [
  { path: "", title: "전국 고속도로 교통상황 및 휴게소 포털", keyword: "전국 고속도로 교통상황 및 휴게소 정보" },
  { path: "/traffic", title: "전국 고속도로 교통상황 및 CCTV 모니터링", keyword: "전국 고속도로 교통상황" },
  { path: "/rest-areas", title: "전국 고속도로 휴게소 위치 및 종합 정보", keyword: "전국 고속도로 휴게소 정보" },
  { path: "/gas", title: "전국 고속도로 주유소 휘발유/경유/LPG 최저가 비교", keyword: "전국 고속도로 주유소 가격비교" },
  { path: "/ev", title: "전국 고속도로 전기차 충전소 위치 및 요금 비교", keyword: "전국 고속도로 전기차 충전소 비교" },
  { path: "/food", title: "고속도로 휴게소 맛집메뉴 및 추천 대표음식", keyword: "고속도로 휴게소 맛집메뉴" },
  { path: "/toll", title: "고속도로 통행료 계산 및 요금 조회", keyword: "고속도로 통행료 조회" },
  { path: "/region", title: "지역별 고속도로 휴게소 목록 및 현황", keyword: "지역별 고속도로 휴게소 목록" },
  { path: "/ranking", title: "고속도로 휴게소 랭킹 및 맛집 인기 순위", keyword: "고속도로 휴게소 랭킹" },
  { path: "/privacy", title: "고속도로 포털 개인정보처리방침", keyword: "고속도로 포털 개인정보처리방침" },
  { path: "/terms", title: "고속도로 포털 이용약관", keyword: "고속도로 포털 이용약관" },
];

staticConfigs.forEach(cfg => {
  const url = `${baseUrl}${cfg.path}`;
  rows.push({
    title: cfg.title,
    url: url,
    cta: `${cfg.keyword} 안내:${url}`
  });
});

// 2. Road Pages (/traffic/[roadSlug])
const roads = getRoadList();
roads.forEach(road => {
  const encodedSlug = encodeURIComponent(road.slug);
  const url = `${baseUrl}/traffic/${encodedSlug}`;
  rows.push({
    title: `${road.name} 교통상황, 정체 구간 및 CCTV 영상`,
    url: url,
    cta: `${road.name} 교통상황 안내:${url}`
  });
});


// 4. Rest Areas main pages (/rest-areas/[restAreaSlug])
serviceAreas.forEach(area => {
  const encodedSlug = encodeURIComponent(area.slug);
  const url = `${baseUrl}/rest-areas/${encodedSlug}`;
  rows.push({
    title: `${area.name} (${area.directionName}) 정보, 맛집 메뉴, 편의시설 및 주유소 현황`,
    url: url,
    cta: `${area.name} (${area.directionName}) 안내:${url}`
  });
});

// 5. Rest Area Food pages (/rest-areas/[restAreaSlug]/food)
serviceAreas.forEach(area => {
  const encodedSlug = encodeURIComponent(area.slug);
  const url = `${baseUrl}/rest-areas/${encodedSlug}/food`;
  rows.push({
    title: `${area.name} (${area.directionName}) 맛집메뉴 (추천메뉴 및 전체메뉴판 가격)`,
    url: url,
    cta: `${area.name} (${area.directionName}) 맛집메뉴 안내:${url}`
  });
});

// 6. Rest Area Facilities pages (/rest-areas/[restAreaSlug]/facilities)
serviceAreas.forEach(area => {
  const encodedSlug = encodeURIComponent(area.slug);
  const url = `${baseUrl}/rest-areas/${encodedSlug}/facilities`;
  rows.push({
    title: `${area.name} (${area.directionName}) 편의시설 정보 (샤워실, 약국, 수유실 등 유무)`,
    url: url,
    cta: `${area.name} (${area.directionName}) 편의시설 정보 안내:${url}`
  });
});

// 7. Gas pages (/gas/[restAreaSlug])
serviceAreas.forEach(area => {
  const encodedSlug = encodeURIComponent(area.slug);
  const url = `${baseUrl}/gas/${encodedSlug}`;
  rows.push({
    title: `${area.name} (${area.directionName}) 주유소 가격 (휘발유, 경유, LPG 가격 비교)`,
    url: url,
    cta: `${area.name} (${area.directionName}) 주유소 가격비교 안내:${url}`
  });
});

// 8. EV pages (/ev/[restAreaSlug])
serviceAreas.forEach(area => {
  const encodedSlug = encodeURIComponent(area.slug);
  const url = `${baseUrl}/ev/${encodedSlug}`;
  rows.push({
    title: `${area.name} (${area.directionName}) 전기차 충전소 (위치, 충전기 개수 및 요금 비교)`,
    url: url,
    cta: `${area.name} (${area.directionName}) 전기차 충전소 가격비교 안내:${url}`
  });
});

// 9. Region pages (/region/[regionSlug])
REGIONS.forEach(reg => {
  const url = `${baseUrl}/region/${reg.slug}`;
  rows.push({
    title: `${reg.fullName} 고속도로 휴게소 현황 전체 리스트`,
    url: url,
    cta: `${reg.fullName} 고속도로 휴게소 목록 안내:${url}`
  });
});


// Write to JSON
const scratchDir = path.join(__dirname, "../scratch");
if (!fs.existsSync(scratchDir)) {
  fs.mkdirSync(scratchDir, { recursive: true });
}
const jsonPath = path.join(scratchDir, "excel-data.json");
fs.writeFileSync(jsonPath, JSON.stringify(rows, null, 2), "utf8");
console.log(`Generated excel-data.json with ${rows.length} rows.`);
