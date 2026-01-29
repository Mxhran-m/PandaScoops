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
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-3 bg-[#164e63] text-white rounded-b-lg"
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
              href="https://maps.app.goo.gl/KcoaoQbjggBPZwZT6"
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
            <Hamburger size={25} toggled={isMenuOpen} toggle={setIsMenuOpen} color="white" />
          </div>
        </div>

        {/* mobile screen */}
        {isMenuOpen && (
          <div
            className="z-50 absolute top-0 left-0 flex flex-col items-center justify-center gap-8 h-screen w-full py-20 backdrop-blur-xl bg-black/30 border-t border-white/20 "
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
                href="https://maps.app.goo.gl/KcoaoQbjggBPZwZT6"
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

      </motion.header>

      {/* Main Content */}
      <main className="pt-28 md:pt-32 pb-16 px-2 md:px-12 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 italic"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Get in Touch
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
            From scoops to heart - we're here to listen! Have a flavor suggestion or want us to cater your event?
          </p>
        </motion.div>

        <motion.section className="pb-4 min-h-screen flex items-center">
          <div className="container mx-auto px-1 md:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

              {/* Map Side */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-lg min-h-[360px] lg:min-h-full"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3111988364635!2d77.57732279999999!3d12.951927699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150055a8c8cf%3A0x1b3f69fc949e8bac!2sPanda%20Scoops!5e0!3m2!1sen!2sin!4v1769674895191!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Panda Scoops Location"
                />
              </motion.div>

              {/* Contact Details Side */}
              <div className="flex flex-col justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-4 md:p-6 shadow-lg"
                >
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-6"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    Contact Information
                  </h2>

                  {/* Address */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-full bg-white/20">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p className="text-white/70 text-sm md:text-base">
                        World of Waffles<br />
                        Marathahalli, Bangalore - 560037<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-white/20">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-white/70 text-sm md:text-base">+91 98765 43210</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-white/20">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-white/70 text-sm md:text-base">hello@worldofwaffles.com</p>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white/20">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Opening Hours</h3>
                      <p className="text-white/70 text-sm md:text-base">
                        Mon - Sun: 11:00 AM - 10:00 PM<br />
                        Closed on holidays
                      </p>
                    </div>
                  </div>

                </motion.div>
              </div>

            </div>
          </div>
        </motion.section>
        <div>
          <div className="flex items-center my-2">
            <div className="flex-grow h-px bg-white/20"></div>
            <span className="text-white/60 text-sm uppercase tracking-widest">Or Ask Us a Questions</span>
            <div className="flex-grow h-px bg-white/20"></div>
          </div>
        </div>
        <motion.section className="min-h-screen flex items-center">
          <div className="container mx-auto px-1 md:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

              {/* FORM */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl mt-2 md:mt-0 p-6 md:p-8 shadow-lg flex flex-col justify-center"
              >
                <h2
                  className="text-2xl md:text-3xl font-bold mb-2 italic"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  Send us a Message
                </h2>

                <p className="text-white/70 mb-6">
                  We'll get back to you within 24 hours!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="input"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="input"
                    />
                  </div>

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input"
                  />

                  <textarea
                    rows="3"
                    placeholder="Your Message..."
                    className="input resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold bg-amber-500 text-cyan-900 hover:bg-amber-400 transition-colors uppercase tracking-widest"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-lg bg-white/10 flex items-center justify-center min-h-[360px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop"
                  alt="Panda Scoops Hero"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-10 w-full h-full bg-gradient-to-t from-cyan-900/80 via-transparent to-transparent flex items-end p-8">
                  <div className="max-w-md">
                    <h3
                      className="text-3xl font-bold italic"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      We Love Surprises!
                    </h3>
                    <p className="text-white/70">
                      Visit us for daily specials and happy hour discounts on all scoops.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
