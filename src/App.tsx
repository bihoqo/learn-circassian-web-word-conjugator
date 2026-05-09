import { Navigate, Route, Routes } from "react-router-dom";
import WordConjugatorNavbar from "@/features/word-conjugator/components/WordConjugatorNavbar";
import { WordConjugatorPage } from "@/features/word-conjugator/pages/WordConjugatorPage";
import { VerbConjugatorPage } from "@/features/word-conjugator/pages/VerbConjugatorPage";
import { useApplyTheme } from "@/shared/store/useThemeStore";

export function App() {
  useApplyTheme();
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <WordConjugatorNavbar />
      <Routes>
        <Route path="/" element={<Navigate to="/word-conjugator" replace />} />
        <Route path="/word-conjugator" element={<WordConjugatorPage />} />
        <Route path="/word-conjugator/verbs/:slug" element={<VerbConjugatorPage />} />
        <Route path="*" element={<Navigate to="/word-conjugator" replace />} />
      </Routes>
    </div>
  );
}
