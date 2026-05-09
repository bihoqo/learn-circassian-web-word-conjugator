export const IVerbType = {
  MonovalentStaticIntransitive: "monovalent-static-intransitive",
  BivalentStaticIntransitive: "bivalent-static-intransitive",
  MonovalentDynamicIntransitive: "monovalent-dynamic-intransitive",
  BivalentDynamicIntransitive: "bivalent-dynamic-intransitive",
  BivalentDynamicTransitive: "bivalent-dynamic-transitive",
  TrivalentDynamicTransitive: "trivalent-dynamic-transitive",
} as const;

export type IVerbType = (typeof IVerbType)[keyof typeof IVerbType];

export interface VerbTypeInfo {
  label: string;
  shortLabel: string;
}

export const VERB_TYPES: Record<IVerbType, VerbTypeInfo> = {
  [IVerbType.MonovalentStaticIntransitive]: {
    label: "Monovalent static intransitive",
    shortLabel: "Mono · Static · Intr",
  },
  [IVerbType.BivalentStaticIntransitive]: {
    label: "Bivalent static intransitive",
    shortLabel: "Bi · Static · Intr",
  },
  [IVerbType.MonovalentDynamicIntransitive]: {
    label: "Monovalent dynamic intransitive",
    shortLabel: "Mono · Dyn · Intr",
  },
  [IVerbType.BivalentDynamicIntransitive]: {
    label: "Bivalent dynamic intransitive",
    shortLabel: "Bi · Dyn · Intr",
  },
  [IVerbType.BivalentDynamicTransitive]: {
    label: "Bivalent dynamic transitive",
    shortLabel: "Bi · Dyn · Trans",
  },
  [IVerbType.TrivalentDynamicTransitive]: {
    label: "Trivalent dynamic transitive",
    shortLabel: "Tri · Dyn · Trans",
  },
};

export const VERB_TYPE_OPTIONS: { value: IVerbType; label: string }[] = (
  Object.entries(VERB_TYPES) as [IVerbType, VerbTypeInfo][]
).map(([value, info]) => ({ value, label: info.label }));
