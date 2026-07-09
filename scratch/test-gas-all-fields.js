async function test() {
  const url = `https://data.ex.co.kr/openapi/business/curStateStation?key=7931111083&type=json&numOfRows=1&pageNo=1`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log('Sample Gas Station Item Keys & Values:', JSON.stringify(data.list[0], null, 2));
  } catch (err) {
    console.error(err);
  }
}
test();
