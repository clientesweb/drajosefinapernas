import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog de Salud Mental - Dra. Josefina Pernas | Artículos sobre Bienestar Emocional",
  description:
    "Lee los últimos artículos sobre salud mental, bienestar emocional, ansiedad, depresión y más. Consejos profesionales de la Dra. Josefina Pernas para mejorar tu calidad de vida.",
  keywords: [
    "blog salud mental",
    "artículos psiquiatría",
    "bienestar emocional",
    "ansiedad artículos",
    "depresión consejos",
    "FOMO",
    "mente tranquila",
    "sueño salud mental",
    "consejos psiquiatra",
    "estigma salud mental",
  ],
  openGraph: {
    title: "Blog de Salud Mental - Dra. Josefina Pernas",
    description:
      "Artículos sobre salud mental, bienestar emocional y más. Consejos profesionales para mejorar tu calidad de vida.",
    url: "https://www.drajosefinapernas.com/blog",
    siteName: "Dra. Josefina Pernas",
    images: [
      {
        url: "/og-image-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Blog de Salud Mental - Dra. Josefina Pernas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Salud Mental - Dra. Josefina Pernas",
    description:
      "Artículos sobre salud mental, bienestar emocional y más. Consejos profesionales para mejorar tu calidad de vida.",
    images: ["/og-image-blog.jpg"],
  },
}

const officialBlogPosts = [
  {
    slug: "impacto-autoexigencia-salud-mental",
    title: "Impacto de la autoexigencia en la salud mental: aportes teóricos y evidencia empírica",
    date: new Date().toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    description:
      "Descubre cómo la autoexigencia extrema se relaciona con el perfeccionismo maladaptativo y su impacto en la salud mental. Aportes teóricos y evidencia empírica.",
    image: "/portada-Impacto-de-la-autoexigencia-en-la-salud-mental.jpg",
  },
  {
    slug: "burnout-laboral",
    title: "Burnout laboral: cuando la empresa te consume por dentro",
    date: new Date().toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    description:
      "Descubre qué es el síndrome de burnout, sus causas, señales de alerta y estrategias efectivas para prevenirlo y afrontarlo.",
    image: "/portada-del-burnout-laboral.png",
  },
  {
    slug: "estigma-salud-mental",
    title: "El estigma en salud mental: una barrera que aún debemos derribar",
    date: new Date().toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    description:
      "Descubre qué es el estigma en salud mental, sus tipos y consecuencias. Aprende cómo podemos reducirlo y construir una sociedad más inclusiva.",
    image: "/portada-estigma-salud-mental.jpg",
  },
  {
    slug: "imagen-corporal",
    title: "Imagen corporal: cómo nos vemos, pensamos y sentimos sobre nuestro cuerpo",
    date: "1 de septiembre de 2025",
    description:
      "Descubre qué es la imagen corporal y cómo influye en tu bienestar emocional. Aprende sobre los componentes perceptivo, cognitivo, emocional y conductual.",
    image: "/imagen-corporal.webp",
  },
  {
    slug: "fomo-miedo-quedarse-afuera",
    title: "FOMO: el miedo a quedarse afuera",
    date: new Date().toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    description:
      "Descubre cómo el Fear of Missing Out afecta tu salud mental en la era de las redes sociales y aprende estrategias para manejarlo.",
    image: "/instagram/fomo-articulo.webp",
  },
  {
    slug: "una-mente-tranquila",
    title: "Una Mente Tranquila",
    date: new Date().toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    description:
      "¿Te ha pasado que no puedes parar de pensar? Descubre cómo encontrar la calma mental y mejorar tu bienestar emocional.",
    image: "/images/file-1ee5uxjekiqdgatqabx4zj.webp",
  },
  {
    slug: "sueno-habitos-para-buen-descanso",
    title: "Sueño: Hábitos para lograr un buen descanso y mejorar tu calidad de vida",
    date: new Date().toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    description:
      "La mayoría de los adultos necesitan dormir entre 7 y 8 horas al día. Descubre hábitos para mejorar la calidad de tu sueño y tu bienestar general.",
    image: "/images/file-r3iq48kzb7atdqaudmdenx.webp",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-contrast">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-poppins-extrabold text-4xl tracking-tighter sm:text-5xl md:text-6xl text-primary">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground font-poppins-semibold max-w-3xl mx-auto leading-relaxed">
              Artículos sobre <span className="brand-highlight">salud mental</span>, bienestar emocional y consejos
              profesionales para mejorar tu calidad de vida
            </p>
            <div className="bg-primary/10 inline-block px-6 py-3 rounded-full">
              <p className="font-poppins-bold text-primary">✍️ Contenido actualizado regularmente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {officialBlogPosts.map((post) => (
                <Card
                  key={post.slug}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2 hover:text-primary font-poppins-bold text-xl">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 font-poppins-semibold">{post.date}</p>
                      <p className="line-clamp-3 text-muted-foreground font-poppins-semibold leading-relaxed">
                        {post.description}
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
