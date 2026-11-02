import { useRef, useState } from "react";

const formatTime = (s = 0) => {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
};

export default function Hero() {
  const videoRef = useRef(null);
  const frameRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const goFullscreen = (e) => {
    e.stopPropagation();
    frameRef.current?.requestFullscreen?.();
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-8 pt-28 md:px-10 md:pt-32">
      {/* Top: headline + intro */}
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
        Independent video editor &amp; visual storyteller
      </p>

      <div className="mt-6 grid items-center gap-10 md:grid-cols-2">
        <h1 className="text-6xl font-medium leading-[0.95] tracking-tighter md:text-8xl">
          Every frame.
          <br />A feeling.
        </h1>

        <div className="md:max-w-sm md:justify-self-center">
          <p className="text-base leading-relaxed text-muted">
            Turning raw footage into stories that stay with you. Thoughtful
            cuts, intentional rhythm, and a little cinematic magic.
          </p>

          <a
            href="#work"
            className="group mt-8 inline-flex items-center gap-6 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-bg transition hover:brightness-110"
          >
            Explore the work
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
              aria-hidden="true"
            >
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </a>
        </div>
      </div>

      {/* Reel */}
      <div
        ref={frameRef}
        onClick={togglePlay}
        className="relative mt-12 aspect-[16/9] w-full cursor-pointer overflow-hidden bg-surface md:mt-16 md:aspect-[2.5/1]"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/videos/reel.mp4"
          poster="/images/reel-poster.jpg"
          playsInline
          preload="metadata"
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
          onEnded={() => setPlaying(false)}
        />

        {/* Bottom gradient for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/20" />

        {/* Top-left label */}
        <div className="absolute left-4 top-4 flex items-center gap-2 bg-black/60 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] backdrop-blur-sm md:left-6 md:top-6">
          <span className="h-1.5 w-1.5 bg-accent" />
          The art of the cut / Sample reel
        </div>

        {/* Center play button */}
        {!playing && (
          <button
            aria-label="Play reel"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-text/80 backdrop-blur-[2px] transition hover:scale-105 hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              className="ml-0.5 h-5 w-5"
            >
              <path d="M8 5.5v13l10-6.5-10-6.5z" />
            </svg>
          </button>
        )}

        {/* Bottom-left caption */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
          <p className="text-2xl font-normal md:text-3xl">Stories in motion.</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
            A showreel concept · Edit / Color / Sound
          </p>
        </div>

        {/* Bottom-right controls */}
        <div className="absolute bottom-4 right-4 flex items-center gap-4 font-mono text-[11px] md:bottom-6 md:right-6">
          <span>
            {formatTime(current)} / {formatTime(duration || 84)}
          </span>
          <button onClick={goFullscreen} aria-label="Fullscreen">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              className="h-4 w-4"
            >
              <path d="M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Footer strip */}
      <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
        <span>Narrative instinct. Frame-by-frame precision.</span>
        <span className="hidden sm:inline">Scroll to discover ↓</span>
      </div>
    </section>
  );
}
