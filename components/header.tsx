import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation - Left Side */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8 font-poppins-semibold text-sm xl:text-base">
          <Link href="/" className="transition-colors hover:text-primary whitespace-nowrap">
            Inicio
          </Link>
          <Link href="/sobre-mi" className="transition-colors hover:text-primary whitespace-nowrap">
            Sobre mí
          </Link>
          <Link href="/servicios" className="transition-colors hover:text-primary whitespace-nowrap">
            Servicios
          </Link>
        </nav>

        {/* Centered Logo */}
        <Link href="/" className="flex items-center justify-center flex-shrink-0">
          <div className="relative h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 w-auto">
            <Image
              src="/logo-dra-josefina-pernas.webp"
              alt="Dra. Josefina Pernas - Logo"
              width={0}
              height={0}
              sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 160px, 180px"
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation - Right Side */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8 font-poppins-semibold text-sm xl:text-base">
          <Link href="/blog" className="transition-colors hover:text-primary whitespace-nowrap">
            Blog
          </Link>
          <Link href="/contacto" className="transition-colors hover:text-primary whitespace-nowrap">
            Contacto
          </Link>
          <Button asChild className="font-poppins-bold text-sm xl:text-base px-4 xl:px-6">
            <Link href="/contacto">Agendar Consulta</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
