import { cn } from "@/lib/utils"

export default function SectionHeading({ eyebrow, title, description, className }) {
  return (
    <div className={cn("mx-auto mb-12 max-w-2xl text-center", className)}>
      <p className="text-sm font-semibold tracking-widest text-primary uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
