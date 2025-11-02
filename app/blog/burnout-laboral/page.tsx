import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, User, AlertTriangle, Heart, Zap, Brain } from "lucide-react"
import { BlogShare } from "@/components/blog-share"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Burnout laboral: cuando la empresa te consume por dentro - Dra. Josefina Pernas",
  description:
    "Descubre qué es el síndrome de burnout, sus causas, señales de alerta y estrategias efectivas para prevenirlo y afrontarlo. Guía integral sobre salud mental laboral.",
  keywords: [
    "burnout laboral",
    "síndrome de burnout",
    "estrés laboral",
    "agotamiento emocional",
    "salud mental trabajo",
    "prevención burnout",
    "estrés ocupacional",
    "bienestar laboral",
    "despersonalización",
    "realización personal",
  ],
  openGraph: {
    title: "Burnout laboral: cuando la empresa te consume por dentro",
    description:
      "Guía completa sobre el síndrome de burnout: qué es, por qué aparece, cómo detectarlo y estrategias de prevención.",
    url: "https://www.drajosefinapernas.com/blog/burnout-laboral",
    siteName: "Dra. Josefina Pernas",
    images: [
      {
        url: "/portada-del-burnout-laboral.png",
        width: 1200,
        height: 630,
        alt: "Burnout laboral - Agotamiento emocional y estrés en el trabajo",
      },
    ],
    locale: "es_ES",
    type: "article",
    authors: ["Dra. Josefina Pernas"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burnout laboral: cuando la empresa te consume por dentro",
    description: "Descubre qué es el burnout, cómo reconocerlo y qué hacer para prevenirlo.",
    images: ["/portada-del-burnout-laboral.png"],
  },
}

export default function BurnoutLaboralBlogPost() {
  const postUrl =
    typeof window !== "undefined" ? window.location.href : "https://www.drajosefinapernas.com/blog/burnout-laboral"

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
              Burnout laboral: cuando la empresa te consume por dentro
            </h1>
            <p className="text-xl text-muted-foreground font-poppins-semibold leading-relaxed">
              Descubre qué es el <span className="brand-highlight">síndrome de burnout</span>, por qué aparece, cómo
              detectarlo y qué se puede hacer para prevenirlo y afrontarlo de forma eficaz.
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
            src="/portada-del-burnout-laboral.png"
            alt="Mujer estresada rodeada de presiones laborales, reloj, tareas y dispositivos digitales"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="font-poppins-semibold text-lg text-primary mb-0">
              💼 En el entorno laboral actual —marcado por exigencias constantes, metas elevadas y cambios acelerados—
              surge un fenómeno que afecta tanto la salud de las personas como la productividad de las organizaciones:
              el <strong>Síndrome de Burnout</strong> o "agotamiento profesional".
            </p>
          </div>

          <div className="space-y-6 font-poppins-semibold text-gray-700 leading-relaxed">
            <div className="bg-contrast p-6 rounded-lg border-l-4 border-secondary">
              <h2 className="font-poppins-extrabold text-2xl text-primary mb-4 flex items-center gap-2">
                <Brain className="h-6 w-6" />
                ¿Qué es el síndrome de burnout?
              </h2>
              <p className="mb-6">
                El síndrome de burnout o <span className="brand-highlight font-bold">"trabajador quemado"</span> es un
                estado de agotamiento emocional, mental y físico que se genera a partir de una exposición prolongada a
                situaciones de <span className="brand-highlight font-bold">estrés ocupacional crónico</span>. Los tres
                pilares clásicos son:
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-orange-400">
                  <h3 className="font-poppins-bold text-lg text-orange-700 mb-2">🔥 Agotamiento emocional</h3>
                  <p>
                    Sensación creciente de no poder dar más,{" "}
                    <span className="brand-highlight font-bold">fatiga constante</span> y desgaste progressivo de la
                    energía.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-400">
                  <h3 className="font-poppins-bold text-lg text-purple-700 mb-2">😶 Despersonalización o desapego</h3>
                  <p>
                    Actitudes de <span className="brand-highlight font-bold">cinismo, indiferencia</span> hacia el
                    trabajo o hacia quienes se atienden, creando distancia emocional.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-400">
                  <h3 className="font-poppins-bold text-lg text-blue-700 mb-2">
                    📉 Reducción de la realización personal
                  </h3>
                  <p>
                    Sensación de que el trabajo ya no aporta valor,{" "}
                    <span className="brand-highlight font-bold">baja autoestima profesional</span> y pérdida de
                    motivación.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-yellow-700 mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                ¿Por qué aparece en el mundo empresarial?
              </h2>

              <p className="mb-6 text-yellow-800">
                El burnout en el contexto empresarial no surge por casualidad: es la{" "}
                <span className="font-bold">convergencia de múltiples factores</span> que impactan en la persona y la
                organización. Algunos de los más importantes:
              </p>

              <div className="space-y-3 text-yellow-900">
                <div className="flex items-start gap-2">
                  <span className="text-xl mt-1">⚡</span>
                  <span>
                    <strong>Carga laboral excesiva:</strong> plazos muy ajustados, multitarea constante
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl mt-1">⚡</span>
                  <span>
                    <strong>Cultura organizacional poco saludable:</strong> comunicación deficiente, falta de apoyo,
                    expectativas poco realistas
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl mt-1">⚡</span>
                  <span>
                    <strong>Entornos de incertidumbre:</strong> alta presión competitiva, fusión de vida personal y
                    profesional, especialmente en pymes sin recursos para gestionar salud mental
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl mt-1">⚡</span>
                  <span>
                    <strong>Factores individuales:</strong> perfeccionismo, autoexigencia, dificultad para poner
                    límites, síntomas de estrés persistente
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-8 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-red-600 mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                ¿Cómo reconocerlo? — Señales que no conviene ignorar
              </h2>

              <p className="mb-6 text-red-800">
                <strong>Detectar el burnout a tiempo puede marcar una gran diferencia.</strong> Aquí algunas señales a
                tener en cuenta:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="text-lg mt-1">❌</span>
                    <span>
                      <strong>Cansancio constante:</strong> sensación de "no dar más" al comenzar o terminar la jornada
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="text-lg mt-1">❌</span>
                    <span>
                      <strong>Problemas de sueño:</strong> dificultad para dormir, insomnio, dolores musculares,
                      cefaleas frecuentes
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="text-lg mt-1">❌</span>
                    <span>
                      <strong>Pérdida de motivación:</strong> indiferencia hacia el trabajo o proyectos que antes
                      entusiasmaban
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="text-lg mt-1">❌</span>
                    <span>
                      <strong>Cambios emocionales:</strong> aumento del cinismo, irritabilidad, distancia emocional de
                      colegas o clientes
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="text-lg mt-1">❌</span>
                    <span>
                      <strong>Bajo rendimiento:</strong> errores frecuentes, dificultad para concentrarse, caída de la
                      productividad
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="text-lg mt-1">❌</span>
                    <span>
                      <strong>Pensamientos negativos:</strong> sensación de inutilidad, pérdida del sentido del trabajo,
                      desconexión personal y profesional
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-red-100 p-4 rounded-lg mt-6">
                <p className="font-bold text-red-800 mb-0">
                  ⚠️ Si reconocés varios de estos síntomas, es tiempo de reflexionar sobre tu salud mental laboral.
                </p>
              </div>
            </div>

            <div className="bg-destructive/10 border-l-4 border-destructive p-8 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-destructive mb-6">
                ¿Cuáles son las consecuencias para las personas y las empresas?
              </h2>

              <p className="mb-6 font-poppins-semibold">El impacto del burnout se extiende más allá del individuo:</p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-poppins-bold text-lg text-destructive mb-3">👤 Para la persona:</h3>
                  <p>
                    Puede derivar en <span className="brand-highlight font-bold">ansiedad, depresión</span>, bajo
                    bienestar emocional, incluso enfermedades somáticas que afectan la calidad de vida de forma
                    significativa.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-poppins-bold text-lg text-destructive mb-3">🏢 Para la empresa:</h3>
                  <p>
                    Se traduce en <span className="brand-highlight font-bold">ausentismo, rotación de personal</span>,
                    baja productividad, clima laboral deteriorado y pérdida de talento que impacta en el negocio.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-8 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-green-700 mb-6 flex items-center gap-2">
                <Heart className="h-6 w-6" />
                Estrategias para prevenir y afrontarlo
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-poppins-bold text-xl text-green-700 mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Para las organizaciones
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                      <p className="font-poppins-bold text-green-700">🎯 Rediseñar la carga de trabajo</p>
                      <p className="text-sm mt-2">
                        Tareas claras, objetivos realistas, evitar saturación y permitir que los empleados tengan
                        autonomía.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                      <p className="font-poppins-bold text-green-700">💚 Promover cultura de bienestar</p>
                      <p className="text-sm mt-2">
                        Espacios de diálogo, apoyo psicológico, reconocimiento de esfuerzos y creación de un ambiente
                        seguro.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                      <p className="font-poppins-bold text-green-700">🔄 Implementar flexibilidad laboral</p>
                      <p className="text-sm mt-2">
                        Horarios flexibles, modalidad híbrida, desconexión digital y respeto por los tiempos de
                        descanso.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                      <p className="font-poppins-bold text-green-700">👥 Formación en liderazgo saludable</p>
                      <p className="text-sm mt-2">
                        Capacitar managers en gestión humanizada de equipos, fomentando pertenencia y propósito.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-poppins-bold text-xl text-green-700 mb-4 flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Para las personas
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                      <p className="font-poppins-bold text-green-700">🛑 Reconocer y aceptar los propios límites</p>
                      <p className="text-sm mt-2">
                        Poner pausas activas durante la jornada, aprender a decir "no" y valorar el equilibrio
                        vida-trabajo.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                      <p className="font-poppins-bold text-green-700">🧘 Practicar autocuidado</p>
                      <p className="text-sm mt-2">
                        Sueño adecuado, alimentación saludable, actividad física, meditación y desconexión real del
                        trabajo.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                      <p className="font-poppins-bold text-green-700">🩺 Buscar apoyo profesional</p>
                      <p className="text-sm mt-2">
                        Consultar psicólogo/psiquiatra cuando aparecen síntomas persistentes. No es debilidad, es
                        cuidado.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                      <p className="font-poppins-bold text-green-700">🤝 Fomentar vínculos de apoyo</p>
                      <p className="text-sm mt-2">
                        Compartir experiencias con colegas de confianza, no asumir la carga solo y buscar redes de
                        contención.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-8 rounded-r-lg">
              <h2 className="font-poppins-extrabold text-2xl text-blue-700 mb-6">
                ¿Cuándo es momento de pedir ayuda profesional?
              </h2>

              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <p className="text-blue-900 font-poppins-semibold mb-4">
                  Si notás que el cansancio no mejora con descanso, que tus emociones negativas se agravan, o que tu
                  rendimiento laboral o tu vida personal se ven <span className="font-bold">seriamente afectados</span>,
                  es importante consultar.
                </p>
                <p className="text-blue-800 font-poppins-bold">
                  Lejos de ser signo de debilidad, es un acto de responsabilidad hacia vos mismo/a y tu entorno.
                </p>
              </div>

              <div className="text-blue-900 font-poppins-semibold space-y-2">
                <p>🔴 Cambios significativos en el estado anímico o comportamiento</p>
                <p>🔴 Síntomas de ansiedad o depresión que persisten</p>
                <p>🔴 Impacto en relaciones personales y familiares</p>
                <p>🔴 Pensamientos de abandono del trabajo o la vida en general</p>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg">
              <h2 className="font-poppins-extrabold text-2xl mb-4">💭 Conclusión</h2>
              <p className="text-lg mb-4">
                El burnout empresarial es una <span className="font-bold">señal de alarma que conviene atender</span>.
                En un mundo laboral que exige cada vez más, cuidar la salud mental se vuelve una prioridad estratégica.
              </p>
              <div className="bg-white/10 p-4 rounded-lg mb-4">
                <p className="font-bold text-lg">
                  No es solo "aguantar" más, sino trabajar de forma más inteligente, más humana, con bienestar como
                  base.
                </p>
              </div>
              <p className="mb-4">
                Si te ves reflejado/a en estas líneas, recordá que <strong>no estás solo/a</strong> y que pedir ayuda
                puede cambiar el rumbo.
              </p>
              <blockquote className="border-l-4 border-white/50 pl-4 italic text-lg">
                "Cuidar la salud mental en el trabajo no es lujo, es necesidad"
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
        <BlogShare title="Burnout laboral: cuando la empresa te consume por dentro" url={postUrl} />

        {/* Call to action */}
        <div className="bg-contrast p-8 rounded-lg text-center">
          <h3 className="font-poppins-bold text-2xl text-primary mb-4">¿Sentís que estás en riesgo de burnout?</h3>
          <p className="font-poppins-semibold text-muted-foreground mb-6">
            Tu bienestar laboral importa. Si experimentás síntomas de agotamiento o estrés crónico, estoy aquí para
            acompañarte y ayudarte a recuperar el <span className="brand-highlight">equilibrio y la motivación</span>.
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
