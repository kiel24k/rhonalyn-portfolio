import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle"
import { profile } from "@/data/resume"

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "References", href: "#references" },
]

const linkClasses =
  "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#home"
          className="rounded-lg text-lg font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={() => setOpen(false)}
        >
          Rhonalyn<span className="text-primary"> Sales</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClasses}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener"
                className={linkClasses}
              >
                Resume
              </a>
            </li>
          </ul>

          <ThemeToggle />

          <Button asChild href="#contact" size="sm" className="ml-1 hidden md:inline-flex">
            Get in Touch
          </Button>

          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        hidden={!open}
        className="border-t bg-background md:hidden"
      >
        <ul className="mx-auto max-w-6xl space-y-1 px-4 py-3 sm:px-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block ${linkClasses} py-2.5`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener"
              className={`block ${linkClasses} py-2.5`}
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </li>
          <li className="pt-2">
            <Button
              asChild
              href="#contact"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
