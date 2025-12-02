import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Featured Project 1",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com",
    external: "https://example.com",
    image: "🎵",
  },
  {
    title: "Featured Project 2",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tags: ["VS Code", "Theme", "Design"],
    github: "https://github.com",
    external: "https://example.com",
    image: "🎨",
  },
  {
    title: "Featured Project 3",
    description:
      "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
    tags: ["Next.js", "GitHub API", "Chart.js"],
    github: "https://github.com",
    external: "https://example.com",
    image: "📊",
  },
]

export function Work() {
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
            <div
              key={project.title}
              className={`grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              {/* Image */}
              <div
                className={`md:col-span-7 relative group ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
                }`}
              >
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative z-10 bg-green-tint rounded-lg overflow-hidden"
                >
                  <div className="aspect-video bg-lightest-navy flex items-center justify-center group-hover:opacity-75 transition-opacity">
                    <span className="text-6xl">{project.image}</span>
                  </div>
                </a>
              </div>

              {/* Content */}
              <div
                className={`md:col-span-6 ${
                  index % 2 === 0
                    ? "md:col-start-7 md:row-start-1"
                    : "md:col-start-1 md:row-start-1"
                }`}
              >
                <p className="font-mono text-green text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-lightest-slate mb-4">
                  <a
                    href={project.external}
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
                    index % 2 === 0 ? "" : "md:justify-end"
                  }`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 0 ? "" : "md:justify-end"
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-green transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-green transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
