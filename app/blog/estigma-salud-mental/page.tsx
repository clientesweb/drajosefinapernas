import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, User, Users, Brain, Heart, AlertTriangle, Shield } from "lucide-react"
import { BlogShare } from "@/components/blog-share"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "El estigma en salud mental: una barrera que aún debemos derribar - Dra. Josefina Pernas",
  description:
    "Descubre qué es el estigma en salud mental, sus tipos y consecuencias. Aprende cómo podemos reducirlo y construir una sociedad más inclusiva y empática.",
  keywords: [
    "estigma salud mental",
    "discriminación salud mental",
    "autoestigma",
    "estigma público",
    "estigma estructural",
    "prejuicios salud mental",
    "trastornos mentales",
    "bienestar emocional",
    "inclusión",
  ],
  openGraph: {
    title: "El estigma en salud mental: una barrera que aún debemos derribar",
    description:
      "Descubre qué es el estigma en salud mental y cómo podemos reducirlo para construir una sociedad más inclusiva.",
    url: "https://www.drajosefinapernas.com/blog/estigma-salud-mental",
    siteName: "Dra. Josefina Pernas",
    images: [
      {
        url: "/portada-estigma-salud-mental.jpg",
        width: 1200,
        height: 630,
        alt: "El estigma en salud mental - Artículo sobre discriminación y prejuicios",
      },
    ],
    locale: "es_ES",
    type: "article",
    authors: ["Dra. Josefina Pernas"],
  },
  twitter: {
    card: "summary_large_image",
    title: "El estigma en salud mental: una barrera que aún debemos derribar",
    description: "Descubre qué es el estigma en salud mental y cómo podemos reducirlo juntos.",
    images: ["/portada-estigma-salud-mental.jpg"],
  },
}

export default function EstigmaSaludMentalBlogPost() {
  const postUrl =
    typeof window !== "undefined" ? window.location.href : "https://www.drajosefinapernas.com/blog/estigma-salud-mental"

  return (
    <article className="container py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/blog" className="flex items-center text-primary hover:underline font-poppins-semibold">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al blog
        </Link>

        {/* Header del artículo */}
        <header className="space-y-6">
          <div className="space-y-4">
            <h1 className="font-poppins-extrabold text-4xl tracking-tighter sm:text-5xl md:text-6xl text-primary leading-tight">
              El estigma en salud mental: una barrera que aún debemos derribar
            </h1>
            <p className="text-xl text-muted-foreground font-poppins-semibold leading-relaxed">
              Descubre qué es el <span className="brand-highlight">estigma en salud mental</span> y cómo podemos
              construir una sociedad más inclusiva y empática
            </p>
          </div>

          {/* Meta información */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-poppins-semibold">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Dra. Josefina Pernas</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>6 min de lectura</span>
            </div>
            <time>
              {new Date().toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Imagen principal */}
        <div className="relative aspect-square md:aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/portada-estigma-salud-mental.jpg"
            alt="Ilustración sobre el estigma en salud mental mostrando discriminación y señalamiento"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="font-poppins-semibold text-lg text-primary mb-0">
              💭 <strong>Hablar de salud mental se ha vuelto cada vez más común</strong>, pero aún persiste un obstáculo
              silencioso que dificulta el acceso a la atención y afecta la vida de millones de personas: el estigma.
            </p>
          </div>

          <div className="space-y-6 font-poppins-semibold text-gray-700 leading-relaxed">
            <p>
              El <span className="brand-highlight font-bold">estigma en salud mental</span> se refiere a las ideas,
              prejuicios y actitudes negativas que la sociedad, e incluso las propias personas que atraviesan un
              problema, pueden tener hacia los trastornos mentales. Esto no solo genera discriminación, sino también{" "}
              <span className="brand-highlight font-bold">miedo, vergüenza y silencio</span>.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg my-8">
              <Image
                src="/estigma-articulo-1.jpeg"
                alt="Persona rodeada de pensamientos negativos y sombras que representan el estigma"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-contrast p-6 rounded-lg border-l-4 border-secondary">
              <h2 className="font-poppins-extrabold text-2xl text-primary mb-4 flex items-center gap-2">
                <Users className="h-6 w-6" />
                ¿Qué tipos de estigma existen?
              </h2>
              <p className="mb-6">
                El estigma en salud mental se manifiesta de diferentes formas, cada una con su propio impacto en la vida
                de las personas:
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-red-400">
                  <h3 className="font-poppins-bold text-lg text-red-700 mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Estigma público
                  </h3>
                  <p>
                    Es la mirada de la sociedad, que asocia erróneamente a la salud mental con{" "}
                    <span className="brand-highlight font-bold">debilidad, peligrosidad o incapacidad</span>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
                  <h3 className="font-poppins-bold text-lg text-purple-700 mb-2 flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Autoestigma
                  </h3>
                  <p>
                    Ocurre cuando la persona adopta esas creencias negativas y comienza a{" "}
                    <span className="brand-highlight font-bold">sentirse menos valiosa</span>, afectando su autoestima y
                    su recuperación.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-400">
                  <h3 className="font-poppins-bold text-lg text-blue-700 mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Estigma estructural
                  </h3>
                  <p>
                    Se da en políticas o prácticas institucionales que{" "}
                    <span className="brand-highlight font-bold">
                      dificultan el acceso a la salud, el trabajo o la educación
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-red-600 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Consecuencias del estigma en la vida diaria
              </h2>
              <p className="mb-4 text-red-800">
                El estigma no es solo un problema de percepción:{" "}
                <span className="font-bold">tiene efectos concretos</span>. Puede llevar a:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="text-lg mt-1">❌</span>
                    <span>
                      <strong>Evitar pedir ayuda profesional</strong> por miedo al juicio
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="text-lg mt-1">❌</span>
                    <span>
                      <strong>Abandonar tratamientos</strong> por vergüenza o presión social
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="text-lg mt-1">❌</span>
                    <span>
                      <strong>Miedo de contar</strong> lo que se está viviendo
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="text-lg mt-1">❌</span>
                    <span>
                      <strong>Limitar oportunidades</strong> laborales o educativas
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="text-lg mt-1">❌</span>
                    <span>
                      <strong>Aislamiento social</strong> y soledad
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="text-lg mt-1">❌</span>
                    <span>
                      <strong>Agravar síntomas</strong> de depresión, ansiedad o elevar el riesgo de suicidio
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-red-100 p-4 rounded-lg mt-6">
                <p className="font-bold text-red-800 mb-0">
                  💔 El estigma impacta en la calidad de vida: limita oportunidades, favorece el aislamiento social y
                  aumenta el sufrimiento emocional.
                </p>
              </div>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg my-8">
              <Image
                src="/estigma-articulo-2.jpeg"
                alt="Ilustración sobre cómo reducir el estigma en salud mental"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-8 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-green-700 mb-6 flex items-center gap-2">
                <Heart className="h-6 w-6" />
                ¿Qué podemos hacer para reducir el estigma?
              </h2>

              <p className="mb-6 text-green-800">
                La buena noticia es que el estigma puede enfrentarse.{" "}
                <span className="font-bold">Algunas acciones efectivas son:</span>
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-poppins-bold text-lg text-green-700 mb-3">💬 Hablar con información y respeto</h3>
                  <p>
                    Usar un lenguaje que ponga a la persona en primer lugar. No decir{" "}
                    <span className="line-through text-red-600">"es un depresivo"</span> sino{" "}
                    <span className="brand-highlight font-bold">"tiene depresión"</span>.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-poppins-bold text-lg text-green-700 mb-3">
                    👂 Escuchar testimonios y experiencias de vida
                  </h3>
                  <p>
                    El contacto con quienes transitan o han transitado una enfermedad mental{" "}
                    <span className="brand-highlight font-bold">humaniza y derriba prejuicios</span>.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-poppins-bold text-lg text-green-700 mb-3">🎓 Educar desde temprana edad</h3>
                  <p>
                    Promover en las escuelas el{" "}
                    <span className="brand-highlight font-bold">cuidado de la salud mental</span> y la importancia de
                    pedir ayuda.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-poppins-bold text-lg text-green-700 mb-3">🩺 Consultarlo con un profesional</h3>
                  <p>
                    Reconocer los síntomas y{" "}
                    <span className="brand-highlight font-bold">animarse a buscar acompañamiento</span> cuando la salud
                    mental afecta el bienestar diario.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg">
              <h2 className="font-poppins-extrabold text-2xl mb-4">💭 Un mensaje final</h2>
              <p className="text-lg mb-4">
                <strong>Derribar el estigma es tarea de todos.</strong> Hablar de salud mental con naturalidad, sin
                juicios ni etiquetas, es un primer paso hacia una sociedad más inclusiva y empática.
              </p>
              <div className="bg-white/10 p-4 rounded-lg mb-4">
                <p className="font-bold text-lg">
                  ⏰ Consultar a tiempo puede marcar la diferencia: la salud mental también se cuida, se trata y se
                  fortalece.
                </p>
              </div>
              <blockquote className="border-l-4 border-white/50 pl-4 italic text-lg">
                "Hablar de salud mental con naturalidad es un acto de valentía que beneficia a toda la sociedad"
                <footer className="text-sm mt-2 opacity-90">— Dra. Josefina Pernas</footer>
              </blockquote>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
              <h3 className="font-poppins-bold text-xl text-primary mb-4">📲 Consultas presenciales y virtuales</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-primary">🔗</span>
                  <a
                    href="https://www.drajosefinapernas.com"
                    className="text-primary hover:underline font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.drajosefinapernas.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-primary">📍</span>
                  <span>
                    Instagram:{" "}
                    <a
                      href="https://instagram.com/drapernasjosefina"
                      className="text-primary hover:underline font-bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @drapernasjosefina
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compartir */}
        <BlogShare title="El estigma en salud mental: una barrera que aún debemos derribar" url={postUrl} />

        {/* Call to action */}
        <div className="bg-contrast p-8 rounded-lg text-center">
          <h3 className="font-poppins-bold text-2xl text-primary mb-4">¿Necesitas apoyo con tu salud mental?</h3>
          <p className="font-poppins-semibold text-muted-foreground mb-6">
            No dejes que el estigma te detenga. Buscar ayuda es un acto de{" "}
            <span className="brand-highlight">valentía y autocuidado</span>. Estoy aquí para acompañarte en tu proceso.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-poppins-bold text-white shadow transition-colors hover:bg-primary/90"
          >
            Agendar consulta
          </Link>
        </div>
      </div>
    </article>
  )
}
