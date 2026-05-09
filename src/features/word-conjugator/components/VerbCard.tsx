import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { IConjugatorVerbEntry, IDialect } from "../types";
import { VERB_TYPES } from "../consts/verb-types";
import { verbDetailHref } from "../lib/verb-paths";

interface IVerbCardProps {
  verb: IConjugatorVerbEntry;
  dialect: IDialect;
}

export function VerbCard({ verb, dialect }: IVerbCardProps) {
  const other: IDialect = dialect === "west" ? "east" : "west";
  const infinitive = verb.cir[dialect]?.infinitive ?? verb.cir[other]?.infinitive ?? "—";
  return (
    <Link
      to={verbDetailHref(verb, dialect)}
      className="group flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-rose-400 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-rose-700"
    >
      <div>
        <div className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          {infinitive}
        </div>
        <div className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {verb.en.infinitive}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-bold tracking-wide text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">
          {VERB_TYPES[verb.cir.type].shortLabel}
        </span>
        <ArrowRight
          size={16}
          className="text-zinc-300 transition-all group-hover:translate-x-1 group-hover:text-rose-500 dark:text-zinc-700 dark:group-hover:text-rose-400"
        />
      </div>
    </Link>
  );
}
