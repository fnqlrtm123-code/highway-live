const fs = require('fs');
const path = require('path');

async function fetchAllStations() {
  console.log('Fetching real-world gas station data from Korea Expressway Corporation OpenAPI...');
  const stations = [];
  
  // We need to fetch 3 pages because the API returns up to 99 items per page, and there are 226 stations in total.
  for (let page = 1; page <= 3; page++) {
    const url = `http://data.ex.co.kr/openapi/business/curStateStation?key=test&type=json&numOfRows=99&pageNo=${page}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data && data.list) {
        stations.push(...data.list);
        console.log(`Fetched page ${page}: ${data.list.length} stations.`);
      }
    } catch (error) {
      console.error(`Failed to fetch page ${page}:`, error);
    }
  }

  console.log(`Total fetched stations: ${stations.length}`);

  // Map and clean the data
  const cleanedStations = stations.map(item => {
    const cleanPrice = (priceStr) => {
      if (!priceStr || priceStr === 'X') return 0;
      return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
    };

    const mapBrand = (company) => {
      switch (company) {
        case 'AD': return '알뜰주유소';
        case 'SK': return 'SK에너지';
        case 'GS': return 'GS칼텍스';
        case 'S': return 'S-OIL';
        case 'HD': return '현대오일뱅크';
        default: return 'ex-oil';
      }
    };

    return {
      name: item.serviceAreaName.replace(/주유소$/, ''), // e.g. "서울만남(부산)주유소" -> "서울만남(부산)"
      direction: item.direction,
      routeName: item.routeName,
      brand: mapBrand(item.oilCompany),
      gasolinePrice: cleanPrice(item.gasolinePrice),
      dieselPrice: cleanPrice(item.diselPrice),
      lpgPrice: item.lpgYn === 'Y' && cleanPrice(item.lpgPrice) > 0 ? cleanPrice(item.lpgPrice) : null,
      address: item.svarAddr,
      tel: item.telNo
    };
  });

  const outputPath = path.join(__dirname, '..', 'src', 'lib', 'realGasStations.json');
  fs.writeFileSync(outputPath, JSON.stringify(cleanedStations, null, 2), 'utf-8');
  console.log(`Successfully saved real gas station data to ${outputPath}`);
}

fetchAllStations();
