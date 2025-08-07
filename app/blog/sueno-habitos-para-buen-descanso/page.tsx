import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, User, Moon, Sun } from "lucide-react"
import { BlogShare } from "@/components/blog-share"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sueño: Hábitos para lograr un buen descanso - Dra. Josefina Pernas | Higiene del Sueño",
  description:
    "Descubre hábitos para mejorar la calidad de tu sueño y transformar tu bienestar general. Consejos profesionales sobre higiene del sueño y descanso reparador.",
  keywords: [
    "sueño",
    "higiene del sueño",
    "hábitos sueño",
    "insomnio",
    "descanso",
    "calidad sueño",
    "trastornos sueño",
    "dormir mejor",
    "rutina sueño",
  ],
  openGraph: {
    title: "Sueño: Hábitos para lograr un buen descanso - Dra. Josefina Pernas",
    description: "Descubre hábitos para mejorar la calidad de tu sueño y transformar tu bienestar general.",
    url: "https://www.drajosefinapernas.com/blog/sueno-habitos-para-buen-descanso",
    siteName: "Dra. Josefina Pernas",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-R3iq48kZb7aTDqaUDmdEnx-qhtYu1UZLdrsMXb8sfSCXHejFomMGo.webp",
        width: 1200,
        height: 630,
        alt: "Sueño: Hábitos para lograr un buen descanso",
      },
    ],
    locale: "es_ES",
    type: "article",
    authors: ["Dra. Josefina Pernas"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sueño: Hábitos para lograr un buen descanso",
    description: "Descubre hábitos para mejorar la calidad de tu sueño y transformar tu bienestar general.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-R3iq48kZb7aTDqaUDmdEnx-qhtYu1UZLdrsMXb8sfSCXHejFomMGo.webp",
    ],
  },
}

export default function SleepHabitsBlogPost() {
  const postUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://www.drajosefinapernas.com/blog/sueno-habitos-para-buen-descanso"

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
              Sueño: Hábitos para lograr un buen descanso
            </h1>
            <p className="text-xl text-muted-foreground font-poppins-semibold leading-relaxed">
              Descubre cómo mejorar la <span className="brand-highlight">calidad de tu sueño</span> y transformar tu
              bienestar general
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-R3iq48kZb7aTDqaUDmdEnx-qhtYu1UZLdrsMXb8sfSCXHejFomMGo.webp"
            alt="Habitación acogedora con iluminación cálida, ideal para un buen descanso"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="font-poppins-semibold text-lg text-primary mb-0">
              😴 <strong>Dato clave:</strong> La mayoría de los adultos necesitan dormir entre{" "}
              <span className="brand-highlight font-bold">7 y 8 horas al día</span> para un funcionamiento óptimo.
            </p>
          </div>

          <div className="space-y-6 font-poppins-semibold text-gray-700 leading-relaxed">
            <p>
              La calidad del sueño depende también de{" "}
              <span className="brand-highlight font-bold">
                la actividad diurna, de los hábitos y del estilo de vida
              </span>{" "}
              que tenemos.
            </p>

            <div className="bg-contrast p-6 rounded-lg border-l-4 border-secondary">
              <h3 className="font-poppins-bold text-xl text-primary mb-3 flex items-center gap-2">
                <Moon className="h-5 w-5" />
                ¿Qué sucede durante el sueño?
              </h3>
              <p>
                Durante el sueño ocurren muchos{" "}
                <span className="brand-highlight font-bold">procesos fisiológicos necesarios</span> para que el
                organismo este en modo "recuperación".
              </p>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="font-poppins-bold text-xl text-primary mb-4">🔄 Procesos vitales durante el descanso</h3>
              <p>En el sueño se activan diferentes procesos como:</p>
              <ul className="mt-4 space-y-2 text-primary">
                <li>
                  • <strong>Control de los ejes hormonales</strong>
                </li>
                <li>
                  • <strong>Regeneración celular</strong>
                </li>
                <li>
                  • <strong>Regulación de la temperatura corporal</strong>
                </li>
              </ul>
              <p className="mt-4 font-bold text-primary">
                Todos necesarios para mantener el equilibrio u homeostasis del ser humano.
              </p>
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg border border-secondary/20">
              <h2 className="font-poppins-extrabold text-2xl text-primary mb-6 flex items-center gap-2">
                <Sun className="h-6 w-6" />
                Pautas de higiene del sueño
              </h2>

              <div className="grid gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">🍽️ Alimentación:</span> Cenar dos horas antes de la hora
                    de dormir y evitar alcohol, bebidas energizantes y aquellas que contengan cafeína.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">🚭 Hábitos:</span> No fumar
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">💧 Hidratación:</span> Reducir la ingesta de líquidos en
                    la hora previa a acostarse
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">⏰ Rutina:</span> Mantener una rutina de sueño
                    (acostarse y levantarse en horarios similares)
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">📱 Pantallas:</span> Mantener una rutina de sueño sin
                    pantallas una hora antes de dormir, apagar luces de techo y utilizar veladores de luz cálida
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">🔇 Ruido:</span> Utilizar tapones para los oídos, ya que
                    ayudan a aislar el ruido y a concentrarse en la respiración
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">🛏️ Espacio:</span> No utilizar pantallas ni leer en la
                    cama. La cama es para dormir.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">💡 Luz azul:</span> Utilizar filtros de luz en el
                    celular y computadora a partir de 20 horas
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">🧘 Meditación:</span> La meditación diaria puede ser
                    útil
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">😴 Momento adecuado:</span> Ir a la cama solo cuando
                    tenemos sueño
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                  <p>
                    <span className="brand-highlight font-bold">☀️ Siestas:</span> Evitar las siestas, o que sean
                    reducidas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="font-poppins-bold text-2xl mb-4">✨ Beneficios de una buena higiene del sueño</h3>
              <p className="text-lg">
                Implementar pautas de higiene del sueño y cambiar tus hábitos te va a permitir tener un{" "}
                <strong>mejor rendimiento diurno, un sueño de calidad y mejorar tu estilo de vida</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Compartir */}
        <BlogShare title="Sueño: Hábitos para lograr un buen descanso y mejorar tu calidad de vida" url={postUrl} />

        {/* Call to action */}
        <div className="bg-contrast p-8 rounded-lg text-center">
          <h3 className="font-poppins-bold text-2xl text-primary mb-4">¿Tienes problemas para dormir?</h3>
          <p className="font-poppins-semibold text-muted-foreground mb-6">
            Un buen descanso es fundamental para tu <span className="brand-highlight">salud mental y física</span>. Te
            ayudo a desarrollar hábitos saludables.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-poppins-bold text-white shadow transition-colors hover:bg-primary/90"
          >
            Consultar sobre trastornos del sueño
          </Link>
        </div>
      </div>
    </article>
  )
}
