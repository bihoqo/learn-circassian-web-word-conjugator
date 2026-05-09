import type { IVerbType } from "../consts/verb-types";

export type IDialect = "west" | "east";

export type IConjugatorMode = "verbs" | "nouns" | "pronouns";

export interface IConjugatorVerbEntry {
  cir: {
    west: {
      infinitive: string;
      categorical_future: string;
    } | null;
    east: {
      infinitive: string;
      categorical_future: string;
    } | null;
    type: IVerbType;
  };
  en: {
    infinitive: string;
    v1: string;
    v2: string;
    v3: string;
  };
}
