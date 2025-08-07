import { SimpleBanner } from "@/components/simple-banner"
import { VideoSection } from "@/components/video-section"
import { InstagramFeed } from "@/components/instagram-feed"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Laptop, Pill, Zap, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FAQSection } from "@/components/faq-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dra. Josefina Pernas - Psiquiatra Especializada en Salud Mental",
  description:
    "Consulta de psiquiatría especializada con más de 15 años de experiencia. Atención presencial y virtual para trastornos de ansiedad, depresión, estrés y más. Agenda tu cita hoy.",
  keywords: [
    "psiquiatra",
    "salud mental",
    "ansiedad",
    "depresión",
    "terapia",
    "consulta online",
    "Buenos Aires",
    "Josefina Pernas",
    "psiquiatría",
    "bienestar emocional",
  ],
  authors: [{ name: "Dra. Josefina Pernas" }],
  creator: "Dra. Josefina Pernas",
  publisher: "Dra. Josefina Pernas",
  openGraph: {
    title: "Dra. Josefina Pernas - Salud Mental Integral",
    description:
      "Cuidando tu bienestar emocional con más de 15 años de experiencia. Consultas presenciales y virtuales.",
    url: "https://www.drajosefinapernas.com",
    siteName: "Dra. Josefina Pernas",
    images: [
      {
        url: "/og-image-pagina-principal.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Josefina Pernas - Salud Mental Integral",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Josefina Pernas - Salud Mental Integral",
    description:
      "Cuidando tu bienestar emocional con más de 15 años de experiencia. Consultas presenciales y virtuales.",
    images: ["/og-image-pagina-principal.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
}

const latestBlogPosts = [
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
    readTime: "8 min",
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
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-1EE5UxJekiqdgAtQABX4ZJ-iZjn4RGaFos3HcyqMYjvSLw3jpYqpU.webp",
    readTime: "5 min",
  },
]

export default function Home() {
  const services = [
    {
      title: "Terapia Individual",
      icon: <Brain className="h-6 w-6 lg:h-8 lg:w-8" />,
      description:
        "Sesiones personalizadas para abordar tus necesidades específicas y promover tu crecimiento personal.",
    },
    {
      title: "Consultas Online y Presenciales",
      icon: <Laptop className="h-6 w-6 lg:h-8 lg:w-8" />,
      description:
        "Accede a terapia de calidad desde la comodidad de tu hogar o en consulta presencial según tu preferencia.",
    },
    {
      title: "Psiquiatría Clínica",
      icon: <Pill className="h-6 w-6 lg:h-8 lg:w-8" />,
      description: "Tratamientos psicoterapéuticos y farmacológicos adaptados a tus necesidades específicas.",
    },
    {
      title: "Manejo del Estrés",
      icon: <Zap className="h-6 w-6 lg:h-8 lg:w-8" />,
      description: "Desarrolla estrategias efectivas para manejar el estrés y la ansiedad en tu vida diaria.",
    },
  ]

  return (
    <>
      <SimpleBanner />

      {/* Latest Blog Posts Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="font-poppins-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-primary mb-4 sm:mb-6">
              Últimos Artículos
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-poppins-semibold max-w-3xl mx-auto leading-relaxed px-4">
              Mantente informado sobre <span className="brand-highlight">salud mental</span> y bienestar emocional
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {latestBlogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20 group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground font-poppins-semibold mb-2 sm:mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Dra. Josefina Pernas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{post.readTime} de lectura</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 hover:text-primary font-poppins-bold text-lg sm:text-xl md:text-2xl leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 font-poppins-semibold">
                      {post.date}
                    </p>
                    <CardDescription className="line-clamp-3 font-poppins-semibold leading-relaxed mb-4 text-sm sm:text-base">
                      {post.description}
                    </CardDescription>
                    <div className="flex items-center text-primary font-poppins-bold hover:text-primary/80 transition-colors text-sm sm:text-base">
                      <span>Leer artículo completo</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Button variant="outline" asChild className="font-poppins-bold bg-transparent px-6 sm:px-8 py-2 sm:py-3">
              <Link href="/blog">Ver todos los artículos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-contrast">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="font-poppins-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-primary mb-4 sm:mb-6">
              Servicios Especializados
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-poppins-semibold max-w-4xl mx-auto leading-relaxed px-4">
              Ofrecemos una <span className="brand-highlight">amplia gama de servicios</span> para cuidar tu salud
              mental y bienestar emocional
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-2 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg border-primary/20 group h-full">
                <CardHeader className="p-4 sm:p-6">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="font-poppins-bold text-primary text-lg sm:text-xl lg:text-2xl leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="font-poppins-semibold text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Button asChild className="font-poppins-bold px-6 sm:px-8 py-2 sm:py-3">
              <Link href="/servicios">Ver todos los servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      <VideoSection />

      {/* Testimonials Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-contrast">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="font-poppins-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-primary mb-4 sm:mb-6">
              Testimonios de Pacientes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-poppins-semibold max-w-4xl mx-auto leading-relaxed px-4">
              Descubre cómo hemos ayudado a otros a <span className="brand-highlight">mejorar su calidad de vida</span>
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <FAQSection />
      <InstagramFeed />
      <WhatsAppButton />
    </>
  )
}
