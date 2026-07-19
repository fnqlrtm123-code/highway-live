import { serviceAreas } from '../src/lib/data';
import * as fs from 'fs';
import * as path from 'path';

function generateRedirects() {
  const lines: string[] = [];

  // Add custom manual redirects if any
  lines.push('# Automated Redirects for Legacy Romanized Slugs to Localized Korean Slugs');

  serviceAreas.forEach((area) => {
    if (area.oldSlug && area.oldSlug !== area.slug) {
      const encodedKorean = encodeURIComponent(area.slug);
      
      // 1. Rest Area Main
      lines.push(`/rest-areas/${area.oldSlug} /rest-areas/${encodedKorean} 301`);
      
      // 2. Rest Area Food
      lines.push(`/rest-areas/${area.oldSlug}/food /rest-areas/${encodedKorean}/food 301`);
      
      // 3. Rest Area Facilities
      lines.push(`/rest-areas/${area.oldSlug}/facilities /rest-areas/${encodedKorean}/facilities 301`);
      
      // 4. Gas Station
      lines.push(`/gas/${area.oldSlug} /gas/${encodedKorean} 301`);
      
      // 5. EV Charging Station
      lines.push(`/ev/${area.oldSlug} /ev/${encodedKorean} 301`);
      
      // 6. Legacy Service Area path
      lines.push(`/service-area/${area.oldSlug} /rest-areas/${encodedKorean} 301`);
      lines.push(`/service-area/${encodedKorean} /rest-areas/${encodedKorean} 301`);
    }
  });

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const redirectsPath = path.join(publicDir, '_redirects');
  fs.writeFileSync(redirectsPath, lines.join('\n') + '\n', 'utf8');
  console.log(`Successfully generated redirects file at: ${redirectsPath}`);
  console.log(`Total redirect rules: ${lines.length - 1}`);
}

generateRedirects();
