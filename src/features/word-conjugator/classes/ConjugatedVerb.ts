import type { IDialect, IConjugatorVerbEntry } from "../types";

export class ConjugatedVerb {
  readonly cir: IConjugatorVerbEntry["cir"];
  readonly en: IConjugatorVerbEntry["en"];

  constructor(init: IConjugatorVerbEntry) {
    this.cir = init.cir;
    this.en = init.en;
  }

  get type() {
    return this.cir.type;
  }

  infinitive(dialect: IDialect): string | null {
    return this.cir[dialect]?.infinitive ?? null;
  }

  categoricalFuture(dialect: IDialect): string | null {
    return this.cir[dialect]?.categorical_future ?? null;
  }

  meaningEn(): string {
    return this.en.infinitive;
  }
}
