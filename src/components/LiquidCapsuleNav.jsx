import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LiquidCapsuleNav = ({ products, activeIndex, onProductChange, theme }) => {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = React.useRef([]);

  useEffect(() => {
    if (tabRefs.current[activeIndex]) {
      const activeTab = tabRefs.current[activeIndex];
      setIndicatorStyle({
        width: activeTab.offsetWidth,
        left: activeTab.offsetLeft,
      });
    }
  }, [activeIndex]);

  return (
    <div className="relative flex items-center md:gap-2 md:p-2 py-2 px-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 whitespace-nowrap min-w-max">
      {/* Liquid Capsule Indicator */}
      <motion.div
        className="absolute rounded-full"
        style={{
          backgroundColor: theme.button_bg,
          height: 'calc(100% - 16px)',
          top: '8px',
        }}
        animate={{
          width: indicatorStyle.width,
          left: indicatorStyle.left,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
      />

      {/* Tab Buttons */}
      {products.map((product, index) => (
        <button
          key={product.id}
          ref={(el) => (tabRefs.current[index] = el)}
          onClick={() => onProductChange(index)}
          className="relative z-10 md:px-6 px-3 py-3 rounded-full text-sm font-semibold transition-colors duration-300"
          style={{
            color: activeIndex === index ? theme.button_text : theme.text,
            fontFamily: "'Manrope', sans-serif",
            opacity: activeIndex === index ? 1 : 0.7,
          }}
          data-testid={`product-tab-${product.id}`}
        >
          {product.tabName || product.name}
        </button>
      ))}
    </div>
  );
};

export default LiquidCapsuleNav;
