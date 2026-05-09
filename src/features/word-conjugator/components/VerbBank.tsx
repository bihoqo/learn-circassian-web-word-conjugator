import { useState } from "react";
import { useWordConjugatorStore } from "../store/useWordConjugatorStore";
import { useVerbBank } from "../hooks/useVerbBank";
import { VerbCard } from "./VerbCard";
import { VerbSearchInput } from "./VerbSearchInput";
import { VerbTypeFilter } from "./VerbTypeFilter";
import { DialectToggle } from "./DialectToggle";

export function VerbBank() {
  const { dialect, setDialect, verbTypeFilter, setVerbTypeFilter } = useWordConjugatorStore();
  const [query, setQuery] = useState("");
  const { verbs, total, hasMore, loadMore } = useVerbBank(query, verbTypeFilter);

  return (
    <div className="space-y-5">
      {/* Filters */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full max-w-xl">
          <VerbSearchInput value={query} onChange={setQuery} />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <VerbTypeFilter value={verbTypeFilter} onChange={setVerbTypeFilter} />
          <DialectToggle value={dialect} onChange={setDialect} />
        </div>
      </div>

      {/* Result count */}
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {total === 0 ? "No verbs match" : `${total} verb${total === 1 ? "" : "s"}`}
      </p>

      {/* Grid */}
      {verbs.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {verbs.map((verb) => (
            <VerbCard
              key={`${verb.cir.west?.infinitive ?? verb.cir.east?.infinitive}-${verb.cir.type}`}
              verb={verb}
              dialect={dialect}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white/50 p-10 text-center dark:border-zinc-700 dark:bg-zinc-900/50">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Try clearing the search or switching the type filter.
          </p>
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={loadMore}
            className="cursor-pointer rounded-full border border-rose-200 bg-white px-6 py-2 text-sm font-bold text-rose-600 transition-all hover:border-rose-400 hover:bg-rose-50 dark:border-rose-900 dark:bg-zinc-900 dark:text-rose-400 dark:hover:bg-rose-950/30"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
