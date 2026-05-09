import { Search, X } from "lucide-react";

interface IVerbSearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function VerbSearchInput({ value, onChange }: IVerbSearchInputProps) {
  return (
    <div className="relative w-full">
      <Search size={16} className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search verbs (Circassian or English)…"
        className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pr-8 pl-9 text-sm transition-all outline-none placeholder:text-zinc-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-rose-400"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer rounded p-0.5 text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-200"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
