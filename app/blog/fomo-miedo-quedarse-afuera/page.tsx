import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, User, Smartphone, Heart, AlertTriangle } from 'lucide-react'
import { BlogShare } from "@/components/blog-share"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FOMO: el miedo a quedarse afuera - Dra. Josefina Pernas | Salud Mental Digital",
  description:
    "Descubre cómo el Fear of Missing Out (FOMO) afecta tu salud mental en la era de las redes sociales. Aprende estrategias para manejar la ansiedad digital y reconectar contigo mismo.",
  keywords: [
    "FOMO",
    "Fear of Missing Out",
    "ansiedad digital",
    "redes sociales salud mental",
    "miedo quedarse afuera",
    "ansiedad redes sociales",
    "salud mental digital",
    "JOMO",
    "bienestar digital",
  ],
  openGraph: {
    title: "FOMO: el miedo a quedarse afuera - Dra. Josefina Pernas",
    description:
      "Descubre cómo el Fear of Missing Out afecta tu salud mental y aprende estrategias para manejarlo en la era digital.",
    url: "https://www.drajosefinapernas.com/blog/fomo-miedo-quedarse-afuera",
    siteName: "Dra. Josefina Pernas",
    images: [
      {
        url: "/instagram/fomo-articulo.webp",
        width: 1200,
        height: 630,
        alt: "FOMO: el miedo a quedarse afuera - Artículo sobre salud mental digital",
      },
    ],
    locale: "es_ES",
    type: "article",
    authors: ["Dra. Josefina Pernas"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FOMO: el miedo a quedarse afuera",
    description: "Descubre cómo el Fear of Missing Out afecta tu salud mental y aprende estrategias para manejarlo.",
    images: ["/instagram/fomo-articulo.webp"],
  },
}

export default function FOMOBlogPost() {
  const postUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://www.drajosefinapernas.com/blog/fomo-miedo-quedarse-afuera"

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
              FOMO: el miedo a quedarse afuera
            </h1>
            <p className="text-xl text-muted-foreground font-poppins-semibold leading-relaxed">
              Descubre cómo el <span className="brand-highlight">Fear of Missing Out</span> afecta tu salud mental en la
              era digital
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
              <span>8 min de lectura</span>
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
            src="/instagram/fomo-articulo.webp"
            alt="Infografía sobre FOMO - El miedo a quedarse afuera y cómo afecta tu salud mental"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="font-poppins-semibold text-lg text-primary mb-0">
              📱 <strong>¿Te suena familiar?</strong> Revisar constantemente las redes sociales y sentir que todos viven
              mejor que tú...
            </p>
          </div>

          <div className="space-y-6 font-poppins-semibold text-gray-700 leading-relaxed">
            <p>
              En la era de las redes sociales, es cada vez más común sentir que los demás están{" "}
              <span className="brand-highlight font-bold">viviendo más, mejor y más intensamente</span> que uno mismo.
              Ese sentimiento, que puede parecer pasajero o inofensivo, tiene nombre y peso psicológico:{" "}
              <span className="brand-highlight font-bold">FOMO</span>, sigla en inglés para Fear of Missing Out, o
              "miedo a quedarse afuera".
            </p>

            <div className="bg-contrast p-6 rounded-lg border-l-4 border-secondary">
              <h2 className="font-poppins-extrabold text-2xl text-primary mb-4 flex items-center gap-2">
                <Smartphone className="h-6 w-6" />
                ¿Qué es el FOMO?
              </h2>
              <p className="mb-4">
                El FOMO se refiere a la{" "}
                <span className="brand-highlight font-bold">sensación de ansiedad, incomodidad o frustración</span> que
                surge al pensar que otros están disfrutando de experiencias valiosas mientras uno no.
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="font-poppins-bold text-xl text-primary mb-4">📱 Puede presentarse como:</h3>
              <div className="grid gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">📲 Revisión compulsiva:</span> Revisar compulsivamente
                    redes sociales para ver qué hacen los demás.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">😔 Sentimiento de insuficiencia:</span> Sentirse
                    insuficiente al ver logros ajenos.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">🎭 Participación por compromiso:</span> Participar en
                    actividades más por compromiso o miedo a no estar "al día" que por deseo real.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">🤔 Pensamientos recurrentes:</span> Pensar
                    constantemente: "¿Y si me lo pierdo?".
                  </p>
                </div>
              </div>
            </div>

            <p>
              Aunque muchas veces se lo minimiza, el FOMO puede{" "}
              <span className="brand-highlight font-bold">afectar profundamente el bienestar emocional</span>, la autoestima y la calidad de vida.
            </p>

            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
              <h2 className="font-poppins-extrabold text-2xl text-primary mb-4">🧠 ¿Por qué lo sentimos?</h2>
              <p className="mb-4">
                El FOMO tiene <span className="brand-highlight font-bold">raíces evolutivas</span>: como seres sociales,
                pertenecer al grupo fue clave para nuestra supervivencia. En el entorno digital, esta
                necesidad se vuelve constante y, muchas veces, adictiva.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-bold text-primary">
                  Las redes sociales muestran versiones editadas de la vida de los demás. Sin contexto, esas imágenes
                  y logros generan comparaciones dañinas, alimentando la idea de que "nunca es suficiente".
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-red-600 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Efectos en la salud mental
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-lg">📉</span>
                    <span className="font-bold">Ansiedad</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-lg">📉</span>
                    <span className="font-bold">Depresión</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-lg">📉</span>
                    <span className="font-bold">Baja autoestima</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-lg">📉</span>
                    <span className="font-bold">Problemas de concentración</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-lg">📉</span>
                    <span className="font-bold">Trastornos del sueño o insomnio</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-lg">📉</span>
                    <span className="font-bold">Bajo rendimiento escolar o laboral</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-lg">📉</span>
                    <span className="font-bold">Aislamiento social (paradójicamente)</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 font-bold text-red-700">
                El FOMO puede desconectarte de tus propios deseos y necesidades, atrapándote en una dinámica de comparación y urgencia que afecta el presente.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-8 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-green-700 mb-6 flex items-center gap-2">
                <Heart className="h-6 w-6" />
                ¿Qué podés hacer para manejarlo?
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-poppins-bold text-lg text-green-700 mb-3">✔️ Reconocé el FOMO</h3>
                  <p>
                    Identificá cuándo aparece: <span className="brand-highlight font-bold">¿después de usar redes?</span>{" "}
                    ¿en ciertos contextos o con determinadas personas?
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-poppins-bold text-lg text-green-700 mb-3">✔️ Limitá el consumo digital</h3>
                  <p>
                    Establecé <span className="brand-highlight font-bold">horarios para redes</span>. Seguí cuentas que aporten bienestar, no ansiedad.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-poppins-bold text-lg text-green-700 mb-3">✔️ Practicá el JOMO</h3>
                  <p>
                    <span className="brand-highlight font-bold">(Joy of Missing Out)</span> Es posible disfrutar del "no
                    hacer" y elegir desde el deseo genuino, sin presión externa.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-poppins-bold text-lg text-green-700 mb-3">✔️ Cuidá tu salud mental</h3>
                  <p>
                    Si sentís que estos síntomas interfieren en tu vida diaria,{" "}
                    <span className="brand-highlight font-bold">consultar con un profesional es una herramienta fundamental</span>. Hablarlo en un
                    espacio terapéutico puede ayudarte a entender de dónde viene el FOMO y cómo gestionarlo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg">
              <h2 className="font-poppins-extrabold text-2xl mb-4">💭 Conclusión</h2>
              <p className="text-lg mb-4">
                <strong>No estás solo/a</strong> si alguna vez sentiste FOMO. Es una experiencia cada vez más común en el mundo digital. Lo importante es reconocerla a tiempo y buscar apoyo si impacta en tu bienestar.
              </p>
              <blockquote className="border-l-4 border-white/50 pl-4 italic text-lg">
                "No es lo que te ocurre, sino cómo reaccionás lo que importa"
                <footer className="text-sm mt-2 opacity-90">— Dra. Josefina Pernas</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Compartir */}
        <BlogShare title="FOMO: el miedo a quedarse afuera (y cómo afecta tu salud mental)" url={postUrl} />

        {/* Call to action */}
        <div className="bg-contrast p-8 rounded-lg text-center">
          <h3 className="font-poppins-bold text-2xl text-primary mb-4">¿El FOMO está afectando tu bienestar?</h3>
          <p className="font-poppins-semibold text-muted-foreground mb-6">
            No tienes que enfrentarlo solo. Te ayudo a desarrollar estrategias para{" "}
            <span className="brand-highlight">reconectar contigo mismo</span> y encontrar equilibrio en la era digital.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-poppins-bold text-white shadow transition-colors hover:bg-primary/90"
          >
            Agendar consulta sobre ansiedad digital
          </Link>
        </div>
      </div>
    </article>
  )
}
