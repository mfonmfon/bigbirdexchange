"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import BgPattern from "@/public/backgroundImage.jpg"

export function Hero() {
  const whatsappNumber = "2349154465198"
  const whatsappMessage = encodeURIComponent("Hi, I want to trade with BigBird Exchange")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const handleTradeNowClick = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden text-white">
      {/*  Background Image (non-blocking for clicks) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src={BgPattern}
          alt="BigBird Exchange Background"
          fill
          priority
          quality={100}
          className="object-cover object-center brightness-[0.6]"
        />
      </div>

      {/* Glow elements (non-interactive, also behind content) */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/*  Content Area */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/*  Badge — visible everywhere */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/40 sm:bg-primary/30 md:bg-primary/20 text-white text-sm font-medium mb-8 shadow-md backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Trusted by thousands of traders
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
            Trade Crypto & Giftcards{" "}
            <span className="text-primary mt-2">Instantly</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button
              onClick={handleTradeNowClick}
              size="lg"
              className="w-full sm:w-auto text-lg font-semibold px-10 h-14 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                Start Trading Now
                <ArrowRight size={20} />
              </div>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg font-semibold px-10 h-14 border-white/60 text-black hover:bg-white/10 transition-all duration-300"
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
