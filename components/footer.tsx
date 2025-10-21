import Link from "next/link"
import { MessageCircle, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import BigbirdExchange from "@/public/bigbird-logo.png"
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
               {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src={BigbirdExchange} 
                  alt="BigBird Xchange"
                  width={70}
                  height={40}
                  className="rounded-md"
                />
                </Link>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Your trusted platform for fast and secure crypto and giftcard trading.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-secondary-foreground/80 text-sm">Cryptocurrency Trading</li>
              <li className="text-secondary-foreground/80 text-sm">Giftcard Exchange</li>
              <li className="text-secondary-foreground/80 text-sm">Trade funds</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-secondary-foreground/80 text-sm">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>WhatsApp: +2348123366932</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-foreground/80 text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>thebigbirdexchange@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-foreground/80 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} BigBird Exchange. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
