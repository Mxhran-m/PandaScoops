import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductPage from "./ProductPage";
import LiquidCapsuleNav from "./LiquidCapsuleNav";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { productData } from "../data/productData";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import Footer from "./Footer";

const MainSlider = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalProducts = productData.length;

  const currentTheme = productData[activeProduct].theme;
  const currentProduct = productData[activeProduct];

  const changeProduct = useCallback(
    (newIndex) => {
      if (
        newIndex >= 0 &&
        newIndex < totalProducts &&
        newIndex !== activeProduct
      ) {
        setDirection(newIndex > activeProduct ? 1 : -1);
        setActiveProduct(newIndex);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [activeProduct, totalProducts],
  );

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        if (activeProduct > 0) changeProduct(activeProduct - 1);
      } else if (e.key === "ArrowRight") {
        if (activeProduct < totalProducts - 1) changeProduct(activeProduct + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProduct, changeProduct, totalProducts]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <>
      {/* Background Layer */}
      <motion.div
        className="fixed inset-0 -z-10"
        animate={{
          backgroundColor: currentTheme.background,
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-3 md:py-6 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1
              className="text-xl md:text-2xl font-bold tracking-tight"
              style={{
                fontFamily: "'Fraunces', serif",
                color: currentTheme.text,
              }}
            >
              Panda Scoops
            </h1>
            {/* <p
              className="text-xs md:text-sm opacity-70"
              style={{ fontFamily: "'Manrope', sans-serif", color: currentTheme.text }}
            >
              Marathahalli
            </p> */}
          </div>

          {/* Current Product Pill Indicator */}
          <motion.div
            key={activeProduct}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block px-24 py-3 md:flex  md:min-w-[720px] items-center justify-between rounded-full backdrop-blur-xl "
            style={{
              backgroundColor: `${currentTheme.button_bg}1`,
              borderColor: `${currentTheme.button_bg}40`,
              fontFamily: "'Fraunces', serif",
              color: currentTheme.text,
              fontWeight: 600,
            }}
            data-testid="active-product-indicator"
          >
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </motion.div>

          {/* Social Media Icons - Filled */}
          <div className="flex items-center gap-3 hidden md:flex">
            <a
              href="https://instagram.com/pandascoops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
              style={{ color: currentTheme.text }}
              data-testid="social-instagram"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/pandascoops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
              style={{ color: currentTheme.text }}
              data-testid="social-facebook"
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@pandascoops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
              style={{ color: currentTheme.text }}
              data-testid="social-youtube"
              aria-label="YouTube"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://maps.google.com/?q=Panda+Scoops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
              style={{ color: currentTheme.text }}
              data-testid="social-google"
              aria-label="Google Maps"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
              </svg>
            </a>
          </div>
          <div className="block lg:hidden">
            <Hamburger
              size={25}
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              color={currentTheme.text}
            />
          </div>
        </div>

        {/* mobile screen */}
        {isMenuOpen && (
          <div
            className="z-50 absolute top-0 left-0 flex flex-col items-center justify-center gap-8 h-screen w-full py-20 backdrop-blur-xl bg-white/10 border-t border-white/20 "
            animate={{
              backgroundColor: currentTheme.background,
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center justify-between gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium"
                style={{ color: currentTheme.text }}
              >
                Home
              </Link>
              <Link
                to="/menu"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium"
                style={{ color: currentTheme.text }}
              >
                Menu
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium"
                style={{ color: currentTheme.text }}
              >
                About
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium"
                style={{ color: currentTheme.text }}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium"
                style={{ color: currentTheme.text }}
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <a
                href="https://instagram.com/pandascoops"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
                style={{ color: currentTheme.text }}
                data-testid="social-instagram"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/pandascoops"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
                style={{ color: currentTheme.text }}
                data-testid="social-facebook"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@pandascoops"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
                style={{ color: currentTheme.text }}
                data-testid="social-youtube"
                aria-label="YouTube"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://maps.google.com/?q=Panda+Scoops"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
                style={{ color: currentTheme.text }}
                data-testid="social-google"
                aria-label="Google Maps"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
              </a>
            </div>
            <div className=" rounded-full transition-transform backdrop-blur-xl bg-white/10 border border-white/20">
              <Hamburger
                size={25}
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
                color={currentTheme.text}
              />
            </div>
          </div>
        )}

        {/* Navigation Tabs - Separate Row */}
        <div className="flex justify-center mt-2 md:mt-6">
          <div className="relative w-full max-w-full md:max-w-fit mx-auto">
            {/* Scroll Container */}
            <div className="overflow-x-auto scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 flex justify-start md:justify-center mobile-scroll-mask">
              <LiquidCapsuleNav
                products={productData}
                activeIndex={activeProduct}
                onProductChange={changeProduct}
                theme={currentTheme}
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Navigation Arrows */}
      {activeProduct > 0 && (
        <button
          onClick={() => changeProduct(activeProduct - 1)}
          className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-2 md:p-4 rounded-full hover:scale-110 transition-transform"
          style={{
            backgroundColor: `${currentTheme.button_bg}`,
            color: currentTheme.button_text,
          }}
          data-testid="nav-arrow-left"
          aria-label="Previous product"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {activeProduct < totalProducts - 1 && (
        <button
          onClick={() => changeProduct(activeProduct + 1)}
          className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-2 md:p-4 rounded-full hover:scale-110 transition-transform"
          style={{
            backgroundColor: `${currentTheme.button_bg}`,
            color: currentTheme.button_text,
          }}
          data-testid="nav-arrow-right"
          aria-label="Next product"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Product Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activeProduct}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <ProductPage
            product={productData[activeProduct]}
            theme={currentTheme}
          />
        </motion.div>
        <div style={{
          color: currentTheme.text
        }}>
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
};

export default MainSlider;
