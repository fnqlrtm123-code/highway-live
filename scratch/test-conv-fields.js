async function test() {
  const names = new Set();
  for (let page = 1; page <= 15; page++) {
    const url = `http://data.ex.co.kr/openapi/restinfo/restConvList?key=7931111083&type=json&numOfRows=99&pageNo=${page}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data && data.list) {
        data.list.forEach(item => {
          if (item.psName) names.add(item.psName);
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
  console.log('All Unique facility names across all pages:', Array.from(names));
}
test();
