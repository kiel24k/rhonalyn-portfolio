import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/SectionHeading"
import { profile } from "@/data/resume"

const items = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:+63${profile.phone.slice(1)}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-card border-t">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have an opening or a project in mind? I'd love to hear from you."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const content = (
              <CardContent className="flex flex-col items-center text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-secondary">
                  <item.icon
                    className="size-6 text-secondary-foreground"
                    aria-hidden="true"
                  />
                </span>
                <p className="mt-4 font-semibold">{item.label}</p>
                <p className="mt-1 text-sm wrap-break-word text-muted-foreground">
                  {item.value}
                </p>
              </CardContent>
            )
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Card className="h-full bg-background transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                  {content}
                </Card>
              </a>
            ) : (
              <Card
                key={item.label}
                className="h-full bg-background sm:col-span-2 lg:col-span-1"
              >
                {content}
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild href={`mailto:${profile.email}`} size="lg">
            <Mail />
            Send Me an Email
          </Button>
        </div>
      </div>
    </section>
  )
}
