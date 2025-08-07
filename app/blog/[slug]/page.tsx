import { notFound, redirect } from "next/navigation"

const officialPosts = ["fomo-miedo-quedarse-afuera", "una-mente-tranquila", "sueno-habitos-para-buen-descanso"]

export async function generateStaticParams() {
  return officialPosts.map((slug) => ({
    slug: slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Solo permitir posts oficiales
  if (!officialPosts.includes(params.slug)) {
    notFound()
  }

  // Redirect to specific post pages
  if (params.slug === "fomo-miedo-quedarse-afuera") {
    redirect("/blog/fomo-miedo-quedarse-afuera")
  }

  if (params.slug === "una-mente-tranquila") {
    redirect("/blog/una-mente-tranquila")
  }

  if (params.slug === "sueno-habitos-para-buen-descanso") {
    redirect("/blog/sueno-habitos-para-buen-descanso")
  }

  return notFound()
}
