import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function Hero() {
  return (
    <Card className="mt-8">
      <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Hi, It&apos;s Me <br />
            I&apos;m <span className="text-primary">Ganesh</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">Beginning of a success journey</p>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com/in/ganesh-vadlavalli-b75523230" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://twitter.com/GaneshVadlaval1" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.instagram.com/vadlavalli.ganesh/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <img
            alt="Ganesh Kumar"
            className="object-cover"
            height="400"
            src="/placeholder.svg?height=400&width=400"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
      </CardContent>
    </Card>
  )
}

