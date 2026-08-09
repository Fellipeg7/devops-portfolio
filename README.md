<div align="center">

# DevOps Portfolio

**Site portfolio interativo com animações, projetos em destaque e blog integrado.**

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## Funcionalidades

Esse é meu portfolio, o lugar onde eu junto os projetos que venho fazendo e onde pretendo publicar meus artigos de engenharia. Algumas coisas que ele tem:

- **Animações fluidas** com `framer-motion` — hero com entrada escalonada, cards com hover e scroll reveals.
- **Layout responsivo** feito com Tailwind CSS — funciona do mobile ao desktop.
- **Seções profissionais** — hero, projetos em destaque e formulário de contato.
- **Blog integrado** (roadmap) — pretendo colocar artigos de engenharia direto no portfolio.
- **Tema dark** moderno com acentos em gradiente cyan → esmeralda.
- **Performance nativa do Vite** — HMR instantâneo e build otimizado.

## Stack de Tecnologias

| Camada        | Tecnologias                                          |
| ------------- | ---------------------------------------------------- |
| **Front-end** | React 18, JavaScript (ES2023), JSX                    |
| **Build**     | Vite 5, @vitejs/plugin-react                          |
| **Estilo**    | Tailwind CSS 3, Autoprefixer, PostCSS                 |
| **Animações** | Framer Motion                                         |

## Como Rodar

Pré-requisito: **Node.js 18+** e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/Fellipeg7/devops-portfolio.git
cd devops-portfolio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [`http://localhost:5173`](http://localhost:5173) no navegador.

### Build de produção

```bash
npm run build     # gera a pasta dist/
npm run preview   # serve o build localmente para testes
```

## Demo ao Vivo

> **Em breve** — ainda vou publicar o deploy aqui.

## Estrutura do Projeto

```
devops-portfolio/
├── index.html               # Entry point HTML
├── package.json             # Dependências e scripts
├── vite.config.js           # Configuração do Vite
├── tailwind.config.js       # Tema e extensões do Tailwind
├── postcss.config.js        # Plugins do PostCSS
├── .gitignore
└── src/
    ├── main.jsx             # Bootstrap do React
    ├── index.css            # Diretivas Tailwind + estilos globais
    ├── App.jsx              # Layout principal (navbar, seções, footer)
    └── components/
        ├── Hero.jsx         # Seção hero com animações
        ├── Projects.jsx     # Grid de projetos em destaque
        └── Contact.jsx      # Formulário de contato + canais
```

## Deploy

O projeto já está pronto pra subir em qualquer plataforma estática:

| Plataforma | Como fazer                                                                  |
| ---------- | --------------------------------------------------------------------------- |
| **Vercel** | Importe o repositório → framework `Vite` → deploy automático                |
| **Netlify**| `Build command: npm run build` · `Publish directory: dist`                  |
| **GitHub Pages** | Build com `npm run build` e publique a pasta `dist` com GitHub Actions |

## Contribuindo

Fique à vontade pra contribuir! Abra uma *issue* pra discutir mudanças ou manda um *pull request*.

## Licença

Distribuído sob a licença **MIT**. Veja o arquivo [`LICENSE`](LICENSE) pra mais detalhes.

---

<div align="center">

Feito por [Fellipeg7](https://github.com/Fellipeg7)

</div>
