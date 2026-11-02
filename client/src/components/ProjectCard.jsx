import { Link } from "react-router-dom";

export default function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link to={`/work/${project.slug}`} className="group block">
      {/* Thumbnail */}
      <div className="relative aspect-4/3 overflow-hidden bg-surface">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Duration chip */}
        <span className="absolute bottom-4 left-4 bg-black/70 px-2.5 py-1.5 font-mono text-[10px] tracking-[0.08em] backdrop-blur-sm">
          {project.duration}
        </span>

        {/* Arrow button */}
        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-text text-bg transition-colors group-hover:bg-accent">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <path d="M4 12L12 4M5.5 4H12v6.5" />
          </svg>
        </span>
      </div>

      {/* Category + index */}
      <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em]">
        <span className="text-accent">{project.category}</span>
        <span className="text-muted">Example {number}</span>
      </div>

      {/* Title + description */}
      <h3 className="mt-3 text-2xl font-normal tracking-tight md:text-3xl">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-5 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
        {project.tags.join(" · ")}
      </div>
    </Link>
  );
}