"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    id: 1,
    title: "Mobile & Web Applications",
    description: "Complete UI/UX design for fintech, productivity, and e-commerce applications",
    image: "/images/portfolio-showcase.png",
    category: "Mobile Apps",
  },
  {
    id: 2,
    title: "Dashboard & Analytics",
    description: "Data visualization and dashboard designs that make complex information accessible",
    image: "/images/design-mockups.png",
    category: "Web Platform",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Modern e-commerce design that increased conversion rates by 150%",
    image: "/placeholder.svg?height=400&width=600",
    category: "E-commerce",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description: "Clean, intuitive dashboard design for B2B software platform",
    image: "/placeholder.svg?height=400&width=600",
    category: "SaaS",
  },
  {
    id: 5,
    title: "Healthcare App",
    description: "Patient-focused mobile app design with accessibility in mind",
    image: "/placeholder.svg?height=400&width=600",
    category: "Healthcare",
  },
]

export function PortfolioSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length)
      setIsTransitioning(false)
    }, 150)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioItems.length) % portfolioItems.length)
      setIsTransitioning(false)
    }, 150)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 150)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 1500) // Auto-advance every 1.5 seconds

    return () => clearInterval(interval)
  }, [isTransitioning])

  const currentItem = portfolioItems[currentIndex]

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h3
              className={`text-2xl font-semibold mb-2 transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}
            >
              {currentItem.title}
            </h3>
            <p
              className={`text-[#1A1A1A]/70 transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}
            >
              {currentItem.description}
            </p>
          </div>
          <div className="flex gap-2 ml-4">
            <Button variant="outline" size="sm" onClick={prevSlide} className="border-gray-300 hover:bg-gray-50">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextSlide} className="border-gray-300 hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-gray-100" style={{ aspectRatio: "16/10" }}>
          <div className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            <Image
              src={currentItem.image || "/placeholder.svg"}
              alt={currentItem.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            />
          </div>
          <div className="absolute top-4 left-4">
            <span
              className={`bg-[#72B6F9] text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-300 ${isTransitioning ? "opacity-50" : "opacity-100"}`}
            >
              {currentItem.category}
            </span>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#FF4D58] w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
