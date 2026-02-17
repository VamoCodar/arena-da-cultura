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

// JotForm checkbox input IDs for deep-linking each course
export const JOTFORM_IDS: Record<number, string> = {
  // Artes Visuais — Centros Culturais (q26)
  1: "input_26_1",
  2: "input_26_2",
  3: "input_26_3",
  6: "input_26_4",
  7: "input_26_5",
  8: "input_26_6",
  // Artes Visuais — NUFAC (q103)
  10: "input_103_0",
  11: "input_103_1",
  12: "input_103_2",
  13: "input_103_3",
  4: "input_103_4",
  5: "input_103_5",
  9: "input_103_6",
  // Audiovisual — Centros Culturais (q83)
  14: "input_83_0",
  15: "input_83_1",
  16: "input_83_2",
  17: "input_83_3",
  // Audiovisual — NUFAC/Cine (q104)
  18: "input_104_0",
  19: "input_104_1",
  20: "input_104_2",
  // Circo — Centros Culturais (q84)
  21: "input_84_0",
  22: "input_84_1",
  26: "input_84_2",
  28: "input_84_3",
  23: "input_84_4",
  24: "input_84_5",
  25: "input_84_6",
  // Dança — Centros Culturais (q58)
  29: "input_58_0",
  34: "input_58_1",
  30: "input_58_2",
  31: "input_58_3",
  35: "input_58_4",
  36: "input_58_5",
  32: "input_58_6",
  33: "input_58_7",
  // Design Popular — Centros Culturais (q32)
  37: "input_32_0",
  39: "input_32_1",
  40: "input_32_2",
  38: "input_32_3",
  42: "input_32_4",
  43: "input_32_5",
  44: "input_32_6",
  46: "input_32_7",
  45: "input_32_8",
  41: "input_32_9",
  47: "input_32_10",
  // Design Popular — NUFAC (q108)
  48: "input_108_0",
  // Música — Centros Culturais (q34)
  49: "input_34_0",
  50: "input_34_1",
  58: "input_34_2",
  59: "input_34_3",
  54: "input_34_4",
  60: "input_34_5",
  51: "input_34_6",
  52: "input_34_7",
  53: "input_34_8",
  // Música — NUFAC (q110)
  61: "input_110_0",
  55: "input_110_1",
  56: "input_110_2",
  57: "input_110_3",
  // Patrimônio — Centros Culturais (q36)
  62: "input_36_0",
  63: "input_36_1",
  // Patrimônio — NUFAC/Bib (q111)
  65: "input_111_0",
  66: "input_111_1",
  68: "input_111_2",
  67: "input_111_3",
  64: "input_111_4",
  // Teatro — Centros Culturais (q38)
  70: "input_38_0",
  72: "input_38_1",
  73: "input_38_2",
  99: "input_38_3",
  // Teatro — NUFAC (q112)
  69: "input_112_0",
  71: "input_112_1",
  // Bastidores — Centros Culturais (q28)
  76: "input_28_0",
  // Bastidores — NUFAC/Cine/Museu (q105)
  74: "input_105_0",
  75: "input_105_1",
  79: "input_105_2",
  78: "input_105_3",
  100: "input_105_4",
  77: "input_105_5",
  // Gestão — Centros Culturais (q85)
  81: "input_85_0",
  84: "input_85_1",
  85: "input_85_2",
  88: "input_85_3",
  82: "input_85_4",
  86: "input_85_5",
  83: "input_85_6",
  89: "input_85_7",
  // Gestão — NUFAC (q109)
  80: "input_109_0",
  87: "input_109_1",
  // Circo — NUFAC/CRJ (q106)
  104: "input_106_0",
  105: "input_106_1",
  // Dança — NUFAC/CRD (q107)
  103: "input_107_0",
  101: "input_107_1",
  102: "input_107_2",
  27: "input_107_3",
  // Encontro Entre Áreas (q117)
  90: "input_117_0",
  // EAD / Online
  96: "input_119_0",
  91: "input_120_0",
  92: "input_121_0",
  93: "input_125_0",
  94: "input_125_1",
  95: "input_126_0",
  97: "input_127_0",
  98: "input_128_0",
  106: "input_122_0",
  107: "input_123_0",
  108: "input_124_0",
};

// Courses with additional meetings to be scheduled
export const EXTRA_MEETINGS: Record<number, string> = {
  10: "+1 encontro com dia e horário a combinar",
  11: "+1 encontro com dia e horário a combinar",
  12: "+1 encontro em dia e horário a combinar",
  13: "+1 encontro em dia e horário a combinar",
  16: "+ 3 encontros em dias e horários a combinar",
  27: "+ 2 encontros em dias e horários a combinar",
  62: "+ 1 encontro em dia e horário a combinar",
  80: "+ 1 encontro em dia e horário a combinar",
  87: "+ 1 encontro em dia e horário a combinar",
  102: "+ 1 encontro em dia e horário a combinar",
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
  return (
    /^\d{1,2}\/\w{3}/.test(schedule.trim()) ||
    /^\d{1,2}\s*(e|a)\s*\d{1,2}\/\w{3}/.test(schedule.trim()) ||
    /ver datas/.test(schedule.toLowerCase())
  );
}

function parseSpecificDates(schedule: string): string[] {
  const monthMap: Record<string, string> = {
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
  const dates: string[] = [];
  // "04/mar" or "12 e 14/mai" or "16 a 20/mar"
  const rangeMatch = schedule.match(/(\d{1,2})\s*a\s*(\d{1,2})\/(\w{3})/);
  if (rangeMatch) {
    const [, startDay, endDay, mon] = rangeMatch;
    const m = monthMap[mon.toLowerCase()] || "01";
    for (let d = parseInt(startDay); d <= parseInt(endDay); d++) {
      dates.push(`2026-${m}-${String(d).padStart(2, "0")}`);
    }
    return dates;
  }
  const multiMatch = schedule.match(/(\d{1,2})\s*e\s*(\d{1,2})\/(\w{3})/);
  if (multiMatch) {
    const [, d1, d2, mon] = multiMatch;
    const m = monthMap[mon.toLowerCase()] || "01";
    dates.push(`2026-${m}-${String(parseInt(d1)).padStart(2, "0")}`);
    dates.push(`2026-${m}-${String(parseInt(d2)).padStart(2, "0")}`);
    return dates;
  }
  const singleMatch = schedule.match(/(\d{1,2})\/(\w{3})/);
  if (singleMatch) {
    const [, day, mon] = singleMatch;
    const m = monthMap[mon.toLowerCase()] || "01";
    dates.push(`2026-${m}-${String(parseInt(day)).padStart(2, "0")}`);
    return dates;
  }
  return dates;
}

// Dates extracted from JotForm for recurring courses
const DATE_RANGES: Record<string, [string, string]> = {
  // Artes Visuais
  "Grafite é bom demais! Stencil + Lambes + pixo (Arte Urbana)|CC Lindeia Regina":
    ["2026-03-17", "2026-06-16"],
  "Grafite é bom demais! Stencil + Lambes + pixo (Arte Urbana)|CC Venda Nova": [
    "2026-03-21",
    "2026-06-27",
  ],
  "Arena Ateliê Livre: experimentações artísticas|CC Salgado Filho": [
    "2026-03-25",
    "2026-06-10",
  ],
  "Arena Ateliê Livre: experimentações artísticas (T1)|NUFAC": [
    "2026-03-06",
    "2026-06-26",
  ],
  "Arena Ateliê Livre: experimentações artísticas (T2)|NUFAC": [
    "2026-03-10",
    "2026-06-16",
  ],
  "Aventuras de infância: artes visuais para pequenos inventores|CC Vila Fátima":
    ["2026-03-07", "2026-05-30"],
  "Aventuras de infância: artes visuais para pequenos inventores|CC Vila Santa Rita":
    ["2026-03-21", "2026-06-27"],
  "Inventar com crianças: construção de máscaras e adereços|CRCP Lagoa do Nado":
    ["2026-03-21", "2026-06-20"],
  "Desenho de observação: o olhar que desenha|NUFAC": [
    "2026-03-31",
    "2026-06-09",
  ],
  "Ciclo Expansão - Módulo Objeto (Artes Visuais) T1|NUFAC": [
    "2026-03-04",
    "2026-07-01",
  ],
  "Ciclo Expansão - Módulo Objeto (Artes Visuais) T2|NUFAC": [
    "2026-03-04",
    "2026-07-01",
  ],
  "Ciclo de Poéticas - Módulo Residência I (T1)|NUFAC": [
    "2026-03-03",
    "2026-07-02",
  ],
  "Ciclo de Poéticas - Módulo Residência I (T2)|NUFAC": [
    "2026-03-02",
    "2026-07-02",
  ],
  // Audiovisual
  "Corpo câmera ação! Práticas audiovisuais|CC Alto Vera Cruz": [
    "2026-03-07",
    "2026-05-23",
  ],
  "Vamos brincar de inventar um filme?|CC Bairro das Indústrias": [
    "2026-03-19",
    "2026-05-28",
  ],
  "Ver e criar filmes: entre a lente e a imaginação|CC Vila Marçola": [
    "2026-03-14",
    "2026-05-23",
  ],
  "Fotografia e outras janelas para ver o mundo|CC Zilah Spósito": [
    "2026-03-11",
    "2026-07-01",
  ],
  "Documentário e invenção|Cine Santa Tereza": ["2026-03-17", "2026-06-09"],
  "Laboratório de práticas livres em audiovisual|NUFAC": [
    "2026-03-12",
    "2026-06-25",
  ],
  "Roteiro de curta metragem: da ideia à escrita|NUFAC": [
    "2026-03-05",
    "2026-06-18",
  ],
  // Circo
  "Brincadeiras circenses: do riso ao movimento|CC São Bernardo": [
    "2026-03-14",
    "2026-06-20",
  ],
  "Brincadeiras circenses: do riso ao movimento|CC Salgado Filho": [
    "2026-03-12",
    "2026-06-11",
  ],
  "Brincadeiras circenses: do riso ao movimento (Infantil)|CC Usina de Cultura":
    ["2026-03-12", "2026-07-02"],
  "Brincadeiras circenses: do riso ao movimento (Juvenil)|CC Usina de Cultura":
    ["2026-03-16", "2026-06-29"],
  "Técnicas circenses: o corpo em cena|CRCP Lagoa do Nado": [
    "2026-03-14",
    "2026-05-30",
  ],
  "Ciclo Básico - Módulo I (Artes Circenses)|CC Usina de Cultura": [
    "2026-03-02",
    "2026-07-09",
  ],
  "Ciclo Básico - Módulo II (Dança)|NUFAC": ["2026-02-24", "2026-07-09"],
  "Ciclo Expansão - Módulo Invenção (Artes Circenses)|CC Usina de Cultura": [
    "2026-03-09",
    "2026-07-09",
  ],
  // Dança
  "Encontros para dançar: rimas, passos e movimentos|CC Bairro das Indústrias":
    ["2026-03-11", "2026-06-17"],
  "Encontros para dançar: rimas, passos e movimentos|CC Jardim Guanabara": [
    "2026-03-02",
    "2026-06-22",
  ],
  "Encontros para dançar: rimas, passos e movimentos|CC Liberalino Alves": [
    "2026-03-11",
    "2026-06-17",
  ],
  "Encontros para dançar: rimas, passos e movimentos|CC Pampulha": [
    "2026-03-10",
    "2026-06-16",
  ],
  "Encontros para dançar: rimas, passos e movimentos|CC Vila Marçola": [
    "2026-03-04",
    "2026-06-17",
  ],
  "Dança para crianças: corpo e criatividade|CC Lindeia Regina": [
    "2026-03-14",
    "2026-05-30",
  ],
  "Dança e saberes ancestrais: corpo e memória|CC São Bernardo": [
    "2026-03-04",
    "2026-06-24",
  ],
  "2 pra lá 1 pra cá: iniciação às danças de salão|CC Urucuia": [
    "2026-03-11",
    "2026-06-17",
  ],
  // Design Popular
  "Tecido e pintado: a arte de transformar panos|CC Alto Vera Cruz": [
    "2026-03-25",
    "2026-06-10",
  ],
  "Tecido e pintado: a arte de transformar panos|CC Liberalino Alves": [
    "2026-03-19",
    "2026-06-18",
  ],
  "Costurando ideias: do corte à costura criativa|CC Bairro das Indústrias": [
    "2026-03-11",
    "2026-05-27",
  ],
  "Costurando ideias: do corte à costura criativa|CC Jardim Guanabara": [
    "2026-03-23",
    "2026-06-15",
  ],
  "Costurando ideias: do corte à costura criativa|CC Venda Nova": [
    "2026-03-20",
    "2026-06-26",
  ],
  "Bordados e outras delicadezas para enfeitar a vida|CC Salgado Filho": [
    "2026-03-13",
    "2026-06-19",
  ],
  "Bordados e outras delicadezas para enfeitar a vida|CC Pampulha": [
    "2026-03-13",
    "2026-06-19",
  ],
  "Ateliê com linhas e agulhas: costura e bordado|CC Usina de Cultura": [
    "2026-03-13",
    "2026-06-19",
  ],
  "Ateliê com linhas e agulhas: costura e bordado|CC Vila Fátima": [
    "2026-03-24",
    "2026-06-16",
  ],
  "Ateliê com linhas e agulhas: costura e bordado|CC Urucuia": [
    "2026-03-18",
    "2026-06-03",
  ],
  "Ateliê com linhas e agulhas: costura e bordado|CC Zilah Spósito": [
    "2026-03-12",
    "2026-06-11",
  ],
  "Costurando ideias: do corte à costura criativa|CC Zilah Spósito": [
    "2026-03-12",
    "2026-06-11",
  ],
  "Ateliê de Design Popular: linhas, tramas e redes|NUFAC": [
    "2026-03-12",
    "2026-06-18",
  ],
  // Música
  "Teclados e canções: primeiros passos nas teclas|CC Alto Vera Cruz": [
    "2026-03-13",
    "2026-07-10",
  ],
  "Oficina de violão: acordes e canções|CC Liberalino Alves": [
    "2026-03-16",
    "2026-07-01",
  ],
  "Beabá do violão: do zero aos primeiros acordes|CC Urucuia": [
    "2026-03-19",
    "2026-06-18",
  ],
  "Beabá do violão: do zero aos primeiros acordes|CC Vila Santa Rita": [
    "2026-03-18",
    "2026-06-03",
  ],
  "Oficina básica de música: ritmos e sons|CC Zilah Spósito": [
    "2026-02-25",
    "2026-07-08",
  ],
  "Canto: voz, corpo e expressão|CC São Geraldo": ["2026-03-24", "2026-06-02"],
  "Canto: voz, corpo e expressão (T1)|NUFAC": ["2026-03-10", "2026-06-02"],
  "Canto: voz, corpo e expressão (T2)|NUFAC": ["2026-03-10", "2026-06-02"],
  "Canto: voz, corpo e expressão (T3)|NUFAC": ["2026-03-13", "2026-05-29"],
  "Roda de choro: prática instrumental|CC Padre Eustáquio": [
    "2026-03-11",
    "2026-06-17",
  ],
  "Práticas percussivas: ritmos brasileiros|CC Padre Eustáquio": [
    "2026-03-23",
    "2026-06-15",
  ],
  "Música percussiva de rua|CC Usina de Cultura": ["2026-03-17", "2026-06-09"],
  "Orquestra Transversal de Belo Horizonte|NUFAC": ["2026-04-01", "2026-06-03"],
  // Patrimônio
  "Laboratório de africanidades: corpo, ritmo e memória|CC São Geraldo": [
    "2026-03-13",
    "2026-07-03",
  ],
  "Laboratório de africanidades: corpo, ritmo e memória|NUFAC": [
    "2026-03-17",
    "2026-06-16",
  ],
  "Saberes de povos originários: memória e resistência|Bib. Infantil Juvenil": [
    "2026-03-14",
    "2026-06-27",
  ],
  "Folguedos e cortejos populares: música e dança|NUFAC": [
    "2026-03-17",
    "2026-06-09",
  ],
  "Boi Livre: a tradição que dança|NUFAC": ["2026-03-10", "2026-06-23"],
  "Laboratório de cultura da infância: práticas brincantes|NUFAC": [
    "2026-03-12",
    "2026-06-18",
  ],
  // Teatro
  "Teatro (Ciclo I - Módulo I)|NUFAC": ["2026-02-23", "2026-06-17"],
  "Teatro (Ciclo III - Módulo I)|CC São Geraldo": ["2026-02-24", "2026-06-18"],
  "Oficina de dramaturgia: a escrita para a cena|NUFAC": [
    "2026-03-30",
    "2026-06-08",
  ],
  "Teatro livre: as encantarias sonoras no corpo e no espaço|CC Pampulha": [
    "2026-03-30",
    "2026-06-08",
  ],
  "Teatro: exercícios criativos de atuação|CC Venda Nova": [
    "2026-03-23",
    "2026-06-15",
  ],
  // Bastidores
  "Quem cuida da arte? Diálogos sobre curadoria|Cine Santa Tereza": [
    "2026-03-19",
    "2026-05-28",
  ],
  "A arte da moda: do conceito à criação|Museu da Moda (MUMO)": [
    "2026-03-18",
    "2026-05-06",
  ],
  "Figurino e cenografia: a imagem da cena|CC Jardim Guanabara": [
    "2026-03-05",
    "2026-05-14",
  ],
  "Arena DJ: diversidade na pista|NUFAC": ["2026-05-05", "2026-06-02"],
  "Ateliê de bastidores: performance e figurino|NUFAC": [
    "2026-03-19",
    "2026-05-28",
  ],
  "Cenografia e iluminação: a luz e o espaço|NUFAC": [
    "2026-03-24",
    "2026-06-02",
  ],
  // Gestão
  "Tirando as ideias das gavetas: como elaborar projetos culturais|NUFAC": [
    "2026-03-18",
    "2026-06-24",
  ],
  "Elaboração de projetos culturais: da ideia ao papel|CC Lindeia Regina": [
    "2026-03-05",
    "2026-05-28",
  ],
  "Elaboração de projetos culturais: da ideia ao papel|CC Jardim Guanabara": [
    "2026-03-16",
    "2026-06-08",
  ],
  "Laboratório de produção cultural: práticas e processos|NUFAC": [
    "2026-03-11",
    "2026-06-17",
  ],
  "Criação e produção de eventos culturais|CC Liberalino Alves": [
    "2026-03-24",
    "2026-06-16",
  ],
  "Projetos culturais em literatura: do texto à ação|CC Padre Eustáquio": [
    "2026-03-24",
    "2026-06-16",
  ],
  // Dança extra
  "Áfricas em nós: danças e performatividades negras|Centro de Referência da Dança":
    ["2026-03-09", "2026-06-22"],
  // SPA
  "SPA das Artes: diálogos sobre criação|NUFAC": ["2026-03-04", "2026-06-03"],
  // Ervas e Raizes (specific dates)
  "Ervas e raízes: saberes da terra|CC Venda Nova": [
    "2026-03-14",
    "2026-07-11",
  ],
  // Descobrindo palhaçaria
  "Descobrindo a palhaçaria: o riso e a arte|NUFAC": [
    "2026-03-12",
    "2026-05-21",
  ],
  // Oficina basica circo CRJ
  "Oficina Básica de Circo|Centro de Referência das Juventudes": [
    "2026-03-13",
    "2026-05-29",
  ],
  // Teatro extra
  "Bloco da Lagoa: Cortejo Teatral|CRCP Lagoa do Nado": [
    "2026-03-21",
    "2026-05-30",
  ],
  // Bastidores extra
  "Pesquise como DJ: a preparação antes da pista|NUFAC": [
    "2026-03-10",
    "2026-04-28",
  ],
  // Dança extra
  "Laboratório de dança: Dançar é ser, eis a questão!|NUFAC": [
    "2026-03-18",
    "2026-06-17",
  ],
  // Gestão extra
  "Elaboração de projetos culturais: da ideia ao papel|CC São Bernardo": [
    "2026-03-17",
    "2026-06-09",
  ],
  // EAD — recorrentes corrigidos
  "Gestão financeira de projetos culturais|Online/EAD": [
    "2026-03-17",
    "2026-05-12",
  ],
  "Divulgação de projetos: comunicação e redes|Online/EAD": [
    "2026-04-09",
    "2026-05-28",
  ],
  "Criação e composição: processos musicais|Online/EAD": [
    "2026-05-08",
    "2026-06-19",
  ],
  "Dengos e africanidades: artes e saberes|Online/EAD": [
    "2026-04-29",
    "2026-06-03",
  ],
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
  {
    name: "Grafite é bom demais! Stencil + Lambes + pixo (Arte Urbana)",
    area: "Artes Visuais",
    location: "CC Lindeia Regina",
    schedule: "Terça, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Grafite é bom demais! Stencil + Lambes + pixo (Arte Urbana)",
    area: "Artes Visuais",
    location: "CC Venda Nova",
    schedule: "Sábado, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Arena Ateliê Livre: experimentações artísticas",
    area: "Artes Visuais",
    location: "CC Salgado Filho",
    schedule: "Quarta, 14h30 às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Arena Ateliê Livre: experimentações artísticas (T1)",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Sexta, 14h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Arena Ateliê Livre: experimentações artísticas (T2)",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Terça, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Aventuras de infância: artes visuais para pequenos inventores",
    area: "Artes Visuais",
    location: "CC Vila Fátima",
    schedule: "Sábado, 13h30 às 15h30",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Aventuras de infância: artes visuais para pequenos inventores",
    area: "Artes Visuais",
    location: "CC Vila Santa Rita",
    schedule: "Sábado, 13h às 15h",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Inventar com crianças: construção de máscaras e adereços",
    area: "Artes Visuais",
    location: "CRCP Lagoa do Nado",
    schedule: "Sábado, 09h às 11h",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Desenho de observação: o olhar que desenha",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Terça, 14h30 às 16h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ciclo Expansão - Módulo Objeto (Artes Visuais) T1",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Seg e Qua, 14h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ciclo Expansão - Módulo Objeto (Artes Visuais) T2",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Seg e Qua, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ciclo de Poéticas - Módulo Residência I (T1)",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Ter e Qui, 14h às 17h",
    ageRange: "A partir de 16 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ciclo de Poéticas - Módulo Residência I (T2)",
    area: "Artes Visuais",
    location: "NUFAC",
    schedule: "Seg e Qui, 19h às 22h",
    ageRange: "A partir de 16 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Corpo câmera ação! Práticas audiovisuais",
    area: "Audiovisual",
    location: "CC Alto Vera Cruz",
    schedule: "Sábado, 14h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Vamos brincar de inventar um filme?",
    area: "Audiovisual",
    location: "CC Bairro das Indústrias",
    schedule: "Quinta, 09h30 às 11h",
    ageRange: "10 a 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ver e criar filmes: entre a lente e a imaginação",
    area: "Audiovisual",
    location: "CC Vila Marçola",
    schedule: "Sábado, 14h às 15h30",
    ageRange: "Todas as idades",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Fotografia e outras janelas para ver o mundo",
    area: "Audiovisual",
    location: "CC Zilah Spósito",
    schedule: "Quarta, 16h às 17h30",
    ageRange: "10 a 13 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Documentário e invenção",
    area: "Audiovisual",
    location: "Cine Santa Tereza",
    schedule: "Terça, 14h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Laboratório de práticas livres em audiovisual",
    area: "Audiovisual",
    location: "NUFAC",
    schedule: "Quinta, 09h30 às 12h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Roteiro de curta metragem: da ideia à escrita",
    area: "Audiovisual",
    location: "NUFAC",
    schedule: "Quinta, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Brincadeiras circenses: do riso ao movimento",
    area: "Circo",
    location: "CC São Bernardo",
    schedule: "Sábado, 10h às 11h30",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Brincadeiras circenses: do riso ao movimento",
    area: "Circo",
    location: "CC Salgado Filho",
    schedule: "Quinta, 17h30 às 19h",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Brincadeiras circenses: do riso ao movimento (Infantil)",
    area: "Circo",
    location: "CC Usina de Cultura",
    schedule: "Quinta, 18h às 19h",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Brincadeiras circenses: do riso ao movimento (Juvenil)",
    area: "Circo",
    location: "CC Usina de Cultura",
    schedule: "Segunda, 18h às 19h",
    ageRange: "11 a 13 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Técnicas circenses: o corpo em cena",
    area: "Circo",
    location: "CRCP Lagoa do Nado",
    schedule: "Sábado, 14h30 às 16h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ciclo Básico - Módulo I (Artes Circenses)",
    area: "Circo",
    location: "CC Usina de Cultura",
    schedule: "Seg e Qui, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ciclo Básico - Módulo II (Dança)",
    area: "Dança",
    location: "NUFAC",
    schedule: "Ter e Qui, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ciclo Expansão - Módulo Invenção (Artes Circenses)",
    area: "Circo",
    location: "CC Usina de Cultura",
    schedule: "Seg Qua e Qui, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Encontros para dançar: rimas, passos e movimentos",
    area: "Dança",
    location: "CC Bairro das Indústrias",
    schedule: "Quarta, 17h30 às 19h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Encontros para dançar: rimas, passos e movimentos",
    area: "Dança",
    location: "CC Jardim Guanabara",
    schedule: "Segunda, 09h às 11h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Encontros para dançar: rimas, passos e movimentos",
    area: "Dança",
    location: "CC Liberalino Alves",
    schedule: "Quarta, 09h30 às 11h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Encontros para dançar: rimas, passos e movimentos",
    area: "Dança",
    location: "CC Pampulha",
    schedule: "Terça, 09h30 às 11h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Encontros para dançar: rimas, passos e movimentos",
    area: "Dança",
    location: "CC Vila Marçola",
    schedule: "Quarta, 19h às 20h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Dança para crianças: corpo e criatividade",
    area: "Dança",
    location: "CC Lindeia Regina",
    schedule: "Sábado, 10h30 às 12h",
    ageRange: "6 a 10 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Dança e saberes ancestrais: corpo e memória",
    area: "Dança",
    location: "CC São Bernardo",
    schedule: "Quarta, 09h às 11h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "2 pra lá 1 pra cá: iniciação às danças de salão",
    area: "Dança",
    location: "CC Urucuia",
    schedule: "Quarta, 14h30 às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Tecido e pintado: a arte de transformar panos",
    area: "Design Popular",
    location: "CC Alto Vera Cruz",
    schedule: "Quarta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Tecido e pintado: a arte de transformar panos",
    area: "Design Popular",
    location: "CC Liberalino Alves",
    schedule: "Quinta, 09h às 11h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Costurando ideias: do corte à costura criativa",
    area: "Design Popular",
    location: "CC Bairro das Indústrias",
    schedule: "Quarta, 15h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Costurando ideias: do corte à costura criativa",
    area: "Design Popular",
    location: "CC Jardim Guanabara",
    schedule: "Segunda, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Costurando ideias: do corte à costura criativa",
    area: "Design Popular",
    location: "CC Venda Nova",
    schedule: "Sexta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Bordados e outras delicadezas para enfeitar a vida",
    area: "Design Popular",
    location: "CC Salgado Filho",
    schedule: "Sexta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Bordados e outras delicadezas para enfeitar a vida",
    area: "Design Popular",
    location: "CC Pampulha",
    schedule: "Sexta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ateliê com linhas e agulhas: costura e bordado",
    area: "Design Popular",
    location: "CC Usina de Cultura",
    schedule: "Sexta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ateliê com linhas e agulhas: costura e bordado",
    area: "Design Popular",
    location: "CC Vila Fátima",
    schedule: "Terça, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ateliê com linhas e agulhas: costura e bordado",
    area: "Design Popular",
    location: "CC Urucuia",
    schedule: "Quarta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ateliê com linhas e agulhas: costura e bordado",
    area: "Design Popular",
    location: "CC Zilah Spósito",
    schedule: "Quinta, 15h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ateliê de Design Popular: linhas, tramas e redes",
    area: "Design Popular",
    location: "NUFAC",
    schedule: "Quinta, 14h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Teclados e canções: primeiros passos nas teclas",
    area: "Música",
    location: "CC Alto Vera Cruz",
    schedule: "Sexta, 14h30 às 16h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Oficina de violão: acordes e canções",
    area: "Música",
    location: "CC Liberalino Alves",
    schedule: "Seg e Qua, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Beabá do violão: do zero aos primeiros acordes",
    area: "Música",
    location: "CC Urucuia",
    schedule: "Quinta, 14h30 às 16h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Beabá do violão: do zero aos primeiros acordes",
    area: "Música",
    location: "CC Vila Santa Rita",
    schedule: "Quarta, 14h30 às 16h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Oficina básica de música: ritmos e sons",
    area: "Música",
    location: "CC Zilah Spósito",
    schedule: "Quarta, 09h30 às 11h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Canto: voz, corpo e expressão",
    area: "Música",
    location: "CC São Geraldo",
    schedule: "Terça, 19h30 às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Canto: voz, corpo e expressão (T1)",
    area: "Música",
    location: "NUFAC",
    schedule: "Terça, 14h30 às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Canto: voz, corpo e expressão (T2)",
    area: "Música",
    location: "NUFAC",
    schedule: "Terça, 19h30 às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Canto: voz, corpo e expressão (T3)",
    area: "Música",
    location: "NUFAC",
    schedule: "Sexta, 19h30 às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Roda de choro: prática instrumental",
    area: "Música",
    location: "CC Padre Eustáquio",
    schedule: "Quarta, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Práticas percussivas: ritmos brasileiros",
    area: "Música",
    location: "CC Padre Eustáquio",
    schedule: "Segunda, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Música percussiva de rua",
    area: "Música",
    location: "CC Usina de Cultura",
    schedule: "Terça, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Orquestra Transversal de Belo Horizonte",
    area: "Música",
    location: "NUFAC",
    schedule: "Quarta, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ervas e raízes: saberes da terra",
    area: "Patrimônio",
    location: "CC Venda Nova",
    schedule: "Sábados (ver datas), 09h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Laboratório de africanidades: corpo, ritmo e memória",
    area: "Patrimônio",
    location: "CC São Geraldo",
    schedule: "Sexta, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Laboratório de africanidades: corpo, ritmo e memória",
    area: "Patrimônio",
    location: "NUFAC",
    schedule: "Terça, 17h às 19h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Saberes de povos originários: memória e resistência",
    area: "Patrimônio",
    location: "Bib. Infantil Juvenil",
    schedule: "Sábado, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Folguedos e cortejos populares: música e dança",
    area: "Patrimônio",
    location: "NUFAC",
    schedule: "Terça, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Boi Livre: a tradição que dança",
    area: "Patrimônio",
    location: "NUFAC",
    schedule: "Terça, 17h às 19h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Laboratório de cultura da infância: práticas brincantes",
    area: "Patrimônio",
    location: "NUFAC",
    schedule: "Quinta, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Teatro (Ciclo I - Módulo I)",
    area: "Teatro",
    location: "NUFAC",
    schedule: "Seg e Qua, 14h30 às 17h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Teatro (Ciclo III - Módulo I)",
    area: "Teatro",
    location: "CC São Geraldo",
    schedule: "Ter a Qui, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Oficina de dramaturgia: a escrita para a cena",
    area: "Teatro",
    location: "NUFAC",
    schedule: "Segunda, 19h30 às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Teatro livre: as encantarias sonoras no corpo e no espaço",
    area: "Teatro",
    location: "CC Pampulha",
    schedule: "Segunda, 19h às 20h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Teatro: exercícios criativos de atuação",
    area: "Teatro",
    location: "CC Venda Nova",
    schedule: "Segunda, 19h30 às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Quem cuida da arte? Diálogos sobre curadoria",
    area: "Bastidores",
    location: "Cine Santa Tereza",
    schedule: "Quinta, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "A arte da moda: do conceito à criação",
    area: "Bastidores",
    location: "Museu da Moda (MUMO)",
    schedule: "Quarta, 14h30 às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Figurino e cenografia: a imagem da cena",
    area: "Bastidores",
    location: "CC Jardim Guanabara",
    schedule: "Quinta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Arena DJ: diversidade na pista",
    area: "Bastidores",
    location: "NUFAC",
    schedule: "Terça, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Ateliê de bastidores: performance e figurino",
    area: "Bastidores",
    location: "NUFAC",
    schedule: "Quinta, 15h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Cenografia e iluminação: a luz e o espaço",
    area: "Bastidores",
    location: "NUFAC",
    schedule: "Terça, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Tirando as ideias das gavetas: como elaborar projetos culturais",
    area: "Gestão",
    location: "NUFAC",
    schedule: "Quarta, 09h30 às 12h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Bora conversar sobre financiamento e fomento à cultura?",
    area: "Gestão",
    location: "CC Alto Vera Cruz",
    schedule: "04/mar, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Bora conversar sobre financiamento e fomento à cultura?",
    area: "Gestão",
    location: "CC Salgado Filho",
    schedule: "12/mar, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Bora conversar sobre financiamento e fomento à cultura?",
    area: "Gestão",
    location: "CC Pampulha",
    schedule: "15/jun, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Elaboração de projetos culturais: da ideia ao papel",
    area: "Gestão",
    location: "CC Lindeia Regina",
    schedule: "Quinta, 19h30 às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Elaboração de projetos culturais: da ideia ao papel",
    area: "Gestão",
    location: "CC Jardim Guanabara",
    schedule: "Segunda, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Elaboração de projetos culturais: da ideia ao papel",
    area: "Gestão",
    location: "CC São Bernardo",
    schedule: "Terça, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Laboratório de produção cultural: práticas e processos",
    area: "Gestão",
    location: "NUFAC",
    schedule: "Quarta, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Criação e produção de eventos culturais",
    area: "Gestão",
    location: "CC Liberalino Alves",
    schedule: "Terça, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Projetos culturais em literatura: do texto à ação",
    area: "Gestão",
    location: "CC Padre Eustáquio",
    schedule: "Terça, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "SPA das Artes: diálogos sobre criação",
    area: "Artes",
    location: "NUFAC",
    schedule: "Quarta, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Cinemas Africanos: história e estética",
    area: "Audiovisual",
    location: "Online/EAD",
    schedule: "12 e 14/mai, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Workshop de produção musical: da criação à finalização",
    area: "Bastidores",
    location: "Online/EAD",
    schedule: "04 a 08/mai, 09h30 às 12h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Gestão financeira de projetos culturais",
    area: "Gestão",
    location: "Online/EAD",
    schedule: "Terça, 15h às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Divulgação de projetos: comunicação e redes",
    area: "Gestão",
    location: "Online/EAD",
    schedule: "Quinta, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Criação e composição: processos musicais",
    area: "Música",
    location: "Online/EAD",
    schedule: "Sexta, 14h30 às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Fanzines e artes gráficas: criação e publicação",
    area: "Artes Visuais",
    location: "Online/EAD",
    schedule: "15/abr, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Pipoca aqui! O teatro que ri: oficina de humor e cena",
    area: "Teatro",
    location: "Online/EAD",
    schedule: "17 a 25/mar, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Dengos e africanidades: artes e saberes",
    area: "Patrimônio",
    location: "Online/EAD",
    schedule: "Quarta, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  // --- Cursos adicionados (faltavam no site) ---
  {
    name: "Bloco da Lagoa: Cortejo Teatral",
    area: "Teatro",
    location: "CRCP Lagoa do Nado",
    schedule: "Sábado, 10h às 12h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Pesquise como DJ: a preparação antes da pista",
    area: "Bastidores",
    location: "NUFAC",
    schedule: "Terça, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Práticas de improvisação em dança: Imaginar é preciso",
    area: "Dança",
    location: "NUFAC",
    schedule: "23 a 25/fev, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Laboratório de dança: Dançar é ser, eis a questão!",
    area: "Dança",
    location: "NUFAC",
    schedule: "Quarta, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Áfricas em nós: danças e performatividades negras",
    area: "Dança",
    location: "Centro de Referência da Dança",
    schedule: "Segunda, 19h às 21h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Oficina Básica de Circo",
    area: "Circo",
    location: "Centro de Referência das Juventudes",
    schedule: "Sexta, 14h30 às 17h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Descobrindo a palhaçaria: o riso e a arte",
    area: "Circo",
    location: "NUFAC",
    schedule: "Quinta, 14h às 16h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Encontro para falar de Circo",
    area: "Circo",
    location: "Online/EAD",
    schedule: "09/jun, 19h às 22h",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Conversas dançadas: O que é Dança Contemporânea?",
    area: "Dança",
    location: "Online/EAD",
    schedule: "25/mai, 19h às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
  },
  {
    name: "Experiências de Design Popular e sustentabilidade no carnaval de BH",
    area: "Design Popular",
    location: "Online/EAD",
    schedule: "17/jun, 19h30 às 21h30",
    ageRange: "A partir de 14 anos",
    enrollmentUrl: "https://form.jotform.com/260393432980662",
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
