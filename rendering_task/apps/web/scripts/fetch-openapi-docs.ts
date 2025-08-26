/**
 * Fetches OpenAPI documentation from the API server and saves it to a JSON file
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function fetchOpenApiDocs(): Promise<void> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://turbo-concert.onrender.com';
  const docsUrl = `${apiUrl}/doc`;
  const outputPath = join(__dirname, '..', 'lib', 'client', 'openapi.json');

  console.log(`🔄 Fetching OpenAPI docs from: ${docsUrl}`);

  try {
    const response = await fetch(docsUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Ensure the directory exists
    const dir = dirname(outputPath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`✅ OpenAPI docs saved to: ${relative(process.cwd(), outputPath)}`);
  } catch (error) {
    console.error('❌ Error fetching OpenAPI docs:', (error as Error).message);
    console.log('💡 Make sure the API server is running and accessible');
    process.exit(1);
  }
}

await fetchOpenApiDocs(); 