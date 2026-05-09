import type { IConjugatorVerbEntry, IDialect } from "../types";

/**
 * URL slug for a verb entry. Prefers the West infinitive; falls back to East
 * when a verb has no West form. The picked dialect is carried as a query param
 * so the detail page can open in the right dialect without breaking deep-links
 * from the other side.
 */
export function verbSlug(verb: IConjugatorVerbEntry): string {
  const key = verb.cir.west?.infinitive ?? verb.cir.east?.infinitive ?? "";
  return encodeURIComponent(key);
}

export function verbDetailHref(verb: IConjugatorVerbEntry, dialect: IDialect): string {
  return `/word-conjugator/verbs/${verbSlug(verb)}?dialect=${dialect}`;
}

/** Inverse of verbSlug — used by the detail page to look up the entry. */
export function decodeVerbSlug(slug: string): string {
  return decodeURIComponent(slug);
}
