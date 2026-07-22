# CLAUDE.md

Guia para trabalhar neste repositório. Leia antes de mexer nos dados de cursos ou na geração de imagens.

## Propósito

Site **não-oficial** que lista os cursos gratuitos da **Escola Livre de Artes Arena da Cultura** (Prefeitura de Belo Horizonte / Fundação de Educação, Artes e Cultura). É uma ferramenta independente de consulta: a cada semestre os dados são extraídos do formulário oficial de inscrição (JotForm) + do PDF de sinopses da PBH e transcritos para o site. O site **não** coleta inscrições — apenas apresenta os cursos de forma navegável e faz deep-link para o formulário oficial, onde a inscrição acontece.

Aviso legal já está na seção "Sobre" da home: sem vínculo oficial com a PBH.

## Stack

- **Astro 5** (SSG — site 100% estático, sem servidor). `type: module`.
- Sem framework de UI: componentes `.astro` + scripts client vanilla TS.
- **FullCalendar** (`@fullcalendar/*`) para a agenda; **Tom Select** para o dropdown de locais.
- **@resvg/resvg-js** (devDep) para gerar as imagens OG/Instagram a partir de SVG no build local.
- Ícones: **Material Symbols Outlined** (via Google Fonts). Fontes: Montserrat + Inter.
- Deploy: **Netlify** (build `bun run build`, publish `dist`). Auto-deploy no push para `master`.
- Domínio de produção: `https://arena-da-cultura.netlify.app` (o domínio `arenadacultura.com.br` **não** resolve — não use).

## Comandos

```sh
bun install            # ou bun install (Netlify usa bun)
bun run build          # astro build → dist/
bun run dev            # dev server
bun scripts/gen-og-images.mjs    # regenera as 11 imagens OG por área + home.png
bun scripts/gen-instagram.mjs    # regenera public/instagram-divulgacao.png
```

Não há testes automatizados nem lint configurado. Validação dos dados é feita por scripts pontuais (ver "Atualização de semestre").

## Estrutura

```
src/
  data/
    courses.ts      # FONTE DE VERDADE dos cursos (ver modelo abaixo)
    synopses.ts     # sinopses oficiais (PDF da PBH), 1 por curso-base
  pages/
    index.astro     # home: hero, grade de cursos, agenda, sobre
    curso/[slug].astro  # 1 página-stub estática por curso (compartilhamento)
  layouts/Layout.astro  # <head>, SEO, OG/Twitter meta, JSON-LD, GA
  components/       # Hero, Header, Footer, CourseCard, CourseModal, Calendar,
                    # CourseFilters, AreaBadge, AgeBadge, OnlineBadge
  utils/
    slug.ts         # slugify + courseSlug (compartilhado build+client)
    badges.ts       # HTML dos badges (compartilhado entre Astro e innerHTML do modal)
    version.ts      # SHARE_VERSION — cache-busting de previews
  styles/global.css # tokens (cores, espaçamento) e base
scripts/
  gen-og-images.mjs # gera public/og/*.png
  gen-instagram.mjs # gera public/instagram-divulgacao.png
  assets/           # fontes .ttf + SVGs dos ícones (usados só na geração de imagem)
public/og/          # imagens OG versionadas (1 por área + home.png)
```

## Modelo de dados (`src/data/courses.ts`)

O array final `courses: Course[]` é **derivado**, não escrito à mão. Pipeline:

1. **`csvData[]`** — lista curada de cursos (name, area, location, schedule, ageRange, enrollmentUrl). Uma entrada por turma/local. É o que se edita ao atualizar o semestre.
2. **`DATE_RANGES`** — mapa `"nome|local" → [startDate, endDate]` para cursos recorrentes (datas ISO).
3. **`EXTRA_MEETINGS`** — mapa `id → texto` para "+N encontros a combinar".
4. **`JOTFORM_IDS`** — mapa `id → input_XX_Y` (âncora do checkbox no JotForm, para deep-link da inscrição).
5. **`SYNOPSES`** (de `synopses.ts`) — casado por nome do curso **sem** sufixo de turma `(T1)/(T2)`.
6. O `.map()` final calcula: dias da semana (`parseDaysOfWeek`), horários (`parseTime`), datas específicas (`parseSpecificDates`), `isRecurring`, e monta cada `Course`.

**Dois tipos de curso:**
- **Recorrente**: tem `startDate`/`endDate` em `DATE_RANGES` + dias da semana no `schedule` (ex. "Terça, 19h às 21h"). Gera eventos repetidos na agenda.
- **Datas específicas**: `schedule` começa com datas (ex. "11/set, 9/out e 4/dez, 14h às 16h" ou "22 e 29/ago"). `isSpecificDate()` detecta; `parseSpecificDates()` extrai. Não entra em `DATE_RANGES`.

Regra de negócio crítica: **datas e horários vêm SEMPRE do formulário JotForm, nunca do PDF de sinopses** (o PDF diverge em várias datas). Do PDF entra só o texto da sinopse.

## Funcionalidades

- **Grade de cursos** (`CourseCard` + filtros): filtro por área (chips), por local (Tom Select), busca por nome. Load-more no mobile.
- **Modal de detalhes** (`CourseModal`): abre ao clicar no card. Header fixo (badges + fechar), corpo rolável (título, infos, "Sobre o curso" colapsável, mini-calendário), footer fixo (Inscrever-se / Compartilhar). Populado via `innerHTML` a partir de `window.__MODAL_COURSES__` (JSON serializado no build). Deep-link por `#curso-{slug}`.
- **Agenda** (`Calendar`): FullCalendar com os eventos gerados de todos os cursos, filtrável por área/local. `validRange` limita ao semestre corrente (ver "Atualização").
- **Páginas-stub de compartilhamento** (`curso/[slug].astro`): uma por curso. Existem porque crawlers de WhatsApp/Facebook **ignoram `#hash` e não rodam JS** — precisam de `<title>`/`description`/`og:image` próprios no HTML. Humano que abre é redirecionado (`location.replace`) para `/#curso-{slug}` (o modal). Crawler lê as metas.
- **Imagens OG por área**: `public/og/{area}.png` + `home.png`, geradas por `gen-og-images.mjs`. Cada stub aponta a imagem da sua área; a home aponta `home.png`.

## Slugs (`utils/slug.ts`)

`courseSlug(course)` = slug de **nome + local**. Nome sozinho **não** é único (ex. "Brincadeiras Circenses" existe em 3 locais). O build quebra se dois cursos gerarem o mesmo slug. Usado tanto na geração das stubs (build) quanto no modal (client) — por isso é compartilhado.

## Compartilhamento e cache (`utils/version.ts`)

WhatsApp/Facebook cacheiam previews por **URL exata** (página e imagem). `SHARE_VERSION` é anexado como `?v=N` tanto na URL de compartilhar (`getShareUrl`) quanto no `og:image` (`Layout.astro`). **Ao mudar arte OG ou metas, incremente `SHARE_VERSION`** — força re-scrape de tudo sem precisar do Facebook Debugger.

## Geração de imagens OG (`scripts/gen-og-images.mjs`)

- Renderiza SVG → PNG 1200×630 com resvg-js. Fontes/ícones em `scripts/assets/`.
- Paleta e ícones das áreas devem espelhar `AREA_COLORS`/`AREA_ICONS` de `courses.ts` (estão duplicados no script — sincronize se mudar).
- `home.png` puxa `nCourses`/`nAreas` lendo `courses.ts` no momento da geração (não desatualiza).
- resvg **não renderiza `<svg>` aninhado** — o logo é injetado como `<g>` com transform, não `<svg>`. Ícones Material usam viewBox `0 -960 960 960` (transform já ajustado no script).

## Atualização de semestre (workflow)

1. Baixar o HTML do novo JotForm e o PDF de sinopses da PBH.
2. Reescrever `csvData`, `DATE_RANGES`, `EXTRA_MEETINGS`, `JOTFORM_IDS` em `courses.ts` a partir do form. **Cobertura tem que ser 1:1** com os checkboxes do form (nem faltar, nem inventar). Validar com script (contar checkboxes vs cursos; conferir horários/dias/datas re-extraídos do texto bruto).
3. Reescrever `synopses.ts` a partir do PDF. Validar: todo curso com sinopse, nenhuma órfã (importar via `tsx`/`node --experimental-strip-types`, não regex).
4. Atualizar rótulos de semestre em `Hero`, `Footer`, `Layout` (description) e o `validRange` do `Calendar` (`src/components/Calendar.astro` — `validStart`/`validEnd` e o `validRange`).
5. Atualizar a URL do form (`enrollmentUrl` em `courses.ts` + links em `Header`/`Footer`/`index`).
6. `node scripts/gen-og-images.mjs` (números da home) e incrementar `SHARE_VERSION`.
7. `npm run build`, conferir contagem de cursos/stubs no `dist/`, e fazer deploy (push).

## Deploy

`git push` para `master` → Netlify builda e publica. **Não há preview automático em produção sem push** — mudanças locais não aparecem no site nem nos previews de compartilhamento até subir. `netlify.toml` tem o catch-all SPA (`/* → /index.html`), mas arquivos estáticos reais (ex. `/og/*.png`, stubs) são servidos antes do fallback.

## Convenções

- Respostas ao usuário em **português**.
- `enrollmentUrl` de todos os cursos aponta para o mesmo form do semestre; o deep-link do curso é `enrollmentUrl#{JOTFORM_IDS[id]}`.
- `location` contendo "Online" ou "EAD" ativa o `OnlineBadge` e desativa o link do Google Maps.
- CSS injetado via `innerHTML` (modal) precisa de `<style is:global>`; CSS de elementos estáticos usa `<style>` scoped.
