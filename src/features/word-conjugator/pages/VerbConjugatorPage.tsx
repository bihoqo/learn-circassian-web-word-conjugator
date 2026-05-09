import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, Wand2 } from "lucide-react";
import { CONJUGATOR_VERBS } from "../consts/verbs";
import { decodeVerbSlug } from "../lib/verb-paths";
import { ConjugatedVerb } from "../classes/ConjugatedVerb";
import { VERB_TYPES } from "../consts/verb-types";
import type { IDialect } from "../types";

export function VerbConjugatorPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const dialect: IDialect = searchParams.get("dialect") === "east" ? "east" : "west";

  const decoded = decodeVerbSlug(slug);
  const entry = CONJUGATOR_VERBS.find(
    (v) => v.cir.west?.infinitive === decoded || v.cir.east?.infinitive === decoded,
  );

  if (!entry) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-lg font-bold text-zinc-500 dark:text-zinc-400">Verb not found.</p>
        <Link
          to="/word-conjugator"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-600 hover:underline dark:text-rose-400"
        >
          <ArrowLeft size={16} />
          Back to verbs
        </Link>
      </div>
    );
  }

  const verb = new ConjugatedVerb(entry);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/word-conjugator"
        className="inline-flex items-center gap-2 text-sm font-bold text-rose-600 hover:underline dark:text-rose-400"
      >
        <ArrowLeft size={16} />
        Back to verbs
      </Link>

      <div className="mt-6 flex items-center gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-lg shadow-rose-500/30">
          <Wand2 size={28} />
        </div>
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-zinc-900 sm:text-6xl dark:text-zinc-50">
            {verb.infinitive(dialect) ?? verb.infinitive(dialect === "west" ? "east" : "west") ?? "—"}
          </h1>
          <p className="mt-1 text-lg font-medium text-zinc-500 dark:text-zinc-400">
            {verb.meaningEn()}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Type" value={VERB_TYPES[verb.type].label} />
          <Field label="Dialect" value={dialect === "west" ? "West Circassian" : "East Circassian"} />
          <Field label="Infinitive (West)" value={verb.cir.west?.infinitive ?? "—"} />
          <Field label="Infinitive (East)" value={verb.cir.east?.infinitive ?? "—"} />
          <Field label="Categorical future (West)" value={verb.cir.west?.categorical_future ?? "—"} />
          <Field label="Categorical future (East)" value={verb.cir.east?.categorical_future ?? "—"} />
          <Field label="V1" value={verb.en.v1} />
          <Field label="V2" value={verb.en.v2} />
          <Field label="V3" value={verb.en.v3} />
        </dl>

        <p className="mt-8 rounded-xl border border-dashed border-zinc-300 p-4 text-center text-sm font-medium text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          Morphology slots will be added here in the next iteration.
        </p>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-bold tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
        {label}
      </dt>
      <dd className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-100">{value}</dd>
    </div>
  );
}
