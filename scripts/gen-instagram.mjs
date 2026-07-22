// Gera public/instagram-divulgacao.png (1080×1350, formato feed 4:5).
// Divulgação do site: marca + stats + grade de áreas + mockup do site + CTA.
// Rodar: node scripts/gen-instagram.mjs
import { Resvg } from "@resvg/resvg-js";
import { create } from "fontkitten";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ASSETS = join(ROOT, "scripts", "assets");
const PUB = join(ROOT, "public");

const W = 1080, H = 1350, M = 72;

// --- paleta ---
const ACCENT = "#2D5A27";
const ACCENT_DK = "#1E3D1A";
const ACCENT_LT = "#E8F5E3";
const INK = "#1A1A1A";
const MUTED = "#5A5A5A";
const FAINT = "#8A8A8A";

// --- números reais (fonte: src/data/courses.ts) ---
const TOTAL_CURSOS = 113;
const TOTAL_AREAS = 10;

// 10 áreas (exclui o "Artes" avulso, duplicado de Artes Visuais)
const AREAS = [
  { name: "Artes Visuais",  icon: "palette",          bg: "#FFF3E0", text: "#E65100", dot: "#FF9800" },
  { name: "Música",         icon: "music_note",       bg: "#E0F7FA", text: "#00695C", dot: "#26A69A" },
  { name: "Dança",          icon: "falling",          bg: "#F3E5F5", text: "#7B1FA2", dot: "#AB47BC" },
  { name: "Teatro",         icon: "theater_comedy",   bg: "#EDE7F6", text: "#4527A0", dot: "#7E57C2" },
  { name: "Circo",          icon: "festival",         bg: "#FCE4EC", text: "#AD1457", dot: "#EC407A" },
  { name: "Audiovisual",    icon: "movie",            bg: "#E3F2FD", text: "#1565C0", dot: "#42A5F5" },
  { name: "Design Popular", icon: "design_services",  bg: "#E8F5E9", text: "#2E7D32", dot: "#66BB6A" },
  { name: "Patrimônio",     icon: "account_balance",  bg: "#FFF8E1", text: "#F57F17", dot: "#FFCA28" },
  { name: "Bastidores",     icon: "mic",              bg: "#EFEBE9", text: "#4E342E", dot: "#8D6E63" },
  { name: "Gestão",         icon: "assignment",       bg: "#E8EAF6", text: "#283593", dot: "#5C6BC0" },
];

// --- ícones Material Symbols (viewBox 0 -960 960 960) ---
const iconPaths = (name) => {
  const svg = readFileSync(join(ASSETS, `icon-${name}.svg`), "utf-8");
  return [...svg.matchAll(/d="([^"]+)"/g)].map((m) => m[1]);
};
// desenha em (x,y) topo-esquerda, tamanho s
const icon = (name, x, y, s, fill, opacity = 1) =>
  `<g transform="translate(${x} ${y + s}) scale(${s / 960})" opacity="${opacity}">
     ${iconPaths(name).map((d) => `<path d="${d}" fill="${fill}"/>`).join("")}
   </g>`;

// --- logo Arena (viewBox 0 0 314 318), recolorido ---
const logo = (x, y, s, fill) => {
  const svg = readFileSync(join(PUB, "arena-logo.svg"), "utf-8");
  const inner = svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>[\s\S]*$/, "");
  const paths = inner.replace(/fill="white"/g, `fill="${fill}"`);
  return `<g transform="translate(${x} ${y}) scale(${s / 318})">${paths}</g>`;
};

const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");

// --- largura real de texto (advance widths do Montserrat 700) ---
const FONT700 = create(readFileSync(join(ASSETS, "montserrat-700.ttf")));
const UPM = FONT700.unitsPerEm;
const measure = (t, size) => {
  let w = 0;
  for (const g of FONT700.glyphsForString(t)) w += g.advanceWidth;
  return (w / UPM) * size;
};
// mede incluindo letter-spacing (px adicionado após cada glifo)
const measureLS = (t, size, ls = 0) => measure(t, size) + ls * Math.max(0, [...t].length - 1);

// ---------- monta as pílulas de área (auto-wrap centralizado) ----------
// geometria do badge: [LPAD] (ícone Ø38) [GAP] [texto] [RPAD]
const PILL_H = 60, PILL_GAP = 18, PSIZE = 27;
const LPAD = 28, ICON_D = 38, MID = 16, RPAD = 30;
function pillWidth(a) {
  return LPAD + ICON_D + MID + measure(a.name, PSIZE) + RPAD;
}
function layoutPills(startY) {
  const maxW = W - 2 * M;
  // empacota (greedy)
  const rows = [];
  let row = [];
  for (const a of AREAS) {
    const pw = pillWidth(a);
    if (row.length) {
      const wWith = row.reduce((s, it) => s + it.pw + PILL_GAP, 0) + pw;
      if (wWith > maxW) { rows.push(row); row = []; }
    }
    row.push({ a, pw });
  }
  if (row.length) rows.push(row);
  // rebalanceia: evita última linha órfã (1 item)
  while (rows.length > 1) {
    const last = rows[rows.length - 1], prev = rows[rows.length - 2];
    if (prev.length > 1 && last.length < prev.length - 1) last.unshift(prev.pop());
    else break;
  }

  let svg = "", y = startY;
  for (const r of rows) {
    const rw = r.reduce((s, it) => s + it.pw, 0) + PILL_GAP * (r.length - 1);
    let x = (W - rw) / 2;
    for (const { a, pw } of r) {
      const cy = y + PILL_H / 2;
      const cx = x + LPAD + ICON_D / 2; // centro do círculo do ícone
      svg += `
      <rect x="${x}" y="${y}" width="${pw}" height="${PILL_H}" rx="${PILL_H / 2}"
            fill="${a.bg}" stroke="${a.dot}" stroke-opacity="0.35" stroke-width="1.5"/>
      <circle cx="${cx}" cy="${cy}" r="${ICON_D / 2}" fill="${a.dot}"/>
      ${icon(a.icon, cx - 13, cy - 13, 26, "#ffffff")}
      <text x="${x + LPAD + ICON_D + MID}" y="${cy + 9}" font-family="Montserrat" font-weight="700"
            font-size="${PSIZE}" fill="${a.text}">${esc(a.name)}</text>`;
      x += pw + PILL_GAP;
    }
    y += PILL_H + PILL_GAP;
  }
  return { svg, endY: y - PILL_GAP };
}

// ---------- stats topo ----------
function statsCard(y) {
  const w = W - 2 * M, h = 152, x = M;
  const stats = [
    [`${TOTAL_CURSOS}`, "CURSOS"],
    [`${TOTAL_AREAS}`, "ÁREAS"],
    ["100%", "GRATUITO"],
  ];
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="#ffffff" stroke="#e8e8e4" stroke-width="1.5"/>`;
  stats.forEach(([num, lab], i) => {
    const px = x + w / 6 + (i * w) / 3;
    s += `<text x="${px}" y="${y + 82}" text-anchor="middle" font-family="Montserrat" font-weight="800" font-size="62" fill="${ACCENT}">${num}</text>
          <text x="${px}" y="${y + 120}" text-anchor="middle" font-family="Montserrat" font-weight="600" font-size="21" letter-spacing="2" fill="${FAINT}">${lab}</text>`;
    if (i < 2) s += `<rect x="${x + (i + 1) * w / 3}" y="${y + 36}" width="1.5" height="80" fill="#e8e8e4"/>`;
  });
  return s;
}

// ================= MONTA SVG =================
const pills = layoutPills(900);

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${ACCENT_LT}"/>
      <stop offset="0.45" stop-color="#FAFAF8"/>
      <stop offset="1" stop-color="#FAFAF8"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- círculos decorativos -->
  <circle cx="${W + 40}" cy="130" r="250" fill="#AB47BC" opacity="0.06"/>
  <circle cx="-40" cy="520" r="180" fill="#26A69A" opacity="0.06"/>
  <circle cx="${W - 40}" cy="820" r="140" fill="#FF9800" opacity="0.05"/>

  <!-- marca -->
  ${logo(M, 96, 100, ACCENT)}
  <text x="${M + 128}" y="136" font-family="Montserrat" font-weight="700" font-size="22"
        letter-spacing="3.5" fill="${ACCENT}" opacity="0.75">ESCOLA LIVRE DE ARTES</text>
  <text x="${M + 128}" y="190" font-family="Montserrat" font-weight="800" font-size="48"
        fill="${INK}">Arena da Cultura</text>

  <!-- pílula inscrições (largura ajustada ao texto) -->
  ${(() => {
    const t = "INSCRIÇÕES ABERTAS · 2º SEM 2026", size = 22, ls = 0.5;
    const tx = M + 54, bw = 54 + measureLS(t, size, ls) + 30;
    return `
  <rect x="${M}" y="266" width="${bw.toFixed(0)}" height="54" rx="27" fill="#ffffff" stroke="${ACCENT}" stroke-opacity="0.25" stroke-width="1.5"/>
  <circle cx="${M + 31}" cy="293" r="7" fill="#4caf50"/>
  <text x="${tx}" y="301" font-family="Montserrat" font-weight="700" font-size="${size}"
        letter-spacing="${ls}" fill="${ACCENT}">${t}</text>`;
  })()}

  <!-- headline -->
  <text x="${M}" y="430" font-family="Montserrat" font-weight="800" font-size="70" fill="${INK}">Cursos gratuitos de</text>
  <text x="${M}" y="510" font-family="Montserrat" font-weight="800" font-size="70" fill="${ACCENT}">arte e cultura em BH</text>

  <!-- stats -->
  ${statsCard(596)}

  <!-- rótulo áreas -->
  <text x="${W / 2}" y="848" text-anchor="middle" font-family="Montserrat" font-weight="700" font-size="25"
        letter-spacing="3.5" fill="${FAINT}">${TOTAL_AREAS} ÁREAS ARTÍSTICAS E CULTURAIS</text>

  <!-- grade de áreas -->
  ${pills.svg}

  <!-- faixa verde inferior (sem texto, só marca) -->
  <rect x="0" y="1250" width="${W}" height="100" fill="${ACCENT}"/>
  ${logo((W - 52) / 2, 1274, 52, "#ffffff")}
</svg>`;

const png = new Resvg(svg, {
  font: {
    fontFiles: [
      join(ASSETS, "montserrat-600.ttf"),
      join(ASSETS, "montserrat-700.ttf"),
      join(ASSETS, "montserrat-800.ttf"),
    ],
    loadSystemFonts: false,
    defaultFontFamily: "Montserrat",
  },
  fitTo: { mode: "original" },
}).render().asPng();

const out = join(PUB, "instagram-divulgacao.png");
writeFileSync(out, png);
console.log(out, `${(png.length / 1024).toFixed(0)}kB`, `${W}x${H}`);
