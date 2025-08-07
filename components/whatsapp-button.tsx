"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function WhatsAppButton() {
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 5000) // Mostrar notificación después de 5 segundos

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="relative">
        <Button
          size="lg"
          className="rounded-full h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 bg-white hover:bg-gray-100 shadow-lg p-0 hover:scale-110 transition-all duration-300"
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
          <span className="sr-only">WhatsApp</span>
        </Button>
        {showNotification && (
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-2 sm:p-3 text-xs sm:text-sm animate-bounce max-w-[200px] sm:max-w-none">
            ¿Necesitas ayuda? ¡Contáctanos!
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>
        )}
      </a>
    </div>
  )
}
