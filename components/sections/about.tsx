export function About() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
  ]

  return (
    <section id="about" className="flex items-center">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate whitespace-nowrap">
            <span className="text-green font-mono text-2xl md:text-3xl">01.</span> About Me
          </h2>
          <div className="h-px bg-lightest-navy w-full max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-slate">
            <p>
              Hello! I&apos;m a passionate developer who enjoys creating things that live on
              the internet. My interest in web development started back in 2015 when I
              decided to try editing custom Tumblr themes — turns out hacking together
              a custom reblog button taught me a lot about HTML &amp; CSS!
            </p>
            <p>
              Fast-forward to today, and I&apos;ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a student-led
              design studio. My main focus these days is building accessible, inclusive
              products and digital experiences.
            </p>
            <p>Here are a few technologies I&apos;ve been working with recently:</p>

            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="text-green">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative z-10 bg-green-tint rounded-lg overflow-hidden">
              <div className="aspect-square bg-lightest-navy flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            <div className="absolute top-4 left-4 w-full h-full border-2 border-green rounded-lg -z-10 group-hover:top-6 group-hover:left-6 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
