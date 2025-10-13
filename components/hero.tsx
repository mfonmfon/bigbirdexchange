"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react"

export function Hero() {
  const whatsappNumber = "+2348012345678" // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Hi, I want to make an exchange on BigBird Exchange")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Trusted by thousands of traders
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[1.1] text-balance">
            Trade Crypto & Giftcards <span className="text-primary block mt-2">Instantly</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-pretty font-light">
            Experience lightning-fast exchanges with the best rates in the market. Secure, reliable, and available 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button asChild size="lg" className="w-full sm:w-auto text-lg font-semibold px-10 h-14">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Start Trading Now
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg font-semibold px-10 h-14 bg-transparent"
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{"<5 mins"}</div>
                <div className="text-sm text-muted-foreground mt-1">Average Transaction Time</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Secure Transactions</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">Best</div>
                <div className="text-sm text-muted-foreground mt-1">Market Rates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
