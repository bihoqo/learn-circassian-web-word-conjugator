import type { IConjugatorVerbEntry } from "../types";
import type { IVerbTypeFilter } from "../store/useWordConjugatorStore";

function verbMatchesQuery(verb: IConjugatorVerbEntry, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  const haystack = [
    verb.cir.west?.infinitive,
    verb.cir.west?.categorical_future,
    verb.cir.east?.infinitive,
    verb.cir.east?.categorical_future,
    verb.en.infinitive,
    verb.en.v1,
    verb.en.v2,
    verb.en.v3,
  ];
  return haystack.some((s) => s?.toLowerCase().includes(q));
}

export function filterVerbs(
  verbs: IConjugatorVerbEntry[],
  query: string,
  typeFilter: IVerbTypeFilter,
): IConjugatorVerbEntry[] {
  return verbs.filter((verb) => {
    if (typeFilter !== "all" && verb.cir.type !== typeFilter) return false;
    return verbMatchesQuery(verb, query);
  });
}
