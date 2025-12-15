export function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "AWS S3",
    "Docker",
    "Git",
    "REST APIs",
    "MysQL",
    "Microservices",
    "Clean Architecture",

  ]

  return (
    <section id="about" className="flex items-center">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate whitespace-nowrap">
            <span className="text-green font-mono text-2xl md:text-3xl">01.</span> Sobre Mim
          </h2>
          <div className="h-px bg-lightest-navy w-full max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-slate">
            <p>
              Olá! Sou técnico em Informática e graduando em Ciência da Computação pelo IFCE.
              Minha jornada na programação começou em 2016, durante o ensino técnico, onde descobri
              minha paixão por resolver problemas complexos através do código.
            </p>
            <p>
              Atualmente estou procurando novas oportunidades como desenvolvedor backend,
              onde desenvolvo APIs escaláveis e sistemas corporativos. Sou certificado AWS Cloud
              Practitioner e especializado em arquiteturas limpas, modular e hexagonal,
              seguindo princípios SOLID e Design Patterns.
            </p>
            <p>Tecnologias que tenho trabalhado recentemente:</p>

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
