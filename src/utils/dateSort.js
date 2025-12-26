const normalizeText = (value) =>
  String(value ?? '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const PT_BR_MONTHS = {
  janeiro: 1,
  jan: 1,
  fevereiro: 2,
  fev: 2,
  marco: 3,
  mar: 3,
  abril: 4,
  abr: 4,
  maio: 5,
  junho: 6,
  jun: 6,
  julho: 7,
  jul: 7,
  agosto: 8,
  ago: 8,
  setembro: 9,
  set: 9,
  outubro: 10,
  out: 10,
  novembro: 11,
  nov: 11,
  dezembro: 12,
  dez: 12,
};

const daysInMonth = (year, month1Based) => {
  const monthIndex = month1Based - 1;
  return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
};

const normalizeTwoDigitYear = (yy) => {
  // Heuristic pivot: 00-69 => 2000-2069, 70-99 => 1970-1999
  const n = Number(yy);
  if (!Number.isFinite(n)) return null;
  if (n < 0 || n > 99) return null;
  return n <= 69 ? 2000 + n : 1900 + n;
};

const chronoKeyFromParts = (year, month1Based, day) => {
  const y = Number(year);
  const m = Number(month1Based);
  const d = Number(day);
  if (!Number.isFinite(y) || !Number.isFinite(m) || !Number.isFinite(d)) return Number.POSITIVE_INFINITY;
  if (m < 1 || m > 12) return Number.POSITIVE_INFINITY;
  if (d < 1 || d > 31) return Number.POSITIVE_INFINITY;

  const dim = daysInMonth(y, m);
  if (d > dim) return Number.POSITIVE_INFINITY;

  const key = Date.UTC(y, m - 1, d);
  // Additional validation: ensure UTC parts match (catches NaN/overflow)
  const dt = new Date(key);
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== m - 1 || dt.getUTCDate() !== d) {
    return Number.POSITIVE_INFINITY;
  }
  return key;
};

const parseIsoYmd = (text) => {
  const match = text.match(/^\s*(\d{4})[\/-](\d{1,2})[\/-](\d{1,2})/);
  if (!match) return null;
  return { year: Number(match[1]), month: Number(match[2]), day: Number(match[3]) };
};

const parseDmy = (text, currentYear) => {
  const match = text.match(/^\s*(\d{1,2})[\/-](\d{1,2})(?:[\/-](\d{2,4}))?\s*$/);
  if (!match) return null;

  const day = Number(match[1]);
  const month = Number(match[2]);
  const yearRaw = match[3];

  let year = currentYear;
  if (yearRaw != null) {
    if (yearRaw.length === 2) {
      const normalized = normalizeTwoDigitYear(yearRaw);
      if (normalized == null) return null;
      year = normalized;
    } else {
      year = Number(yearRaw);
    }
  }

  return { year, month, day };
};

const parsePtBrLong = (text, currentYear) => {
  // Examples: "10 de janeiro de 2026", "10 de janeiro", "1º de março de 26"
  const normalized = normalizeText(text).replace(/(º|ª)/g, '');

  const withYear = normalized.match(/^\s*(\d{1,2})\s+de\s+([a-z]+)\s+de\s+(\d{2,4})\s*$/);
  if (withYear) {
    const day = Number(withYear[1]);
    const month = PT_BR_MONTHS[withYear[2]];
    const yearRaw = withYear[3];

    if (!month) return null;

    let year;
    if (yearRaw.length === 2) {
      year = normalizeTwoDigitYear(yearRaw);
      if (year == null) return null;
    } else {
      year = Number(yearRaw);
    }

    return { year, month, day };
  }

  const noYear = normalized.match(/^\s*(\d{1,2})\s+de\s+([a-z]+)\s*$/);
  if (noYear) {
    const day = Number(noYear[1]);
    const month = PT_BR_MONTHS[noYear[2]];
    if (!month) return null;
    return { year: currentYear, month, day };
  }

  return null;
};

const isDayList = (text) => /^\s*\d{1,2}(?:-\d{1,2}){1,}\s*$/.test(text);

const parseDayList = (text, today) => {
  if (!isDayList(text)) return null;
  const parts = String(text)
    .trim()
    .split('-')
    .map((p) => Number(p))
    .filter((n) => Number.isFinite(n));

  if (parts.length < 2) return null;
  const minDay = Math.min(...parts);
  if (!Number.isFinite(minDay) || minDay < 1 || minDay > 31) return null;

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  return { year, month, day: minDay };
};

const parseSingleDateString = (raw, today) => {
  const currentYear = today.getFullYear();
  const text = String(raw ?? '').trim();
  if (!text) return Number.POSITIVE_INFINITY;

  // 1) yyyy-mm-dd / yyyy/mm/dd
  const iso = parseIsoYmd(text);
  if (iso) return chronoKeyFromParts(iso.year, iso.month, iso.day);

  // 2) "10 de janeiro de 2026" (pt-BR)
  const pt = parsePtBrLong(text, currentYear);
  if (pt) return chronoKeyFromParts(pt.year, pt.month, pt.day);

  // 3) dd/mm/yyyy or dd-mm-yy, or dd/mm (assume current year)
  const dmy = parseDmy(text, currentYear);
  if (dmy) return chronoKeyFromParts(dmy.year, dmy.month, dmy.day);

  // 4) list of days "01-10-15-20" (fallback: smallest day in current month/year)
  const dayList = parseDayList(text, today);
  if (dayList) return chronoKeyFromParts(dayList.year, dayList.month, dayList.day);

  // 5) last-resort: if JS can parse it reliably (mostly ISO-like)
  // Guard: only attempt when there's a clear delimiter, to avoid locale surprises.
  if (/[\/-]/.test(text) || /\bde\b/.test(normalizeText(text))) {
    const parsed = new Date(text);
    if (!Number.isNaN(parsed.getTime())) return parsed.getTime();
  }

  return Number.POSITIVE_INFINITY;
};

const extractCandidateDateStrings = (raw) => {
  const text = String(raw ?? '');
  const candidates = [];

  // yyyy-mm-dd / yyyy/mm/dd
  for (const m of text.matchAll(/\b\d{4}[\/-]\d{1,2}[\/-]\d{1,2}\b/g)) {
    candidates.push(m[0]);
  }

  // dd/mm/yyyy, dd-mm-yy, dd/mm
  for (const m of text.matchAll(/\b\d{1,2}[\/-]\d{1,2}(?:[\/-]\d{2,4})?\b/g)) {
    candidates.push(m[0]);
  }

  // "10 de janeiro de 2026" or "10 de janeiro"
  for (const m of text.matchAll(/\b\d{1,2}(?:º|ª)?\s+de\s+[A-Za-zÀ-ÿçÇ]+(?:\s+de\s+\d{2,4})?\b/gi)) {
    candidates.push(m[0]);
  }

  // day list "01-10-15-20" (only if it looks like exclusively days)
  if (isDayList(text)) candidates.push(text.trim());

  return candidates;
};

export const chronoKey = (value, { today = new Date() } = {}) => {
  if (value == null) return Number.POSITIVE_INFINITY;

  if (value instanceof Date) {
    const t = value.getTime();
    return Number.isFinite(t) ? t : Number.POSITIVE_INFINITY;
  }

  if (typeof value === 'number') {
    if (!Number.isFinite(value)) return Number.POSITIVE_INFINITY;
    // Heuristic: seconds vs milliseconds
    return value < 1e12 ? value * 1000 : value;
  }

  if (Array.isArray(value)) {
    let best = Number.POSITIVE_INFINITY;
    for (const v of value) {
      const k = chronoKey(v, { today });
      if (k < best) best = k;
    }
    return best;
  }

  if (typeof value === 'object') {
    // Common patterns: { startDate: "..." }, { inicio: "..." }, { data: "..." }
    const possible =
      value?.dateRange ??
      value?.datas ??
      value?.data ??
      value?.date ??
      value?.periodo ??
      value?.inicio ??
      value?.startDate ??
      value?.dataInicio ??
      value?.data_inicial;

    if (possible != null && possible !== value) return chronoKey(possible, { today });
  }

  const text = String(value).trim();
  if (!text) return Number.POSITIVE_INFINITY;

  // If it's a range or contains multiple dates, pick the earliest parsable one.
  const candidates = extractCandidateDateStrings(text);
  let best = Number.POSITIVE_INFINITY;
  for (const c of candidates) {
    const k = parseSingleDateString(c, today);
    if (k < best) best = k;
  }

  if (best !== Number.POSITIVE_INFINITY) return best;

  // Otherwise try parsing the whole string
  return parseSingleDateString(text, today);
};

export const sortByChrono = (items, getValue = (x) => x) => {
  const list = Array.isArray(items) ? items : [];

  const withKeys = list.map((item, index) => ({
    item,
    index,
    key: chronoKey(getValue(item)),
  }));

  withKeys.sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
    // stable tie-breaker
    return a.index - b.index;
  });

  return withKeys.map((x) => x.item);
};
