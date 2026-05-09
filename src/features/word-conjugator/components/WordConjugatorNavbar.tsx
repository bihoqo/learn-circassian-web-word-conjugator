import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Wand2, Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/shared/store/useThemeStore";

export default function WordConjugatorNavbar() {
  const pathname = useLocation().pathname;
  const { theme, toggleTheme } = useThemeStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Word Conjugator", href: "/word-conjugator", icon: Wand2 },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-rose-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex cursor-pointer items-center gap-2 font-black text-rose-600 transition-transform hover:scale-105"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-600 text-white">
              <Wand2 size={18} />
            </div>
            <span className="hidden text-xl tracking-tight sm:block dark:text-rose-400">
              CONJUGATOR
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/word-conjugator"
                  ? pathname.startsWith("/word-conjugator")
                  : pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all",
                    isActive
                      ? "bg-rose-50 text-rose-600 shadow-sm ring-1 ring-rose-200/50 dark:bg-rose-950/30 dark:text-rose-400 dark:ring-rose-900/50"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50",
                  )}
                >
                  <item.icon size={16} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-zinc-500 transition-all hover:bg-zinc-100 hover:text-rose-600 focus:ring-2 focus:ring-rose-500/20 focus:outline-none dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-rose-400"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 md:hidden dark:hover:bg-zinc-900"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-zinc-100 bg-white md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => {
              const isActive =
                item.href === "/word-conjugator"
                  ? pathname.startsWith("/word-conjugator")
                  : pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-base font-bold transition-colors",
                    isActive
                      ? "bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50",
                  )}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
