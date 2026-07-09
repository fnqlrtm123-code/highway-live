async function test() {
  const matches = [];
  for (let page = 1; page <= 15; page++) {
    const url = `http://data.ex.co.kr/openapi/restinfo/restConvList?key=7931111083&type=json&numOfRows=99&pageNo=${page}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data && data.list) {
        data.list.forEach(item => {
          const desc = item.psDesc || '';
          const name = item.psName || '';
          if (desc.includes('전기차') || desc.includes('충전') || desc.includes('수소') || name.includes('전기차') || name.includes('충전') || name.includes('수소')) {
            matches.push({ stdRestNm: item.stdRestNm, psName: item.psName, psDesc: item.psDesc });
          }
        });
        if (data.list.length < 99) break;
      } else {
        break;
      }
    } catch (err) {
      console.error(err);
      break;
    }
  }
  console.log(`Found ${matches.length} matching facilities containing charger keywords.`);
  if (matches.length > 0) {
    console.log('Sample matches:', matches.slice(0, 10));
  }
}
test();
