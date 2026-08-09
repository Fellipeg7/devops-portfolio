import { useState } from 'react';
import { motion } from 'framer-motion';

const CONTACT_CHANNELS = [
  {
    label: 'GitHub',
    value: 'github.com/Fellipeg7',
    href: 'https://github.com/Fellipeg7',
    emoji: '🐙',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/fellipeg7',
    href: 'https://www.linkedin.com/in/fellipeg7',
    emoji: '💼',
  },
  {
    label: 'E-mail',
    value: 'fellipe@devops.dev',
    href: 'mailto:fellipe@devops.dev',
    emoji: '📧',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Integrar com serviço de e-mail ou API quando disponível
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contato" className="container-portfolio py-28">
      <div className="grid items-start gap-14 lg:grid-cols-2">
        {/* Texto + canais */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-title">Contato</span>
          <h2 className="heading-2">
            Vamos construir algo <span className="gradient-text">incrível</span>?
          </h2>
          <p className="mt-5 text-slate-400">
            Tem um projeto, uma vaga ou quer trocar uma ideia sobre
            automação e cloud? Minha caixa de entrada está sempre aberta.
          </p>

          <ul className="mt-10 space-y-4">
            {CONTACT_CHANNELS.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card-glass group flex items-center gap-4 p-4 hover:border-cyan-400/30"
                >
                  <span className="text-2xl transition group-hover:scale-110">
                    {channel.emoji}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {channel.label}
                    </p>
                    <p className="font-medium text-slate-200 transition group-hover:text-cyan-300">
                      {channel.value}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Formulário */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-glass space-y-6 p-8"
        >
          <div>
            <label htmlFor="nome" className="mb-2 block text-sm font-medium text-slate-300">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              value={form.nome}
              onChange={handleChange}
              placeholder="Seu nome"
              className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="voce@exemplo.com"
              className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="mb-2 block text-sm font-medium text-slate-300">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              required
              value={form.mensagem}
              onChange={handleChange}
              placeholder="Conte sobre seu projeto..."
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:opacity-90"
          >
            Enviar mensagem
          </button>

          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-center text-sm text-emerald-300"
            >
              ✅ Mensagem enviada! Em breve entrarei em contato.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
