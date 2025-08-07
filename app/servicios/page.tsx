import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Video, Zap, HeartPulse, Stethoscope, Users, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de Psiquiatría - Dra. Josefina Pernas | Terapia Individual y Online",
  description:
    "Servicios especializados en psiquiatría: terapia individual, consultas online y presenciales, manejo del estrés, ACT y urgencias 24/7. Atención personalizada con más de 15 años de experiencia.",
  keywords: [
    "servicios psiquiatría",
    "terapia individual",
    "consultas online",
    "psiquiatría clínica",
    "manejo estrés",
    "ansiedad",
    "ACT terapia",
    "urgencias psiquiátricas",
    "tratamiento personalizado",
  ],
  openGraph: {
    title: "Servicios de Psiquiatría - Dra. Josefina Pernas",
    description:
      "Servicios especializados en salud mental: terapia individual, consultas online, manejo del estrés y más. Atención 24/7.",
    url: "https://www.drajosefinapernas.com/servicios",
    siteName: "Dra. Josefina Pernas",
    images: [
      {
        url: "/og-image-servicios-salud-mental.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios de Psiquiatría - Dra. Josefina Pernas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Psiquiatría - Dra. Josefina Pernas",
    description:
      "Servicios especializados en salud mental: terapia individual, consultas online, manejo del estrés y más.",
    images: ["/og-image-servicios-salud-mental.jpg"],
  },
}

const mainServices = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Terapia Individual",
    description: "Sesiones personalizadas para abordar tus necesidades específicas y promover tu crecimiento personal.",
    features: [
      "Evaluación integral",
      "Plan de tratamiento personalizado",
      "Seguimiento continuo",
      "Técnicas innovadoras",
    ],
    image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=2070&auto=format&fit=crop",
    highlight: "Más solicitado",
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Consultas Online y Presenciales",
    description:
      "Accede a terapia de calidad desde la comodidad de tu hogar o en consulta presencial según tu preferencia.",
    features: ["Flexibilidad horaria", "Misma efectividad", "Plataforma segura", "Atención personalizada"],
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop",
    highlight: "Modalidad híbrida",
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Psiquiatría Clínica",
    description: "Tratamientos psicoterapéuticos y farmacológicos adaptados a tus necesidades específicas.",
    features: ["Diagnóstico preciso", "Tratamiento integral", "Monitoreo médico", "Ajustes personalizados"],
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop",
    highlight: "Especializado",
  },
  {
    icon: <HeartPulse className="h-8 w-8" />,
    title: "Manejo del Estrés y Ansiedad",
    description: "Desarrolla estrategias efectivas para manejar el estrés y la ansiedad en tu vida diaria.",
    features: ["Técnicas de relajación", "Manejo de crisis", "Herramientas prácticas", "Prevención de recaídas"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop",
    highlight: "Resultados rápidos",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "ACT: Terapia de Aceptación y Compromiso",
    description: "Un modelo de psicoterapia centrado en la aceptación, el compromiso y el cambio de comportamiento.",
    features: ["Mindfulness aplicado", "Valores personales", "Flexibilidad psicológica", "Acción comprometida"],
    image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=2070&auto=format&fit=crop",
    highlight: "Innovador",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Urgencias Psiquiátricas",
    description: "Atención inmediata para crisis y emergencias de salud mental las 24 horas.",
    features: ["Disponibilidad 24/7", "Respuesta inmediata", "Estabilización rápida", "Seguimiento post-crisis"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
    highlight: "Urgencias",
  },
]

const specializations = [
  "Trastornos de ansiedad y pánico",
  "Depresión y trastornos del estado de ánimo",
  "Trastornos del sueño",
  "Manejo del estrés y burnout",
  "Trastornos adaptativos",
  "Crisis vitales y duelo",
  "Trastornos de la personalidad",
  "Adicciones y comportamientos compulsivos",
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-contrast">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-poppins-extrabold text-4xl tracking-tighter sm:text-5xl md:text-6xl text-primary">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-muted-foreground font-poppins-semibold max-w-3xl mx-auto leading-relaxed">
              Ofrecemos una <span className="brand-highlight">amplia gama de servicios especializados</span> diseñados
              para ayudarte a alcanzar tu bienestar emocional y mental
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="font-poppins-bold text-primary">✓ Atención Presencial</span>
              </div>
              <div className="bg-secondary/10 px-4 py-2 rounded-full">
                <span className="font-poppins-bold text-secondary">✓ Consultas Virtuales</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="font-poppins-bold text-primary">✓ Urgencias 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins-extrabold text-3xl text-primary mb-4">Servicios Principales</h2>
              <p className="font-poppins-semibold text-muted-foreground text-lg max-w-2xl mx-auto">
                Cada servicio está diseñado con un <span className="brand-highlight">enfoque personalizado</span>
                para atender tus necesidades específicas
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {mainServices.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    {service.highlight && (
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-poppins-bold">
                        {service.highlight}
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-poppins-bold text-primary text-xl mb-2">{service.title}</CardTitle>
                        <p className="font-poppins-semibold text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="font-poppins-bold text-primary">Incluye:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="font-poppins-semibold text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-contrast">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins-extrabold text-3xl text-primary mb-4">Áreas de Especialización</h2>
              <p className="font-poppins-semibold text-muted-foreground text-lg">
                Tratamiento especializado para una <span className="brand-highlight">amplia variedad</span> de
                condiciones
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {specializations.map((specialization, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-poppins-semibold text-muted-foreground">{specialization}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins-extrabold text-3xl text-primary mb-4">Cómo Trabajamos Juntos</h2>
              <p className="font-poppins-semibold text-muted-foreground text-lg max-w-2xl mx-auto">
                Un proceso <span className="brand-highlight">estructurado y personalizado</span> para tu bienestar
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="font-poppins-extrabold text-2xl text-primary">1</span>
                </div>
                <h3 className="font-poppins-bold text-xl text-primary">Evaluación Inicial</h3>
                <p className="font-poppins-semibold text-muted-foreground">
                  Conversamos sobre tus necesidades, objetivos y expectativas para el tratamiento.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="font-poppins-extrabold text-2xl text-secondary">2</span>
                </div>
                <h3 className="font-poppins-bold text-xl text-primary">Plan Personalizado</h3>
                <p className="font-poppins-semibold text-muted-foreground">
                  Diseñamos un plan de tratamiento específico adaptado a tu situación única.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="font-poppins-extrabold text-2xl text-primary">3</span>
                </div>
                <h3 className="font-poppins-bold text-xl text-primary">Seguimiento Continuo</h3>
                <p className="font-poppins-semibold text-muted-foreground">
                  Monitoreamos tu progreso y ajustamos el tratamiento según sea necesario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-poppins-extrabold text-3xl md:text-4xl">
              ¿Listo para comenzar tu proceso de bienestar?
            </h2>
            <p className="text-xl font-poppins-semibold leading-relaxed">
              No esperes más para cuidar tu <strong>salud mental</strong>. Estoy aquí para acompañarte en cada paso del
              camino.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="font-poppins-bold">
                <Link href="/contacto">Agendar Primera Consulta</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="font-poppins-bold bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/sobre-mi">Conocer más sobre mí</Link>
              </Button>
            </div>
            <div className="bg-white/10 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="font-poppins-bold text-lg italic">
                "Tu bienestar mental es mi prioridad. Juntos podemos encontrar el camino hacia una vida más plena."
              </p>
              <p className="font-poppins-semibold text-sm mt-2 opacity-90">— Dra. Josefina Pernas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
