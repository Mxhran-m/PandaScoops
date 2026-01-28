import React from "react";
import { motion } from "framer-motion";

const Navigation = ({ activeSlide, totalSlides, setActiveSlide, accentColor }) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => setActiveSlide(index)}
          className="group relative"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          data-testid={`nav-dot-${index}`}
          aria-label={`Go to slide ${index + 1}`}
        >
          <div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index ? "scale-100" : "scale-75 opacity-50"
            }`}
            style={{
              backgroundColor: activeSlide === index ? accentColor : "#999",
            }}
          />
          {/* Tooltip on hover */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            <div
              className="px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-xl bg-white/10 border border-white/20"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {index < totalSlides - 1 ? `Slide ${index + 1}` : "Contact"}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default Navigation;
