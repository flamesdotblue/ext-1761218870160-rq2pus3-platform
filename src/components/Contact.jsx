import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.12)_0%,rgba(2,6,23,0)_50%)]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Get in touch</h2>
        <p className="mt-3 text-slate-300/90">
          Have a project, idea, or just want to say hi? I’m open to freelance work and collaborations.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow hover:bg-slate-100 transition"
          >
            <Mail size={16} /> hello@example.com
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900/60 ring-1 ring-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-slate-900/80 transition"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900/60 ring-1 ring-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-slate-900/80 transition"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
        <p className="mt-10 text-xs text-slate-400">© {new Date().getFullYear()} MyPortfolio — Crafted with React, Tailwind, and a dash of 3D.</p>
      </div>
    </section>
  );
}
