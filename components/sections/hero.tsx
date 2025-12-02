import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="flex items-center justify-center">
      <div className="max-w-4xl">
        <p className="text-green font-mono text-sm md:text-base mb-6">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-lightest-slate mb-4">
          Your Name.
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate mb-8">
          I build things for the web.
        </h2>
        <p className="text-slate text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          I&apos;m a software engineer specializing in building exceptional digital
          experiences. Currently, I&apos;m focused on building accessible,
          human-centered products.
        </p>
        <div className="flex gap-6 items-center">
          <Button
            variant="outline"
            size="lg"
            className="border-green text-green hover:bg-green-tint font-mono"
          >
            Check out my work!
          </Button>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-green transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-green transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:email@example.com"
              className="text-slate hover:text-green transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
