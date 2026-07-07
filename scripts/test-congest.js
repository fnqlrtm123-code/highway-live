const fetch = require('node-fetch');

async function test() {
  const url = 'https://data.ex.co.kr/openapi/odtraffic/trafficAmountByCongest?key=test&type=json&numOfRows=99&pageNo=1';
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log('API Status Code:', res.status);
    console.log('Response Structure Keys:', Object.keys(data));
    console.log('Total count from API:', data.count);
    if (data.list && data.list.length > 0) {
      console.log('Number of items returned:', data.list.length);
      console.log('First 5 list items:');
      data.list.slice(0, 5).forEach((item, i) => {
        console.log(`${i+1}: Route: ${item.routeName}, Conzone: ${item.conzoneName}, Speed: ${item.speed}km/h, Grade: ${item.grade}`);
      });
    } else {
      console.log('No list items found.');
    }
  } catch (e) {
    console.error('Error fetching API:', e);
  }
}

test();
