"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
        <nav className="flex flex-col space-y-6 mt-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={cn("text-primary hover:text-primary/80 transition-colors", "text-lg font-poppins-bold")}
          >
            Inicio
          </Link>
          <Link
            href="/sobre-mi"
            onClick={() => setOpen(false)}
            className={cn("text-primary hover:text-primary/80 transition-colors", "text-lg font-poppins-bold")}
          >
            Sobre mí
          </Link>
          <Link
            href="/servicios"
            onClick={() => setOpen(false)}
            className={cn("text-primary hover:text-primary/80 transition-colors", "text-lg font-poppins-bold")}
          >
            Servicios
          </Link>
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className={cn("text-primary hover:text-primary/80 transition-colors", "text-lg font-poppins-bold")}
          >
            Blog
          </Link>
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className={cn("text-primary hover:text-primary/80 transition-colors", "text-lg font-poppins-bold")}
          >
            Contacto
          </Link>
          <Button asChild className="mt-4 font-poppins-bold">
            <Link href="/contacto" onClick={() => setOpen(false)}>
              Agendar Consulta
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
