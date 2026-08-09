import { motion } from 'framer-motion';

const TECH_BADGES = ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'CI/CD', 'Linux'];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Círculos flutuantes decorativos */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute left-[12%] top-[22%] h-20 w-20 animate-float rounded-full bg-cyan-400/20 blur-md" />
        <div
          className="absolute right-[14%] top-[30%] h-14 w-14 animate-float rounded-full bg-emerald-400/20 blur-md"
          style={{ animationDelay: '1.2s' }}
        />
        <div
          className="absolute bottom-[24%] left-[22%] h-12 w-12 animate-float rounded-full bg-sky-400/20 blur-md"
          style={{ animationDelay: '2.4s' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300"
        >
          🚀 DevOps Engineer
        </motion.p>

        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Construindo <span className="gradient-text">infraestruturas</span> que
          escalam com confiança
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
        >
          Automação de infraestrutura, pipelines de CI/CD e soluções cloud
          nativas. Transformo processos complexos em fluxos simples,
          observáveis e repetíveis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projetos"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="rounded-full border border-white/15 px-8 py-3 font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/5"
          >
            Fale comigo
          </a>
        </motion.div>

        {/* Badges de tecnologia */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
        >
          {TECH_BADGES.map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
            >
              {tech}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl text-slate-500"
        aria-hidden
      >
        ↓
      </motion.div>
    </section>
  );
}
