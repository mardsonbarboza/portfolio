import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import { getFeaturedProjects } from "@/lib/github/api"
import type { Project } from "@/lib/github/types"

// Fallback projects if GitHub API fails
const fallbackProjects: Project[] = [
  {
    title: "Sistema de Cadastro - IFCE Campus Canindé",
    description:
      "Sistema completo para gerenciamento de projetos e acervos institucionais do IFCE. Implementa autenticação de usuários, sistema de permissões com níveis de acesso, aprovação de projetos com fluxo de qualidade, e integração entre múltiplas instituições. Desenvolvido com arquitetura limpa e hexagonal usando NestJS, TypeScript, Prisma e Next.js com Tailwind.",
    tags: ["NestJS", "TypeScript", "Prisma", "Next.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/mardsonbarboza",
    external: "#", // Link será adicionado quando o projeto estiver no ar
  },
  {
    title: "API de Gerenciamento de Usuários",
    description:
      "API REST completa para gerenciamento de usuários com operações CRUD. Implementa autenticação JWT, validação de dados, arquitetura limpa e hexagonal, e documentação completa. Desenvolvido com NestJS, Prisma ORM e PostgreSQL.",
    tags: ["NestJS", "Prisma", "PostgreSQL", "JWT", "TypeScript"],
    github: "https://github.com/mardsonbarboza/JWT-Auth-API",
  },
  {
    title: "Sistema de Upload de Arquivos",
    description:
      "Sistema modular para upload e armazenamento de imagens na AWS S3 com metadados no DynamoDB. Implementa processamento de imagens, validação de tipos, e arquitetura baseada em módulos com separação de responsabilidades.",
    tags: ["AWS S3", "DynamoDB", "Node.js", "TypeScript"],
    github: "https://github.com/mardsonbarboza",
  },
  {
    title: "Sistema de E-commerce Store",
    description:
      "Backend para plataforma de e-commerce com manipulação de imagens, autenticação JWT, e camadas independentes de domínio e infraestrutura. Implementa padrões de design e arquitetura limpa.",
    tags: ["Node.js", "TypeScript", "JWT", "PostgreSQL"],
    github: "https://github.com/mardsonbarboza/ANJUN25_D03_COMPASSSTORE",
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0

  return (
    <div
      className={`grid md:grid-cols-12 gap-4 items-center ${
        isEven ? "" : "md:text-right"
      }`}
    >
      {/* Image/Preview */}
      <div
        className={`md:col-span-7 relative group ${
          isEven ? "md:col-start-1" : "md:col-start-6"
        }`}
      >
        <a
          href={project.external || project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative z-10 bg-green-tint rounded-lg overflow-hidden"
        >
          <div className="aspect-video bg-lightest-navy flex items-center justify-center group-hover:opacity-75 transition-opacity">
            <div className="text-center">
              <Github className="w-16 h-16 mx-auto mb-2 text-green" />
              {project.language && (
                <p className="text-slate text-sm font-mono">{project.language}</p>
              )}
            </div>
          </div>
        </a>
      </div>

      {/* Content */}
      <div
        className={`md:col-span-6 ${
          isEven
            ? "md:col-start-7 md:row-start-1"
            : "md:col-start-1 md:row-start-1"
        }`}
      >
        <p className="font-mono text-green text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl font-bold text-lightest-slate mb-4">
          <a
            href={project.external || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green transition-colors"
          >
            {project.title}
          </a>
        </h3>
        <div className="bg-light-navy p-6 rounded-lg mb-4 shadow-lg">
          <p className="text-slate">{project.description}</p>
        </div>
        <ul
          className={`flex flex-wrap gap-4 font-mono text-sm text-slate mb-4 ${
            isEven ? "" : "md:justify-end"
          }`}
        >
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div
          className={`flex gap-4 items-center ${
            isEven ? "" : "md:justify-end"
          }`}
        >
          {project.stars !== undefined && project.stars > 0 && (
            <span className="flex items-center gap-1 text-slate text-sm">
              <Star className="w-4 h-4" />
              {project.stars}
            </span>
          )}
          {project.forks !== undefined && project.forks > 0 && (
            <span className="flex items-center gap-1 text-slate text-sm">
              <GitFork className="w-4 h-4" />
              {project.forks}
            </span>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors"
            aria-label="View on GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-green transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export async function Work() {
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME
  const featuredRepos = process.env.NEXT_PUBLIC_FEATURED_REPOS?.split(',').map(r => r.trim())

  let projects: Project[] = fallbackProjects

  if (githubUsername) {
    try {
      const githubProjects = await getFeaturedProjects(githubUsername, featuredRepos)
      if (githubProjects.length > 0) {
        projects = githubProjects.slice(0, 6) // Show max 6 projects
      }
    } catch (error) {
      console.error('Error loading GitHub projects:', error)
      // Will use fallback projects
    }
  }

  return (
    <section id="work" className="flex items-center">
      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate whitespace-nowrap">
            <span className="text-green font-mono text-2xl md:text-3xl">03.</span> Projetos que Construí
          </h2>
          <div className="h-px bg-lightest-navy w-full max-w-xs" />
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
