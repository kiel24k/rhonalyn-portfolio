import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

function readStoredTheme() {
  try {
    const stored = localStorage.getItem("theme")
    return stored === "light" || stored === "dark" ? stored : null
  } catch {
    return null
  }
}

function getInitialTheme() {
  return (
    readStoredTheme() ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  )
}

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  // Follow the system preference live until the user picks a theme explicitly.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = (e) => {
      if (!readStoredTheme()) setTheme(e.matches ? "dark" : "light")
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  const dark = theme === "dark"

  const toggle = () => {
    const next = dark ? "light" : "dark"
    setTheme(next)
    try {
      localStorage.setItem("theme", next)
    } catch {
      // storage blocked — the theme still applies for this visit
    }
  }

  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={`inline-flex size-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 md:size-10 ${className}`}
    >
      {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  )
}
