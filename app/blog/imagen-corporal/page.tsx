import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, User, Brain, Heart, Eye, AlertTriangle } from "lucide-react"
import { BlogShare } from "@/components/blog-share"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Imagen corporal: cómo nos vemos, pensamos y sentimos sobre nuestro cuerpo - Dra. Josefina Pernas",
  description:
    "Descubre qué es la imagen corporal y cómo influye en tu bienestar emocional. Aprende sobre los componentes perceptivo, cognitivo, emocional y conductual de la percepción corporal.",
  keywords: [
    "imagen corporal",
    "percepción corporal",
    "autoestima",
    "trastornos alimentarios",
    "trastorno dismórfico corporal",
    "ansiedad corporal",
    "bienestar emocional",
    "salud mental",
    "autocompasión",
  ],
  openGraph: {
    title: "Imagen corporal: cómo nos vemos, pensamos y sentimos sobre nuestro cuerpo",
    description:
      "Descubre qué es la imagen corporal y cómo influye en tu bienestar emocional. Guía completa sobre percepción corporal y salud mental.",
    url: "https://www.drajosefinapernas.com/blog/imagen-corporal",
    siteName: "Dra. Josefina Pernas",
    images: [
      {
        url: "/imagen-corporal.webp",
        width: 1200,
        height: 630,
        alt: "Imagen corporal: cómo nos vemos, pensamos y sentimos sobre nuestro cuerpo",
      },
    ],
    locale: "es_ES",
    type: "article",
    authors: ["Dra. Josefina Pernas"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imagen corporal: cómo nos vemos, pensamos y sentimos sobre nuestro cuerpo",
    description: "Descubre qué es la imagen corporal y cómo influye en tu bienestar emocional.",
    images: ["/imagen-corporal.webp"],
  },
}

export default function ImagenCorporalBlogPost() {
  const postUrl =
    typeof window !== "undefined" ? window.location.href : "https://www.drajosefinapernas.com/blog/imagen-corporal"

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
              Imagen corporal: cómo nos vemos, pensamos y sentimos sobre nuestro cuerpo
            </h1>
            <p className="text-xl text-muted-foreground font-poppins-semibold leading-relaxed">
              Descubre qué es la <span className="brand-highlight">imagen corporal</span> y cómo influye en tu bienestar
              emocional y calidad de vida
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
              <span>7 min de lectura</span>
            </div>
            <time>1 de septiembre de 2025</time>
          </div>
        </header>

        {/* Imagen principal */}
        <div className="relative aspect-square md:aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/imagen-corporal.webp"
            alt="Ilustración sobre imagen corporal mostrando diferentes percepciones de uno mismo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="font-poppins-semibold text-lg text-primary mb-0">
              🪞 <strong>¿Te has preguntado alguna vez</strong> por qué a veces te ves diferente en el espejo de lo que
              realmente eres?
            </p>
          </div>

          <div className="space-y-6 font-poppins-semibold text-gray-700 leading-relaxed">
            <p>
              La <span className="brand-highlight font-bold">imagen corporal</span> es el conjunto de percepciones,
              pensamientos y emociones que una persona tiene respecto a su propio cuerpo. No se limita solo a cómo uno
              se ve físicamente, sino también a cómo cree que los demás lo perciben y al grado de satisfacción o
              insatisfacción con esas características.
            </p>

            <div className="bg-contrast p-6 rounded-lg border-l-4 border-secondary">
              <h2 className="font-poppins-extrabold text-2xl text-primary mb-4 flex items-center gap-2">
                <Brain className="h-6 w-6" />
                Componentes de la imagen corporal
              </h2>
              <p className="mb-4">
                La imagen corporal es un concepto complejo que abarca diferentes dimensiones de nuestra experiencia con
                nuestro cuerpo:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="font-poppins-bold text-lg text-blue-700 mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  1. Perceptivo
                </h3>
                <p>
                  Cómo percibimos nuestro cuerpo: tamaño, forma, proporciones. Esta percepción puede estar distorsionada
                  y no coincidir con la realidad física.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="font-poppins-bold text-lg text-purple-700 mb-3 flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  2. Cognitivo
                </h3>
                <p>
                  Las creencias y pensamientos que tenemos sobre nuestro cuerpo. Incluye las ideas sobre lo que es
                  "normal" o "atractivo".
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="font-poppins-bold text-lg text-pink-700 mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  3. Emocional
                </h3>
                <p>
                  Los sentimientos (positivos o negativos) asociados al cuerpo. Puede incluir satisfacción, vergüenza,
                  orgullo o ansiedad.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="font-poppins-bold text-lg text-green-700 mb-3">4. Conductual</h3>
                <p>
                  Las acciones derivadas, como evitar ciertas actividades, mirarse excesivamente al espejo o adoptar
                  conductas de autocuidado o restricción.
                </p>
              </div>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg my-8">
              <Image
                src="/imagen-corporal-2.webp"
                alt="Ilustración mostrando la distorsión de la imagen corporal y factores que la influyen"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20">
              <h2 className="font-poppins-extrabold text-2xl text-primary mb-4">🌍 Factores que influyen</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary">
                  <h3 className="font-poppins-bold text-lg text-secondary mb-2">Culturales y sociales</h3>
                  <p>
                    Ideales de belleza transmitidos por medios, moda y redes sociales que establecen estándares muchas
                    veces inalcanzables.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary">
                  <h3 className="font-poppins-bold text-lg text-secondary mb-2">Familiares y de pares</h3>
                  <p>
                    Comentarios, comparaciones o críticas del entorno cercano que pueden marcar profundamente la
                    autopercepción.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary">
                  <h3 className="font-poppins-bold text-lg text-secondary mb-2">Psicológicos</h3>
                  <p>
                    Autoestima, perfeccionismo, historia de traumas que influyen en cómo procesamos la información sobre
                    nuestro cuerpo.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary">
                  <h3 className="font-poppins-bold text-lg text-secondary mb-2">Biológicos</h3>
                  <p>
                    Cambios puberales, embarazo, envejecimiento o enfermedades que afectan la apariencia y requieren
                    adaptación psicológica.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-red-600 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Relevancia en psiquiatría y psicología
              </h2>
              <p className="mb-4">
                Una <span className="font-bold text-red-700">imagen corporal negativa</span> puede estar asociada a
                diversos trastornos de salud mental:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-lg">⚠️</span>
                    <span className="font-bold">Trastornos de la conducta alimentaria</span>
                  </div>
                  <p className="text-sm text-red-700 ml-6">Anorexia, bulimia, trastorno por atracón</p>

                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-lg">⚠️</span>
                    <span className="font-bold">Trastorno dismórfico corporal</span>
                  </div>
                  <p className="text-sm text-red-700 ml-6">Preocupación obsesiva por defectos percibidos</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-lg">⚠️</span>
                    <span className="font-bold">Ansiedad social y depresión</span>
                  </div>
                  <p className="text-sm text-red-700 ml-6">Evitación social por insatisfacción corporal</p>

                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-lg">⚠️</span>
                    <span className="font-bold">Baja autoestima</span>
                  </div>
                  <p className="text-sm text-red-700 ml-6">Deterioro en la calidad de vida general</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-8 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-green-700 mb-6 flex items-center gap-2">
                <Heart className="h-6 w-6" />
                Imagen corporal positiva
              </h2>

              <p className="mb-6 text-green-800">
                En cambio, una <span className="font-bold">imagen corporal positiva</span> favorece:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-poppins-bold text-green-700 mb-2">✨ Autocompasión</h3>
                  <p className="text-sm">Tratarse con amabilidad y comprensión</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-poppins-bold text-green-700 mb-2">✨ Autoestima saludable</h3>
                  <p className="text-sm">Valoración equilibrada de uno mismo</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-poppins-bold text-green-700 mb-2">✨ Conductas saludables</h3>
                  <p className="text-sm">Cuidado del cuerpo desde el amor, no el castigo</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <h3 className="font-poppins-bold text-green-700 mb-2">✨ Bienestar emocional</h3>
                  <p className="text-sm">Mayor satisfacción con la vida en general</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg">
              <h2 className="font-poppins-extrabold text-2xl mb-4">💭 Reflexión final</h2>
              <p className="text-lg mb-4">
                La imagen corporal es mucho más que lo que vemos en el espejo. Es una construcción compleja que influye
                profundamente en nuestro bienestar emocional y calidad de vida.
              </p>
              <blockquote className="border-l-4 border-white/50 pl-4 italic text-lg">
                "Trabajar en una imagen corporal saludable es un acto de amor propio que trasciende la apariencia
                física"
                <footer className="text-sm mt-2 opacity-90">— Dra. Josefina Pernas</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Compartir */}
        <BlogShare title="Imagen corporal: cómo nos vemos, pensamos y sentimos sobre nuestro cuerpo" url={postUrl} />

        {/* Call to action */}
        <div className="bg-contrast p-8 rounded-lg text-center">
          <h3 className="font-poppins-bold text-2xl text-primary mb-4">¿Tu imagen corporal afecta tu bienestar?</h3>
          <p className="font-poppins-semibold text-muted-foreground mb-6">
            Si sientes que tu relación con tu cuerpo está impactando tu calidad de vida, te ayudo a desarrollar una{" "}
            <span className="brand-highlight">imagen corporal más saludable y compasiva</span>.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-poppins-bold text-white shadow transition-colors hover:bg-primary/90"
          >
            Agendar consulta sobre imagen corporal
          </Link>
        </div>
      </div>
    </article>
  )
}
