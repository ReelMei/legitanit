import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { GoArrowUpRight } from "react-icons/go";

const links = [
  { label: "Work", to: "/#work" },
  { label: "About", to: "/#about" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide"
        >
          <img src={logo} alt="Logo" className="h-4 w-4 text-black" />
          <h1 className="text-2xl font-bold">Legitanit</h1>
          <span className="text-xs font-normal text-black">Video Editor</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm md:gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="hidden text-muted transition-colors hover:text-text sm:block"
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-black px-4 py-2 font-medium text-black  transition-colors hover:bg-accent hover:text-bg"
          >
            Let's talk
            <GoArrowUpRight className="transition-transform group-hover:translate-x-0.5 text-accent w-4 h-4" />
            
          </Link>
        </nav>
      </div>
    </header>
  );
}