import React from "react";
import { motion } from "framer-motion";

const FeaturedItemsSection = ({ product, theme }) => {
  if (!product.featuredItems || product.featuredItems.length === 0) {
    return null;
  }

  return (
    <section
      className="min-h-[100dvh] w-full flex items-center justify-center px-4 md:px-12 py-20"
      data-testid={`featured-items-section-${product.id}`}
      style={{
        background: `linear-gradient(to bottom, ${theme.background}00 0%, ${theme.background}40 100%)`
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-6 text-center"
          style={{
            fontFamily: "'Fraunces', serif",
            color: theme.text,
            letterSpacing: "-0.02em"
          }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {product.featuredItemsTitle || "Popular Choices"}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-center mb-16 opacity-90 max-w-3xl mx-auto"
          style={{
            fontFamily: "'Manrope', sans-serif",
            color: theme.text
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {product.featuredItemsSubtitle || "Handpicked favorites from our menu"}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.featuredItems.map((item, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              data-testid={`featured-item-${index}`}
            >
              {item.image && (
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <h3
                  className="text-xl md:text-2xl font-bold mb-2"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: theme.text
                  }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-sm md:text-base mb-4 opacity-80"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: theme.text
                  }}
                >
                  {item.description}
                </p>
                {item.price && (
                  <div
                    className="text-lg md:text-xl font-bold"
                    style={{
                      fontFamily: "'Fraunces', serif",
                      color: theme.accent
                    }}
                  >
                    ₹{item.price}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItemsSection;
