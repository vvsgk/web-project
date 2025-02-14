import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Add your personal information and background here. Highlight your key achievements and what makes you unique.
        </p>
      </CardContent>
    </Card>
  )
}

