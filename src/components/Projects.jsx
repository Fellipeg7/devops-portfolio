import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: 'Infraestrutura como Código',
    description:
      'Ambientes provisionados com Terraform na AWS: VPC, EKS, RDS e autoscaling, com módulos reutilizáveis e estados versionados.',
    tags: ['Terraform', 'AWS', 'Docker'],
    emoji: '🏗️',
    gradient: 'from-cyan-500/20 to-sky-500/10',
  },
  {
    title: 'Pipeline CI/CD End-to-End',
    description:
      'GitHub Actions automatizando build, testes, lint, análise de segurança e deploy contínuo em múltiplos ambientes.',
    tags: ['GitHub Actions', 'Docker', 'Deploy'],
    emoji: '⚙️',
    gradient: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    title: 'Cluster Kubernetes Gerenciado',
    description:
      'Cluster EKS com GitOps via ArgoCD, escalonamento automático (HPA), rede service mesh e políticas de segurança.',
    tags: ['Kubernetes', 'ArgoCD', 'Helm'],
    emoji: '☸️',
    gradient: 'from-sky-500/20 to-indigo-500/10',
  },
  {
    title: 'Observabilidade & Monitoramento',
    description:
      'Stack Prometheus + Grafana + Loki com alertas inteligentes, dashboards customizados e SLIs/SLOs por serviço.',
    tags: ['Prometheus', 'Grafana', 'Loki'],
    emoji: '📊',
    gradient: 'from-amber-500/20 to-orange-500/10',
  },
  {
    title: 'Blog de Engenharia',
    description:
      'Artigos sobre automação, cultura DevOps e lições aprendidas — integrado ao portfólio com busca e categorias.',
    tags: ['Markdown', 'React', 'SEO'],
    emoji: '✍️',
    gradient: 'from-fuchsia-500/20 to-pink-500/10',
  },
  {
    title: 'Segurança em Pipeline',
    description:
      'Scan de vulnerabilidades em imagens e dependências, secrets dinâmicos e policy-as-code para o ciclo de entrega.',
    tags: ['Trivy', 'Snyk', 'OPA'],
    emoji: '🔐',
    gradient: 'from-rose-500/20 to-red-500/10',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projetos" className="container-portfolio py-28">
      <div className="mb-14 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Portfólio
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="heading-2"
        >
          Projetos em <span className="gradient-text">destaque</span>
        </motion.h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {PROJECTS.map((project) => (
          <motion.article
            key={project.title}
            variants={item}
            whileHover={{ y: -8 }}
            className={`card-glass group overflow-hidden bg-gradient-to-br ${project.gradient} hover:border-cyan-400/30`}
          >
            <div className="flex h-full flex-col p-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-4xl transition duration-300 group-hover:scale-125">
                  {project.emoji}
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400/70" />
              </div>

              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-900/60 px-2.5 py-1 text-xs font-medium text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
