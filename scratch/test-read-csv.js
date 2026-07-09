const fs = require('fs');

function analyzeCsv() {
  const buf = fs.readFileSync('scripts/ev_chargers.csv');
  const decoder = new TextDecoder('euc-kr');
  const text = decoder.decode(buf);
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  const header = lines[0].split(',');
  console.log('Header:', header);
  
  let total = 0;
  let evCount = 0;
  let hydrogenCount = 0;
  const list = [];
  
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',');
    if (cols.length < 5) continue;
    const name = cols[0];
    const region = cols[1];
    const type = cols[2];
    const hasEv = cols[3] === 'O';
    const hasHydrogen = cols[4] === 'O';
    
    total++;
    if (hasEv) evCount++;
    if (hasHydrogen) hydrogenCount++;
    list.push({ name, region, type, hasEv, hasHydrogen });
  }
  
  console.log(`Total rows: ${total}`);
  console.log(`EV Charging Stations: ${evCount}`);
  console.log(`Hydrogen Charging Stations: ${hydrogenCount}`);
  
  console.log('Sample Hydrogen Stations:', list.filter(item => item.hasHydrogen).slice(0, 10));
}

analyzeCsv();
