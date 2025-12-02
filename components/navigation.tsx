"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <nav className="hidden lg:block fixed left-0 top-0 h-screen w-24 z-50">
      <div className="flex flex-col items-center justify-center h-full gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "group flex items-center gap-4 transition-all duration-300",
              activeSection === item.href.slice(1)
                ? "text-green"
                : "text-slate hover:text-green"
            )}
          >
            <span
              className={cn(
                "h-px bg-current transition-all duration-300",
                activeSection === item.href.slice(1) ? "w-16" : "w-8 group-hover:w-16"
              )}
            />
            <span className="text-xs font-mono uppercase tracking-widest writing-mode-vertical-rl rotate-180">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </nav>
  )
}
