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
      category: "Ice Cream",
      name: "Classic Vanilla",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Ice Cream",
      name: "Fresh Strawberry",
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Ice Cream",
      name: "Dark Chocolate",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Milkshakes",
      name: "Oreo Milkshake",
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bee?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Milkshakes",
      name: "Strawberry Shake",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Sundaes",
      name: "Death By Chocolate",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Sundaes",
      name: "Lotus Biscoff Sundae",
      image: "https://images.unsplash.com/photo-1562513872-634b8fae6dbe?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Indulgence",
      name: "Cookie Cream Bliss",
      image: "https://images.unsplash.com/photo-1497034840422-929e06c7e231?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "Indulgence",
      name: "Tiramisu Treat",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop",
    }
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
      "Ice Cream": "#3b82f6",
      "Milkshakes": "#f59e0b",
      "Sundaes": "#ef4444",
      "Indulgence": "#8b5cf6",
    };
    return colors[category] || currentTheme.button_bg;
  };

  const handlePrevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.image === selectedImage.image);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.image === selectedImage.image);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#164e63]">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-3 mt-2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="text-xl md:text-2xl font-bold tracking-tight italic"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Panda Scoops
            </h1>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex md:min-w-[720px] items-center justify-between rounded-full backdrop-blur-xl border border-white/20 px-6 py-3"
            style={{
              backgroundColor: `${currentTheme.button_bg}20`,
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
            }}
          >
            <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <Link to="/menu" className="hover:opacity-70 transition-opacity">Menu</Link>
            <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
            <Link to="/gallery" className="hover:opacity-70 transition-opacity text-amber-400">Gallery</Link>
            <Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
          </motion.div>

          <div className="flex items-center gap-3 hidden md:flex">
            <a
              href="https://instagram.com/pandascoops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </a>
          </div>
          <div className="block lg:hidden">
            <Hamburger size={25} toggled={isMenuOpen} toggle={setIsMenuOpen} color="white" />
          </div>
        </div>
      </motion.header>

      <main className="pt-28 pb-16 px-4 md:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 italic text-white"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Flavor Gallery
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              A visual treat of our handcrafted ice creams and decadent delights.
            </motion.p>
          </div>

          <motion.div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                    ? "bg-amber-500 text-cyan-900"
                    : "bg-white/10 hover:bg-white/20"
                  }`}
                style={{ fontFamily: "'Fraunces', serif" }}
                whileHover={{ scale: 1.05 }}
              >
                {category === "all" ? "All Treats" : category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" layout>
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item, index) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white/10 border border-white/10 shadow-lg">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full mb-2 inline-block" style={{ backgroundColor: getCategoryColor(item.category) }}>
                          {item.category}
                        </span>
                        <h3 className="text-white font-bold text-xl uppercase tracking-wider">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 p-3 text-white hover:text-amber-500 transition-colors">
              <X size={32} />
            </button>

            <button className="absolute left-6 p-4 text-white hover:text-amber-500" onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}>
              <ChevronLeft size={48} />
            </button>

            <motion.div className="max-w-4xl max-h-[80vh] px-4 text-center" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.image} alt={selectedImage.name} className="w-full max-h-[70vh] object-contain rounded-3xl shadow-2xl border border-white/10" />
              <h3 className="text-3xl font-bold text-white mt-6 italic" style={{ fontFamily: "'Fraunces', serif" }}>{selectedImage.name}</h3>
              <p className="text-amber-500 font-semibold tracking-widest uppercase mt-1">{selectedImage.category}</p>
            </motion.div>

            <button className="absolute right-6 p-4 text-white hover:text-amber-500" onClick={(e) => { e.stopPropagation(); handleNextImage(); }}>
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
