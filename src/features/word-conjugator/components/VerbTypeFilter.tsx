import { VERB_TYPE_OPTIONS } from "../consts/verb-types";
import type { IVerbTypeFilter } from "../store/useWordConjugatorStore";

interface IVerbTypeFilterProps {
  value: IVerbTypeFilter;
  onChange: (value: IVerbTypeFilter) => void;
}

export function VerbTypeFilter({ value, onChange }: IVerbTypeFilterProps) {
  return (
    <label className="flex items-center gap-2">
      <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Type:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as IVerbTypeFilter)}
        className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm transition-colors outline-none focus:border-rose-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-rose-400"
      >
        <option value="all">All Types</option>
        {VERB_TYPE_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
