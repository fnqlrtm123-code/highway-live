async function test() {
  const url = `http://data.ex.co.kr/openapi/locationinfo/restInfo?key=7931111083&type=json&numOfRows=5&pageNo=1`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log('Sample restInfo Item:', JSON.stringify(data.list[0], null, 2));
  } catch (err) {
    console.error(err);
  }
}
test();
