async function test() {
  const url = `http://data.ex.co.kr/openapi/restinfo/restConvOilList?key=7931111083&type=json&numOfRows=99&pageNo=1`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log('Sample 0504 Item:', JSON.stringify(data.list[0], null, 2));
    
    const names = new Set();
    if (data && data.list) {
      data.list.forEach(item => {
        if (item.psName) names.add(item.psName);
      });
    }
    console.log('Unique facility names in 0504 Page 1:', Array.from(names));
  } catch (err) {
    console.error(err);
  }
}
test();
