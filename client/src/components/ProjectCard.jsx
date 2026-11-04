import { useRef } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, "0");
  const videoRef = useRef(null);

  const play = () => videoRef.current?.play().catch(() => {});

  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <Link
      to={`/work/${project.slug}`}
      onMouseEnter={play}
      onMouseLeave={stop}
      className="group block"
    >
     
      <div className="relative aspect-4/3 overflow-hidden bg-surface">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />

       
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

      
        <span className="absolute bottom-4 left-4 bg-black/70 px-2.5 py-1.5 font-mono text-[10px] tracking-[0.08em] backdrop-blur-sm">
          {project.duration}
        </span>

        {/* Arrow button */}
        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-text text-bg transition-colors group-hover:bg-accent">
          <GoArrowUpRight className="h-4 w-4" />
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