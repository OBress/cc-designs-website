"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "TechFlow",
    role: "CEO",
    rating: 5,
    text: "DesignX transformed our entire brand identity. The designs they created helped us secure our Series A funding.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Fintech Solutions",
    role: "Product Lead",
    rating: 5,
    text: "Working with DesignX was a game-changer for our product. User engagement increased by 47%.",
  },
  {
    id: 3,
    name: "Emma Watson",
    company: "HealthTech",
    role: "Founder",
    rating: 5,
    text: "The team at DesignX understood our vision perfectly. They delivered a design system that scales.",
  },
  {
    id: 4,
    name: "David Kim",
    company: "RetailConnect",
    role: "Marketing Director",
    rating: 5,
    text: "Our conversion rates doubled after DesignX redesigned our e-commerce platform. Unmatched attention to detail.",
  },
  {
    id: 5,
    name: "Priya Sharma",
    company: "EdTech Innovators",
    role: "CTO",
    rating: 5,
    text: "DesignX created an intuitive interface for our complex educational platform. Easy to use for everyone.",
  },
  {
    id: 6,
    name: "James Wilson",
    company: "SaaS Platform",
    role: "Co-founder",
    rating: 5,
    text: "DesignX is in a league of their own. They don't just design, they solve business problems.",
  },
  {
    id: 7,
    name: "Olivia Martinez",
    company: "Travel App",
    role: "UX Director",
    rating: 5,
    text: "As a UX professional myself, I have high standards. DesignX exceeded them all with thorough process.",
  },
  {
    id: 8,
    name: "Alex Johnson",
    company: "Media Platform",
    role: "Product Manager",
    rating: 5,
    text: "DesignX helped us reimagine our content delivery. Time-on-site increased by 35% and reduced bounce rates.",
  },
];

export function ReviewSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Triple the reviews for seamless looping
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Add CSS keyframes for sliding animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-33.33%);
        }
      }
      .slide-animation {
        animation: slideLeft 15s linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="w-full overflow-hidden" ref={sliderRef}>
        <div className="flex slide-animation">
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-[320px] mx-3 bg-white border border-gray-200 shadow-sm p-5 rounded-xl"
            >
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#FFE066] fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-sm text-[#1A1A1A] mb-4 leading-relaxed">
                "{review.text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#72B6F9] flex items-center justify-center text-sm font-bold mr-3 text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-sm">{review.name}</div>
                  <div className="text-xs text-[#1A1A1A]/70">
                    {review.role}, {review.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
