import Image from "next/image"
import { ConsultationButton } from "@/components/ConsultationButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award, Users, BookOpen, Stethoscope, Brain } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Mí - Dra. Josefina Pernas | Médica Especialista en Psiquiatría",
  description:
    "Conoce a la Dra. Josefina Pernas, médica especialista en psiquiatría con más de 15 años de experiencia. Formación en UBA, docente universitaria y especialista en salud mental integral.",
  keywords: [
    "Dra. Josefina Pernas",
    "médica psiquiatra",
    "especialista psiquiatría",
    "MN 140.051",
    "Universidad de Buenos Aires",
    "Hospital Milstein",
    "docente psiquiatría",
    "experiencia salud mental",
  ],
  openGraph: {
    title: "Sobre Mí - Dra. Josefina Pernas | Médica Especialista en Psiquiatría",
    description:
      "Médica especialista en psiquiatría con más de 15 años de experiencia. Formación en UBA y dedicación completa a la salud mental.",
    url: "https://www.drajosefinapernas.com/sobre-mi",
    siteName: "Dra. Josefina Pernas",
    images: [
      {
        url: "/og-image-sobre-mi.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Josefina Pernas - Médica Especialista en Psiquiatría",
      },
    ],
    locale: "es_ES",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Mí - Dra. Josefina Pernas",
    description:
      "Médica especialista en psiquiatría con más de 15 años de experiencia. Formación en UBA y dedicación completa a la salud mental.",
    images: ["/og-image-sobre-mi.jpg"],
  },
}

export default function AboutPage() {
  const education = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Médica graduada",
      institution: "Universidad Abierta Interamericana",
      description: "Formación médica integral con enfoque en ciencias de la salud",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Residencia en Salud Mental",
      institution: "Hospital Dr. César Milstein",
      description: "Especialización práctica en el tratamiento de trastornos mentales",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Especialista en Psiquiatría",
      institution: "Universidad de Buenos Aires (UBA)",
      description: "Certificación oficial como especialista en psiquiatría",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Formación Continua",
      institution: "Cursos y Certificaciones Internacionales",
      description: "Actualización constante en técnicas y tratamientos innovadores",
    },
  ]

  const currentWork = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Médica de Planta",
      workplace: "Hospital General de Agudos J M Penna",
      description: "Servicio de Salud Mental - Atención integral a pacientes",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Docente Universitaria",
      workplace: "UBA y Universidad Católica Argentina",
      description: "Formación de nuevos profesionales en Salud Mental",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Consultorio Privado",
      workplace: "Atención Presencial y Virtual",
      description: "Consultas personalizadas con iguales posibilidades de efectividad",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-contrast">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-poppins-extrabold text-4xl tracking-tighter sm:text-5xl md:text-6xl text-primary">
              Dra. Josefina Pernas
            </h1>
            <div className="bg-primary/10 inline-block px-6 py-3 rounded-full">
              <p className="font-poppins-bold text-lg text-primary">Médica Especialista en Psiquiatría - MN 140.051</p>
            </div>
            <p className="text-xl text-muted-foreground font-poppins-semibold max-w-3xl mx-auto leading-relaxed">
              Con más de <span className="brand-highlight">15 años de experiencia</span> en el campo de la Salud Mental,
              me dedico a acompañar a mis pacientes en su camino hacia el{" "}
              <span className="brand-highlight">bienestar emocional</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-start mb-16">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/about.jpg" alt="Dra. Josefina Pernas" fill className="object-cover" priority />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-poppins-extrabold text-3xl text-primary mb-6">Mi Compromiso con tu Bienestar</h2>
                  <div className="space-y-4 font-poppins-semibold text-muted-foreground leading-relaxed">
                    <p>
                      Mi enfoque se centra en acompañar a cada persona a superar los desafíos emocionales y
                      problemáticas que se presentan a lo largo de la vida, brindando un espacio de
                      <span className="brand-highlight"> confianza y comprensión</span>.
                    </p>
                    <p>
                      Creo firmemente en el poder de la{" "}
                      <span className="brand-highlight">empatía y la escucha activa</span>
                      en el proceso terapéutico. Cada paciente es único, y mi objetivo es proporcionar un tratamiento
                      personalizado que respete sus necesidades individuales.
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-primary/10 p-6 rounded-lg text-center">
                    <div className="font-poppins-extrabold text-3xl text-primary mb-2">15+</div>
                    <div className="font-poppins-semibold text-sm text-muted-foreground">Años de Experiencia</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16">
              <h2 className="font-poppins-extrabold text-3xl text-primary text-center mb-12">
                Experiencia y Formación
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {education.map((item, index) => (
                  <Card key={index} className="border-primary/20 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="font-poppins-bold text-primary text-lg mb-1">{item.title}</CardTitle>
                          <p className="font-poppins-semibold text-secondary text-sm">{item.institution}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-poppins-semibold text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Current Work Section */}
            <div className="mb-16">
              <h2 className="font-poppins-extrabold text-3xl text-primary text-center mb-12">
                Actividad Profesional Actual
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {currentWork.map((item, index) => (
                  <Card key={index} className="border-secondary/20 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="font-poppins-bold text-primary text-lg mb-1">{item.title}</CardTitle>
                          <p className="font-poppins-semibold text-secondary text-sm">{item.workplace}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-poppins-semibold text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Services Philosophy */}
            <div className="bg-primary text-white p-8 md:p-12 rounded-2xl mb-16">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="font-poppins-extrabold text-3xl mb-6">Mi Filosofía de Atención</h2>
                <p className="text-lg font-poppins-semibold leading-relaxed">
                  Realizo atención <strong>presencial y virtual</strong> en mi consultorio con iguales posibilidades de
                  atención y efectividad. La modalidad virtual me permite llegar a más personas que necesitan apoyo
                  profesional, sin comprometer la calidad del tratamiento.
                </p>
                <div className="bg-white/10 p-6 rounded-lg">
                  <p className="font-poppins-bold text-xl italic">
                    "Cada persona merece ser escuchada, comprendida y acompañada en su proceso de sanación"
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-contrast p-8 md:p-12 rounded-2xl text-center">
              <h2 className="font-poppins-extrabold text-3xl text-primary mb-8">Información de Contacto</h2>
              <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto mb-8">
                <div className="space-y-2">
                  <h3 className="font-poppins-bold text-primary">Teléfono</h3>
                  <p className="font-poppins-semibold text-muted-foreground">+54 9 11 4196-6665</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-poppins-bold text-primary">Email</h3>
                  <p className="font-poppins-semibold text-muted-foreground">jpgrenno@gmail.com</p>
                </div>
              </div>
              <ConsultationButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
