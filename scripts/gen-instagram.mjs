// Gera public/instagram-divulgacao.png (1080×1350, formato feed 4:5).
// Divulgação do site: marca + stats + grade de áreas + mockup do site + CTA.
// Rodar: node scripts/gen-instagram.mjs
import { Resvg } from "@resvg/resvg-js";
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

// largura aprox. de texto Montserrat semibold
const CW = { def: 0.56, up: 0.66, wide: 0.86, thin: 0.30, sp: 0.30 };
const approxW = (t, size) => {
  let w = 0;
  for (const ch of t) {
    if (ch === " ") w += CW.sp;
    else if ("iljtfrI".includes(ch)) w += CW.thin;
    else if ("mwMW".includes(ch)) w += CW.wide;
    else if (ch >= "A" && ch <= "Z") w += CW.up;
    else w += CW.def;
  }
  return w * size;
};

// ---------- monta as pílulas de área (auto-wrap centralizado) ----------
const PILL_H = 56, PILL_GAP = 14, PSIZE = 27;
function pillWidth(a) {
  return 22 + 36 + 12 + approxW(a.name, PSIZE) + 24;
}
function layoutPills(startY) {
  const maxW = W - 2 * M;
  const rows = [];
  let row = [], rw = 0;
  for (const a of AREAS) {
    const pw = pillWidth(a);
    if (row.length && rw + PILL_GAP + pw > maxW) { rows.push({ items: row, w: rw }); row = []; rw = 0; }
    rw += (row.length ? PILL_GAP : 0) + pw;
    row.push({ a, pw });
  }
  if (row.length) rows.push({ items: row, w: rw });

  let svg = "", y = startY;
  for (const r of rows) {
    let x = (W - r.w) / 2;
    for (const { a, pw } of r.items) {
      const cy = y + PILL_H / 2;
      const cx = x + 22 + 18; // centro do círculo do ícone
      svg += `
      <rect x="${x}" y="${y}" width="${pw}" height="${PILL_H}" rx="${PILL_H / 2}"
            fill="${a.bg}" stroke="${a.dot}" stroke-opacity="0.35" stroke-width="1.5"/>
      <circle cx="${cx}" cy="${cy}" r="18" fill="${a.dot}"/>
      ${icon(a.icon, cx - 12, cy - 12, 24, "#ffffff")}
      <text x="${x + 22 + 36 + 12}" y="${cy + 9}" font-family="Montserrat" font-weight="700"
            font-size="${PSIZE}" fill="${a.text}">${esc(a.name)}</text>`;
      x += pw + PILL_GAP;
    }
    y += PILL_H + PILL_GAP;
  }
  return { svg, endY: y - PILL_GAP };
}

// ---------- mockup do site (janela de navegador com o hero) ----------
function mockup(x, y, w, h) {
  const r = 26, bar = 52;
  const cx = x + w / 2;
  const b = y + bar; // topo do corpo
  return `
  <g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="#ffffff"
          stroke="#e8e8e4" stroke-width="1.5"/>
    <!-- barra do navegador -->
    <path d="M${x} ${y + r} a${r} ${r} 0 0 1 ${r} -${r} h${w - 2 * r} a${r} ${r} 0 0 1 ${r} ${r} v${bar - r} h-${w} z" fill="#f5f5f0"/>
    <circle cx="${x + 26}" cy="${y + 26}" r="6" fill="#ff5f57"/>
    <circle cx="${x + 48}" cy="${y + 26}" r="6" fill="#febc2e"/>
    <circle cx="${x + 70}" cy="${y + 26}" r="6" fill="#28c840"/>
    <rect x="${x + 96}" y="${y + 14}" width="${w - 130}" height="26" rx="13" fill="#ffffff" stroke="#e8e8e4"/>
    <text x="${x + 112}" y="${y + 32}" font-family="Montserrat" font-weight="600" font-size="17"
          fill="${FAINT}">arena-da-cultura.netlify.app</text>

    <!-- corpo do hero -->
    <clipPath id="mkbody"><rect x="${x + 1}" y="${b}" width="${w - 2}" height="${h - bar - 1}" rx="4"/></clipPath>
    <g clip-path="url(#mkbody)">
      <rect x="${x}" y="${b}" width="${w}" height="${h - bar}" fill="${ACCENT_LT}"/>
      <circle cx="${x + w - 30}" cy="${b + 20}" r="120" fill="${ACCENT}" opacity="0.06"/>

      <!-- pílula inscrições -->
      <rect x="${cx - 200}" y="${b + 24}" width="400" height="40" rx="20" fill="#ffffff" stroke="#e8e8e4"/>
      <circle cx="${cx - 174}" cy="${b + 44}" r="6" fill="#4caf50"/>
      <text x="${cx - 158}" y="${b + 50}" font-family="Montserrat" font-weight="600" font-size="18"
            fill="${ACCENT}">Inscrições Abertas — 2º Semestre 2026</text>

      <!-- título -->
      <text x="${cx}" y="${b + 108}" text-anchor="middle" font-family="Montserrat" font-weight="800"
            font-size="36" fill="${INK}">Escola Livre de Artes</text>
      <text x="${cx}" y="${b + 154}" text-anchor="middle" font-family="Montserrat" font-weight="800"
            font-size="40" fill="${ACCENT}">Arena da Cultura</text>

      <!-- mini card de stats -->
      <rect x="${cx - 240}" y="${b + 176}" width="480" height="80" rx="16" fill="#ffffff" stroke="#e8e8e4"/>
      ${["113 Cursos", "10 Áreas", "100% Gratuito"].map((s, i) => {
        const [num, ...lab] = s.split(" ");
        const px = cx - 240 + 80 + i * 160;
        return `<text x="${px}" y="${b + 220}" text-anchor="middle" font-family="Montserrat" font-weight="800" font-size="30" fill="${ACCENT}">${num}</text>
                <text x="${px}" y="${b + 244}" text-anchor="middle" font-family="Montserrat" font-weight="600" font-size="15" letter-spacing="1" fill="${FAINT}">${lab.join(" ").toUpperCase()}</text>
                ${i < 2 ? `<rect x="${px + 80}" y="${b + 196}" width="1" height="44" fill="#e8e8e4"/>` : ""}`;
      }).join("")}

      <!-- botões -->
      <rect x="${cx - 168}" y="${b + 272}" width="162" height="48" rx="24" fill="${ACCENT}"/>
      <text x="${cx - 87}" y="${b + 302}" text-anchor="middle" font-family="Montserrat" font-weight="700" font-size="20" fill="#ffffff">Ver Cursos</text>
      <rect x="${cx + 6}" y="${b + 272}" width="162" height="48" rx="24" fill="#ffffff" stroke="${ACCENT}" stroke-width="1.5"/>
      <text x="${cx + 87}" y="${b + 302}" text-anchor="middle" font-family="Montserrat" font-weight="700" font-size="20" fill="${ACCENT}">Agenda</text>
    </g>
  </g>`;
}

// ---------- stats topo ----------
function statsCard(y) {
  const w = W - 2 * M, h = 128, x = M;
  const stats = [
    [`${TOTAL_CURSOS}`, "CURSOS"],
    [`${TOTAL_AREAS}`, "ÁREAS"],
    ["100%", "GRATUITO"],
  ];
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="20" fill="#ffffff" stroke="#e8e8e4" stroke-width="1.5"/>`;
  stats.forEach(([num, lab], i) => {
    const px = x + w / 6 + (i * w) / 3;
    s += `<text x="${px}" y="${y + 66}" text-anchor="middle" font-family="Montserrat" font-weight="800" font-size="58" fill="${ACCENT}">${num}</text>
          <text x="${px}" y="${y + 100}" text-anchor="middle" font-family="Montserrat" font-weight="600" font-size="20" letter-spacing="2" fill="${FAINT}">${lab}</text>`;
    if (i < 2) s += `<rect x="${x + (i + 1) * w / 3}" y="${y + 30}" width="1.5" height="68" fill="#e8e8e4"/>`;
  });
  return s;
}

// ================= MONTA SVG =================
const pills = layoutPills(650);
const mockH = 392;
const mockY = 1258 - mockH; // encaixa exatamente acima do rodapé

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${ACCENT_LT}"/>
      <stop offset="0.42" stop-color="#FAFAF8"/>
      <stop offset="1" stop-color="#FAFAF8"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- círculos decorativos -->
  <circle cx="${W + 40}" cy="120" r="240" fill="#AB47BC" opacity="0.07"/>
  <circle cx="-30" cy="470" r="170" fill="#26A69A" opacity="0.07"/>
  <circle cx="${W - 60}" cy="700" r="120" fill="#FF9800" opacity="0.06"/>

  <!-- marca -->
  ${logo(M, 70, 92, ACCENT)}
  <text x="${M + 116}" y="102" font-family="Montserrat" font-weight="700" font-size="21"
        letter-spacing="3" fill="${ACCENT}" opacity="0.75">ESCOLA LIVRE DE ARTES</text>
  <text x="${M + 116}" y="152" font-family="Montserrat" font-weight="800" font-size="46"
        fill="${INK}">Arena da Cultura</text>

  <!-- pílula inscrições -->
  <rect x="${M}" y="208" width="470" height="50" rx="25" fill="#ffffff" stroke="${ACCENT}" stroke-opacity="0.25" stroke-width="1.5"/>
  <circle cx="${M + 30}" cy="233" r="7" fill="#4caf50"/>
  <text x="${M + 50}" y="240" font-family="Montserrat" font-weight="700" font-size="21"
        letter-spacing="0.5" fill="${ACCENT}">INSCRIÇÕES ABERTAS · 2º SEM 2026</text>

  <!-- headline -->
  <text x="${M}" y="360" font-family="Montserrat" font-weight="800" font-size="66" fill="${INK}">Cursos gratuitos de</text>
  <text x="${M}" y="432" font-family="Montserrat" font-weight="800" font-size="66" fill="${ACCENT}">arte e cultura em BH</text>

  <!-- stats -->
  ${statsCard(456)}

  <!-- rótulo áreas -->
  <text x="${W / 2}" y="624" text-anchor="middle" font-family="Montserrat" font-weight="700" font-size="24"
        letter-spacing="3" fill="${FAINT}">${TOTAL_AREAS} ÁREAS ARTÍSTICAS</text>

  <!-- grade de áreas -->
  ${pills.svg}

  <!-- mockup do site -->
  ${mockup(M, mockY, W - 2 * M, mockH)}

  <!-- rodapé CTA -->
  <rect x="0" y="1258" width="${W}" height="92" fill="${ACCENT}"/>
  <text x="${W / 2}" y="1302" text-anchor="middle" font-family="Montserrat" font-weight="800" font-size="34"
        fill="#ffffff">arena-da-cultura.netlify.app</text>
  <text x="${W / 2}" y="1332" text-anchor="middle" font-family="Montserrat" font-weight="600" font-size="19"
        letter-spacing="1" fill="#ffffff" opacity="0.85">ACESSE · ESCOLHA SEU CURSO · INSCREVA-SE</text>
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
