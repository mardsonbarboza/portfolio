"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Compass UOL",
    title: "Estagiário em Desenvolvimento Backend",
    period: "Junho/2025 - Presente",
    url: "https://compass.uol",
    points: [
      "Desenvolvimento de sistema de upload de arquivos integrado ao AWS S3 e DynamoDB",
      "Criação de sistema de usuários com autenticação e autorização em NestJS e TypeScript",
      "Implementação de sistema de store com manipulação de imagens e integração com banco de dados relacional",
      "Aplicação de arquitetura limpa, modular e hexagonal para garantir separação de responsabilidades e flexibilidade na evolução do sistema",
      "Utilização de Prisma e Sequelize para modelagem e acesso a dados",
      "Participação em revisões de código, integração contínua e metodologias ágeis",
    ],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="flex items-center">
      <div className="max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate whitespace-nowrap">
            <span className="text-green font-mono text-2xl md:text-3xl">02.</span> Onde Trabalhei
          </h2>
          <div className="h-px bg-lightest-navy w-full max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab buttons */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-5 py-3 text-left border-l-2 md:border-l-2 border-b-2 md:border-b-0 transition-colors font-mono text-sm whitespace-nowrap",
                  activeTab === index
                    ? "border-green text-green bg-green-tint"
                    : "border-lightest-navy text-slate hover:bg-green-tint hover:text-green"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-lightest-slate mb-2">
              {experiences[activeTab].title}{" "}
              <a
                href={experiences[activeTab].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green hover:underline"
              >
                @ {experiences[activeTab].company}
              </a>
            </h3>
            <p className="font-mono text-sm text-slate mb-6">
              {experiences[activeTab].period}
            </p>
            <ul className="space-y-4">
              {experiences[activeTab].points.map((point, index) => (
                <li key={index} className="flex gap-3 text-slate">
                  <span className="text-green mt-1 flex-shrink-0">▹</span>
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
