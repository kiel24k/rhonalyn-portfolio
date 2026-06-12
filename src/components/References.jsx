import { Phone, UserRound } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SectionHeading from "@/components/SectionHeading"
import { references } from "@/data/resume"

export default function References() {
  return (
    <section id="references">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="References"
          title="People who can vouch for my work"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {references.map((ref) => (
            <Card key={ref.name} className="text-center">
              <CardHeader className="items-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary">
                  <UserRound
                    className="size-7 text-secondary-foreground"
                    aria-hidden="true"
                  />
                </span>
                <CardTitle as="h3" className="mt-3 text-lg">
                  {ref.name}
                </CardTitle>
                <CardDescription>
                  {ref.title} · {ref.affiliation}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={`tel:+63${ref.phone.slice(1)}`}
                  className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {ref.phone}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Contact details for additional references are available on request.
        </p>
      </div>
    </section>
  )
}
