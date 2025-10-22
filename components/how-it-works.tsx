"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Banknote } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Contact Us on WhatsApp",
    description:
      "Click the button to start a conversation with us. Tell us what you want to trade and get instant rate confirmation.",
  },
  {
    icon: Banknote,
    number: "02",
    title: "Receive Payment",
    description:
      "Complete your trade and receive your payment directly to your bank account within minutes. It's that simple!",
  },
]

export function HowItWorks() {
  const whatsappNumber = "+2349154465198" // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Hi, I want to make an exchange on BigBird Exchange")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">
            Start trading in two simple steps. It's fast, secure, and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-primary/20" />
              )}

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-6xl font-bold text-primary/20 mb-3">{step.number}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-secondary-foreground/80 leading-relaxed text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="text-base font-semibold px-8 h-12">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle size={20} />
              Start Trading on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
