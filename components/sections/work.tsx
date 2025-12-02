import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import { getFeaturedProjects } from "@/lib/github/api"
import type { Project } from "@/lib/github/types"

// Fallback projects if GitHub API fails
const fallbackProjects: Project[] = [
  {
    title: "Featured Project 1",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Featured Project 2",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, and npm.",
    tags: ["VS Code", "Theme", "Design"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Featured Project 3",
    description:
      "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars.",
    tags: ["Next.js", "GitHub API", "Chart.js"],
    github: "https://github.com",
    external: "https://example.com",
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
            <span className="text-green font-mono text-2xl md:text-3xl">03.</span> Some Things I&apos;ve Built
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
