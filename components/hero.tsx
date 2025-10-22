"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import BgPattern from "@/public/backgroundImage.jpg"

export function Hero() {
  const whatsappNumber = "+2349154465198"
  const whatsappMessage = encodeURIComponent("Hi, I want to make an exchange on BigBird Exchange")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={BgPattern}
          alt="BigBird Exchange Background"
          fill
          priority
          quality={100}
          className="object-cover object-center brightness-[0.6]" // slightly dark, not too much
        />

        {/* Gentle dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Glow elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 text-white text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Trusted by thousands of traders
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
            Trade Crypto & Giftcards{" "}
            <span className="text-primary mt-2">Instantly</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Experience lightning-fast exchanges with the best rates in the market.
            Secure, reliable, and available 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-lg font-semibold px-10 h-14 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Start Trading Now
                <ArrowRight size={20} />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg font-semibold px-10 h-14 border-white/60 text-white hover:bg-white/10 transition-all duration-300"
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
