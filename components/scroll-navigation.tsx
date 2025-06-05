"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function ScrollNavigation() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or near the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past initial threshold
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-full px-8 py-3 shadow-lg">
              <div className="flex items-center space-x-8">
                <Link href="#work" className="text-white hover:text-gray-300 transition-colors font-medium">
                  Work
                </Link>
                <Link href="#services" className="text-white hover:text-gray-300 transition-colors font-medium">
                  Services
                </Link>
                <Link href="#pricing" className="text-white hover:text-gray-300 transition-colors font-medium">
                  Pricing
                </Link>
                <Link href="#book" className="text-white hover:text-gray-300 transition-colors font-medium">
                  Book Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
