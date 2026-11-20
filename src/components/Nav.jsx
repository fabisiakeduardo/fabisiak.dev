"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LangProvider";

const links = [
  ["about", "/#about"],
  ["stack", "/#stack"],
  ["experience", "/#experience"],
  ["projects", "/#projects"],
  ["blog", "/blog"],
  ["contact", "/#contact"],
];

const mobileLinks = new Set(["projects", "blog", "contact"]);

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[border-color,background-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-line bg-void/70 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-line focus:bg-void focus:px-4 focus:py-2 focus:font-mono focus:text-[13px] focus:text-accent"
      >
        {t.nav.skip}
      </a>
      <nav className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 md:px-10">
        <Link href="/" className="font-mono text-[13px] text-ink">
          <span className="text-accent">~</span>/fabisiak.dev
        </Link>

        <ul className="flex items-center gap-4 font-mono text-[12px] md:gap-7">
          {links.map(([key, href]) => {
            const current = key === "blog" && pathname.startsWith("/blog");
            return (
              <li key={key} className={mobileLinks.has(key) ? undefined : "hidden md:block"}>
                <Link
                  href={href}
                  aria-current={current ? "page" : undefined}
                  className={`transition-colors duration-300 hover:text-ink ${
                    current ? "text-ink" : "text-dim"
                  }`}
                >
                  {t.nav[key].toLowerCase()}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-6 font-mono text-[12px]">
          <div className="flex items-center gap-0.5" role="group" aria-label="Language">
            {["pt", "en"].map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="px-1 text-faint" aria-hidden="true">/</span>}
                <button
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`px-1 py-2 uppercase transition-colors duration-300 ${
                    lang === l ? "text-ink" : "text-dim hover:text-ink"
                  }`}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
          <a
            href="https://github.com/fabisiakeduardo"
            target="_blank"
            rel="noreferrer"
            className="hidden text-dim transition-colors duration-300 hover:text-ink sm:block"
          >
            github
          </a>
        </div>
      </nav>
    </header>
  );
}
