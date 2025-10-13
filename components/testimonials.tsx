"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Chukwudi Okafor",
    role: "Crypto Trader",
    content:
      "BigBird Exchange has been my go-to platform for over a year. Fast transactions and excellent rates every time!",
    rating: 5,
  },
  {
    name: "Aisha Mohammed",
    role: "Giftcard Seller",
    content:
      "I love how quick and easy it is to sell my giftcards. Payment always arrives within minutes. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emeka Nwankwo",
    role: "Business Owner",
    content:
      "The customer service is outstanding. They respond immediately on WhatsApp and resolve any issues quickly.",
    rating: 5,
  },
  {
    name: "Fatima Bello",
    role: "Freelancer",
    content:
      "Best rates in the market! I've tried other platforms but BigBird Exchange consistently offers better value.",
    rating: 5,
  },
  {
    name: "Tunde Adeyemi",
    role: "Student",
    content:
      "As a student, I need quick cash for my giftcards. BigBird Exchange never disappoints with their speed and reliability.",
    rating: 5,
  },
  {
    name: "Ngozi Eze",
    role: "Entrepreneur",
    content:
      "I've been trading crypto for years and BigBird Exchange offers the most competitive rates. Absolutely trustworthy!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of satisfied traders who trust BigBird Exchange
          </p>
        </div>
      </div>

      <div className="relative mb-8">
        <div className="flex gap-6 animate-scroll-left">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <Card key={`left-${index}`} className="flex-shrink-0 w-[380px] p-8 border-border bg-card">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed text-base">"{testimonial.content}"</p>
              <div>
                <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll-right">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <Card key={`right-${index}`} className="flex-shrink-0 w-[380px] p-8 border-border bg-card">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed text-base">"{testimonial.content}"</p>
              <div>
                <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
