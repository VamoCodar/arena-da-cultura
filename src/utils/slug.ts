// Shared slug logic — used by the /curso/[slug] share pages (build time)
// and by CourseModal (client) so both sides always agree on the URL.

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// name alone is NOT unique (e.g. "Brincadeiras Circenses" exists in 3
// locations) — the pair name|location is validated unique in courses.ts.
export function courseSlug(course: { name: string; location: string }): string {
  return slugify(`${course.name} ${course.location}`);
}
