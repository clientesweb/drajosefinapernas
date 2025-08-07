import Image from "next/image"
import Link from "next/link"

export function SimpleBanner() {
  return (
    <section className="w-full">
      <Link href="/servicios" className="block">
        <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/10] lg:aspect-[16/9] xl:aspect-[1920/1080] 2xl:aspect-[21/9]">
          <Image
            src="/banner-principal-salud-integral.webp"
            alt="Salud Mental Integral - Cuidando tu bienestar emocional"
            fill
            className="object-contain bg-[#F5F1ED] hover:scale-[1.02] transition-transform duration-300"
            priority
            sizes="100vw"
          />
        </div>
      </Link>
    </section>
  )
}
