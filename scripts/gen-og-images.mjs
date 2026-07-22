// Gera public/og/{area-slug}.png (1200×630) — uma imagem OG por área.
// Rodar manualmente quando cores/áreas mudarem: node scripts/gen-og-images.mjs
// Fontes e ícones já baixados em scripts/assets/ (Montserrat + Material Symbols).
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ASSETS = join(ROOT, "scripts", "assets");
const OUT = join(ROOT, "public", "og");

// Manter em sincronia com AREA_COLORS / AREA_ICONS em src/data/courses.ts
const AREAS = {
  "Artes Visuais":  { bg: "#FFF3E0", text: "#E65100", dot: "#FF9800", icon: "palette" },
  "Audiovisual":    { bg: "#E3F2FD", text: "#1565C0", dot: "#42A5F5", icon: "movie" },
  "Circo":          { bg: "#FCE4EC", text: "#AD1457", dot: "#EC407A", icon: "festival" },
  "Dança":          { bg: "#F3E5F5", text: "#7B1FA2", dot: "#AB47BC", icon: "falling" },
  "Design Popular": { bg: "#E8F5E9", text: "#2E7D32", dot: "#66BB6A", icon: "design_services" },
  "Música":         { bg: "#E0F7FA", text: "#00695C", dot: "#26A69A", icon: "music_note" },
  "Patrimônio":     { bg: "#FFF8E1", text: "#F57F17", dot: "#FFCA28", icon: "account_balance" },
  "Teatro":         { bg: "#EDE7F6", text: "#4527A0", dot: "#7E57C2", icon: "theater_comedy" },
  "Bastidores":     { bg: "#EFEBE9", text: "#4E342E", dot: "#8D6E63", icon: "mic" },
  "Gestão":         { bg: "#E8EAF6", text: "#283593", dot: "#5C6BC0", icon: "assignment" },
  "Artes":          { bg: "#FFF3E0", text: "#E65100", dot: "#FF9800", icon: "auto_awesome" },
};

const slugify = (t) =>
  t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const iconPath = (name) => {
  const svg = readFileSync(join(ASSETS, `icon-${name}.svg`), "utf-8");
  return svg.match(/d="([^"]+)"/)[1];
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

// Material Symbols viewBox é "0 -960 960 960" → translate(x, y+size) scale(size/960)
const icon = (name, x, y, size, fill, opacity = 1) =>
  `<g transform="translate(${x} ${y + size}) scale(${size / 960})" opacity="${opacity}">
     <path d="${iconPath(name)}" fill="${fill}"/>
   </g>`;

function buildSvg(area, c) {
  const W = 1200, H = 630;
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${c.bg}"/>

  <!-- círculos decorativos -->
  <circle cx="1120" cy="70" r="260" fill="${c.dot}" opacity="0.14"/>
  <circle cx="90" cy="620" r="200" fill="${c.dot}" opacity="0.10"/>

  <!-- ícone gigante de fundo, sangrando na direita -->
  ${icon(c.icon, 830, 150, 520, c.dot, 0.18)}

  <!-- cartão do ícone -->
  <rect x="90" y="205" width="200" height="200" rx="44" fill="#ffffff"/>
  <rect x="90" y="205" width="200" height="200" rx="44" fill="none" stroke="${c.dot}" stroke-opacity="0.35" stroke-width="3"/>
  ${icon(c.icon, 130, 245, 120, c.text)}

  <!-- textos -->
  <text x="350" y="252" font-family="Montserrat" font-weight="700" font-size="27"
        letter-spacing="2.5" fill="${c.text}" opacity="0.72">ESCOLA LIVRE DE ARTES</text>
  <text x="350" y="345" font-family="Montserrat" font-weight="800" font-size="82"
        fill="${c.text}">${esc(area)}</text>
  <text x="350" y="412" font-family="Montserrat" font-weight="600" font-size="31"
        fill="${c.text}" opacity="0.82">Cursos gratuitos em Belo Horizonte</text>

  <!-- rodapé de marca -->
  <text x="90" y="562" font-family="Montserrat" font-weight="800" font-size="34"
        fill="${c.text}">Arena da Cultura</text>

  <!-- barra de acento -->
  <rect x="0" y="${H - 14}" width="${W}" height="14" fill="${c.dot}"/>
</svg>`;
}

mkdirSync(OUT, { recursive: true });
const fontOpts = {
  fontFiles: [
    join(ASSETS, "montserrat-600.ttf"),
    join(ASSETS, "montserrat-700.ttf"),
    join(ASSETS, "montserrat-800.ttf"),
  ],
  loadSystemFonts: false,
  defaultFontFamily: "Montserrat",
};

for (const [area, c] of Object.entries(AREAS)) {
  const svg = buildSvg(area, c);
  const png = new Resvg(svg, { font: fontOpts, fitTo: { mode: "original" } })
    .render()
    .asPng();
  const file = join(OUT, `${slugify(area)}.png`);
  writeFileSync(file, png);
  console.log(file, `${(png.length / 1024).toFixed(0)}kB`);
}
