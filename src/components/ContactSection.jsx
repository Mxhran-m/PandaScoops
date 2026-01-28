import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const ContactSection = ({ theme }) => {
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Sai Baba Temple Rd, Munnekollal, Bengaluru",
      link: "https://maps.app.goo.gl/W3VS7A5vcG29u1xZ6"
    },
    {
      icon: <Clock size={24} />,
      label: "Hours",
      value: "Daily: 11:00 AM - 11:00 PM",
      subValue: "Open till 11:00 PM"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 99453 87216",
      link: "tel:+919945387216"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      name: "Instagram",
      link: "https://instagram.com/pandascoops",
      testId: "social-instagram"
    },
    {
      icon: <Facebook size={24} />,
      name: "Facebook",
      link: "https://facebook.com/pandascoops",
      testId: "social-facebook"
    },
    {
      icon: <Youtube size={24} />,
      name: "Youtube",
      link: "https://youtube.com/pandascoops",
      testId: "social-youtube"
    },
    // {
    //   icon: <Google size={24} />,
    //   name: "Google",
    //   link: "https://google.com/pandascoops",
    //   testId: "social-google"
    // }
  ];

  return (
    <motion.div
      className="min-h-[100dvh] w-full flex items-center justify-center px-4 md:px-12 py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8 md:mb-12"
          style={{
            fontFamily: "'Fraunces', serif",
            color: theme.text,
            letterSpacing: "-0.02em"
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          data-testid="contact-heading"
        >
          Come Visit Us
        </motion.h2>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              data-testid={`contact-card-${index}`}
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div
                    className="mb-4 inline-flex p-3 rounded-full"
                    style={{ backgroundColor: `${theme.accent}40` }}
                  >
                    <div style={{ color: theme.accent }}>{item.icon}</div>
                  </div>
                  <h3
                    className="text-sm font-semibold mb-2 opacity-70"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {item.label}
                  </h3>
                  <p
                    className="text-lg md:text-xl font-bold"
                    style={{ fontFamily: "'Manrope', sans-serif", color: theme.text }}
                  >
                    {item.value}
                  </p>
                  {item.subValue && (
                    <p
                      className="text-sm mt-1 opacity-70"
                      style={{ fontFamily: "'Manrope', sans-serif", color: theme.text }}
                    >
                      {item.subValue}
                    </p>
                  )}
                </a>
              ) : (
                <>
                  <div
                    className="mb-4 inline-flex p-3 rounded-full"
                    style={{ backgroundColor: `${theme.accent}40` }}
                  >
                    <div style={{ color: theme.accent }}>{item.icon}</div>
                  </div>
                  <h3
                    className="text-sm font-semibold mb-2 opacity-70"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {item.label}
                  </h3>
                  <p
                    className="text-lg md:text-xl font-bold"
                    style={{ fontFamily: "'Manrope', sans-serif", color: theme.text }}
                  >
                    {item.value}
                  </p>
                  {item.subValue && (
                    <p
                      className="text-sm mt-1 opacity-70"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {item.subValue}
                    </p>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        {/* <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p
            className="text-lg font-semibold mr-2"
            style={{ fontFamily: "'Manrope', sans-serif", color: theme.text }}
          >
            Follow Us:
          </p>
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-testid={social.testId}
              aria-label={social.name}
            >
              <div style={{ color: theme.text }}>{social.icon}</div>
            </motion.a>
          ))}
        </motion.div> */}
        <div className="flex items-center justify-center gap-3">
          <p
            className="text-lg font-semibold mr-2"
            style={{ fontFamily: "'Manrope', sans-serif", color: theme.text }}
          >
            Follow Us:
          </p>
          <a
            href="https://instagram.com/pandascoops"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
            style={{ color: theme.text }}
            data-testid="social-instagram"
            aria-label="Instagram"
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
            style={{ color: theme.text }}
            data-testid="social-facebook"
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://youtube.com/@pandascoops"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
            style={{ color: theme.text }}
            data-testid="social-youtube"
            aria-label="YouTube"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href="https://maps.google.com/?q=Panda+Scoops"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:scale-110 transition-transform backdrop-blur-xl bg-white/10 border border-white/20"
            style={{ color: theme.text }}
            data-testid="social-google"
            aria-label="Google Maps"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
            </svg>
          </a>
        </div>

        {/* Footer Text */}
        <motion.p
          className="mt-12 text-sm opacity-50"
          style={{ fontFamily: "'Manrope', sans-serif", color: theme.text }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.6 }}
          data-testid="footer-text"
        >
          © 2026 Panda Scoops. Crafted with love by <a href="https://www.mrtechservices.com/">MR Tech Services</a>.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ContactSection;
