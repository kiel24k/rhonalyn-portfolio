import {
  Award,
  ClipboardList,
  Megaphone,
  Palette,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SectionHeading from "@/components/SectionHeading"
import { awards, skillGroups } from "@/data/resume"

const icons = {
  clipboard: ClipboardList,
  megaphone: Megaphone,
  palette: Palette,
  users: Users,
}

export default function Skills() {
  return (
    <section id="skills" className="bg-card border-y">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring to the table"
          description="A mix of office administration, digital marketing, and creative skills."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon]
            return (
              <Card key={group.title} className="bg-background">
                <CardHeader>
                  <CardTitle as="h3" className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-secondary">
                      <Icon
                        className="size-5 text-secondary-foreground"
                        aria-hidden="true"
                      />
                    </span>
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="mt-6 bg-background">
          <CardHeader>
            <CardTitle as="h3" className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary">
                <Award
                  className="size-5 text-secondary-foreground"
                  aria-hidden="true"
                />
              </span>
              Awards & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 md:grid-cols-3">
              {awards.map((award) => (
                <li
                  key={award}
                  className="rounded-lg border bg-accent/40 p-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {award}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
