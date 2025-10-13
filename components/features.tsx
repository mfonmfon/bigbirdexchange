import { Shield, Zap, Clock, HeadphonesIcon, Lock, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Complete your transactions in under 5 minutes with our optimized processing system.",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Bank-level security with encrypted transactions and verified user protection.",
  },
  {
    icon: TrendingUp,
    title: "Best Rates",
    description: "Get the most competitive rates in the market with transparent pricing.",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Trade anytime, anywhere. Our platform is always ready when you are.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Dedicated customer support team ready to assist you via WhatsApp.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data and transactions are protected with industry-leading encryption.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose <span className="text-primary">BigBird Exchange</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine speed, security, and reliability to give you the best trading experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
