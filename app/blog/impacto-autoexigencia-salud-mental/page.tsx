import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, User, Brain, Heart, AlertTriangle, BookOpen } from "lucide-react"
import { BlogShare } from "@/components/blog-share"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impacto de la autoexigencia en la salud mental - Dra. Josefina Pernas",
  description:
    "Descubre cómo la autoexigencia extrema se relaciona con el perfeccionismo maladaptativo y su impacto en la salud mental. Aportes teóricos y evidencia empírica.",
  keywords: [
    "autoexigencia",
    "perfeccionismo",
    "salud mental",
    "autocrítica",
    "burnout",
    "ansiedad",
    "depresión",
    "autocompasión",
    "bienestar emocional",
    "terapia cognitivo-conductual",
  ],
  openGraph: {
    title: "Impacto de la autoexigencia en la salud mental: aportes teóricos y evidencia empírica",
    description:
      "Análisis sobre cómo la autoexigencia extrema puede convertirse en un factor de vulnerabilidad para la salud mental.",
    url: "https://www.drajosefinapernas.com/blog/impacto-autoexigencia-salud-mental",
    siteName: "Dra. Josefina Pernas",
    images: [
      {
        url: "/portada-Impacto-de-la-autoexigencia-en-la-salud-mental.jpg",
        width: 1200,
        height: 630,
        alt: "Impacto de la autoexigencia en la salud mental",
      },
    ],
    locale: "es_ES",
    type: "article",
    authors: ["Dra. Josefina Pernas"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impacto de la autoexigencia en la salud mental",
    description:
      "Análisis sobre cómo la autoexigencia extrema puede convertirse en un factor de vulnerabilidad para la salud mental.",
    images: ["/portada-Impacto-de-la-autoexigencia-en-la-salud-mental.jpg"],
  },
}

export default function AutoexigenciaSaludMentalBlogPost() {
  const postUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://www.drajosefinapernas.com/blog/impacto-autoexigencia-salud-mental"

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
              Impacto de la autoexigencia en la salud mental: aportes teóricos y evidencia empírica
            </h1>
            <p className="text-xl text-muted-foreground font-poppins-semibold leading-relaxed">
              La autoexigencia ha sido tradicionalmente asociada a la motivación y el logro de objetivos. Sin embargo,
              cuando adopta una forma rígida y autocrítica, puede convertirse en un{" "}
              <span className="brand-highlight">factor de vulnerabilidad para la salud mental</span>.
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
            src="/portada-Impacto-de-la-autoexigencia-en-la-salud-mental.jpg"
            alt="Persona agotada sobre escritorio con libros y computadora"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <h2 className="font-poppins-extrabold text-2xl text-primary mb-4">Introducción</h2>
            <p className="font-poppins-semibold text-lg mb-0 leading-relaxed">
              La autoexigencia ha sido tradicionalmente asociada a la motivación, el rendimiento y el logro de
              objetivos. Sin embargo, múltiples modelos psicológicos han señalado que, cuando adopta una forma{" "}
              <span className="brand-highlight font-bold">rígida y autocrítica</span>, puede convertirse en un factor de
              vulnerabilidad para la salud mental. En este sentido, la autoexigencia extrema se vincula estrechamente
              con constructos como el <span className="brand-highlight font-bold">perfeccionismo maladaptativo</span>,
              la autocrítica y la regulación emocional disfuncional.
            </p>
          </div>

          <div className="space-y-6 font-poppins-semibold text-gray-700 leading-relaxed">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-8 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-blue-700 mb-6 flex items-center gap-2">
                <Brain className="h-6 w-6" />
                Marco teórico
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-poppins-bold text-lg text-blue-800 mb-3">
                    Perfeccionismo multidimensional (Hewitt y Flett, 1991)
                  </h3>
                  <p className="mb-3">
                    Desde el modelo del perfeccionismo multidimensional, Hewitt y Flett distinguen entre el
                    perfeccionismo orientado a uno mismo y aquel{" "}
                    <span className="brand-highlight font-bold">socialmente prescrito</span>, este último asociado de
                    manera consistente con mayor psicopatología.
                  </p>
                  <p>
                    La autoexigencia patológica se caracteriza por{" "}
                    <span className="brand-highlight font-bold">
                      estándares personales inflexibles, miedo al fracaso
                    </span>{" "}
                    y una autovaloración condicionada al desempeño, lo que incrementa la vulnerabilidad al estrés
                    psicológico.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-poppins-bold text-lg text-blue-800 mb-3">
                    Terapia centrada en la compasión (Gilbert, 2009)
                  </h3>
                  <p>
                    Gilbert, desde el enfoque de la terapia centrada en la compasión, describe la autocrítica severa
                    como la <span className="brand-highlight font-bold">activación crónica del sistema de amenaza</span>
                    , generando estados emocionales de ansiedad, vergüenza y culpa.
                  </p>
                  <p className="mt-3">
                    En personas altamente autoexigentes, el descanso o el error son vividos como amenazas, dificultando
                    el acceso a estados de calma y seguridad.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-poppins-bold text-lg text-blue-800 mb-3">
                    Modelo del burnout (Maslach y Leiter, 2016)
                  </h3>
                  <p>
                    El modelo del burnout de Maslach y Leiter señala que la autoexigencia interna excesiva, combinada
                    con contextos de alta demanda, favorece el{" "}
                    <span className="brand-highlight font-bold">agotamiento emocional y la despersonalización</span>,
                    incluso en ausencia de presiones externas explícitas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-8 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-red-600 mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Impacto en la salud mental
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="mb-4">
                    La evidencia empírica muestra que altos niveles de autoexigencia y perfeccionismo desadaptativo se
                    asocian con:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-red-700">
                      <span className="text-xl mt-1">❌</span>
                      <span>
                        <strong>Mayor prevalencia</strong> de trastornos de ansiedad
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-red-700">
                      <span className="text-xl mt-1">❌</span>
                      <span>
                        <strong>Depresión mayor</strong> e ideación suicida
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-red-700">
                      <span className="text-xl mt-1">❌</span>
                      <span>
                        <strong>Trastornos psicosomáticos</strong> y del sueño
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-red-700">
                      <span className="text-xl mt-1">❌</span>
                      <span>
                        <strong>Dificultades en la regulación emocional</strong>
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-red-700">
                      <span className="text-xl mt-1">❌</span>
                      <span>
                        <strong>Menor bienestar subjetivo</strong>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-100 p-6 rounded-lg">
                  <p className="text-red-800 font-poppins-bold mb-3">⚠️ Contexto sociocultural</p>
                  <p className="text-red-900">
                    En contextos socioculturales que refuerzan la{" "}
                    <span className="font-bold">productividad constante</span> y el rendimiento individual, la
                    autoexigencia suele ser reforzada y normalizada, dificultando su identificación como factor de
                    riesgo. Esto favorece consultas tardías y cronificación del malestar psicológico.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-sm text-muted-foreground italic">
                    Referencia: Limburg, K., Watson, H. J., Hagger, M. S., & Egan, S. J. (2017). The relationship
                    between perfectionism and psychopathology: A meta-analysis. Journal of Clinical Psychology, 73(10),
                    1301–1326.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-8 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-green-700 mb-6 flex items-center gap-2">
                <Heart className="h-6 w-6" />
                Implicancias clínicas
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="mb-4">Abordar la autoexigencia implica trabajar sobre varios aspectos fundamentales:</p>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="font-poppins-bold text-green-700 mb-2">🧠 Flexibilización cognitiva</p>
                      <p className="text-sm">
                        Trabajar sobre pensamientos rígidos y creencias disfuncionales sobre el rendimiento y el valor
                        personal.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="font-poppins-bold text-green-700 mb-2">💚 Redefinición del valor personal</p>
                      <p className="text-sm">
                        Construir una autovaloración que no esté condicionada exclusivamente al desempeño y los logros
                        externos.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="font-poppins-bold text-green-700 mb-2">🤗 Desarrollo de autocompasión</p>
                      <p className="text-sm">
                        Cultivar una actitud más amable y comprensiva hacia uno mismo, especialmente frente a errores o
                        limitaciones.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-poppins-bold text-lg text-green-800 mb-3">
                    Intervenciones terapéuticas efectivas
                  </h3>
                  <div className="space-y-2">
                    <p className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>
                        <strong>Terapia cognitivo-conductual (TCC)</strong> para modificar patrones de pensamiento
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>
                        <strong>Terapias de tercera ola</strong> (ACT, Mindfulness) para la regulación emocional
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>
                        <strong>Enfoques centrados en la compasión</strong> para reducir la autocrítica
                      </span>
                    </p>
                  </div>
                </div>

                <div className="bg-green-100 p-6 rounded-lg">
                  <p className="text-green-800 font-poppins-bold mb-3">🌱 Prevención en salud mental</p>
                  <p className="text-green-900">
                    Promover un modelo de <span className="brand-highlight font-bold">exigencia saludable</span>{" "}
                    —compatible con límites y cuidado personal— constituye una estrategia relevante de prevención en
                    salud mental.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-contrast border-l-4 border-primary p-8 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-primary mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Referencias bibliográficas (APA 7.ª ed.)
              </h2>

              <div className="space-y-4 text-sm">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-poppins-semibold">
                    Gilbert, P. (2009). <em>The compassionate mind</em>. Constable & Robinson.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-poppins-semibold">
                    Hewitt, P. L., & Flett, G. L. (1991). Perfectionism in the self and social contexts:
                    Conceptualization, assessment, and association with psychopathology.{" "}
                    <em>Journal of Personality and Social Psychology</em>, 60(3), 456–470.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-poppins-semibold">
                    Limburg, K., Watson, H. J., Hagger, M. S., & Egan, S. J. (2017). The relationship between
                    perfectionism and psychopathology: A meta-analysis. <em>Journal of Clinical Psychology</em>, 73(10),
                    1301–1326.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-poppins-semibold">
                    Maslach, C., & Leiter, M. P. (2016). Understanding the burnout experience: Recent research and its
                    implications for psychiatry. <em>World Psychiatry</em>, 15(2), 103–111.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg border-2 border-primary/30">
              <h2 className="font-poppins-extrabold text-2xl text-primary mb-4">Conclusión</h2>
              <p className="text-lg leading-relaxed">
                La autoexigencia, cuando se vuelve rígida y autocrítica, representa un{" "}
                <span className="brand-highlight font-bold">factor de riesgo significativo</span> para la salud mental.
                Reconocerla, trabajarla terapéuticamente y promover una cultura de autocompasión y límites saludables es
                esencial para el bienestar emocional individual y colectivo.
              </p>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="border-t pt-8">
          <BlogShare url={postUrl} title="Impacto de la autoexigencia en la salud mental" />
        </div>

        {/* Call to Action */}
        <div className="bg-primary/10 p-8 rounded-xl border-2 border-primary/20">
          <h3 className="font-poppins-bold text-2xl text-primary mb-4 text-center">¿Te sentís identificado/a?</h3>
          <p className="text-center text-muted-foreground font-poppins-semibold mb-6 leading-relaxed">
            Si notás que la autoexigencia está afectando tu bienestar emocional, es importante buscar apoyo profesional.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contacto"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-poppins-bold transition-colors inline-flex items-center gap-2"
            >
              Consultar ahora
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Link
            href="/blog"
            className="flex items-center text-primary hover:underline font-poppins-semibold transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </article>
  )
}
