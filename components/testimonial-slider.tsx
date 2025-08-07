"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María L.",
    text: "La Dra. Pernas me ha ayudado enormemente a superar mi ansiedad. Su enfoque cálido y profesional me hizo sentir cómoda desde la primera sesión.",
    rating: 5,
  },
  {
    name: "Carlos G.",
    text: "Gracias a la terapia con la Dra. Josefina, he podido mejorar significativamente mis relaciones personales y laborales. Su guía ha sido invaluable.",
    rating: 5,
  },
  {
    name: "Laura S.",
    text: "Las sesiones online con la Dra. Pernas han sido una bendición. Puedo recibir ayuda de calidad sin salir de casa, lo cual es perfecto para mi agenda ocupada.",
    rating: 5,
  },
  {
    name: "Juan P.",
    text: "Excelente profesional. La Dra. Pernas tiene un don para hacer que te sientas escuchado y comprendido. Altamente recomendada.",
    rating: 5,
  },
  {
    name: "Ana M.",
    text: "Mi experiencia con la Dra. Josefina ha sido transformadora. Su enfoque holístico y su empatía han sido fundamentales en mi proceso de sanación.",
    rating: 5,
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-hidden max-w-6xl mx-auto">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-4 lg:p-6 mx-auto">
            <CardHeader className="p-3 sm:p-4 lg:p-6">
              <CardTitle className="flex items-center justify-between text-sm sm:text-base lg:text-lg">
                <span className="font-poppins-bold">{testimonial.name}</span>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
              <p className="text-muted-foreground font-poppins-semibold text-sm sm:text-base leading-relaxed">
                "{testimonial.text}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
