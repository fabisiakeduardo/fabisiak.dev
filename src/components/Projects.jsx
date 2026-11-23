"use client";

import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "./Icons";
import Motif from "./Motif";
import Link from "next/link";

function Row({ project, caseStudyCta }) {
  return (
    <article className="group relative grid gap-6 border-t border-line py-12 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_minmax(0,3fr)] md:gap-10 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">{project.category}</p>
        <h3 className="mt-4 text-4xl font-light tracking-[-0.03em] text-ink md:text-5xl">
          {project.name}
        </h3>
      </div>
      <div>
        <p className="max-w-[58ch] leading-relaxed text-dim">{project.description}</p>
        {project.stack.length > 0 && (
          <p className="mt-6 font-mono text-[12px] leading-relaxed text-dim">
            {project.stack.map((item, i) => (
              <span key={item}>
                {i > 0 && <span className="text-faint">{" · "}</span>}
                <span className="text-ink/80">{item}</span>
              </span>
            ))}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-8 md:items-end md:text-right">
        <Motif
          motif={project.motif}
          className="h-14 w-14 text-dim transition-colors duration-500 group-hover:text-accent"
        />
        <div className="flex flex-col items-start gap-4 md:items-end">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex max-w-full items-center gap-1.5 break-words text-left font-mono text-[13px] text-accent transition-colors duration-300 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {caseStudyCta}
            <span aria-hidden="true">&gt;</span>
          </Link>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex max-w-full items-center gap-1.5 break-words text-left font-mono text-[13px] text-dim transition-colors duration-300 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {project.linkLabel}
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="relative scroll-mt-14 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <SectionHeading intro={t.projects.intro}>{t.projects.heading}</SectionHeading>
        </Reveal>

        <div className="mt-16 border-b border-line md:mt-20">
          {t.projects.items.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.04}>
              <Row project={project} caseStudyCta={t.projects.caseStudyCta} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-28 md:mt-36">
          <SectionHeading as="h3" intro={t.projects.oss.intro}>
            {t.projects.oss.heading}
          </SectionHeading>
        </Reveal>

        <ul className="mt-12 grid border-t border-l border-line md:grid-cols-2 lg:grid-cols-3">
          {t.projects.oss.items.map((item, i) => (
            <li key={item.name} className="border-b border-r border-line">
              <Reveal delay={i * 0.04} className="h-full">
                <article className="group flex h-full flex-col justify-between gap-10 p-7 transition-colors duration-300 hover:bg-void-2 md:p-8">
                  <div>
                    <h4 className="flex min-w-0 items-center justify-between gap-3 break-words text-xl font-normal tracking-tight text-ink">
                      {item.name}
                      <ArrowUpRight className="shrink-0 text-dim transition-colors group-hover:text-accent" />
                    </h4>
                    <p className="mt-3 leading-relaxed text-dim">{item.description}</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <p className="font-mono text-[11px] leading-relaxed text-dim">
                      {item.stack.join(" · ")}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-[12px]">
                      <Link
                        href={`/projects/${item.slug}`}
                        className="inline-flex max-w-full items-center gap-1.5 break-words text-accent transition-colors duration-300 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        {t.projects.caseStudyCta}
                        <span aria-hidden="true">&gt;</span>
                      </Link>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex max-w-full items-center gap-1.5 break-words text-dim transition-colors duration-300 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        {item.linkLabel}
                        <ArrowUpRight />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
