const fs = require('fs');

function cleanName(name) {
  if (!name) return '';
  return name.replace(/\(.*\)/, '').replace(/휴게소$/, '').replace(/주유소$/, '').trim();
}

async function testMatch() {
  // 1. Load CSV data
  const csvBuf = fs.readFileSync('scripts/ev_chargers.csv');
  const decoder = new TextDecoder('euc-kr');
  const csvText = decoder.decode(csvBuf);
  const csvLines = csvText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  const csvStations = [];
  for (let i = 1; i < csvLines.length; i++) {
    const cols = csvLines[i].split(',');
    if (cols.length < 5) continue;
    csvStations.push({
      rawName: cols[0],
      cleanedName: cleanName(cols[0]),
      region: cols[1],
      hasEv: cols[3] === 'O',
      hasHydrogen: cols[4] === 'O'
    });
  }
  
  // 2. Fetch restConvList API to see what rest areas we aggregate
  console.log('Fetching rest areas from restConvList...');
  const list = [];
  for (let page = 1; page <= 15; page++) {
    const url = `http://data.ex.co.kr/openapi/restinfo/restConvList?key=7931111083&type=json&numOfRows=99&pageNo=${page}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.list) {
        list.push(...data.list);
        if (data.list.length < 99) break;
      } else {
        break;
      }
    } catch (error) {
      console.error(error);
      break;
    }
  }
  
  const restAreasMap = {};
  list.forEach(item => {
    const code = item.stdRestCd;
    if (!code) return;
    if (!restAreasMap[code]) {
      const rawName = item.stdRestNm || '';
      if (!rawName) return;
      restAreasMap[code] = {
        code,
        rawName,
        cleanedName: cleanName(rawName),
        directionName: rawName.match(/\((.*?)\)/) ? rawName.match(/\((.*?)\)/)[0] : ''
      };
    }
  });
  
  const apiRestAreas = Object.values(restAreasMap);
  console.log(`Aggregated ${apiRestAreas.length} rest areas from API.`);
  
  // 3. Match them!
  let matchedCount = 0;
  const unmatched = [];
  
  apiRestAreas.forEach(apiArea => {
    // Find matching station in CSV
    // A match is when cleaned names match, and direction (or region) matches.
    const cleanApiName = apiArea.cleanedName;
    const apiDir = apiArea.directionName; // e.g. "(부산)"
    
    const match = csvStations.find(csvStation => {
      const cleanCsvName = csvStation.cleanedName;
      const csvDir = csvStation.rawName.match(/\((.*?)\)/) ? csvStation.rawName.match(/\((.*?)\)/)[0] : '';
      
      const namesMatch = cleanCsvName === cleanApiName || cleanCsvName.includes(cleanApiName) || cleanApiName.includes(cleanCsvName);
      
      let dirMatch = true;
      if (apiDir && csvDir) {
        dirMatch = apiDir === csvDir || apiDir.includes(csvDir) || csvDir.includes(apiDir);
      }
      return namesMatch && dirMatch;
    });
    
    if (match) {
      matchedCount++;
    } else {
      unmatched.push(apiArea);
    }
  });
  
  console.log(`Matched: ${matchedCount} / ${apiRestAreas.length} (${((matchedCount/apiRestAreas.length)*100).toFixed(1)}%)`);
  console.log('Unmatched samples:', unmatched.slice(0, 10));
}

testMatch();
