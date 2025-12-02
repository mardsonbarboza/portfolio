"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Company 1",
    title: "Senior Software Engineer",
    period: "Jan 2023 - Present",
    url: "https://company1.com",
    points: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
  {
    company: "Company 2",
    title: "Software Engineer",
    period: "May 2021 - Dec 2022",
    url: "https://company2.com",
    points: [
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
    ],
  },
  {
    company: "Company 3",
    title: "Junior Developer",
    period: "Jan 2020 - Apr 2021",
    url: "https://company3.com",
    points: [
      "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
      "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
      "Architected and implemented the front-end of Apple Music's Facebook app, which has millions of users",
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
            <span className="text-green font-mono text-2xl md:text-3xl">02.</span> Where I&apos;ve Worked
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
