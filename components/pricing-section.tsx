import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"

const pricingTiers = [
  {
    name: "Kick Starter",
    price: "$6,000",
    period: "",
    description: "Try us for 2 weeks and see how we're the perfect fit.",
    features: ["60 minute kick-off call", "1 request completed at a time", "Slack channel updates", "Daily updates"],
    highlighted: false,
    limitedAvailability: false,
  },
  {
    name: "Basic",
    price: "$8,000",
    period: "/mo",
    description: "Ideal for ongoing design work. Flexible changes or cancellations.",
    features: ["1 request completed at a time", "Slack channel updates", "2 strategy calls a month", "Cancel anytime"],
    highlighted: false,
    limitedAvailability: true,
  },
  {
    name: "Pro X",
    price: "$12,000",
    period: "/mo",
    description: "Perfect for startups needing ongoing design services with quick turnarounds.",
    features: [
      "Everything in Basic, plus:",
      "Access to 2 senior designers",
      "2 requests completed at a time",
      "Priority Slack channel and support",
      "Weekly strategy calls",
    ],
    highlighted: true,
    limitedAvailability: true,
  },
  {
    name: "One Off Project",
    price: "$10,000+",
    period: "/one-time",
    description: "Perfect for anyone needing stand-alone projects.",
    features: [],
    highlighted: false,
    limitedAvailability: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pricing built to <span className="text-[#FF4D58]">help you succeed</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto mb-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 border-2 ${
                tier.highlighted
                  ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                  : "bg-gray-50 text-[#1A1A1A] border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                {tier.limitedAvailability && (
                  <Badge className="bg-[#FFE066]/20 text-[#1A1A1A] border-[#FFE066]/50 text-xs">
                    Limited availability
                  </Badge>
                )}
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold">{tier.price}</span>
                <span className={`text-lg ${tier.highlighted ? "text-gray-300" : "text-[#1A1A1A]/70"}`}>
                  {tier.period}
                </span>
              </div>

              <p className={`mb-6 ${tier.highlighted ? "text-gray-300" : "text-[#1A1A1A]/70"}`}>{tier.description}</p>

              <div className="flex gap-3 mb-6">
                <Button
                  className={`${
                    tier.highlighted
                      ? "bg-white text-[#1A1A1A] hover:bg-gray-100"
                      : "bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90"
                  }`}
                >
                  Book a call
                </Button>
                <Button
                  variant="ghost"
                  className={`${
                    tier.highlighted ? "text-white hover:bg-white/10" : "text-[#1A1A1A] hover:bg-[#1A1A1A]/5"
                  }`}
                >
                  Get started <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              {tier.features.length > 0 && (
                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded bg-[#FF4D58] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span
                        className={`${
                          tier.highlighted ? "text-gray-300" : "text-[#1A1A1A]/70"
                        } ${feature.includes("plus:") ? "font-medium" : ""}`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Get to know us section */}
        <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Get to know us</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-lg text-[#1A1A1A]/70"> / we enjoy talking to awesome people!</span>
          </div>
          <p className="text-[#1A1A1A]/70 mb-6">Let's chat about designing a product your users will love!</p>
          <Button className="bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90">Book a call</Button>
        </div>
      </div>
    </section>
  )
}
