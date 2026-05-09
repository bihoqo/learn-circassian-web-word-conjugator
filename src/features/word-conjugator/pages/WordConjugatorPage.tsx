import { Wand2 } from "lucide-react";
import { useWordConjugatorStore } from "../store/useWordConjugatorStore";
import { ModeTabs } from "../components/ModeTabs";
import { VerbBank } from "../components/VerbBank";

export function WordConjugatorPage() {
  const { mode, setMode } = useWordConjugatorStore();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-10 flex items-center gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-lg shadow-rose-500/30">
          <Wand2 size={28} />
        </div>
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-rose-600 sm:text-7xl dark:text-rose-400">
            CONJUGATOR
          </h1>
          <p className="mt-1 leading-relaxed font-medium text-zinc-500 dark:text-zinc-400">
            Pick a word, then build inflected forms by selecting morphology slots.
          </p>
        </div>
      </div>

      {/* Mode tabs */}
      <div className="mb-8">
        <ModeTabs active={mode} onChange={setMode} />
      </div>

      {/* Active mode panel */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
        {mode === "verbs" && <VerbBank />}
        {(mode === "nouns" || mode === "pronouns") && (
          <div className="py-12 text-center text-sm font-medium text-zinc-500 dark:text-zinc-400">
            This section is coming soon.
          </div>
        )}
      </div>
    </div>
  );
}
