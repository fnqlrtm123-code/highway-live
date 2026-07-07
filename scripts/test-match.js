const realGasStations = require('../src/lib/realGasStations.json');

const targets = [
  { slug: 'anseong-seoul', match: g => g.name.includes('안성') && g.direction === '서울' },
  { slug: 'anseong-busan', match: g => g.name.includes('안성') && g.direction === '부산' },
  { slug: 'seoul-manman-busan', match: g => g.name.includes('서울만남') && g.direction === '부산' },
  { slug: 'manghyang-busan', match: g => g.name.includes('망향') && g.direction === '부산' },
  { slug: 'jukjeon-seoul', match: g => g.name.includes('죽전') && g.direction === '서울' },
  { slug: 'hoengseong-seoul', match: g => g.name.includes('횡성') && (g.direction === '인천' || g.direction === '서울') },
  { slug: 'hoengseong-gangneung', match: g => g.name.includes('횡성') && g.direction === '강릉' },
  { slug: 'deokpyeong-both', match: g => g.name.includes('덕평') },
  { slug: 'seosan-seoul', match: g => g.name.includes('서산') && (g.direction === '서울' || g.direction === '시흥') },
  { slug: 'seosan-mokpo', match: g => g.name.includes('서산') && g.direction === '목포' },
];

targets.forEach(t => {
  const found = realGasStations.filter(t.match);
  console.log(`${t.slug} -> Found ${found.length} matches:`, found.map(f => `${f.name} (${f.direction}) [${f.brand}] Gasoline: ${f.gasolinePrice} Diesel: ${f.dieselPrice} LPG: ${f.lpgPrice}`));
});
