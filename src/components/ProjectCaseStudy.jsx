"use client";

import { getProject } from "@/lib/projects";
import { useLang } from "./LangProvider";

export default function ProjectCaseStudy({ slug }) {
  const { lang, t } = useLang();
  const project = getProject(slug, lang);

  if (!project) return null;

  return (
    <article className="mx-auto max-w-4xl px-6 pb-28 pt-32 md:px-10 md:pt-44">
      <header className="border-b border-line pb-10 md:pb-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
          {project.category}
        </p>
        <h1 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.03em] text-ink md:text-6xl">
          {project.name}
        </h1>
        <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-dim">
          {project.description}
        </p>

        {project.stack.length > 0 && (
          <ul className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line-2 px-3 py-1 font-mono text-[11px] text-dim"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-[13px] text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {project.linkLabel || project.link}
              <span aria-hidden="true">↗</span>
            </a>
          )}
          <a
            href="#case-study"
            className="inline-flex min-h-11 items-center font-mono text-[13px] text-dim transition-colors hover:text-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {t.projects.caseStudyCta}
            <span className="ml-2 text-accent" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </header>

      <div id="case-study" className="scroll-mt-24 divide-y divide-line">
        <section className="py-9 md:py-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            {t.projects.caseStudyLabels.problem}
          </h2>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-dim">{project.problem}</p>
        </section>

        <section className="py-9 md:py-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            {t.projects.caseStudyLabels.approach}
          </h2>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-dim">{project.approach}</p>
        </section>

        <section className="py-9 md:py-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            {t.projects.caseStudyLabels.decisions}
          </h2>
          <ol className="mt-6 grid gap-6 sm:grid-cols-2">
            {project.decisions.map((decision, index) => (
              <li
                key={decision.title}
                className="border-l border-line-2 pl-5 transition-colors hover:border-accent"
              >
                <p className="font-mono text-[11px] text-faint">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-normal tracking-tight text-ink">
                  {decision.title}
                </h3>
                <p className="mt-2 leading-relaxed text-dim">{decision.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-9 md:py-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            {t.projects.caseStudyLabels.outcome}
          </h2>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-dim">{project.outcome}</p>
        </section>
      </div>
    </article>
  );
}
