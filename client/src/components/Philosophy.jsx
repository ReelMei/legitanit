import workspace from '../assets/workshop.png'

const principles = [
  {
    title: "Find the story",
    text: "Narrative structure, selects, and a first cut that gives your footage a clear direction.",
  },
  {
    title: "Shape the feeling",
    text: "Precise pacing, thoughtful transitions, and sound design that makes every moment land.",
  },
  {
    title: "Bring it together",
    text: "Color, finishing, and considered versions for every screen your story needs to reach.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl scroll-mt-8 px-6 py-20 md:px-10 md:py-28"
    >
      {/* Intro: image + text */}
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16">
        <div className="relative aspect-[4/4.6] rounded-2xl overflow-hidden bg-surface">
          <img
            src={workspace}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-black/70 px-3 py-2 rounded-2xl font-mono text-[10px] uppercase tracking-widest backdrop-blur-sm">
            The quiet work behind the feeling.
          </span>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            02 / Behind the edit
          </p>

          <h2 className="mt-6 text-5xl font-normal leading-[1.05] tracking-tight md:text-6xl">
            Good editing is felt.
            <br />
            Not just seen.
          </h2>

          <p className="mt-10 text-lg">
            Hi, I'm Legitanit. I find the story in the footage.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            I'm an independent video editor drawn to honest moments and
            intentional storytelling. From the first assembly to the final sound
            pass, I shape picture, pace, and emotion into something that feels
            right.
          </p>

          <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-muted/60">
           Every video has a story worth telling, and I'm here to bring those stories to life. I'm a passionate video editor who turns raw footage into engaging visuals, blending creativity, rhythm, and storytelling to create videos that capture attention and leave a lasting impression.
          </p>

          <p className="mt-6 flex items-center gap-3 text-sm text-accent">
            <span className="h-px w-8 bg-accent" />
            Story first. Always.
          </p>
        </div>
      </div>

      {/* Principles */}
      <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 md:mt-20 md:grid-cols-3 md:gap-6">
        {principles.map((p, i) => (
          <div key={p.title}>
            <p className="font-mono text-[10px] tracking-[0.12em] text-accent">
              {String(i + 1).padStart(2, "0")} /
            </p>
            <h3 className="mt-5 text-2xl font-normal tracking-tight">
              {p.title}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}