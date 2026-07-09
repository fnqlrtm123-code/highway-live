async function test() {
  const brands = new Set();
  const evBrands = [];
  for (let page = 1; page <= 15; page++) {
    const url = `http://data.ex.co.kr/openapi/restinfo/restBrandList?key=7931111083&type=json&numOfRows=99&pageNo=${page}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data && data.list) {
        data.list.forEach(item => {
          if (item.brdName) {
            brands.add(item.brdName);
            if (item.brdName.includes('전기') || item.brdName.includes('충전') || item.brdName.includes('수소') || item.brdName.includes('EV') || item.brdName.includes('pit')) {
              evBrands.push(item);
            }
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
  console.log('Total unique brands count:', brands.size);
  console.log('EV/Hydrogen related brand entries found:', evBrands);
}
test();
