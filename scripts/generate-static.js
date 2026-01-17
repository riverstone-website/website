
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Routes to pre-render (create index.html copies for)
const routes = [
  '/why-choose-us',
  '/about',
  '/products',
  '/frp-planters',
  '/about-fiberglass',
  '/contact',
  '/gallery',
  '/faqs',
  '/privacy',
  '/terms'
];

// Ensure dist exists
if (!fs.existsSync(distDir)) {
  console.error('Dist directory not found. Run build first.');
  process.exit(1);
}

// Read the main index.html
const indexHtmlObj = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// Function to create directory and file
const createRouteFile = (route) => {
  // Remove leading slash for path joining
  const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
  const targetDir = path.join(distDir, cleanRoute);

  // Create directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Write index.html to that directory
  fs.writeFileSync(path.join(targetDir, 'index.html'), indexHtmlObj);
  console.log(`Created static entry for: ${route}`);
};

console.log('Generating static page entries...');
routes.forEach(createRouteFile);
console.log('Static page generation complete.');
