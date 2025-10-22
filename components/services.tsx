"use client"

import { Bitcoin, Gift, DollarSign } from "lucide-react"

const services = [
  {
    icon: Bitcoin,
    title: "Cryptocurrency Trading",
    description: "Buy and sell Bitcoin, Ethereum, USDT, and other popular cryptocurrencies at competitive rates.",
    features: ["BTC, ETH, USDT", "Instant Settlement", "Best Market Rates"],
    whatsappMessage: "Hi, I want to exchange crypto with BigBird Exchange",
  },
  {
    icon: Gift,
    title: "Giftcard Exchange",
    description: "Convert your giftcards to cash instantly. We accept all major brands and denominations.",
    features: ["Amazon, iTunes, Steam", "Instant Verification", "High Redemption Rates"],
    whatsappMessage: "Hi, I want to exchange my giftcard with BigBird Exchange",
  },
  {
    icon: DollarSign,
    title: "Trade Funds",
    description: "Trade funds easily at unbeatable rate and get paid in minutes after confirmation.",
    features: ["Instant Exchange", "Best Rates", "Trusted & Secure"],
    whatsappMessage: "Hi, I want to trade funds with BigBird Exchange.",
  },
]

export function Services() {
  const handleServiceClick = (message: string) => {
    const phoneNumber = "+2349154465198" // Replace with your actual WhatsApp number
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need for seamless crypto and giftcard trading in one platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.whatsappMessage)}
              className="p-8 border border-border bg-card cursor-pointer"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2.5 mb-5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-border/50 text-xs text-primary font-medium">
                Click to chat on WhatsApp →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
