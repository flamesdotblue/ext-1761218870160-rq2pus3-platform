import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const NavLink = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:opacity-100 opacity-90 transition"
  >
    {label}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition backdrop-blur ${scrolled ? 'bg-slate-950/60 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500" />
            <span className="font-semibold tracking-tight text-white">MyPortfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#home" label="Home" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
            <div className="mx-2 h-6 w-px bg-white/10" />
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 text-slate-300 hover:text-white" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 text-slate-300 hover:text-white" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:hello@example.com" className="p-2 text-slate-300 hover:text-white" aria-label="Email">
              <Mail size={18} />
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/5" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-2">
            <div className="flex flex-col gap-1 py-2">
              <NavLink href="#home" label="Home" onClick={close} />
              <NavLink href="#projects" label="Projects" onClick={close} />
              <NavLink href="#contact" label="Contact" onClick={close} />
              <div className="flex items-center gap-2 pt-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 text-slate-300 hover:text-white" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 text-slate-300 hover:text-white" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:hello@example.com" className="p-2 text-slate-300 hover:text-white" aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
