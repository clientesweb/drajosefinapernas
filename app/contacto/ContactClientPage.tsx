"use client"

import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
})

type FormSchemaType = z.infer<typeof formSchema>

export default function ContactClientPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showToast } = useToast()

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        showToast({
          title: "Mensaje enviado",
          description: "Gracias por contactarnos. Te responderemos pronto.",
        })
        reset()
      } else {
        throw new Error("Error al enviar el formulario")
      }
    } catch (error) {
      showToast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-contrast">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-poppins-extrabold text-4xl tracking-tighter sm:text-5xl md:text-6xl text-primary">
              Contáctanos
            </h1>
            <p className="text-xl text-muted-foreground font-poppins-semibold max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto para{" "}
              <span className="brand-highlight">comenzar tu proceso de bienestar</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="font-poppins-bold text-primary">📞 +54 9 11 4196-6665</span>
              </div>
              <div className="bg-secondary/10 px-4 py-2 rounded-full">
                <span className="font-poppins-bold text-secondary">✉️ jpgrenno@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-poppins-bold mb-2 text-primary">
                  Nombre
                </label>
                <Input id="name" {...register("name")} placeholder="Tu nombre" className="font-poppins-semibold" />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1 font-poppins-semibold">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-poppins-bold mb-2 text-primary">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="tu@email.com"
                  className="font-poppins-semibold"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1 font-poppins-semibold">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-poppins-bold mb-2 text-primary">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                  className="font-poppins-semibold"
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1 font-poppins-semibold">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full font-poppins-bold" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>

            {/* Contact Information */}
            <div className="mt-16 bg-contrast p-8 rounded-2xl">
              <h2 className="font-poppins-extrabold text-2xl text-primary text-center mb-8">Información de Contacto</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="text-center space-y-2">
                  <h3 className="font-poppins-bold text-primary">📞 Teléfono</h3>
                  <p className="font-poppins-semibold text-muted-foreground">+54 9 11 4196-6665</p>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-poppins-bold text-primary">✉️ Email</h3>
                  <p className="font-poppins-semibold text-muted-foreground">jpgrenno@gmail.com</p>
                </div>
                <div className="text-center space-y-2 md:col-span-2">
                  <h3 className="font-poppins-bold text-primary">🏥 Modalidad</h3>
                  <p className="font-poppins-semibold text-muted-foreground">Presencial y Virtual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
