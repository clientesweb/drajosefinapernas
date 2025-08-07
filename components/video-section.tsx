export function VideoSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="font-poppins-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-primary">
            Recursos y Charlas
          </h2>
          <p className="text-muted-foreground font-poppins-semibold text-base sm:text-lg md:text-xl leading-relaxed px-4">
            Aprende más sobre <span className="brand-highlight">salud mental</span> a través de nuestros videos
            educativos
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-6xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TjqrualxgkI"
              title="Salud Mental y Bienestar Emocional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BXSuiBTBI6c"
              title="Cómo Cuidar tu Salud Mental"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/-rD7COiH67I"
              title="Salud Mental: Cómo Cuidarla"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0noAwrWY78U"
              title="Salud Mental: Cómo Cuidarla"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
