"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import BgPattern from "@/public/backgroundImage.jpg" // your background image

export function Hero() {
  const whatsappNumber = "+234915446519"
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
          className="object-cover object-center brightness-[0.3]" // darkens the image itself
        />

        {/* Overlay (adds a dark tint) */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Subtle Glow Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Trusted by thousands of traders
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            Trade Crypto & Giftcards{" "}
            <span className="text-primary mt-2">Instantly</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
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
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Start Trading Now
                <ArrowRight size={20} />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg font-semibold px-10 h-14 border-white/50 text-black hover:bg-white/10 transition-all duration-300"
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
