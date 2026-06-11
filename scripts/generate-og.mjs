import sharp from "sharp";
import { writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#080810"/>
      <stop offset="100%" stop-color="#0e0e1e"/>
    </linearGradient>
    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#4af0c8" stop-opacity="0"/>
      <stop offset="30%" stop-color="#4af0c8"/>
      <stop offset="70%" stop-color="#7b6cff"/>
      <stop offset="100%" stop-color="#7b6cff" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>

  <!-- Subtle grid lines -->
  <line x1="0" y1="210" x2="1200" y2="210" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1"/>
  <line x1="0" y1="420" x2="1200" y2="420" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1"/>
  <line x1="400" y1="0" x2="400" y2="630" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1"/>
  <line x1="800" y1="0" x2="800" y2="630" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1"/>

  <!-- Glow blobs -->
  <ellipse cx="200" cy="150" rx="300" ry="200" fill="#4af0c8" fill-opacity="0.04"/>
  <ellipse cx="1000" cy="480" rx="280" ry="180" fill="#7b6cff" fill-opacity="0.05"/>
  <ellipse cx="900" cy="120" rx="200" ry="150" fill="#ff4f6a" fill-opacity="0.04"/>

  <!-- Top accent line -->
  <rect x="80" y="80" width="4" height="60" fill="#4af0c8"/>

  <!-- Name -->
  <text x="110" y="142" font-family="Georgia, serif" font-size="72" font-weight="700" fill="#ffffff" letter-spacing="-1">Martín Bravo</text>

  <!-- Gradient divider line -->
  <rect x="110" y="165" width="500" height="2" fill="url(#lineGrad)"/>

  <!-- Role -->
  <text x="112" y="220" font-family="monospace" font-size="26" fill="#6868a0" letter-spacing="1">Desarrollador Fullstack &amp; Sysadmin</text>

  <!-- Description -->
  <text x="112" y="278" font-family="monospace" font-size="18" fill="#4a4a70">Construyo aplicaciones web y la infraestructura</text>
  <text x="112" y="304" font-family="monospace" font-size="18" fill="#4a4a70">que hay detrás — desde el frontend hasta el servidor.</text>

  <!-- Tech tags -->
  <rect x="112" y="345" width="90" height="30" rx="3" fill="none" stroke="#4af0c8" stroke-opacity="0.5" stroke-width="1"/>
  <text x="157" y="365" font-family="monospace" font-size="14" fill="#4af0c8" text-anchor="middle">Next.js</text>

  <rect x="216" y="345" width="76" height="30" rx="3" fill="none" stroke="#4af0c8" stroke-opacity="0.5" stroke-width="1"/>
  <text x="254" y="365" font-family="monospace" font-size="14" fill="#4af0c8" text-anchor="middle">Astro.js</text>

  <rect x="306" y="345" width="70" height="30" rx="3" fill="none" stroke="#7b6cff" stroke-opacity="0.5" stroke-width="1"/>
  <text x="341" y="365" font-family="monospace" font-size="14" fill="#7b6cff" text-anchor="middle">Python</text>

  <rect x="390" y="345" width="76" height="30" rx="3" fill="none" stroke="#7b6cff" stroke-opacity="0.5" stroke-width="1"/>
  <text x="428" y="365" font-family="monospace" font-size="14" fill="#7b6cff" text-anchor="middle">FastAPI</text>

  <rect x="480" y="345" width="70" height="30" rx="3" fill="none" stroke="#ff4f6a" stroke-opacity="0.5" stroke-width="1"/>
  <text x="515" y="365" font-family="monospace" font-size="14" fill="#ff4f6a" text-anchor="middle">Docker</text>

  <!-- Bottom URL -->
  <text x="112" y="530" font-family="monospace" font-size="20" fill="#4af0c8" fill-opacity="0.7">martin-bravo.dev</text>

  <!-- Right side decoration: terminal block -->
  <rect x="720" y="180" width="400" height="260" rx="4" fill="#0d0d1a" stroke="#1e1e35" stroke-width="1"/>
  <rect x="720" y="180" width="400" height="32" rx="4" fill="#13131f"/>
  <circle cx="745" cy="196" r="6" fill="#ff4f6a" fill-opacity="0.7"/>
  <circle cx="765" cy="196" r="6" fill="#f59e0b" fill-opacity="0.7"/>
  <circle cx="785" cy="196" r="6" fill="#4af0c8" fill-opacity="0.7"/>
  <text x="840" y="200" font-family="monospace" font-size="12" fill="#4a4a70" text-anchor="middle">terminal</text>

  <text x="744" y="238" font-family="monospace" font-size="13" fill="#4a4a70">$</text>
  <text x="758" y="238" font-family="monospace" font-size="13" fill="#4af0c8">whoami</text>
  <text x="744" y="262" font-family="monospace" font-size="13" fill="#6868a0">martin — fullstack dev &amp; sysadmin</text>

  <text x="744" y="296" font-family="monospace" font-size="13" fill="#4a4a70">$</text>
  <text x="758" y="296" font-family="monospace" font-size="13" fill="#4af0c8">ls projects/</text>
  <text x="744" y="320" font-family="monospace" font-size="13" fill="#7b6cff">optimiseo</text>
  <text x="840" y="320" font-family="monospace" font-size="13" fill="#7b6cff">ghostchat</text>
  <text x="744" y="340" font-family="monospace" font-size="13" fill="#7b6cff">configurador</text>
  <text x="876" y="340" font-family="monospace" font-size="13" fill="#7b6cff">...</text>

  <text x="744" y="370" font-family="monospace" font-size="13" fill="#4a4a70">$</text>
  <rect x="758" y="356" width="8" height="16" fill="#4af0c8" fill-opacity="0.8"/>
</svg>
`;

const outputPath = path.resolve(__dirname, "../public/og-image.png");

await sharp(Buffer.from(svg)).png().toFile(outputPath);

console.log("OG image generated at public/og-image.png");
