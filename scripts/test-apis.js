async function testApis() {
  const apis = {
    standardInfo: 'http://data.ex.co.kr/openapi/locationinfo/restInfo?key=test&type=json&numOfRows=5&pageNo=1',
    facilitiesInfo: 'http://data.ex.co.kr/openapi/restspace/restConvList?key=test&type=json&numOfRows=5&pageNo=1',
    foodInfo: 'http://data.ex.co.kr/openapi/restspace/restFoodList?key=test&type=json&numOfRows=5&pageNo=1'
  };

  for (const [name, url] of Object.entries(apis)) {
    try {
      console.log(`Testing ${name} API...`);
      const res = await fetch(url);
      if (!res.ok) {
        console.log(`[${name}] Failed: Status ${res.status}`);
        continue;
      }
      const data = await res.json();
      console.log(`[${name}] Success! Sample item:`, data.list ? data.list[0] : 'No list');
    } catch (e) {
      console.error(`[${name}] Error:`, e.message);
    }
  }
}

testApis();
