const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && !file.startsWith('.')) {
        results = results.concat(walk(fullPath));
      }
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const files = walk('src');

// Regex explanation:
// Match '실시간' if it is NOT followed by any of:
// - 교통상황, 교통상황, 교통 정보, 교통정보, 도로 상황, 도로상황, 소통 (traffic/road status words)
// Wait, we can specify a negative lookahead with those words.
const regex = /실시간(?!\s*(교통|도로|소통|cctv|CCTV))/g;

console.log('--- Dry Run of replacements ---');
files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  let count = 0;
  const newLines = [];
  
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('실시간')) {
      const newLine = line.replace(regex, (match) => {
        count++;
        return '';
      });
      if (line !== newLine) {
        console.log(`File: ${file}:${idx + 1}`);
        console.log(`  Original: ${line.trim()}`);
        console.log(`  Replaced: ${newLine.trim()}`);
      }
    }
  });
});
