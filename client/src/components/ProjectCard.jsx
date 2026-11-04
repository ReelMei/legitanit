import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FaPlay } from "react-icons/fa";

const formatTime = (s = 0) => {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
};

export default function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, "0");
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(null);

  const play = () => videoRef.current?.play().catch(() => {});

  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };

  // Touch devices: play while the card is mostly on screen
  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (!isTouch || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else stop();
      },
      { threshold: 0.6 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={cardRef}
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
          src={project.preview || project.video}
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onPlaying={() => setPlaying(true)}
          onError={() => console.warn("Video failed to load:", project.video)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        />

        <span
          className={`absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-text/80 bg-black/20 backdrop-blur-[2px] transition-all duration-300 ${
            playing ? "scale-90 opacity-0" : "opacity-100"
          }`}
        >
          <FaPlay className="ml-0.5 h-4 w-4" />
        </span>

        <span className="absolute bottom-4 left-4 bg-black/70 px-2.5 py-1.5 font-mono text-[10px] tracking-[0.08em] backdrop-blur-sm rounded-2xl">
          {duration ? formatTime(duration) : project.duration}
        </span>

        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-text text-bg transition-colors group-hover:bg-accent">
          <GoArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em]">
        <span className="text-accent">{project.category}</span>
        <span className="text-muted">Example {number}</span>
      </div>

      <h3 className="mt-3 text-2xl font-normal tracking-tight md:text-3xl">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
        {project.tags.join(" · ")}
      </div>
    </Link>
  );
}