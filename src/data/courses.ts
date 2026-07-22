export interface Course {
  id: number;
  name: string;
  area: string;
  location: string;
  schedule: string;
  ageRange: string;
  enrollmentUrl: string;
  startDate: string | null;
  endDate: string | null;
  daysOfWeek: number[]; // 0=Dom, 1=Seg, 2=Ter, 3=Qua, 4=Qui, 5=Sex, 6=Sab
  startTime: string;
  endTime: string;
  isRecurring: boolean;
  specificDates: string[]; // for non-recurring courses "2026-03-04"
  extraMeetings: string | null; // e.g. "+ 1 encontro em dia e horário a combinar"
}

export const AREA_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  "Artes Visuais":   { bg: "#FFF3E0", text: "#E65100", dot: "#FF9800" },
  "Audiovisual":     { bg: "#E3F2FD", text: "#1565C0", dot: "#42A5F5" },
  "Circo":           { bg: "#FCE4EC", text: "#AD1457", dot: "#EC407A" },
  "Dança":           { bg: "#F3E5F5", text: "#7B1FA2", dot: "#AB47BC" },
  "Design Popular":  { bg: "#E8F5E9", text: "#2E7D32", dot: "#66BB6A" },
  "Música":          { bg: "#E0F7FA", text: "#00695C", dot: "#26A69A" },
  "Patrimônio":      { bg: "#FFF8E1", text: "#F57F17", dot: "#FFCA28" },
  "Teatro":          { bg: "#EDE7F6", text: "#4527A0", dot: "#7E57C2" },
  "Bastidores":      { bg: "#EFEBE9", text: "#4E342E", dot: "#8D6E63" },
  "Gestão":          { bg: "#E8EAF6", text: "#283593", dot: "#5C6BC0" },
  "Artes":           { bg: "#FFF3E0", text: "#E65100", dot: "#FF9800" },
};

export const AREA_ICONS: Record<string, string> = {
  "Artes Visuais": "palette",
  Audiovisual: "movie",
  Circo: "festival",
  Dança: "falling",
  "Design Popular": "design_services",
  Música: "music_note",
  Patrimônio: "account_balance",
  Teatro: "theater_comedy",
  Bastidores: "mic",
  Gestão: "assignment",
  Artes: "auto_awesome",
};

// JotForm checkbox input IDs for deep-linking each course (2º semestre/2026)
export const JOTFORM_IDS: Record<number, string> = {
  // Artes Visuais
  1: "input_26_1",
  2: "input_26_2",
  3: "input_26_3",
  4: "input_26_4",
  5: "input_26_5",
  6: "input_26_6",
  7: "input_26_7",
  8: "input_26_8",
  9: "input_103_0",
  10: "input_103_1",
  11: "input_103_2",
  12: "input_103_3",
  13: "input_103_4",
  14: "input_103_5",
  15: "input_103_6",
  16: "input_119_0",
  // Audiovisual
  17: "input_83_0",
  18: "input_83_1",
  19: "input_83_2",
  20: "input_83_3",
  21: "input_83_4",
  22: "input_104_0",
  23: "input_104_1",
  24: "input_104_2",
  25: "input_120_0",
  // Bastidores
  26: "input_28_0",
  27: "input_105_0",
  28: "input_105_1",
  29: "input_105_2",
  30: "input_105_3",
  31: "input_105_4",
  32: "input_105_5",
  33: "input_105_6",
  34: "input_105_7",
  35: "input_121_0",
  // Circo
  36: "input_84_0",
  37: "input_84_1",
  38: "input_84_2",
  39: "input_84_3",
  40: "input_84_4",
  41: "input_106_0",
  42: "input_106_1",
  43: "input_122_0",
  // Dança
  44: "input_58_0",
  45: "input_58_1",
  46: "input_58_2",
  47: "input_58_3",
  48: "input_58_4",
  49: "input_58_5",
  50: "input_58_6",
  51: "input_58_7",
  52: "input_107_0",
  53: "input_107_1",
  54: "input_107_2",
  55: "input_107_3",
  56: "input_123_0",
  // Design Popular
  57: "input_32_0",
  58: "input_32_1",
  59: "input_32_2",
  60: "input_32_3",
  61: "input_32_4",
  62: "input_32_5",
  63: "input_32_6",
  64: "input_32_7",
  65: "input_32_8",
  66: "input_32_9",
  67: "input_32_10",
  68: "input_32_11",
  69: "input_108_0",
  70: "input_124_0",
  // Gestão
  71: "input_85_0",
  72: "input_85_1",
  73: "input_85_2",
  74: "input_85_3",
  75: "input_85_4",
  76: "input_85_5",
  77: "input_109_0",
  78: "input_109_1",
  79: "input_125_1",
  // Música
  80: "input_34_0",
  81: "input_34_1",
  82: "input_34_2",
  83: "input_34_3",
  84: "input_34_4",
  85: "input_34_5",
  86: "input_34_6",
  87: "input_34_7",
  88: "input_34_8",
  89: "input_110_0",
  90: "input_110_1",
  91: "input_110_2",
  92: "input_110_3",
  93: "input_126_0",
  // Patrimônio
  94: "input_36_0",
  95: "input_36_1",
  96: "input_36_2",
  97: "input_36_3",
  98: "input_111_0",
  99: "input_111_1",
  100: "input_111_2",
  101: "input_111_3",
  102: "input_111_4",
  103: "input_111_5",
  104: "input_128_0",
  // Teatro
  105: "input_38_0",
  106: "input_38_1",
  107: "input_38_2",
  108: "input_38_3",
  109: "input_112_0",
  110: "input_112_1",
  111: "input_112_2",
  112: "input_127_0",
  // Artes
  113: "input_117_0",
};

// Courses with additional meetings to be scheduled
export const EXTRA_MEETINGS: Record<number, string> = {
  11: "+1 encontro em dia e horário a combinar",
  12: "+1 encontro em dia e horário a combinar",
  54: "+1 encontro em dia e horário a combinar",
  55: "+5 encontros em dia e horário a combinar",
  62: "+1 encontro em dia e horário a combinar",
  72: "+1 encontro em dia e horário a combinar",
  74: "+2 encontros em dias e horários a combinar",
  77: "+2 encontros em dias e horários a combinar",
  78: "+2 encontros em dias e horários a combinar",
  97: "+1 encontro em dia e horário a combinar",
  98: "+3 encontros em dias e horários a combinar",
  111: "+3 encontros em dias e horários a combinar",
};

function parseDaysOfWeek(schedule: string): number[] {
  const s = schedule.toLowerCase();
  const days: number[] = [];
  if (s.includes("domingo")) days.push(0);
  if (s.includes("seg") || s.includes("segunda")) days.push(1);
  if (s.includes("ter") || s.includes("terça")) days.push(2);
  if (s.includes("qua") || s.includes("quarta")) days.push(3);
  if (s.includes("qui") || s.includes("quinta")) days.push(4);
  if (s.includes("sex") || s.includes("sexta")) days.push(5);
  if (s.includes("sáb") || s.includes("sab") || s.includes("sábado"))
    days.push(6);
  return days;
}

function parseTime(schedule: string): { start: string; end: string } {
  const match = schedule.match(
    /(\d{1,2}h\d{0,2})\s*(?:às|a)\s*(\d{1,2}h\d{0,2})/,
  );
  if (match) {
    const fmt = (t: string) => t.replace("h", ":").replace(/:$/, ":00");
    return { start: fmt(match[1]), end: fmt(match[2]) };
  }
  return { start: "", end: "" };
}

function isSpecificDate(schedule: string): boolean {
  // "ver datas" means recurring with known date range, not specific individual dates
  if (/ver datas/i.test(schedule)) return false;
  return (
    /^\d{1,2}\/\w{3}/.test(schedule.trim()) ||
    /^\d{1,2}\s*(e|a)\s*\d{1,2}\/\w{3}/.test(schedule.trim())
  );
}

const MONTH_RE = "jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez";
const MONTH_NUM: Record<string, string> = {
  jan: "01",
  fev: "02",
  mar: "03",
  abr: "04",
  mai: "05",
  jun: "06",
  jul: "07",
  ago: "08",
  set: "09",
  out: "10",
  nov: "11",
  dez: "12",
};

function parseSpecificDates(schedule: string): string[] {
  const dates: string[] = [];
  const iso = (d: string, mon: string) =>
    `2026-${MONTH_NUM[mon.toLowerCase()]}-${String(parseInt(d)).padStart(2, "0")}`;
  // "16 a 20/mar" — consecutive day range in one month
  const rangeMatch = schedule.match(
    new RegExp(`(\\d{1,2})\\s*a\\s*(\\d{1,2})\\/(${MONTH_RE})`, "i"),
  );
  if (rangeMatch) {
    const [, startDay, endDay, mon] = rangeMatch;
    for (let d = parseInt(startDay); d <= parseInt(endDay); d++) {
      dates.push(iso(String(d), mon));
    }
    return dates;
  }
  // "12 e 14/mai" — two days sharing one month
  const multiMatch = schedule.match(
    new RegExp(`(\\d{1,2})\\s*e\\s*(\\d{1,2})\\/(${MONTH_RE})`, "i"),
  );
  if (multiMatch) {
    const [, d1, d2, mon] = multiMatch;
    dates.push(iso(d1, mon), iso(d2, mon));
    return dates;
  }
  // "11/set, 9/out, 6/nov e 4/dez" — each date carries its own month
  for (const m of schedule.matchAll(
    new RegExp(`(\\d{1,2})\\/(${MONTH_RE})`, "gi"),
  )) {
    dates.push(iso(m[1], m[2]));
  }
  return dates;
}

// Dates extracted from JotForm for recurring courses (2º semestre/2026)
const DATE_RANGES: Record<string, [string, string]> = {
  // Artes Visuais
  "Grafite é bom demais! Stencil + Lambes + pixo (Arte Urbana)|CC Lindeia Regina": ["2026-09-01", "2026-11-03"],
  "Grafite é bom demais! Stencil + Lambes + pixo (Arte Urbana)|CC Venda Nova": ["2026-09-05", "2026-11-14"],
  "Arena Ateliê Livre|CC Salgado Filho": ["2026-08-26", "2026-12-02"],
  "Aventuras de Infância: vamos brincar de inventar com as Artes Visuais?|CC Pampulha": ["2026-08-22", "2026-12-05"],
  "Aventuras de Infância: vamos brincar de inventar com as Artes Visuais?|CC Vila Fátima": ["2026-08-22", "2026-12-05"],
  "Aventuras de Infância: vamos brincar de inventar com as Artes Visuais?|CC Vila Santa Rita": ["2026-09-05", "2026-11-28"],
  "Grafite é bom demais! Stencil + Lambes + pixo (Arte Urbana)|CC Vila Marçola": ["2026-08-29", "2026-11-28"],
  "Ciclo Expansão - Módulo Corpo (T1)|NUFAC": ["2026-08-05", "2026-12-14"],
  "Ciclo Expansão - Módulo Corpo (T2)|NUFAC": ["2026-08-05", "2026-12-14"],
  "Ciclo de Poéticas - Módulo Residência II (T1)|NUFAC": ["2026-08-20", "2026-12-10"],
  "Ciclo de Poéticas - Módulo Residência II (T2)|NUFAC": ["2026-08-10", "2026-12-10"],
  "Arena Ateliê Livre (T1)|NUFAC": ["2026-08-21", "2026-12-04"],
  "Arena Ateliê Livre (T2)|NUFAC": ["2026-08-25", "2026-11-24"],
  "Desenho de Observação|NUFAC": ["2026-09-08", "2026-11-10"],
  // Audiovisual
  "Corpo, câmera, ação! Práticas coletivas para criação de um filme|CC Alto Vera Cruz": ["2026-08-22", "2026-11-14"],
  "Vamos brincar de inventar um filme?|CC Bairro das Indústrias": ["2026-08-20", "2026-10-22"],
  "Encontros para ver e criar filmes|CC Vila Marçola": ["2026-08-29", "2026-11-07"],
  "Encontros para ver imagens|CC Vila Marçola": ["2026-08-14", "2026-10-16"],
  "Fotografia e outras janelas para ver o mundo|CC Zilah Spósito": ["2026-08-12", "2026-11-25"],
  "Minicurso Documentário e invenção - Módulo II: memórias, fragmentos e coleções|Cine Santa Tereza": ["2026-08-25", "2026-11-10"],
  "Laboratório de Práticas Livres em Audiovisual: introdução à montagem cinematográfica|NUFAC": ["2026-08-17", "2026-11-09"],
  "Laboratório de Pesquisa e Experimentação: escrevendo um roteiro de curta metragem|NUFAC": ["2026-08-13", "2026-11-12"],
  // Bastidores
  "Corpo Museu de Novidades: cenografia e adereços através da customização e ressignificação de materiais|CC Jardim Guanabara": ["2026-08-27", "2026-10-29"],
  "Quem cuida da arte? Os bastidores da curadoria|Cine Santa Tereza": ["2026-09-02", "2026-11-04"],
  "A arte da moda: o figurino e a maquiagem como linguagem de criação|Museu da Moda (MUMO)": ["2026-09-09", "2026-11-11"],
  "A arte da moda: maquiagem e caracterização como linguagens de criação|Museu da Moda (MUMO)": ["2026-09-09", "2026-11-11"],
  "Carnaval: os bastidores da festa|NUFAC": ["2026-10-07", "2026-10-28"],
  "Ateliê de Bastidores das Artes: cenografia e iluminação|NUFAC": ["2026-09-01", "2026-11-03"],
  "Ateliê de Bastidores das Artes: performance, figurino e curadoria|NUFAC": ["2026-09-03", "2026-11-05"],
  "Pesquise como DJ: a preparação antes da pista|NUFAC": ["2026-08-18", "2026-09-29"],
  "Arena DJ: diversidade na pista|NUFAC": ["2026-10-06", "2026-11-03"],
  // Circo
  "Brincadeiras Circenses|CC São Bernardo": ["2026-08-22", "2026-11-14"],
  "Brincadeiras Circenses|CC Salgado Filho": ["2026-08-13", "2026-10-29"],
  "Brincadeiras Circenses|CC Usina de Cultura": ["2026-08-20", "2026-11-26"],
  "Brincadeiras Circenses: práticas e criações juvenis|CC Usina de Cultura": ["2026-08-03", "2026-11-30"],
  "Técnicas Circenses|CRCP Lagoa do Nado": ["2026-08-22", "2026-10-24"],
  "Oficina Básica de Circo|Centro de Referência das Juventudes": ["2026-08-21", "2026-10-23"],
  "Descobrindo a palhaçaria|NUFAC": ["2026-08-13", "2026-10-15"],
  // Dança
  "Dança para crianças|CC Bairro das Indústrias": ["2026-08-18", "2026-10-20"],
  "Dança para crianças|CC Lindeia Regina": ["2026-03-14", "2026-05-30"],
  "2 pra lá, 1 pra cá|CC Jardim Guanabara": ["2026-08-10", "2026-11-30"],
  "Encontros para dançar|CC Liberalino Alves": ["2026-08-12", "2026-11-25"],
  "Encontros para dançar em diálogo com saberes ancestrais|CC São Bernardo": ["2026-08-05", "2026-11-25"],
  "Encontros para dançar|CC Urucuia": ["2026-08-11", "2026-11-17"],
  "Encontros para dançar|CC Vila Marçola": ["2026-08-12", "2026-11-25"],
  "Dança para crianças|CC Vila Santa Rita": ["2026-09-05", "2026-10-24"],
  "Áfricas em nós: danças e outras performatividades negras|Centro de Referência da Dança": ["2026-08-17", "2026-11-30"],
  "Laboratório de Experimentação e Criação: eu, tu, nós, el_s|NUFAC": ["2026-08-19", "2026-11-25"],
  "Ciclo de Expansão - Módulo I (Dança)|NUFAC": ["2026-08-04", "2026-12-10"],
  // Design Popular
  "Laboratório com Linhas e Agulhas|CC Alto Vera Cruz": ["2026-09-02", "2026-11-18"],
  "Costurando Ideias: costura criativa e invenções|CC Bairro das Indústrias": ["2026-09-09", "2026-11-25"],
  "Costurando Ideias: costura criativa e invenções|CC Jardim Guanabara": ["2026-08-24", "2026-11-30"],
  "Tecido e Pintado|CC Liberalino Alves": ["2026-08-27", "2026-11-12"],
  "Bordados e outras delicadezas|CC Salgado Filho": ["2026-08-14", "2026-11-06"],
  "Laboratório com Linhas e Agulhas|CRAS Conjunto Paulo VI": ["2026-08-28", "2026-11-27"],
  "Laboratório com Linhas e Agulhas|CC Urucuia": ["2026-09-02", "2026-11-18"],
  "Laboratório com Linhas e Agulhas|CC Vila Fátima": ["2026-09-01", "2026-11-17"],
  "Bordados e outras delicadezas|CC Venda Nova": ["2026-08-21", "2026-11-13"],
  "Costurando Ideias: costura criativa e invenções|CC Zilah Spósito": ["2026-09-03", "2026-11-05"],
  "Ateliê de Design Popular|CRCP Lagoa do Nado": ["2026-09-03", "2026-11-12"],
  "Ateliê de Design Popular: Linhas e Tramas|NUFAC": ["2026-08-25", "2026-11-12"],
  // Gestão
  "Elaboração de Projetos Culturais|CC Jardim Guanabara": ["2026-09-09", "2026-11-25"],
  "Criação e produção de eventos culturais|CC Liberalino Alves": ["2026-09-22", "2026-12-01"],
  "Elaboração de Projetos Culturais|CC São Bernardo": ["2026-09-08", "2026-11-24"],
  "Elaboração de Projetos Culturais|CC Pampulha": ["2026-09-14", "2026-11-30"],
  "Voa palavra: elaboração de projetos culturais em Literatura e Leitura|CC Padre Eustáquio": ["2026-09-15", "2026-12-01"],
  "Gestão e Produção Cultural: práticas inventivas no fazer artístico|CC Vila Marçola": ["2026-09-08", "2026-11-24"],
  "Tirando as ideias das gavetas: laboratório de elaboração de projetos culturais|NUFAC": ["2026-09-02", "2026-12-02"],
  "Laboratório de Produção Cultural: do criar ao fazer acontecer|NUFAC": ["2026-09-03", "2026-12-03"],
  "Formas Criativas e Afetivas de Divulgação de Projetos Culturais|Online/EAD": ["2026-10-13", "2026-12-01"],
  // Música
  "Teclados: teclando canções para a vida|CC Alto Vera Cruz": ["2026-08-14", "2026-12-04"],
  "Oficina Básica de Música e Violão|CC Liberalino Alves": ["2026-08-24", "2026-11-25"],
  "Roda de Choro|CC Padre Eustáquio": ["2026-08-19", "2026-11-25"],
  "Práticas Percussivas: ritmos brasileiros|CC Padre Eustáquio": ["2026-08-24", "2026-11-30"],
  "Canto: Voz e Expressão|CC São Geraldo": ["2026-09-01", "2026-11-03"],
  "Música percussiva de rua|CC Usina de Cultura": ["2026-09-08", "2026-11-24"],
  "Beabá do Violão|CC Urucuia": ["2026-09-03", "2026-11-19"],
  "Beabá do Violão|CC Vila Santa Rita": ["2026-09-02", "2026-11-18"],
  "Oficina Básica de Música|CC Zilah Spósito": ["2026-08-05", "2026-12-16"],
  "Orquestra Transversal: vozes, instrumentos, samples, beats e som|NUFAC": ["2026-09-16", "2026-11-18"],
  "Canto: Voz e Expressão (T1)|NUFAC": ["2026-09-01", "2026-11-17"],
  "Canto: Voz e Expressão (T2)|NUFAC": ["2026-09-01", "2026-11-17"],
  "Canto: Voz e Expressão (T3)|NUFAC": ["2026-09-11", "2026-11-27"],
  "Criação e Composição: música e letra|Online/EAD": ["2026-11-06", "2026-12-18"],
  // Patrimônio
  "Folguedos Populares|CC Alto Vera Cruz": ["2026-09-12", "2026-10-24"],
  "Laboratório de Africanidades|CC São Geraldo": ["2026-08-28", "2026-11-27"],
  "Ervas e Raízes: troca de saberes|CC Vila Fátima": ["2026-08-20", "2026-11-12"],
  "Formação de Brincantes: o brincar e a natureza|NUFAC": ["2026-08-21", "2026-12-04"],
  "Boi Livre|NUFAC": ["2026-08-18", "2026-11-24"],
  "Laboratório de Africanidades|NUFAC": ["2026-08-18", "2026-11-10"],
  "Literatura e Oralidade Popular|NUFAC": ["2026-08-11", "2026-11-24"],
  "Laboratório de Pesquisa: saberes de povos originários|NUFAC": ["2026-08-26", "2026-11-25"],
  "Arte, Cultura e Africanidades: Dengos e Kizombas|Online/EAD": ["2026-09-23", "2026-10-28"],
  // Teatro
  "Teatro: curso de longa duração (Ciclo III - Módulo II)|CC São Geraldo": ["2026-08-13", "2026-12-12"],
  "Teatro livre: canto coletivo|CC Pampulha": ["2026-09-23", "2026-11-25"],
  "Teatro livre: encantações sonoras|CC Venda Nova": ["2026-09-14", "2026-11-30"],
  "Bloco da Lagoa: Cortejo Teatral|CRCP Lagoa do Nado": ["2026-09-05", "2026-11-28"],
  "Teatro: curso de longa duração (Ciclo I - Módulo II)|NUFAC": ["2026-08-10", "2026-12-02"],
  "Oficina de Dramaturgia: criação e experimentação|NUFAC": ["2026-08-31", "2026-11-23"],
  // Artes
  "Módulo Transversal - Travessias carnavalescas: feitos, efeitos e alegorias da história de uma festa transversal|NUFAC": ["2026-08-19", "2026-11-04"],
};

const csvData: Omit<
  Course,
  | "id"
  | "daysOfWeek"
  | "startTime"
  | "endTime"
  | "isRecurring"
  | "specificDates"
  | "startDate"
  | "endDate"
>[] = [
  // ---------- Artes Visuais ----------
  {
    name: "Grafite é bom demais! Stencil + Lambes + pixo (Arte Urbana)",
    area: "Artes Visuais",
    location: "CC Lindeia Regina",
    schedule: "Terça, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Grafite é bom demais! Stencil + Lambes + pixo (Arte Urbana)",
    area: "Artes Visuais",
    location: "CC Venda Nova",
    schedule: "Sábado, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Arena Ateliê Livre",
    area: "Artes Visuais",
    location: "CC Salgado Filho",
    schedule: "Quarta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Transe da Trança: aula aberta de artes visuais",
    area: "Artes Visuais",
    location: "CC Salgado Filho",
    schedule: "12/dez, 15h às 18h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Aventuras de Infância: vamos brincar de inventar com as Artes Visuais?",
    area: "Artes Visuais",
    location: "CC Pampulha",
    schedule: "Sábado, 10h às 11h30",
    ageRange: "Todas as idades (protagonismo das crianças)",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Aventuras de Infância: vamos brincar de inventar com as Artes Visuais?",
    area: "Artes Visuais",
    location: "CC Vila Fátima",
    schedule: "Sábado, 14h às 15h30",
    ageRange: "Todas as idades (protagonismo das crianças)",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Aventuras de Infância: vamos brincar de inventar com as Artes Visuais?",
    area: "Artes Visuais",
    location: "CC Vila Santa Rita",
    schedule: "Sábado, 13h às 15h",
    ageRange: "Todas as idades (protagonismo das crianças)",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Grafite é bom demais! Stencil + Lambes + pixo (Arte Urbana)",
    area: "Artes Visuais",
    location: "CC Vila Marçola",
    schedule: "Sábado, 11h às 13h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Ciclo Expansão - Módulo Corpo (T1)",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Segunda e quarta, 14h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Ciclo Expansão - Módulo Corpo (T2)",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Segunda e quarta, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Ciclo de Poéticas - Módulo Residência II (T1)",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Terça e quinta, 14h às 17h",
    ageRange: "A partir de 16 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Ciclo de Poéticas - Módulo Residência II (T2)",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Segunda e quinta, 19h às 22h",
    ageRange: "A partir de 16 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Arena Ateliê Livre (T1)",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Sexta, 14h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Arena Ateliê Livre (T2)",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Terça, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Desenho de Observação",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Terça, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Conversações com artistas: na fronteira dos gestos — práticas artísticas e de ensino em Artes Visuais e Design Popular",
    area: "Artes Visuais",
    location: "Online/EAD",
    schedule: "5/out, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  // ---------- Audiovisual ----------
  {
    name: "Corpo, câmera, ação! Práticas coletivas para criação de um filme",
    area: "Audiovisual",
    location: "CC Alto Vera Cruz",
    schedule: "Sábado, 14h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Vamos brincar de inventar um filme?",
    area: "Audiovisual",
    location: "CC Bairro das Indústrias",
    schedule: "Quinta, 9h30 às 11h",
    ageRange: "10 a 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Encontros para ver e criar filmes",
    area: "Audiovisual",
    location: "CC Vila Marçola",
    schedule: "Sábado, 14h às 15h30",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Encontros para ver imagens",
    area: "Audiovisual",
    location: "CC Vila Marçola",
    schedule: "Sexta, 17h30 às 19h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Fotografia e outras janelas para ver o mundo",
    area: "Audiovisual",
    location: "CC Zilah Spósito",
    schedule: "Quarta, 16h30 às 18h",
    ageRange: "10 a 13 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Minicurso Documentário e invenção - Módulo II: memórias, fragmentos e coleções",
    area: "Audiovisual",
    location: "Cine Santa Tereza",
    schedule: "Terça, 14h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Laboratório de Práticas Livres em Audiovisual: introdução à montagem cinematográfica",
    area: "Audiovisual",
    location: "NUFAC",
    schedule: "Segunda, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Laboratório de Pesquisa e Experimentação: escrevendo um roteiro de curta metragem",
    area: "Audiovisual",
    location: "NUFAC",
    schedule: "Quinta, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Estudos do Cinema Palestino",
    area: "Audiovisual",
    location: "Online/EAD",
    schedule: "15 e 17/set, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  // ---------- Bastidores ----------
  {
    name: "Corpo Museu de Novidades: cenografia e adereços através da customização e ressignificação de materiais",
    area: "Bastidores",
    location: "CC Jardim Guanabara",
    schedule: "Quinta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Quem cuida da arte? Os bastidores da curadoria",
    area: "Bastidores",
    location: "Cine Santa Tereza",
    schedule: "Quarta, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "A arte da moda: o figurino e a maquiagem como linguagem de criação",
    area: "Bastidores",
    location: "Museu da Moda (MUMO)",
    schedule: "Quarta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "A arte da moda: maquiagem e caracterização como linguagens de criação",
    area: "Bastidores",
    location: "Museu da Moda (MUMO)",
    schedule: "Quarta, 16h às 18h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Carnaval: os bastidores da festa",
    area: "Bastidores",
    location: "NUFAC",
    schedule: "Quarta, 14h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Ateliê de Bastidores das Artes: cenografia e iluminação",
    area: "Bastidores",
    location: "NUFAC",
    schedule: "Terça, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Ateliê de Bastidores das Artes: performance, figurino e curadoria",
    area: "Bastidores",
    location: "NUFAC",
    schedule: "Quinta, 15h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Pesquise como DJ: a preparação antes da pista",
    area: "Bastidores",
    location: "NUFAC",
    schedule: "Terça, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Arena DJ: diversidade na pista",
    area: "Bastidores",
    location: "NUFAC",
    schedule: "Terça, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Produção Musical e Lançamento de EPs",
    area: "Bastidores",
    location: "Online/EAD",
    schedule: "21 a 25/set, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  // ---------- Circo ----------
  {
    name: "Brincadeiras Circenses",
    area: "Circo",
    location: "CC São Bernardo",
    schedule: "Sábado, 10h às 11h30",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Brincadeiras Circenses",
    area: "Circo",
    location: "CC Salgado Filho",
    schedule: "Quinta, 17h30 às 19h",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Brincadeiras Circenses",
    area: "Circo",
    location: "CC Usina de Cultura",
    schedule: "Quinta, 18h às 19h",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Brincadeiras Circenses: práticas e criações juvenis",
    area: "Circo",
    location: "CC Usina de Cultura",
    schedule: "Segunda, 18h às 19h",
    ageRange: "11 a 13 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Técnicas Circenses",
    area: "Circo",
    location: "CRCP Lagoa do Nado",
    schedule: "Sábado, 14h30 às 16h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Oficina Básica de Circo",
    area: "Circo",
    location: "Centro de Referência das Juventudes",
    schedule: "Sexta, 14h30 às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Descobrindo a palhaçaria",
    area: "Circo",
    location: "NUFAC",
    schedule: "Quinta, 14h30 às 16h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Encontro para falar de Circo",
    area: "Circo",
    location: "Online/EAD",
    schedule: "27/out, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  // ---------- Dança ----------
  {
    name: "Dança para crianças",
    area: "Dança",
    location: "CC Bairro das Indústrias",
    schedule: "Terça, 18h às 19h30",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Dança para crianças",
    area: "Dança",
    location: "CC Lindeia Regina",
    schedule: "Sábado, 10h30 às 12h",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "2 pra lá, 1 pra cá",
    area: "Dança",
    location: "CC Jardim Guanabara",
    schedule: "Segunda, 9h às 10h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Encontros para dançar",
    area: "Dança",
    location: "CC Liberalino Alves",
    schedule: "Quarta, 9h30 às 11h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Encontros para dançar em diálogo com saberes ancestrais",
    area: "Dança",
    location: "CC São Bernardo",
    schedule: "Quarta, 9h às 11h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Encontros para dançar",
    area: "Dança",
    location: "CC Urucuia",
    schedule: "Terça, 19h30 às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Encontros para dançar",
    area: "Dança",
    location: "CC Vila Marçola",
    schedule: "Quarta, 19h às 20h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Dança para crianças",
    area: "Dança",
    location: "CC Vila Santa Rita",
    schedule: "Sábado, 10h às 11h",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Áfricas em nós: danças e outras performatividades negras",
    area: "Dança",
    location: "Centro de Referência da Dança",
    schedule: "Segunda, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Danças Populares de Minas Gerais",
    area: "Dança",
    location: "Centro de Referência da Dança",
    schedule: "22 e 29/ago, 10h às 11h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Laboratório de Experimentação e Criação: eu, tu, nós, el_s",
    area: "Dança",
    location: "NUFAC",
    schedule: "Quarta, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Ciclo de Expansão - Módulo I (Dança)",
    area: "Dança",
    location: "NUFAC",
    schedule: "Terça e quinta, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Construção da imagem na cena em Dança",
    area: "Dança",
    location: "Online/EAD",
    schedule: "27/ago, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  // ---------- Design Popular ----------
  {
    name: "Laboratório com Linhas e Agulhas",
    area: "Design Popular",
    location: "CC Alto Vera Cruz",
    schedule: "Quarta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Costurando Ideias: costura criativa e invenções",
    area: "Design Popular",
    location: "CC Bairro das Indústrias",
    schedule: "Quarta, 15h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Costurando Ideias: costura criativa e invenções",
    area: "Design Popular",
    location: "CC Jardim Guanabara",
    schedule: "Segunda, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Tecido e Pintado",
    area: "Design Popular",
    location: "CC Liberalino Alves",
    schedule: "Quinta, 9h às 11h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Bordados e outras delicadezas",
    area: "Design Popular",
    location: "CC Salgado Filho",
    schedule: "Sexta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Enquanto as linhas dançam: bordados, artesanias e encontros",
    area: "Design Popular",
    location: "CC Pampulha",
    schedule: "11/set, 9/out, 6/nov e 4/dez, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Laboratório com Linhas e Agulhas",
    area: "Design Popular",
    location: "CRAS Conjunto Paulo VI",
    schedule: "Sexta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Laboratório com Linhas e Agulhas",
    area: "Design Popular",
    location: "CC Urucuia",
    schedule: "Quarta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Laboratório com Linhas e Agulhas",
    area: "Design Popular",
    location: "CC Vila Fátima",
    schedule: "Terça, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Bordados e outras delicadezas",
    area: "Design Popular",
    location: "CC Venda Nova",
    schedule: "Sexta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Costurando Ideias: costura criativa e invenções",
    area: "Design Popular",
    location: "CC Zilah Spósito",
    schedule: "Quinta, 15h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Ateliê de Design Popular",
    area: "Design Popular",
    location: "CRCP Lagoa do Nado",
    schedule: "Quinta, 14h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Ateliê de Design Popular: Linhas e Tramas",
    area: "Design Popular",
    location: "NUFAC",
    schedule: "Quinta, 14h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Design e Africanidades",
    area: "Design Popular",
    location: "Online/EAD",
    schedule: "18/nov, 19h30 às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  // ---------- Gestão ----------
  {
    name: "Elaboração de Projetos Culturais",
    area: "Gestão",
    location: "CC Jardim Guanabara",
    schedule: "Quarta, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Criação e produção de eventos culturais",
    area: "Gestão",
    location: "CC Liberalino Alves",
    schedule: "Terça, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Elaboração de Projetos Culturais",
    area: "Gestão",
    location: "CC São Bernardo",
    schedule: "Terça, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Elaboração de Projetos Culturais",
    area: "Gestão",
    location: "CC Pampulha",
    schedule: "Segunda, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Voa palavra: elaboração de projetos culturais em Literatura e Leitura",
    area: "Gestão",
    location: "CC Padre Eustáquio",
    schedule: "Terça, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Gestão e Produção Cultural: práticas inventivas no fazer artístico",
    area: "Gestão",
    location: "CC Vila Marçola",
    schedule: "Terça, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Tirando as ideias das gavetas: laboratório de elaboração de projetos culturais",
    area: "Gestão",
    location: "NUFAC",
    schedule: "Quarta, 9h30 às 12h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Laboratório de Produção Cultural: do criar ao fazer acontecer",
    area: "Gestão",
    location: "NUFAC",
    schedule: "Quinta, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Formas Criativas e Afetivas de Divulgação de Projetos Culturais",
    area: "Gestão",
    location: "Online/EAD",
    schedule: "Terça, 15h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  // ---------- Música ----------
  {
    name: "Teclados: teclando canções para a vida",
    area: "Música",
    location: "CC Alto Vera Cruz",
    schedule: "Sexta, 14h30 às 16h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Oficina Básica de Música e Violão",
    area: "Música",
    location: "CC Liberalino Alves",
    schedule: "Segunda e quarta, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Roda de Choro",
    area: "Música",
    location: "CC Padre Eustáquio",
    schedule: "Quarta, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Práticas Percussivas: ritmos brasileiros",
    area: "Música",
    location: "CC Padre Eustáquio",
    schedule: "Segunda, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Canto: Voz e Expressão",
    area: "Música",
    location: "CC São Geraldo",
    schedule: "Terça, 19h30 às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Música percussiva de rua",
    area: "Música",
    location: "CC Usina de Cultura",
    schedule: "Terça, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Beabá do Violão",
    area: "Música",
    location: "CC Urucuia",
    schedule: "Quinta, 14h30 às 16h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Beabá do Violão",
    area: "Música",
    location: "CC Vila Santa Rita",
    schedule: "Quarta, 14h30 às 16h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Oficina Básica de Música",
    area: "Música",
    location: "CC Zilah Spósito",
    schedule: "Quarta, 9h30 às 11h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Orquestra Transversal: vozes, instrumentos, samples, beats e som",
    area: "Música",
    location: "NUFAC",
    schedule: "Quarta, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Canto: Voz e Expressão (T1)",
    area: "Música",
    location: "NUFAC",
    schedule: "Terça, 14h30 às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Canto: Voz e Expressão (T2)",
    area: "Música",
    location: "NUFAC",
    schedule: "Terça, 19h30 às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Canto: Voz e Expressão (T3)",
    area: "Música",
    location: "NUFAC",
    schedule: "Sexta, 19h30 às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Criação e Composição: música e letra",
    area: "Música",
    location: "Online/EAD",
    schedule: "Sexta, 14h30 às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  // ---------- Patrimônio ----------
  {
    name: "Folguedos Populares",
    area: "Patrimônio",
    location: "CC Alto Vera Cruz",
    schedule: "Sábado, 9h30 às 11h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Laboratório de Africanidades",
    area: "Patrimônio",
    location: "CC São Geraldo",
    schedule: "Sexta, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Ervas e Raízes: troca de saberes",
    area: "Patrimônio",
    location: "CC Vila Fátima",
    schedule: "Quinta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Encontros de Ervas e Raízes",
    area: "Patrimônio",
    location: "CC Venda Nova",
    schedule: "8/ago, 12/set, 3/out, 14/nov e 12/dez, 9h30 às 12h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Formação de Brincantes: o brincar e a natureza",
    area: "Patrimônio",
    location: "NUFAC",
    schedule: "Sexta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Boi Livre",
    area: "Patrimônio",
    location: "NUFAC",
    schedule: "Terça, 17h às 19h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Laboratório de Africanidades",
    area: "Patrimônio",
    location: "NUFAC",
    schedule: "Terça, 17h às 19h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Literatura e Oralidade Popular",
    area: "Patrimônio",
    location: "NUFAC",
    schedule: "Terça, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Laboratório de Pesquisa: saberes de povos originários",
    area: "Patrimônio",
    location: "NUFAC",
    schedule: "Quarta, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "O funk e a cidade: do batuque, tamborzão ao batidão — corpo e ancestralidade",
    area: "Patrimônio",
    location: "NUFAC",
    schedule: "4/nov, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Arte, Cultura e Africanidades: Dengos e Kizombas",
    area: "Patrimônio",
    location: "Online/EAD",
    schedule: "Quarta, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  // ---------- Teatro ----------
  {
    name: "Teatro: curso de longa duração (Ciclo III - Módulo II)",
    area: "Teatro",
    location: "CC São Geraldo",
    schedule: "Terça, quarta e quinta, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Teatro livre: canto coletivo",
    area: "Teatro",
    location: "CC Pampulha",
    schedule: "Quarta, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Teatro livre: encantações sonoras",
    area: "Teatro",
    location: "CC Venda Nova",
    schedule: "Segunda, 19h30 às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Bloco da Lagoa: Cortejo Teatral",
    area: "Teatro",
    location: "CRCP Lagoa do Nado",
    schedule: "Sábado, 10h às 12h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Teatro: curso de longa duração (Ciclo I - Módulo II)",
    area: "Teatro",
    location: "NUFAC",
    schedule: "Segunda e quarta, 14h30 às 17h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Oficina de Dramaturgia: criação e experimentação",
    area: "Teatro",
    location: "NUFAC",
    schedule: "Segunda, 19h30 às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Ateliê de espectador_s",
    area: "Teatro",
    location: "NUFAC",
    schedule: "21/ago, 4/set e 2/out, 19h30 às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  {
    name: "Pipoca aqui: teatro e comunidade",
    area: "Teatro",
    location: "Online/EAD",
    schedule: "14/out, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
  // ---------- Artes ----------
  {
    name: "Módulo Transversal - Travessias carnavalescas: feitos, efeitos e alegorias da história de uma festa transversal",
    area: "Artes",
    location: "NUFAC",
    schedule: "Quarta, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/261965053614661",
  },
];

export const courses: Course[] = csvData.map((c, i) => {
  const key = `${c.name}|${c.location}`;
  const dateRange = DATE_RANGES[key];
  const specific = isSpecificDate(c.schedule);
  const times = parseTime(c.schedule);
  const days = specific ? [] : parseDaysOfWeek(c.schedule);

  // Handle "Ter a Qui" (Tuesday to Thursday = Ter, Qua, Qui)
  if (c.schedule.toLowerCase().includes("ter a qui")) {
    days.length = 0;
    days.push(2, 3, 4);
  }

  return {
    id: i + 1,
    ...c,
    startDate: dateRange ? dateRange[0] : null,
    endDate: dateRange ? dateRange[1] : null,
    daysOfWeek: days,
    startTime: times.start,
    endTime: times.end,
    isRecurring: !specific,
    specificDates: specific ? parseSpecificDates(c.schedule) : [],
    extraMeetings: EXTRA_MEETINGS[i + 1] || null,
  };
});

export const areas = [...new Set(courses.map(c => c.area))].sort();
export const locations = [...new Set(courses.map(c => c.location))].sort();
