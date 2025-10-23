import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-16">
      <div className="relative h-[80vh] md:h-screen w-full">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.15)_45%,rgba(2,6,23,0.6)_70%,rgba(2,6,23,0.9)_100%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Building modern, playful, interactive web experiences
            </h1>
            <p className="mt-4 text-slate-300/90 text-base md:text-lg">
              I’m a frontend developer crafting immersive UIs with React, 3D, and delightful micro-interactions. Welcome to my portfolio.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow hover:bg-slate-100 transition"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900/60 ring-1 ring-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-slate-900/80 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
