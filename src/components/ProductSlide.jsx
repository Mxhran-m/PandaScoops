import React from "react";
import { motion } from "framer-motion";

const ProductSlide = ({ product, theme }) => {
  const handleOrderClick = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to order: ${product.name} - ${product.headline}`
    );
    window.open(`https://wa.me/919945387216?text=${message}`, "_blank");
  };

  return (
    <motion.div
      className="h-screen w-full flex items-center justify-center px-4 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center h-full">
          {/* Text Content - Left Side on Desktop, Below on Mobile */}
          <motion.div
            className="md:col-span-5 md:col-start-2 z-10 order-2 md:order-1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Badge */}
            {product.badge && (
              <motion.div
                className="inline-block mb-4 md:mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span
                  className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-xl bg-white/10 border border-white/20"
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

            {/* Headline */}
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-4 md:mb-6"
              style={{
                fontFamily: "'Fraunces', serif",
                color: theme.text,
                letterSpacing: "-0.02em"
              }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              data-testid={`headline-${product.id}`}
            >
              {product.headline}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 opacity-90"
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: theme.text
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              data-testid={`description-${product.id}`}
            >
              {product.description}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              onClick={handleOrderClick}
              className="px-8 py-4 rounded-full text-base md:text-lg font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
              style={{
                backgroundColor: theme.button_bg,
                color: theme.button_text,
                fontFamily: "'Manrope', sans-serif"
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid={`cta-button-${product.id}`}
            >
              {product.cta}
            </motion.button>
          </motion.div>

          {/* Image - Right Side on Desktop, Above on Mobile */}
          <motion.div
            className="md:col-span-6 md:col-start-7 h-[40vh] md:h-[80vh] flex items-center justify-center order-1 md:order-2"
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))",
                }}
                data-testid={`product-image-${product.id}`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductSlide;
