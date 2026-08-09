import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 font-sans">
      {/* Glow decorativo de fundo */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
        <nav className="container-portfolio flex items-center justify-between py-4">
          <a href="#inicio" className="text-lg font-bold tracking-tight text-white">
            Fellipe<span className="gradient-text">.dev</span>
          </a>
          <ul className="flex items-center gap-8 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 transition hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2 font-semibold text-slate-950 transition hover:opacity-90"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="container-portfolio flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Fellipe · Feito com{' '}
            <span className="text-cyan-400">React</span>,{' '}
            <span className="text-emerald-400">Vite</span> e{' '}
            <span className="text-sky-400">Tailwind CSS</span>
          </p>
          <a
            href="https://github.com/Fellipeg7"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-300"
          >
            github.com/Fellipeg7
          </a>
        </div>
      </footer>
    </div>
  );
}
