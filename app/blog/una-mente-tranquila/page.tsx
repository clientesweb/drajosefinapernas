import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, User } from "lucide-react"
import { BlogShare } from "@/components/blog-share"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Una Mente Tranquila - Dra. Josefina Pernas | Calma Mental y Bienestar",
  description:
    "¿Te ha pasado que no puedes parar de pensar? Descubre cómo encontrar la calma mental y mejorar tu bienestar emocional con técnicas profesionales.",
  keywords: [
    "mente tranquila",
    "calma mental",
    "no puedo parar de pensar",
    "concentración",
    "ansiedad pensamientos",
    "relajación mental",
    "bienestar emocional",
    "técnicas relajación",
  ],
  openGraph: {
    title: "Una Mente Tranquila - Dra. Josefina Pernas",
    description: "Descubre cómo encontrar la calma mental y mejorar tu bienestar emocional.",
    url: "https://www.drajosefinapernas.com/blog/una-mente-tranquila",
    siteName: "Dra. Josefina Pernas",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-1EE5UxJekiqdgAtQABX4ZJ-iZjn4RGaFos3HcyqMYjvSLw3jpYqpU.webp",
        width: 1200,
        height: 630,
        alt: "Una Mente Tranquila - Artículo sobre calma mental",
      },
    ],
    locale: "es_ES",
    type: "article",
    authors: ["Dra. Josefina Pernas"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Una Mente Tranquila - Dra. Josefina Pernas",
    description: "Descubre cómo encontrar la calma mental y mejorar tu bienestar emocional.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-1EE5UxJekiqdgAtQABX4ZJ-iZjn4RGaFos3HcyqMYjvSLw3jpYqpU.webp",
    ],
  },
}

export default function CalmMindBlogPost() {
  const postUrl =
    typeof window !== "undefined" ? window.location.href : "https://www.drajosefinapernas.com/blog/una-mente-tranquila"

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
              Una Mente Tranquila
            </h1>
            <p className="text-xl text-muted-foreground font-poppins-semibold leading-relaxed">
              Descubre cómo encontrar la <span className="brand-highlight">calma mental</span> y mejorar tu bienestar
              emocional
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
              <span>5 min de lectura</span>
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
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-1EE5UxJekiqdgAtQABX4ZJ-iZjn4RGaFos3HcyqMYjvSLw3jpYqpU.webp"
            alt="Persona meditando al atardecer en la montaña"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="font-poppins-semibold text-lg text-primary mb-0">
              💭 <strong>¿Te suena familiar?</strong> No poder parar de pensar, perder la concentración o sentirte
              intranquilo sin razón aparente...
            </p>
          </div>

          <div className="space-y-6 font-poppins-semibold text-gray-700 leading-relaxed">
            <p>
              Alguna vez te paso, <span className="brand-highlight font-bold">¿que no podes para de pensar?</span> o…
              que estás haciendo una actividad y no te podés concentrar?
            </p>

            <p>
              Estás teniendo una conversación y al rato, te das cuenta…
              <span className="brand-highlight font-bold">que no sabes de que te están hablando</span>…
            </p>

            <p>Lees un libro, y tenes que leer más de una vez para poder concentrarte…</p>

            <p>
              Vas a un lugar hermoso, estas en medio de la montaña, la playa o un lugar paradisiaco, pero…
              <span className="brand-highlight font-bold">estas intranquilo y no sabes por qué</span>.
            </p>

            <div className="bg-contrast p-6 rounded-lg border-l-4 border-secondary">
              <h3 className="font-poppins-bold text-xl text-primary mb-3">
                🧠 Señales de que tu mente necesita descansar
              </h3>
              <p>
                Si tenes alguno de estos síntomas o viviste a repetición alguna de estas situaciones, quiere decir que{" "}
                <span className="brand-highlight font-bold">tu mente necesita descansar</span>. Esto es algo que se
                puede aprender, y entrenar, llevar la mente a un lugar de reposo.
              </p>
            </div>

            <p>
              Si notas que perdes la capacidad de concentrarte, de prestar atención o que estas irritable, no siempre
              tiene que estar vinculado a un problema cognitivo. Muchas veces nos sentimos impacientes, y esto hace que{" "}
              <span className="brand-highlight font-bold">perdamos el control de las emociones con facilidad</span>.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="font-poppins-bold text-xl text-primary mb-4">⚡ El mito de la vida "normal" agitada</h3>
              <p>
                Estamos acostumbrados a que la vida ¨normal¨ es una vida agitada. Si no hacemos muchas actividades, no
                somos exitosos. Y a veces, <span className="brand-highlight font-bold">menos es más</span>.
              </p>
              <ul className="mt-4 space-y-2">
                <li>• Actividad física extrema</li>
                <li>• Redes sociales constantes</li>
                <li>• Múltiples trabajos y compromisos</li>
                <li>• Entretenimiento sin pausa</li>
              </ul>
              <p className="mt-4 font-bold text-primary">
                El lema parece ser: "llenarnos de actividades sino fracasas". Una buena forma de entretener al cerebro
                que solo nos aportará malos resultados.
              </p>
            </div>

            <p>
              <span className="brand-highlight font-bold">¿Y qué pensas que hay detrás de tantas actividades?</span>
              ...hay dolor, sufrimiento, ansiedad, falta de reflexión, negación, frustración, falta de compromiso,
              preocupación, estrés y dificultad para enfrentarnos a nuestros problemas y dificultades.
            </p>

            <blockquote className="border-l-4 border-primary bg-primary/5 p-6 italic text-lg">
              "La vida es, con todo lo que nos toca, lo bueno y lo malo, lo fácil y lo difícil, lo que va rápido y lo
              que va lento. La vida transcurre más allá de nuestra forma de vivirla."
            </blockquote>

            <p>
              Y claramente estar <span className="brand-highlight font-bold">¨entretenidos o anestesiados¨</span>, super
              ocupados no es una solución.
            </p>

            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
              <h3 className="font-poppins-bold text-xl text-primary mb-4">🌱 Caminos hacia el bienestar</h3>
              <p>
                Existen muchas formas de abordar estas situaciones y una de ellas es{" "}
                <span className="brand-highlight font-bold">recurriendo a las consultas con Salud mental</span>, además
                de aprender a gestionar herramientas e implementar hábitos que mejoren nuestra calidad de vida.
              </p>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="font-poppins-bold text-2xl mb-4">✨ El camino hacia una mente tranquila</h3>
              <p className="text-lg">
                Aprender a frenar, detectar cuales son nuestras dificultades, encontrar la calma, conectar nuestra mente
                con nuestro cuerpo y poder tomas decisiones acertadas es una forma de{" "}
                <strong>mejorar nuestro estilo de vida y alcanzar el bienestar físico y emocional</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Compartir */}
        <BlogShare title="Una Mente Tranquila" url={postUrl} />

        {/* Call to action */}
        <div className="bg-contrast p-8 rounded-lg text-center">
          <h3 className="font-poppins-bold text-2xl text-primary mb-4">¿Te identificas con estos síntomas?</h3>
          <p className="font-poppins-semibold text-muted-foreground mb-6">
            No estás solo. Podemos trabajar juntos para encontrar la{" "}
            <span className="brand-highlight">calma mental</span> que necesitas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-poppins-bold text-white shadow transition-colors hover:bg-primary/90"
          >
            Agendar una consulta
          </Link>
        </div>
      </div>
    </article>
  )
}
