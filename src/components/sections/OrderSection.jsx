import React from "react";
import { motion } from "framer-motion";

const OrderSection = ({ product, theme }) => {
  const handleOrderClick = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to order: ${product.name}`
    );
    window.open(`https://wa.me/919945387216?text=${message}`, "_blank");
  };

  return (
    <section
      className="min-h-[100dvh] w-full flex items-center justify-center px-4 md:px-12 py-20"
      data-testid={`order-section-${product.id}`}
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        <motion.div
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 md:p-16"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight mb-6"
            style={{
              fontFamily: "'Fraunces', serif",
              color: theme.text,
              letterSpacing: "-0.02em"
            }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            ₹{product.price}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-8 opacity-90"
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: theme.text
            }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            per serving
          </motion.p> */}

          {/* Order Features */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {product.orderFeatures && product.orderFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: theme.text,
                  fontSize: "0.875rem"
                }}
              >
                {feature}
              </div>
            ))}
          </motion.div>

          {/* Guarantees */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="text-left">
              <h4
                className="font-bold mb-2 text-base"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: theme.accent
                }}
              >
                Quick Delivery
              </h4>
              <p
                className="text-sm opacity-80"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: theme.text
                }}
              >
                Fresh and hot delivery within 30 minutes in Marathahalli area
              </p>
            </div>
            <div className="text-left">
              <h4
                className="font-bold mb-2 text-base"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: theme.accent
                }}
              >
                Quality Guarantee
              </h4>
              <p
                className="text-sm opacity-80"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: theme.text
                }}
              >
                100% satisfaction guaranteed. Not happy? We'll make it right.
              </p>
            </div>
          </motion.div>

          {/* Order Button */}
          <motion.button
            onClick={handleOrderClick}
            className="w-full md:w-auto px-12 py-5 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
            style={{
              backgroundColor: theme.button_bg,
              color: theme.button_text,
              fontFamily: "'Manrope', sans-serif"
            }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid={`cta-order-${product.id}`}
          >
            Order on WhatsApp {/* — ₹{product.price} */}
          </motion.button>

          <motion.p
            className="mt-6 text-sm opacity-60"
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: theme.text
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Click to open WhatsApp and place your order
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderSection;
