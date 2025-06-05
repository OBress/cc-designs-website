"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

interface PricingOption {
  id: string;
  category: "development" | "maintenance";
  name: string;
  description?: string;
  oneTime: number;
  monthly: number;
  required?: boolean;
}

const pricingOptions: PricingOption[] = [
  {
    id: "basic-website",
    category: "development",
    name: "Display text, images (bare minimum)",
    oneTime: 1000,
    monthly: 50,
    required: true,
  },
  {
    id: "video",
    category: "development",
    name: "Video incorporation",
    oneTime: 100,
    monthly: 20,
  },
  {
    id: "ai-chatbox",
    category: "development",
    name: "Custom AI Support Text Window (smart chatbox)",
    oneTime: 200,
    monthly: 50,
  },
  {
    id: "purchase-integration",
    category: "development",
    name: "Purchase integration (checkout/payment)",
    oneTime: 500,
    monthly: 0,
  },
  {
    id: "admin-dashboard",
    category: "development",
    name: "Admin dashboard (edit content, manage store/orders)",
    oneTime: 1000,
    monthly: 100,
  },
  {
    id: "maintenance-package",
    category: "maintenance",
    name: "Monthly maintenance package",
    description:
      "Includes priority support, 2 free basic updates/additions per month, fast-tracked advanced requests",
    oneTime: 0,
    monthly: 50,
  },
];

export function PricingSection() {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(
    new Set(["basic-website"])
  );

  const handleToggleOption = (optionId: string) => {
    const newSelected = new Set(selectedOptions);
    if (optionId === "basic-website") return; // Can't deselect required option

    if (newSelected.has(optionId)) {
      newSelected.delete(optionId);
    } else {
      newSelected.add(optionId);
    }
    setSelectedOptions(newSelected);
  };

  const calculateTotals = () => {
    const selected = pricingOptions.filter((option) =>
      selectedOptions.has(option.id)
    );
    const totalOneTime = selected.reduce(
      (sum, option) => sum + option.oneTime,
      0
    );
    const totalMonthly = selected.reduce(
      (sum, option) => sum + option.monthly,
      0
    );
    return { totalOneTime, totalMonthly, selectedItems: selected };
  };

  const { totalOneTime, totalMonthly, selectedItems } = calculateTotals();

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build your <span className="text-[#FF4D58]">custom pricing</span>
          </h2>
          <p className="text-[#1A1A1A]/70 text-lg max-w-2xl mx-auto">
            Select the features you need and see your costs in real-time. No
            hidden fees, complete transparency.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Options Selection */}
          <div className="lg:col-span-2 space-y-6 flex flex-col">
            {/* Website Development */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
                Website Development
              </h3>
              <div className="space-y-4">
                {pricingOptions
                  .filter((option) => option.category === "development")
                  .map((option) => (
                    <div key={option.id} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <label className="relative flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedOptions.has(option.id)}
                            onChange={() => handleToggleOption(option.id)}
                            disabled={option.required}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                              selectedOptions.has(option.id)
                                ? "bg-[#FF4D58] border-[#FF4D58]"
                                : "border-gray-300 hover:border-[#FF4D58]"
                            } ${option.required ? "opacity-50" : ""}`}
                          >
                            {selectedOptions.has(option.id) && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                        </label>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-[#1A1A1A]">
                            {option.name}
                          </h4>
                          {option.required && (
                            <Badge className="bg-[#FFE066]/20 text-[#1A1A1A] border-[#FFE066]/50 text-xs">
                              Required
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-[#1A1A1A]/70 mb-2">
                          {option.oneTime > 0 &&
                            `$${option.oneTime.toLocaleString()} upfront`}
                          {option.oneTime > 0 && option.monthly > 0 && " + "}
                          {option.monthly > 0 && `$${option.monthly}/month`}
                        </div>
                        {option.description && (
                          <p className="text-sm text-[#1A1A1A]/60">
                            {option.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>

              {/* Additional features note */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-[#1A1A1A]/60">
                  <strong>Need something custom?</strong> Additional features
                  and integrations available upon consultation. Let's discuss
                  your specific requirements!
                </p>
              </div>
            </div>

            {/* Maintenance */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
                Maintenance & Support
              </h3>
              <div className="space-y-4">
                {pricingOptions
                  .filter((option) => option.category === "maintenance")
                  .map((option) => (
                    <div key={option.id} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <label className="relative flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedOptions.has(option.id)}
                            onChange={() => handleToggleOption(option.id)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                              selectedOptions.has(option.id)
                                ? "bg-[#FF4D58] border-[#FF4D58]"
                                : "border-gray-300 hover:border-[#FF4D58]"
                            }`}
                          >
                            {selectedOptions.has(option.id) && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                        </label>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#1A1A1A] mb-1">
                          {option.name}
                        </h4>
                        <div className="text-sm text-[#1A1A1A]/70 mb-2">
                          {option.oneTime > 0 &&
                            `$${option.oneTime.toLocaleString()} upfront`}
                          {option.oneTime > 0 && option.monthly > 0 && " + "}
                          {option.monthly > 0 && `$${option.monthly}/month`}
                        </div>
                        {option.description && (
                          <p className="text-sm text-[#1A1A1A]/60">
                            {option.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>

              {/* Additional maintenance info */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-[#1A1A1A]/60 mb-2">
                  <strong>One-time updates without maintenance package:</strong>
                </p>
                <ul className="text-sm text-[#1A1A1A]/60 space-y-1">
                  <li>• Basic update: $100</li>
                  <li>
                    • Advanced changes: $200 – $1,000+ (varies by complexity)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cost Summary */}
          <div className="lg:col-span-1 flex">
            <div className="bg-[#1A1A1A] text-white rounded-2xl p-6 border-2 border-[#1A1A1A] sticky top-8 h-fit lg:min-h-full flex flex-col w-full">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-6">
                  Your Custom Quote
                </h3>

                {/* Totals */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Upfront Cost:</span>
                    <span className="text-2xl font-bold">
                      ${totalOneTime.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monthly Cost:</span>
                    <span className="text-2xl font-bold">
                      ${totalMonthly.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="border-t border-gray-700 pt-4 mb-6">
                  <h4 className="font-medium mb-3 text-gray-300">
                    What's included:
                  </h4>
                  <div className="space-y-2">
                    {selectedItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-gray-400">{item.name}</span>
                        <span className="text-white">
                          {item.oneTime > 0 &&
                            `$${item.oneTime.toLocaleString()}`}
                          {item.oneTime > 0 && item.monthly > 0 && " + "}
                          {item.monthly > 0 && `$${item.monthly}/mo`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons - Always at bottom */}
              <div className="mt-auto">
                <div className="space-y-3 mb-4">
                  <Button className="w-full bg-white text-[#1A1A1A] hover:bg-gray-100">
                    Get Started
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full text-white hover:bg-white/10"
                  >
                    Book a consultation <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>

                {/* Note */}
                <p className="text-xs text-gray-400 text-center">
                  Final pricing may vary based on specific requirements. Get a
                  detailed quote with a consultation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Get to know us section */}
        <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 max-w-2xl mx-auto text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Get to know us</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-lg text-[#1A1A1A]/70">
              {" "}
              / we enjoy talking to awesome people!
            </span>
          </div>
          <p className="text-[#1A1A1A]/70 mb-6">
            Let's chat about designing a product your users will love!
          </p>
          <Button className="bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90">
            Book a call
          </Button>
        </div>
      </div>
    </section>
  );
}
