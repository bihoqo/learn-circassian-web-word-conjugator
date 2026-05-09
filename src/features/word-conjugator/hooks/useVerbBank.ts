import { useEffect, useMemo, useState } from "react";
import { CONJUGATOR_VERBS } from "../consts/verbs";
import { filterVerbs } from "../lib/filter";
import { useDebounce } from "./useDebounce";
import type { IVerbTypeFilter } from "../store/useWordConjugatorStore";

const PAGE_SIZE = 24;

/**
 * Client-side paginated, filterable view over the static verb pool.
 * Resets visible count when filters change so the user sees the top of the
 * filtered list each time.
 */
export function useVerbBank(query: string, typeFilter: IVerbTypeFilter) {
  const debouncedQuery = useDebounce(query);

  const filtered = useMemo(
    () => filterVerbs(CONJUGATOR_VERBS, debouncedQuery, typeFilter),
    [debouncedQuery, typeFilter],
  );

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [debouncedQuery, typeFilter]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const loadMore = () => setVisibleCount((n) => n + PAGE_SIZE);

  return {
    verbs: visible,
    total: filtered.length,
    hasMore,
    loadMore,
    isPending: query !== debouncedQuery,
  };
}
