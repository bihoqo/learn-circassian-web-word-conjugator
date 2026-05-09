import { cn } from "@/lib/utils";
import type { IConjugatorMode } from "../types";

const TABS: { id: IConjugatorMode; label: string; disabled?: boolean }[] = [
  { id: "verbs", label: "Verbs" },
  { id: "nouns", label: "Nouns", disabled: true },
  { id: "pronouns", label: "Pronouns", disabled: true },
];

interface IModeTabsProps {
  active: IConjugatorMode;
  onChange: (mode: IConjugatorMode) => void;
}

export function ModeTabs({ active, onChange }: IModeTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {TABS.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onChange(tab.id)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-bold transition-all",
              tab.disabled
                ? "cursor-not-allowed border border-zinc-200 bg-zinc-100 text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-600"
                : isActive
                  ? "cursor-pointer bg-rose-600 text-white shadow-lg shadow-rose-500/30"
                  : "cursor-pointer border border-zinc-200 bg-white text-zinc-600 hover:border-rose-300 hover:text-rose-600 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-rose-700 dark:hover:text-rose-400",
            )}
          >
            {tab.label}
            {tab.disabled && (
              <span className="ml-2 rounded-full bg-zinc-200 px-2 py-0.5 text-[10px] font-black tracking-wider text-zinc-500 uppercase dark:bg-zinc-700 dark:text-zinc-400">
                Soon
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
