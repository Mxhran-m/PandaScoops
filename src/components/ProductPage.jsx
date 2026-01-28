import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import FeaturedItemsSection from "./sections/FeaturedItemsSection";
import OrderSection from "./sections/OrderSection";
import ContactSection from "./ContactSection";

const ProductPage = ({ product, theme }) => {
  return (
    <div className="w-full">
      {/* Hero Section - Full viewport height */}
      <HeroSection product={product} theme={theme} />

      {/* Features Section */}
      <FeaturesSection product={product} theme={theme} />

      {/* Featured Items in Category */}
      <FeaturedItemsSection product={product} theme={theme} />

      {/* Order/Pricing Section */}
      <OrderSection product={product} theme={theme} />

      {/* Contact Section - Only show for last product */}
      {/* {product.isLast && <ContactSection theme={theme} />} */}
      {/* <ContactSection theme={theme} /> */}

    </div>
  );
};

export default ProductPage;
