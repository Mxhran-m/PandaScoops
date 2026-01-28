import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { productData } from "../data/productData";
import Footer from "@/components/Footer";

export default function Contact() {
  const currentTheme = productData[0].theme;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="contact bg-[#164e63] min-h-screen">
      {/* Header */}
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
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
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

      {/* Main Content */}
      <main className="pt-32 pb-16 px-6 md:px-12 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 italic"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Get in Touch
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From scoops to heart - we're here to listen! Have a flavor suggestion or want us to cater your event?
          </p>
        </motion.div>

        <motion.section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Side */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.697!3d12.956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzIxLjYiTiA3N8KwNDEnNDkuMiJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Panda Scoops Location"
              />
            </motion.div>

            {/* Contact Details Side */}
            <div className="flex flex-col justify-center space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 shadow-lg"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white/20 uppercase tracking-tighter text-xs font-bold">ADDRESS</div>
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p className="text-white/70">Panda Scoops, Bangalore, KA - India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white/20 uppercase tracking-tighter text-xs font-bold">PHONE</div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-white/70">+91 00000 00000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white/20 uppercase tracking-tighter text-xs font-bold">EMAIL</div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-white/70">hello@pandascoops.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2 italic" style={{ fontFamily: "'Fraunces', serif" }}>
                Send us a Message
              </h2>
              <p className="text-white/70 mb-8">We'll get back to you within 24 hours!</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-lg bg-amber-500 text-cyan-900 hover:bg-amber-400 transition-colors shadow-lg uppercase tracking-widest"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden shadow-lg h-[400px] md:h-full bg-white/10 flex items-center justify-center p-8"
            >
              <img
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop"
                alt="Panda Scoops Hero"
                className="rounded-3xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-transparent to-transparent flex items-end p-8">
                <div className="max-w-md">
                  <h3 className="text-3xl font-bold italic" style={{ fontFamily: "'Fraunces', serif" }}>We Love Surprises!</h3>
                  <p className="text-white/70">Visit us for daily specials and happy hour discounts on all scoops.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
