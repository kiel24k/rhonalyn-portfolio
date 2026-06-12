import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { profile } from "@/data/resume"
import profilePhoto from "@/assets/profile.jpg"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--color-accent),_transparent_60%)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div className="order-2 text-center md:order-1 md:text-left">
          <Badge variant="secondary" className="mb-4">
            Open to opportunities
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-primary">{profile.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/80 sm:text-xl">
            {profile.title}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:mx-0">
            I help businesses run smoothly — from office administration and
            customer service to growing brands on Facebook, TikTok Shop,
            Shopee, and Lazada.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button asChild href="#contact" size="lg">
              Get in Touch
              <ArrowRight />
            </Button>
            <Button asChild href="#experience" variant="outline" size="lg">
              View Experience
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground md:justify-start">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {profile.shortLocation}
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:+63${profile.phone.slice(1)}`}
                className="flex items-center gap-2 rounded-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {profile.phone}
              </a>
            </li>
          </ul>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent to-transparent blur-xl"
            />
            <img
              src={profilePhoto}
              alt={`Portrait of ${profile.name}`}
              width="640"
              height="961"
              className="relative w-56 rounded-[2rem] border-4 border-card object-cover shadow-xl sm:w-64 md:w-80 dark:border-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
