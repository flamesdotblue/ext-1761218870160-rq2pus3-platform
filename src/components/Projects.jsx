import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Holographix UI',
    description: 'A WebGL-powered dashboard with real-time 3D interactions and themeable components.',
    tech: ['React', 'Three.js', 'Tailwind'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
  {
    title: 'Pulse Analytics',
    description: 'Streaming analytics playground with live charts, websockets, and edge functions.',
    tech: ['Vite', 'WebSockets', 'D3'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
  {
    title: 'Motion Kit',
    description: 'A library of accessible, animated UI primitives built with Radix + Framer Motion.',
    tech: ['Radix', 'Framer Motion', 'TypeScript'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
];

function ProjectCard({ title, description, tech, link, repo }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-5 hover:border-white/20 transition">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-slate-300 hover:text-white hover:bg-white/5 transition"
          >
            <Github size={14} /> Code
          </a>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20 transition"
          >
            <ExternalLink size={14} /> Live
          </a>
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-300/90">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs text-slate-300 bg-white/5 ring-1 ring-white/10 rounded px-2 py-1">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12)_0%,rgba(139,92,246,0.08)_30%,rgba(2,6,23,0)_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Selected Projects</h2>
            <p className="mt-2 text-slate-300/90 max-w-2xl">
              A snapshot of things I’ve built recently — spanning UI libraries, data viz, and playful 3D interactions.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow hover:bg-slate-100 transition"
          >
            Let’s collaborate
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
