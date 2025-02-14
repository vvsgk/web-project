import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Ganesh Kumar - Portfolio",
  description: "Personal portfolio of Ganesh Kumar",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

