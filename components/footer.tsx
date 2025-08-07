import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

export function Footer() {
  return (
    <footer className="border-t bg-primary text-white">
      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 sm:h-10 w-auto flex-shrink-0">
                <Image
                  src="/logo-dra-josefina-pernas.webp"
                  alt="Logo"
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 80px, 100px"
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="font-poppins-bold text-base sm:text-lg text-white">Dra. Josefina Pernas</span>
            </Link>
            <p className="text-white/90 font-poppins-semibold text-sm sm:text-base leading-relaxed">
              Médica especialista en Psiquiatría. Consultas presenciales y virtuales.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-poppins-bold text-base sm:text-lg text-white">Navegación</h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-white/90 hover:text-white font-poppins-semibold transition-colors text-sm sm:text-base"
              >
                Inicio
              </Link>
              <Link
                href="/sobre-mi"
                className="block text-white/90 hover:text-white font-poppins-semibold transition-colors text-sm sm:text-base"
              >
                Sobre mí
              </Link>
              <Link
                href="/servicios"
                className="block text-white/90 hover:text-white font-poppins-semibold transition-colors text-sm sm:text-base"
              >
                Servicios
              </Link>
              <Link
                href="/blog"
                className="block text-white/90 hover:text-white font-poppins-semibold transition-colors text-sm sm:text-base"
              >
                Blog
              </Link>
              <Link
                href="/contacto"
                className="block text-white/90 hover:text-white font-poppins-semibold transition-colors text-sm sm:text-base"
              >
                Contacto
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-poppins-bold text-base sm:text-lg text-white">Contacto</h3>
            <div className="space-y-2">
              <a
                href="tel:+54 9 11 4196-6665"
                className="flex items-center text-white/90 hover:text-white font-poppins-semibold transition-colors text-sm sm:text-base"
              >
                <FontAwesomeIcon icon={faPhone} className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                <span className="break-all">+54 9 11 4196-6665</span>
              </a>
              <a
                href="mailto:jpgrenno@gmail.com"
                className="flex items-center text-white/90 hover:text-white font-poppins-semibold transition-colors text-sm sm:text-base"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                <span className="break-all">jpgrenno@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/drapernasjosefina"
                className="flex items-center text-white/90 hover:text-white font-poppins-semibold transition-colors text-sm sm:text-base"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                @drapernasjosefina
              </a>
              <a
                href="https://maps.google.com"
                className="flex items-center text-white/90 hover:text-white font-poppins-semibold transition-colors text-sm sm:text-base"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                Consulta Presencial
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-poppins-bold text-base sm:text-lg text-white">Síguenos</h3>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t border-white/20 pt-6 sm:pt-8 text-center text-white/90">
          <p className="font-poppins-semibold text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Dra. Josefina Pernas. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-xs sm:text-sm font-poppins-medium">Powered by Duality Domain</p>
        </div>
      </div>
    </footer>
  )
}
