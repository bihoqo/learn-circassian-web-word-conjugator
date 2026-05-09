import type { IConjugatorVerbEntry } from "../types";
import { IVerbType } from "./verb-types";

/**
 * Seed pool for the verb picker.
 *
 * Each dialect block is independently nullable so a verb can exist in only one
 * dialect. For non-transitive verbs `infinitive` and `categorical_future` are
 * identical; for bivalent/trivalent transitive verbs the infinitive omits the
 * leading pronoun cluster the categorical-future form carries
 * (e.g. ылъэгъун → лъэгъун, жриӏэн → жыӏэн).
 */
export const CONJUGATOR_VERBS: IConjugatorVerbEntry[] = [
  // ── Monovalent static intransitive ──────────────────────────────────────
  {
    cir: {
      west: { infinitive: "дэхэн", categorical_future: "дэхэн" },
      east: { infinitive: "дахэн", categorical_future: "дахэн" },
      type: IVerbType.MonovalentStaticIntransitive,
    },
    en: {
      infinitive: "to be beautiful",
      v1: "be beautiful",
      v2: "was beautiful",
      v3: "been beautiful",
    },
  },
  {
    cir: {
      west: { infinitive: "ӏушын", categorical_future: "ӏушын" },
      east: { infinitive: "ӏущын", categorical_future: "ӏущын" },
      type: IVerbType.MonovalentStaticIntransitive,
    },
    en: {
      infinitive: "to be smart",
      v1: "be smart",
      v2: "was smart",
      v3: "been smart",
    },
  },
  {
    cir: {
      west: { infinitive: "плъыжьын", categorical_future: "плъыжьын" },
      east: { infinitive: "плъыжьын", categorical_future: "плъыжьын" },
      type: IVerbType.MonovalentStaticIntransitive,
    },
    en: {
      infinitive: "to be red",
      v1: "be red",
      v2: "was red",
      v3: "been red",
    },
  },

  // ── Bivalent static intransitive ────────────────────────────────────────
  {
    cir: {
      west: { infinitive: "ефэн", categorical_future: "ефэн" },
      east: { infinitive: "ефэн", categorical_future: "ефэн" },
      type: IVerbType.BivalentStaticIntransitive,
    },
    en: {
      infinitive: "to drink (sth)",
      v1: "drink (sth)",
      v2: "drank",
      v3: "drunk",
    },
  },
  {
    cir: {
      west: { infinitive: "еплъын", categorical_future: "еплъын" },
      east: { infinitive: "еплъын", categorical_future: "еплъын" },
      type: IVerbType.BivalentStaticIntransitive,
    },
    en: {
      infinitive: "to look at",
      v1: "look at",
      v2: "looked at",
      v3: "looked at",
    },
  },

  // ── Monovalent dynamic intransitive ─────────────────────────────────────
  {
    cir: {
      west: { infinitive: "тхэн", categorical_future: "тхэн" },
      east: { infinitive: "тхэн", categorical_future: "тхэн" },
      type: IVerbType.MonovalentDynamicIntransitive,
    },
    en: {
      infinitive: "to write",
      v1: "write",
      v2: "wrote",
      v3: "written",
    },
  },
  {
    cir: {
      west: { infinitive: "кӏон", categorical_future: "кӏон" },
      east: { infinitive: "кӏуэн", categorical_future: "кӏуэн" },
      type: IVerbType.MonovalentDynamicIntransitive,
    },
    en: {
      infinitive: "to go",
      v1: "go",
      v2: "went",
      v3: "gone",
    },
  },
  {
    cir: {
      west: { infinitive: "чъэн", categorical_future: "чъэн" },
      east: { infinitive: "жэн", categorical_future: "жэн" },
      type: IVerbType.MonovalentDynamicIntransitive,
    },
    en: {
      infinitive: "to run",
      v1: "run",
      v2: "ran",
      v3: "run",
    },
  },
  {
    cir: {
      west: { infinitive: "къэшъон", categorical_future: "къэшъон" },
      east: { infinitive: "къэфэн", categorical_future: "къэфэн" },
      type: IVerbType.MonovalentDynamicIntransitive,
    },
    en: {
      infinitive: "to dance",
      v1: "dance",
      v2: "danced",
      v3: "danced",
    },
  },

  // ── Bivalent dynamic intransitive ───────────────────────────────────────
  {
    cir: {
      west: { infinitive: "еджэн", categorical_future: "еджэн" },
      east: { infinitive: "еджэн", categorical_future: "еджэн" },
      type: IVerbType.BivalentDynamicIntransitive,
    },
    en: {
      infinitive: "to read / to study",
      v1: "read / study",
      v2: "read / studied",
      v3: "read / studied",
    },
  },
  {
    cir: {
      west: { infinitive: "еуэн", categorical_future: "еуэн" },
      east: { infinitive: "еуэн", categorical_future: "еуэн" },
      type: IVerbType.BivalentDynamicIntransitive,
    },
    en: {
      infinitive: "to hit",
      v1: "hit",
      v2: "hit",
      v3: "hit",
    },
  },

  // ── Bivalent dynamic transitive ─────────────────────────────────────────
  {
    cir: {
      west: { infinitive: "лъэгъун", categorical_future: "ылъэгъун" },
      east: { infinitive: "лъагъун", categorical_future: "илъагъун" },
      type: IVerbType.BivalentDynamicTransitive,
    },
    en: {
      infinitive: "to see",
      v1: "see",
      v2: "saw",
      v3: "seen",
    },
  },
  {
    cir: {
      west: { infinitive: "штэн", categorical_future: "ыштэн" },
      east: { infinitive: "штэн", categorical_future: "иштэн" },
      type: IVerbType.BivalentDynamicTransitive,
    },
    en: {
      infinitive: "to take",
      v1: "take",
      v2: "took",
      v3: "taken",
    },
  },
  {
    cir: {
      west: { infinitive: "щэфын", categorical_future: "ыщэфын" },
      east: { infinitive: "щэхун", categorical_future: "ищэхун" },
      type: IVerbType.BivalentDynamicTransitive,
    },
    en: {
      infinitive: "to buy",
      v1: "buy",
      v2: "bought",
      v3: "bought",
    },
  },
  {
    cir: {
      west: { infinitive: "шхын", categorical_future: "ышхын" },
      east: { infinitive: "шхын", categorical_future: "ишхын" },
      type: IVerbType.BivalentDynamicTransitive,
    },
    en: {
      infinitive: "to eat",
      v1: "eat",
      v2: "ate",
      v3: "eaten",
    },
  },

  // ── Trivalent dynamic transitive ────────────────────────────────────────
  {
    cir: {
      west: { infinitive: "тын", categorical_future: "ритын" },
      east: { infinitive: "тын", categorical_future: "ритын" },
      type: IVerbType.TrivalentDynamicTransitive,
    },
    en: {
      infinitive: "to give (to someone)",
      v1: "give (to someone)",
      v2: "gave",
      v3: "given",
    },
  },
  {
    cir: {
      west: { infinitive: "ӏон", categorical_future: "риӏон" },
      east: { infinitive: "жыӏэн", categorical_future: "жриӏэн" },
      type: IVerbType.TrivalentDynamicTransitive,
    },
    en: {
      infinitive: "to say (to someone)",
      v1: "say (to someone)",
      v2: "said",
      v3: "said",
    },
  },
];
