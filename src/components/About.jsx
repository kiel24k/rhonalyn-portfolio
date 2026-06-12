import { Card, CardContent } from "@/components/ui/card"
import SectionHeading from "@/components/SectionHeading"
import { highlights, profile } from "@/data/resume"

export default function About() {
  return (
    <section id="about" className="bg-card border-y">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="About Me"
          title="Detail-oriented, dependable, and always learning"
          className="mb-5"
        />
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.label} className="bg-background text-center">
              <CardContent>
                <p className="text-4xl font-extrabold text-primary">
                  {item.value}
                </p>
                <p className="mt-2 font-semibold">{item.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
