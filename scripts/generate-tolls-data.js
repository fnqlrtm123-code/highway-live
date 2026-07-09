const fs = require('fs');
const path = require('path');

const API_KEY = '7264327284';

const CITY_GATES = {
  '서울': '101',
  '인천': '011',
  '수원': '103',
  '춘천': '174',
  '강릉': '189',
  '대전': '115',
  '청주': '111',
  '전주': '158',
  '광주': '167',
  '목포': '509',
  '대구': '622',
  '울산': '641',
  '부산': '140'
};

const cities = Object.keys(CITY_GATES);

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchPair(startCity, endCity) {
  const startCode = CITY_GATES[startCity];
  const endCode = CITY_GATES[endCity];
  const url = `https://data.ex.co.kr/openapi/toll/bhoinstIntoTollList?key=${API_KEY}&type=json&dprtrTolofCd=${startCode}&arrvTolofCd=${endCode}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`[${startCity} -> ${endCity}] API error: status ${res.status}`);
      return null;
    }
    const data = await res.json();
    if (data.list && data.list.length > 0) {
      const item = data.list[0];
      
      // Sum the distances
      const dist2 = parseFloat(item.crgw2SumDstne || '0');
      const dist4 = parseFloat(item.crgw4SumDstne || '0');
      const dist6 = parseFloat(item.crgw6SumDstne || '0');
      const totalDist = Math.round(dist2 + dist4 + dist6);

      // Travel time text
      const hours = parseInt(item.hourUntDrveHour || '0', 10);
      const minutes = parseInt(item.mmUntDrveHour || '0', 10);
      let timeText = '';
      if (hours > 0) {
        timeText = `${hours}시간 ${minutes}분`;
      } else {
        timeText = `${minutes}분`;
      }

      const tolls = {
        '1': parseInt(item.nrmlKnd1Amt || '0', 10),
        '2': parseInt(item.nrmlKnd2Amt || '0', 10),
        '3': parseInt(item.nrmlKnd3Amt || '0', 10),
        '4': parseInt(item.nrmlKnd4Amt || '0', 10),
        '5': parseInt(item.nrmlKnd5Amt || '0', 10),
        '6': parseInt(item.nrmlKnd6Amt || '0', 10)
      };

      console.log(`[${startCity} -> ${endCity}] Success! Toll: ${tolls['1']}원, Dist: ${totalDist}km, Time: ${timeText}`);
      return { dist: totalDist, time: timeText, tolls };
    } else {
      console.warn(`[${startCity} -> ${endCity}] No data returned`, data);
      return null;
    }
  } catch (e) {
    console.error(`[${startCity} -> ${endCity}] Fetch failed:`, e.message);
    return null;
  }
}

async function main() {
  const result = {};

  for (let i = 0; i < cities.length; i++) {
    for (let j = 0; j < cities.length; j++) {
      if (i === j) continue;
      const start = cities[i];
      const end = cities[j];
      const data = await fetchPair(start, end);
      if (data) {
        result[`${start}-${end}`] = data;
      }
      await sleep(150); // Be polite to the API
    }
  }

  const outputPath = path.join(__dirname, '..', 'src', 'lib', 'tolls-data.ts');
  const fileContent = `// 한국도로공사 공공데이터 기반 실시간 통행료 및 운행거리/시간 수집 데이터
export interface TollRouteInfo {
  dist: number;
  time: string;
  tolls: Record<string, number>;
}

export const TOLLS_DATA: Record<string, TollRouteInfo> = ${JSON.stringify(result, null, 2)};
`;

  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  console.log(`Successfully generated ${outputPath}`);
}

main().catch(console.error);
