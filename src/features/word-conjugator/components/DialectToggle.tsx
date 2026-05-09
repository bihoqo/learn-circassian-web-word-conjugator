import { cn } from "@/lib/utils";
import type { IDialect } from "../types";

const OPTIONS: { value: IDialect; label: string }[] = [
  { value: "west", label: "West" },
  { value: "east", label: "East" },
];

interface IDialectToggleProps {
  value: IDialect;
  onChange: (dialect: IDialect) => void;
}

export function DialectToggle({ value, onChange }: IDialectToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-zinc-200 bg-white p-1 dark:border-zinc-700 dark:bg-zinc-900">
      {OPTIONS.map((opt) => {
        const isActive = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={cn(
              "cursor-pointer rounded-full px-4 py-1.5 text-sm font-bold transition-all",
              isActive
                ? "bg-rose-600 text-white shadow-sm"
                : "text-zinc-600 hover:text-rose-600 dark:text-zinc-400 dark:hover:text-rose-400",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
