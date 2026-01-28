import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFrameAnimation from "../ScrollFrameAnimation";

const HeroSection = ({ product, theme }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const showContent = scrollProgress < 0.1;

  const handleOrderClick = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to order: ${product.name} - ${product.headline}`
    );
    window.open(`https://wa.me/919945387216?text=${message}`, "_blank");
  };

  return (
    <div className="relative w-full">
      {/* Animation Container */}
      <div className="relative w-full mt-28 md:mt-32 lg:mt-36">
        <ScrollFrameAnimation
          productId={product.id}
          frameConfig={product.frameConfig}
          theme={theme}
          onScrollProgress={setScrollProgress}
        />

        <div className="absolute top-0 left-0 right-0 w-full pointer-events-none h-[80dvh]">
          <div className="w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-12 pb-32 md:pb-0">
            <div className="relative w-full max-w-7xl mx-auto aspect-[4/5] md:aspect-[16/8]">
              <AnimatePresence>
                {showContent && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full text-center px-4 md:px-8 lg:px-12">
                      {/* Floating Magic Text */}
                      <motion.div
                        className="mb-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: [0, -10, 0]
                        }}
                        transition={{
                          opacity: { delay: 0.5, duration: 0.5 },
                          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                        }}
                      >
                        <p
                          className="text-sm md:text-base font-medium tracking-wide"
                          style={{
                            fontFamily: "'Manrope', sans-serif",
                            color: theme.text,
                            textShadow: "0 0 10px rgba(255,255,255,0.3)"
                          }}
                        >
                          Scroll to see magic ✨
                        </p>
                      </motion.div>

                      {/* Badge */}
                      {product.badge && (
                        <motion.div
                          className="inline-block mb-3 md:mb-4"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                        >
                          <span
                            className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-xl bg-white/20 border border-white/30"
                            style={{
                              fontFamily: "'Manrope', sans-serif",
                              color: theme.text
                            }}
                            data-testid={`badge-${product.id}`}
                          >
                            {product.badge}
                          </span>
                        </motion.div>
                      )}

                      {/* Product Name */}
                      <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none mb-2 md:mb-3"
                        style={{
                          fontFamily: "'Fraunces', serif",
                          color: theme.text,
                          letterSpacing: "-0.03em"
                        }}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        data-testid={`title-${product.id}`}
                      >
                        {product.name}
                      </motion.h1>

                      {/* Tagline */}
                      <motion.p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 opacity-90"
                        style={{
                          fontFamily: "'Fraunces', serif",
                          color: theme.text
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        data-testid={`tagline-${product.id}`}
                      >
                        {product.tagline}
                      </motion.p>

                      {/* Price
                      <motion.div
                        className="mb-4 md:mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <div
                          className="text-xl md:text-2xl lg:text-2xl font-thin"
                          style={{
                            fontFamily: "'Fraunces', serif",
                            color: theme.accent
                          }}
                          data-testid={`price-${product.id}`}
                        >

                          {product.description}
                        </div>
                      </motion.div> */}

                      {/* CTA Button */}
                      <motion.button
                        onClick={handleOrderClick}
                        className="px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base lg:text-lg font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
                        style={{
                          backgroundColor: theme.button_bg,
                          color: theme.button_text,
                          fontFamily: "'Manrope', sans-serif"
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        data-testid={`cta-hero-${product.id}`}
                      >
                        Order Now
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
