"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  const whatsappNumber = "+2348012345678" // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Hi, I want to make an exchange on BigBird Exchange")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Start Trading?</h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 leading-relaxed text-pretty">
            Join thousands of satisfied customers and experience the fastest, most secure way to trade crypto and
            giftcards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base font-semibold px-8 h-12"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Contact Us on WhatsApp
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-6">Available 24/7 • Fast Response • Secure Trading</p>
        </div>
      </div>
    </section>
  )
}
