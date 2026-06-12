import { Briefcase, CalendarDays, CheckCircle2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SectionHeading from "@/components/SectionHeading"
import { experience } from "@/data/resume"

export default function Experience() {
  return (
    <section id="experience">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Work Experience"
          title="Where I've worked"
          description="From front-desk administration to leading marketing across four online platforms."
        />

        <ol className="relative space-y-8 border-s-2 border-border ps-6 sm:ps-8">
          {experience.map((job) => (
            <li key={`${job.role}-${job.company}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -start-[31px] top-7 flex size-4 items-center justify-center rounded-full border-2 border-primary bg-card sm:-start-[39px]"
              >
                {job.current && (
                  <span className="size-1.5 rounded-full bg-primary" />
                )}
              </span>

              <Card className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <CardTitle as="h3" className="flex items-center gap-2 text-xl">
                      <Briefcase
                        className="size-5 text-primary"
                        aria-hidden="true"
                      />
                      {job.role}
                    </CardTitle>
                    {job.current && <Badge>Current</Badge>}
                  </div>
                  <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <span className="font-medium text-foreground">
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="size-4" aria-hidden="true" />
                      {job.period}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {job.duties.map((duty) => (
                      <li
                        key={duty}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-primary/70"
                          aria-hidden="true"
                        />
                        {duty}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
