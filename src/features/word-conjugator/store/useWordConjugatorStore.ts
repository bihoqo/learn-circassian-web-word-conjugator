import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { IConjugatorMode, IDialect } from "../types";
import type { IVerbType } from "../consts/verb-types";

export type IVerbTypeFilter = IVerbType | "all";

interface IWordConjugatorState {
  mode: IConjugatorMode;
  setMode: (mode: IConjugatorMode) => void;

  dialect: IDialect;
  setDialect: (dialect: IDialect) => void;

  verbTypeFilter: IVerbTypeFilter;
  setVerbTypeFilter: (filter: IVerbTypeFilter) => void;
}

export const useWordConjugatorStore = create<IWordConjugatorState>()(
  persist(
    (set) => ({
      mode: "verbs",
      setMode: (mode) => set({ mode }),

      dialect: "west",
      setDialect: (dialect) => set({ dialect }),

      verbTypeFilter: "all",
      setVerbTypeFilter: (verbTypeFilter) => set({ verbTypeFilter }),
    }),
    {
      name: "word-conjugator-settings",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        mode: state.mode,
        dialect: state.dialect,
        verbTypeFilter: state.verbTypeFilter,
      }),
    },
  ),
);
