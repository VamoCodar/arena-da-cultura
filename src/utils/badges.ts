/**
 * Shared badge formatting utilities
 * Used by Astro components (server-side) and client scripts (Calendar, Modal).
 */

/** Format ageRange string into compact badge label */
export function formatAgeBadge(age: string): string {
  if (/todas/i.test(age)) return "Livre";
  const rangeMatch = age.match(/(\d+)\s*a\s*(\d+)/);
  if (rangeMatch) return `${rangeMatch[1]}\u2013${rangeMatch[2]}`;
  const fromMatch = age.match(/partir de\s*(\d+)/);
  if (fromMatch) return `${fromMatch[1]}+`;
  return age;
}

/** Generate age badge HTML string (for client-side innerHTML) */
export function ageBadgeHTML(ageRange: string): string {
  const label = formatAgeBadge(ageRange);
  return `<span class="age-badge" title="${ageRange}"><span class="material-symbols-outlined age-badge-icon">face</span> ${label}</span>`;
}

/** Generate area badge HTML string (for client-side innerHTML) */
export function areaBadgeHTML(
  area: string,
  colors: { bg: string; text: string },
  icon: string,
): string {
  return `<span class="badge" style="background:${colors.bg};color:${colors.text}"><span class="badge-icon material-symbols-outlined">${icon}</span> ${area}</span>`;
}
