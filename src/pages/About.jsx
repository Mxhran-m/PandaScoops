import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { productData } from "../data/productData";
import Footer from "@/components/Footer";

const timelineData = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "World of Waffles was born from a simple dream - to bring the authentic Belgian waffle experience to India. Starting as a small popup stall in Marathahalli.",
    icon: "🌟",
    illus_path: "/illustrations/Farmersmarket-cuate.svg"
  },
  {
    year: "2022",
    title: "First Restaurant",
    description:
    "Opened our first permanent restaurant, becoming the go-to destination for waffle lovers in Bangalore. Our signature Belgian Liege waffles became an instant hit.",
    icon: "🏠",
    illus_path: "/illustrations/Shopsre-openingcuate.svg"
  },
  {
    year: "2023",
    title: "Innovation",
    description:
    "Expanded our menu to include artisanal ice creams and crispy french fries. Introduced innovative 3D-printed waffle designs that took social media by storm.",
    icon: "💡",
    illus_path: "/illustrations/Problemsolving-cuate.svg"
  },
  {
    year: "2024",
    title: "Going Viral",
    description:
    "Our unique 3D waffle creations went viral on Instagram and YouTube. Featured in multiple food magazines and recognized as one of the most Instagrammable spots in Bangalore.",
    icon: "📸",
    illus_path: "/illustrations/Socialnetworking-cuate.svg"
  },
  {
    year: "2025",
    title: "Growth",
    description:
    "Expanded to multiple locations across Bangalore. Launched our catering service and began serving corporate events, weddings, and private parties.",
    icon: "🚀",
    illus_path: "/illustrations/growth-cuate.svg"
  },
  {
    year: "2026",
    title: "Today",
    description:
    "Serving thousands of happy customers every month. Continuing to innovate with new flavors and designs while maintaining the quality that made us famous.",
    icon: "🎉",
    illus_path: "/illustrations/Celebration-cuate.svg"
  },
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  className={`
    flex flex-col lg:flex-row
    items-center w-full mb-12
    ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
  `}
>
  {/* Content Side */}
  <div
    className={`
      w-full lg:w-5/12
      px-4 lg:px-0
      ${isEven ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"}
    `}
  >
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="shadow-lg backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12"
    >
      <span className="text-4xl mb-2 block">{item.icon}</span>
      <h3
        className="text-2xl font-bold text-[#1A120B] mb-1"
        style={{ fontFamily: "'Fraunces', serif" }}
      >
        {item.year}
      </h3>
      <h4 className="text-lg font-semibold text-[#1A120B]/80 mb-2">
        {item.title}
      </h4>
      <p className="text-[#1A120B]/70 text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  </div>

  {/* Center Line */}
  <div className="relative w-full lg:w-2/12 flex justify-center my-8 lg:my-0">
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#FFD600] z-10"
    >
      <span className="text-xl">{item.icon}</span>
    </motion.div>

    {/* Vertical line only on large screens */}
    <div className="hidden lg:block absolute top-1/2 w-1 h-full bg-white/50 -z-0" />
  </div>

  {/* Image Side */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="w-full lg:w-5/12 flex justify-center"
  >
    <img
      className="hidden lg:block h-[300px] object-contain"
      src={item.illus_path}
      alt="image"
    />
  </motion.div>
</motion.div>
  );
};

export default function About() {
  const currentTheme = productData[0].theme;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="about min-h-screen bg-[#FFD600]">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-3 mt-2 text-[#1A120B]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1
              className="text-xl md:text-2xl font-bold tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              World of Waffles
            </h1>
          </div>

          {/* Current Product Pill Indicator */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block px-24 py-3 md:flex md:min-w-[720px] items-center justify-between rounded-full backdrop-blur-xl border"
            style={{
              backgroundColor: `${currentTheme.button_bg}1`,
              borderColor: `${currentTheme.button_bg}40`,
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
            }}
            data-testid="active-product-indicator"
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </motion.div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3 hidden md:flex">
            <a
              href="https://instagram.com/worldofwaffles"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
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
              href="https://facebook.com/worldofwaffles"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
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
              href="https://youtube.com/@worldofwaffles"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
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
              href="https://maps.google.com/?q=World+of+Waffles+Marathahalli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
              data-testid="social-google"
              aria-label="Google Maps"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866,0.549 3.921,1.453l2.814-2.814C17.503,2.988 15.139,2 12.545,2C7.021,2 2.543,6.477 2.543,12s4.478,10 10.002,10c8.396,0 10.249-7.85 9.426-11.748L12.545,10.239z" />
              </svg>
            </a>
          </div>
          <div className="block lg:hidden">
            <Hamburger size={25} toggled={isMenuOpen} toggle={setIsMenuOpen} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="z-50 absolute top-0 left-0 flex flex-col items-center justify-center gap-8 h-screen w-full py-20 backdrop-blur-xl bg-white/10 border-t border-white/20"
            animate={{ backgroundColor: currentTheme.background }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center justify-between gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium"
              >
                About
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <a
                href="https://instagram.com/worldofwaffles"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.5A1.25,5.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/worldofwaffles"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
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
                href="https://youtube.com/@worldofwaffles"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
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
                href="https://maps.google.com/?q=World+of+Waffles+Marathahalli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
                aria-label="Google Maps"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866,0.549 3.921,1.453l2.814-2.814C17.503,2.988 15.139,2 12.545,2C7.021,2 2.543,6.477 2.543,12s4.478 10 10.002,10c8.396,0 10.249-7.85 9.426-11.748L12.545,10.239z" />
                </svg>
              </a>
            </div>
            <div className="rounded-full transition-transform backdrop-blur-xl bg-[#1A120B]/10 border border-white/20">
              <Hamburger
                size={25}
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
              />
            </div>
          </div>
        )}
      </motion.header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4 md:px-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-[#1A120B] mb-4"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-[#1A120B]/70 max-w-3xl mx-auto"
          >
            From a small dream to Bangalore's most loved waffle destination
          </motion.p>
        </motion.div>

        {/* Timeline Section */}
        <div className="max-w-6xl mx-auto">
          {/* Vertical Line Container */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/50 hidden md:block" />

            {/* Timeline Items */}
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
            <h2
              className="text-3xl md:text-4xl font-bold text-center text-[#1A120B] mb-8"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              World of Waffles in Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#1A120B]">
                  5+
                </p>
                <p className="text-[#1A120B]/70 mt-2">Years of Excellence</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#1A120B]">
                  50K+
                </p>
                <p className="text-[#1A120B]/70 mt-2">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#1A120B]">
                  20+
                </p>
                <p className="text-[#1A120B]/70 mt-2">Waffle Varieties</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#1A120B]">
                  3
                </p>
                <p className="text-[#1A120B]/70 mt-2">Locations</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mt-20"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-[#1A120B] mb-12"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🍰",
                title: "Quality Ingredients",
                desc: "We use only the finest Belgian chocolate, fresh dairy, and locally sourced ingredients.",
              },
              {
                icon: "🎨",
                title: "Art & Craft",
                desc: "Every waffle is a masterpiece, crafted with precision and creativity using 3D printing technology.",
              },
              {
                icon: "💝",
                title: "Customer Love",
                desc: "Your smile is our reward. We pour our heart into every creation just for you.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-[#D50000] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center"
              >
                <span className="text-5xl mb-4 block">{value.icon}</span>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-white/70 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
     <Footer/>
    </div>
  );
}
