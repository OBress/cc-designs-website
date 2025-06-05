"use client";

import { useState, useEffect } from "react";

const targets = [
  "modern brands",
  "tech startups",
  "growing companies",
  "innovative teams",
  "ambitious founders",
];

export function TypingAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentTarget = targets[currentIndex];

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          setCurrentText(currentTarget.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % targets.length);
          }
        } else {
          setCurrentText(currentTarget.substring(0, currentText.length + 1));

          if (currentText === currentTarget) {
            setIsPaused(true);
          }
        }
      },
      isDeleting ? 50 : isPaused ? 500 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentIndex]);

  return (
    <span className="text-[#FF4D58]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
