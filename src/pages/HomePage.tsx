"use client"

import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern"
import { TextAnimate } from "@/components/magicui/text-animate"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, BookOpen, Brain, Sparkles, ArrowRight } from "lucide-react"
import { Marquee } from "@/components/magicui/marquee"

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img || "/placeholder.svg"} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden">
        <InteractiveGridPattern
          className={cn("[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]")}
          width={20}
          height={20}
          squares={[80, 80]}
          squaresClassName="hover:fill-red-800 transition-all duration-300"
        />

        <div className="z-10 flex flex-col items-center gap-8 px-4 text-center">
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={1}
            once
            className="font-mono text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter font-bold"
          >
            Sombras de la Mente
          </TextAnimate>

          <p className="max-w-md text-lg text-gray-400 animate-fade-in">
            Descubre los secretos de la psicología oscura y cómo funciona la mente humana
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="bg-red-900 hover:bg-red-800">
              Obtener Libro <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-black hover:bg-red-900 hover:text-white hover:border-red-900"
            >
              Leer Muestra
            </Button>
          </div>
        </div>
      </section>

      {/* Book Features */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-red-900 text-red-500">
            CONTENIDO EXCLUSIVO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Qué aprenderás en este libro?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un viaje profundo a través de los aspectos más intrigantes de la mente humana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-black border-red-900">
            <CardHeader>
              <BookOpen className="h-10 w-10 text-red-700 mb-2" />
              <CardTitle>Manipulación Psicológica</CardTitle>
              <CardDescription className="text-gray-400">
                Técnicas y patrones utilizados en la manipulación mental
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Aprende a identificar cuando estás siendo manipulado y cómo protegerte de estas técnicas.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-red-500 hover:text-red-400 p-0">
                Más información <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-black border-red-900">
            <CardHeader>
              <Brain className="h-10 w-10 text-red-700 mb-2" />
              <CardTitle>Patrones Cognitivos</CardTitle>
              <CardDescription className="text-gray-400">
                Cómo funciona nuestra mente bajo diferentes circunstancias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Descubre los sesgos cognitivos que afectan nuestras decisiones diarias sin que lo notemos.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-red-500 hover:text-red-400 p-0">
                Más información <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-black border-red-900">
            <CardHeader>
              <Sparkles className="h-10 w-10 text-red-700 mb-2" />
              <CardTitle>Influencia Subliminal</CardTitle>
              <CardDescription className="text-gray-400">
                El poder de los mensajes que no percibimos conscientemente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Explora cómo los estímulos subliminales pueden afectar nuestro comportamiento y decisiones.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-red-500 hover:text-red-400 p-0">
                Más información <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Book Preview */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-red-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Reseñas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Descubre lo que dicen nuestros lectores sobre el libro</p>
          </div>
          <div className="relative w-full overflow-hidden">
            <Marquee className="mb-6">
              {firstRow.map((review) => (
                <div key={review.username} className="mx-2">
                  <ReviewCard {...review} />
                </div>
              ))}
            </Marquee>
            <Marquee>
              {secondRow.map((review) => (
                <div key={review.username} className="mx-2">
                  <ReviewCard {...review} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <div className="relative p-8 border border-red-900 rounded-lg bg-black">
          <InteractiveGridPattern
            className={cn(
              "absolute inset-0 opacity-30 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            )}
            width={10}
            height={10}
            squares={[40, 40]}
            squaresClassName="hover:fill-red-800"
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Descubre el poder de la mente humana</h2>

            <div className="flex justify-center mb-4">
              <img src="book.png" className="w-42"/>
              
            </div>

            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Obtén acceso inmediato a "Sombras de la Mente" y comienza tu viaje hacia la comprensión de la psicología
              oscura y sus aplicaciones.
            </p>

            <Button size="lg" className="bg-red-900 hover:bg-red-800 px-8">
              Obtener Libro Ahora
            </Button>

            <p className="mt-4 text-sm text-gray-500">Garantía de devolución de 30 días si no estás satisfecho</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Sombras de la Mente. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

