import ProjectCard from "./ProjectCard";
import { projects } from "../data/project";

export default function ProjectGrid() {
  return (
    <section
      id="work"
      className="mx-auto max-w-7xl scroll-mt-8 px-6 py-20 md:px-10 md:py-28"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
        01 / Selected work
      </p>

      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="text-4xl font-normal tracking-tight md:text-6xl">
          Different stories. Same intent.
        </h2>
        <p className="max-w-55 text-xs leading-relaxed text-muted">
          A curated set of portfolio examples. Replace with your own films &amp;
          credits.
        </p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}