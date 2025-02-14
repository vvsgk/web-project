import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js"]

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

