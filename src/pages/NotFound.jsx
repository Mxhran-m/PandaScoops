import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DEFAULT_THEME = {
  background: "#0F172A",
  text: "#E5E7EB",
  accent: "#FACC15",
  button_bg: "#FACC15",
  button_text: "#0F172A"
};

export default function NotFound() {
  const theme = DEFAULT_THEME;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundColor: theme.background,
        color: theme.text
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="
          relative
          w-full
          max-w-lg
          rounded-3xl
          p-8
          text-center
          border
          backdrop-blur-xl
        "
        style={{
          backgroundColor: `${theme.button_bg}15`,
          borderColor: `${theme.button_bg}40`
        }}
      >
        {/* Glow Accent */}
        <div
          className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-3xl opacity-40"
          style={{ backgroundColor: theme.accent }}
        />

        {/* 404 */}
        <h1
          className="text-7xl md:text-8xl font-extrabold mb-3"
          style={{ color: theme.accent }}
        >
          404
        </h1>

        {/* Message */}
        <p className="text-lg md:text-xl opacity-90 mb-6">
          Oops! This page got lost in the kitchen 🍽️
        </p>

        {/* CTA */}
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full font-medium transition-transform hover:scale-105"
          style={{
            backgroundColor: theme.button_bg,
            color: theme.button_text
          }}
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
 