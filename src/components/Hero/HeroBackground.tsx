import { motion } from "framer-motion";

import "../../styles/hero-background.css";

function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-grid" />

      <motion.div
        className="hero-aurora hero-aurora--one"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="hero-aurora hero-aurora--two"
        animate={{
          x: [0, -100, 0],
          y: [0, 70, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="hero-glow" />

      <div className="hero-particles">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBackground;