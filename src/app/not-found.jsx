"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangProvider, useLang } from "@/components/LangProvider";
import Starfield from "@/components/Starfield";

function Terminal() {
  const { t } = useLang();
  const pathname = usePathname();

  return (
    <main id="main" className="relative flex min-h-[100dvh] items-center px-6 md:px-10">
      <div className="mx-auto w-full max-w-[1440px]">
        <p className="font-mono text-sm text-accent md:text-base">
          $ cd <span className="text-ink">{pathname}</span>
        </p>
        <p className="mt-3 font-mono text-[13px] text-dim">
          cd: {pathname}: {t.notFound.error}
        </p>

        <h1 className="mt-16 text-[clamp(4rem,14vw,10rem)] font-light leading-[0.9] tracking-[-0.04em] text-ink">
          404
        </h1>
        <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-dim md:text-xl">
          {t.notFound.hint}
        </p>

        <Link
          href="/"
          className="group mt-14 inline-flex items-center gap-3 border border-ink/80 px-5 py-3 font-mono text-[13px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          {t.notFound.back}
          <span className="cursor-blink" aria-hidden="true">▮</span>
        </Link>
      </div>
    </main>
  );
}

export default function NotFound() {
  return (
    <LangProvider>
      <Starfield />
      <Terminal />
    </LangProvider>
  );
}
