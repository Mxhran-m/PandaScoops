import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = ({ product, theme }) => {
  return (
    <section
      className="min-h-[100dvh] w-full flex items-center justify-center px-4 md:px-12 py-20"
      data-testid={`features-section-${product.id}`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-16 text-center"
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
          {product.featuresTitle || "What Makes It Special"}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {product.features && product.features.map((feature, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              data-testid={`feature-card-${index}`}
            >
              {feature.icon && (
                <div
                  className="text-5xl mb-4"
                  style={{ color: theme.accent }}
                >
                  {feature.icon}
                </div>
              )}
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: theme.text
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed opacity-90"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: theme.text
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
