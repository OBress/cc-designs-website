import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { TypingAnimation } from "@/components/typing-animation";
import { ReviewSlider } from "@/components/review-slider";
import { ScrollNavigation } from "@/components/scroll-navigation";
import { PricingSection } from "@/components/pricing-section";
import { PortfolioSlideshow } from "@/components/portfolio-slideshow";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      {/* Navigation */}
      <ScrollNavigation />

      {/* Hero Section */}
      <section className="py-20 px-4 pt-32">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            CC Designs for
            <br />
            <TypingAnimation />
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#FF4D58] text-white hover:bg-[#FF4D58]/90"
            >
              See pricing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A]/5"
            >
              <Users className="w-4 h-4 mr-2" />
              Book a call
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gray-50 border border-gray-200 border-dashed rounded-2xl p-10 md:p-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div className="max-w-2xl mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Invest in your product's design and{" "}
                  <span className="text-[#FF4D58]">engage more users</span>
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="bg-[#72B6F9] text-white hover:bg-[#72B6F9]/90 border-0"
                >
                  See pricing
                </Button>
                <Button className="bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90">
                  Book a call
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-r border-gray-300 pr-4 last:border-r-0 last:pr-0">
                <div className="text-5xl font-bold mb-3">39%</div>
                <p className="text-[#1A1A1A]/70">
                  of users will leave a site due to poor design.
                </p>
              </div>

              <div className="md:border-r md:border-gray-300 md:pr-4">
                <div className="text-5xl font-bold mb-3">74%</div>
                <p className="text-[#1A1A1A]/70">
                  of users will leave a site if it is not responsive.
                </p>
              </div>

              <div>
                <div className="text-5xl font-bold mb-3">42%</div>
                <p className="text-[#1A1A1A]/70">
                  of users will leave a site with poor functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Slider */}
      <section className="py-16 px-4 overflow-hidden">
        <div className="container mx-auto mb-10 text-center">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Trusted by hundreds of companies worldwide
          </p>
        </div>

        <ReviewSlider />
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Design Portfolio</h2>
            <p className="text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto">
              From mobile apps to web platforms, we create designs that drive
              results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <PortfolioSlideshow />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to elevate your brand?
          </h2>
          <p className="text-xl text-[#1A1A1A]/70 mb-8">
            Join 100+ companies that trust DesignX with their most important
            design projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FF4D58] text-white hover:bg-[#FF4D58]/90"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A]/5"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4">
        <div className="container mx-auto">
          <div className="mt-12 pt-8 text-center text-[#1A1A1A]/70">
            <p>&copy; 2025 CC Designs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
