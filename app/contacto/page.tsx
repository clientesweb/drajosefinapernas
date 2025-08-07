import type { Metadata } from "next"
import ContactClientPage from "./ContactClientPage"

export const metadata: Metadata = {
  title: "Contacto - Dra. Josefina Pernas | Agenda tu Consulta de Psiquiatría",
  description:
    "Contacta con la Dra. Josefina Pernas para agendar tu consulta de psiquiatría. Atención presencial y virtual. Teléfono: +54 9 11 4196-6665. Respuesta rápida garantizada.",
  keywords: [
    "contacto psiquiatra",
    "agendar consulta",
    "cita psiquiatría",
    "consulta online",
    "Dra. Josefina Pernas contacto",
    "teléfono psiquiatra",
    "email consulta",
    "Buenos Aires psiquiatra",
  ],
  openGraph: {
    title: "Contacto - Dra. Josefina Pernas | Agenda tu Consulta",
    description: "Contacta conmigo para agendar tu consulta de psiquiatría. Atención presencial y virtual disponible.",
    url: "https://www.drajosefinapernas.com/contacto",
    siteName: "Dra. Josefina Pernas",
    images: [
      {
        url: "/og-image-contacto-salud.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto - Dra. Josefina Pernas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto - Dra. Josefina Pernas",
    description: "Contacta conmigo para agendar tu consulta de psiquiatría. Atención presencial y virtual disponible.",
    images: ["/og-image-contacto-salud.jpg"],
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
