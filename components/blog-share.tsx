"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react"

interface BlogShareProps {
  title: string
  url: string
}

export function BlogShare({ title, url }: BlogShareProps) {
  const [copied, setCopied] = useState(false)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="bg-contrast rounded-lg p-6 my-8">
      <div className="flex items-center gap-2 mb-4">
        <Share2 className="h-5 w-5 text-primary" />
        <h3 className="font-poppins-bold text-primary">Compartir este artículo</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.facebook, "_blank")}
          className="font-poppins-semibold"
        >
          <Facebook className="h-4 w-4 mr-2" />
          Facebook
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.twitter, "_blank")}
          className="font-poppins-semibold"
        >
          <Twitter className="h-4 w-4 mr-2" />
          Twitter
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.linkedin, "_blank")}
          className="font-poppins-semibold"
        >
          <Linkedin className="h-4 w-4 mr-2" />
          LinkedIn
        </Button>
        <Button variant="outline" size="sm" onClick={copyToClipboard} className="font-poppins-semibold bg-transparent">
          {copied ? <Check className="h-4 w-4 mr-2" /> : <Link2 className="h-4 w-4 mr-2" />}
          {copied ? "Copiado" : "Copiar enlace"}
        </Button>
      </div>
    </div>
  )
}
