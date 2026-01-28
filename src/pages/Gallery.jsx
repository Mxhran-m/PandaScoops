import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { productData } from "../data/productData";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function Gallery() {
  const images = [
    {
      category: "waffle sandwich",
      name: "triple chocolate",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/0e7eac2a-8c10-4446-8c7a-48259f5eb1cd_466f0a81-532d-4029-95db-73473a1af502.jpg",
    },
    {
      category: "waffle sandwich",
      name: "Belgian dark",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/babc2bab-fff6-4bc8-8a17-9c8601546427_c0bcc537-4a3d-458f-b5ee-e98a454e11fc.jpg",
    },
    {
      category: "waffle sandwich",
      name: "Kitkat nutella",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/a2324cd1-b633-4c25-baf0-94bdd2bdfab6_f9fdadc8-c9cb-4c37-b61b-963bc6b8228f.jpg",
    },
    {
      category: "waffle sandwich",
      name: "Lotus Biscoff Waffle Sandwich",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/7/27/af86fa50-6121-41b1-beb3-39b07d752081_b71456a8-a6df-48fd-8bba-7576416a7ca5.jpg",
    },
    {
      category: "waffle sandwich",
      name: "Red velvet waffle sandwich",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/7/15/e1b3a105-9123-4334-b7e0-ba7e058a5c7e_aac11d56-e10a-4f0b-8373-5dbd506e8f1c.jpg",
    },
    {
      category: "waffle sandwich",
      name: "Chocolate overload waffle sandwich",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/ffbe20b8-7299-4ec8-a3ae-040ce5db847c_344d40bd-02b1-4083-bbd5-16597124a8dc.jpg",
    },
    {
      category: "waffle sandwich",
      name: "Belgian milk",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/7bd319b0-d7a6-49d7-b8b4-1330bde56f8e_5ea08856-9b59-4438-9614-015026140b43.jpg",
    },
    {
      category: "waffle Popsicle",
      name: "Mr oreo popsicle",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/93459f68-c3ed-4f99-a789-854023636e17_accf6b60-bbdf-44cf-a8e2-a8c1e5d73352.jpg",
    },
    {
      category: "waffle Popsicle",
      name: "Red velvet",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/4e6cba43-e377-4f95-b1dd-1b0b7a882ad6_a39fe3f4-7bb6-4d64-8532-b784702ea13b.jpg",
    },
    {
      category: "waffle Popsicle",
      name: "Stress berry Popsicle",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/7/15/603fa235-80a8-4111-b4a8-c280091abfc1_efed7feb-bcae-4638-b98f-67cb1d013fb1.jpg_compressed",
    },
    {
      category: "waffle Popsicle",
      name: "Triple Chocolate Popsicle",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/cf2482ad-ca74-44fc-9fba-e9bc1feef4af_b0c76ca1-7932-4ae4-bba2-b9321c8d4318.jpg",
    },
    {
      category: "waffle Popsicle",
      name: "Lotus biscoff popsicle",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/1dc54f32-2f9c-459f-ae70-32ee5ed3f919_1ab4bc78-a665-4655-92e6-ff6128894adb.jpg",
    },
    {
      category: "Ice Cream",
      name: "Black current ice cream",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/26a65ca3-451f-442b-8cef-fb198868fff4_1f9d1524-eaa2-4e8c-a916-ade2de9c0d6c.jpg",
    },
    {
      category: "Ice Cream",
      name: "Chocolate ice cream",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/b2b6fcad-c211-4430-aaa2-55f64ce9ce6e_0e20794c-fabb-44fc-b22a-8ad6d6244417.jpg",
    },
    {
      category: "Ice Cream",
      name: "Sitaphal ice cream",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/675cf8a5-677a-4a22-83e7-726ffb3b5743_91b5eba3-5e7a-4e0e-86e5-f3238b1ef82d.jpg",
    },
    {
      category: "Ice Cream",
      name: "Strawberry ice cream",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/bf331185-ce41-4482-bcd7-a4ea8540aa7f_7ebef59e-8581-4393-a9b5-98677ba2bf26.jpg",
    },
    {
      category: "Ice Cream",
      name: "Butter scotch ice cream",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/42625d32-6694-44c9-af41-6bc7ac653b24_1e692e65-3308-4fa3-96a4-df1a7ce7abd8.jpg",
    },
    {
      category: "Ice Cream",
      name: "Irish coffee ice cream",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/fa54bc40-e096-4e8b-99d5-964b6b061b90_013d5052-9f07-4b6d-8227-ad72374a276f.jpg",
    },
    {
      category: "French Fries",
      name: "Peri peri french fries",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/534631c9-3f4b-4b07-beef-713b2347aebe_e5c9ba93-5df2-4a6f-ac7d-a640e57dd3b5.jpg",
    },
    {
      category: "French Fries",
      name: "Salted french fries",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/3/b97f09c6-93ed-4fe7-85bd-94162e41b2f7_ef7b1caf-13ea-452a-a08d-0a57bb079624.jpg",
    },
  ];

  const currentTheme = productData[0].theme;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);

  const categories = ["all", ...new Set(images.map((img) => img.category))];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const getCategoryColor = (category) => {
    const colors = {
      "waffle sandwich": "#8B4513",
      "waffle Popsicle": "#FF6B6B",
      "Ice Cream": "#FFEAA7",
      "French Fries": "#F39C12",
    };
    return colors[category] || currentTheme.button_bg;
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const currentIndex = filteredImages.findIndex(
    (img) => img.image === selectedImage?.image
  );

  return (
    <div className="min-h-screen bg-[#FFD600]">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-3 mt-2 text-[#1A120B]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="text-xl md:text-2xl font-bold tracking-tight"
              style={{
                fontFamily: "'Fraunces', serif",
              }}
            >
              World of Waffles
            </h1>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex md:min-w-[720px] items-center justify-between rounded-full backdrop-blur-xl border px-6 py-3"
            style={{
              backgroundColor: `${currentTheme.button_bg}1`,
              borderColor: `${currentTheme.button_bg}40`,
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
            }}
            data-testid="active-product-indicator"
          >
            <Link to="/" className="hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link to="/about" className="hover:opacity-70 transition-opacity">
              About
            </Link>
            <Link to="/gallery" className="hover:opacity-70 transition-opacity">
              Gallery
            </Link>
            <Link to="/contact" className="hover:opacity-70 transition-opacity">
              Contact
            </Link>
          </motion.div>

          <div className="flex items-center gap-3 hidden md:flex">
            <a
              href="https://instagram.com/worldofwaffles"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/worldofwaffles"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0 2.866,0.549 3.921,1.453l2.814-2.814C17.503,2.988 15.139,2 12.545,2C7.021,2 2.543,6.477 2.543,12s4.478,10 10.002,10c8.396,0 10.249-7.85 9.426-11.748L12.545,10.239z" />
              </svg>
            </a>
          </div>
          <div className="block lg:hidden">
            <Hamburger size={25} toggled={isMenuOpen} toggle={setIsMenuOpen} />
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="z-50 absolute top-0 left-0 flex flex-col items-center justify-center gap-8 h-screen w-full py-20 backdrop-blur-xl bg-white/10 border-t border-white/20"
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/worldofwaffles"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0 2.866,0.549 3.921,1.453l2.814-2.814C17.503,2.988 15.139,2 12.545,2C7.021,2 2.543,6.477 2.543,12s4.478,10 10.002,10c8.396,0 10.249-7.85 9.426-11.748L12.545,10.239z" />
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

      <main className="pt-28 pb-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-[#1A120B]"
              style={{ fontFamily: "'Fraunces', serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Gallery
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-[#1A120B]/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Explore our delicious collection of handcrafted waffles, ice creams,
              and more
            </motion.p>
          </div>

          <motion.div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#1A120B] text-[#FFD600]"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                style={{
                  fontFamily: "'Fraunces', serif",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === "all" ? "All Items" : category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item, index) => (
                <motion.div
                  key={`${item.category}-${item.name}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span
                          className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2"
                          style={{
                            backgroundColor: getCategoryColor(item.category),
                            color: item.category === "Ice Cream" ? "#1A120B" : "white",
                          }}
                        >
                          {item.category}
                        </span>
                        <h3 className="text-white font-semibold text-lg">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                    {/* <motion.div
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1A120B"
                        strokeWidth="2"
                      >
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16,6 12,2 8,6" />
                        <line x1="12" y1="2" x2="12" y2="15" />
                      </svg>
                    </motion.div> */}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-[#1A120B]/60">
                No images found in this category
              </p>
            </div>
          )}
        </motion.div>
      </main>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={28} className="text-white" />
            </motion.button>

            <motion.button
              className="absolute left-4 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
            >
              <ChevronLeft size={32} className="text-white" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="text-center mt-6">
                <span
                  className="inline-block px-4 py-2 text-sm font-semibold rounded-full"
                  style={{
                    backgroundColor: getCategoryColor(selectedImage.category),
                    color: selectedImage.category === "Ice Cream" ? "#1A120B" : "white",
                  }}
                >
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-3">
                  {selectedImage.name}
                </h3>
              </div>
            </motion.div>

            <motion.button
              className="absolute right-4 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
            >
              <ChevronRight size={32} className="text-white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer/>
    </div>
  );
}
