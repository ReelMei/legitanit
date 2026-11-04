import { FiArrowUpRight, FiArrowUp } from "react-icons/fi";

const EMAIL = "efeose13@gmail.com";

const socials = [
  { label: "youtube", href: "https://youtube.com/@legitanit?si=5w2vXzkovqRQcZG8" },
  { label: "Instagram", href: "https://www.instagram.com/filmedbylegitanit?exln=emZrMDF5aGloejd6&utm_source=qr" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

export default function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="scroll-mt-8 bg-bg">
      <div className="mx-auto max-w-7xl px-6 pt-20 md:px-10 md:pt-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
          03 / Next, your story
        </p>

        {/* Headline + pitch */}
        <div className="mt-6 grid items-center gap-10 md:grid-cols-2">
          <h2 className="text-6xl font-normal leading-[0.98] tracking-tighter md:text-8xl">
            Let's make
            <br />
            something move.
          </h2>

          <div className="md:max-w-sm md:justify-self-center">
            <p className="text-base leading-relaxed text-muted">
              Have footage, an idea, or a story to tell? Send a little about
              your project, your timeline, and what you have in mind.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="group mt-8 inline-flex items-center gap-6 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-bg transition hover:brightness-110"
            >
              Start a conversation
              <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        
        <div className="mt-14 flex flex-col gap-8 md:mt-16 md:flex-row md:items-center md:justify-between">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-4 text-2xl text-accent md:text-4xl"
          >
            {EMAIL}
            <FiArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <ul className="flex gap-8 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                >
                  {s.label}
                  <FiArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 grid gap-4 border-t border-white/10 py-6 font-mono text-[10px] uppercase tracking-[0.12em] text-muted md:grid-cols-3 md:items-center">
          <span>© {new Date().getFullYear()} Legitanit. Crafted frame by frame.</span>

          <span className="normal-case tracking-normal md:text-center">
           
          </span>

          <button
            type="button"
            onClick={backToTop}
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-text md:justify-self-end"
          >
            Back to top
            <FiArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}