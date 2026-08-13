import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Disc3,
  Play,
  Sparkles,
  Users,
  Headphones,
} from "lucide-react";

import "../../styles/hero-visuals.css";

function HeroVisual() {
  const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const rotateX = useSpring(
  useTransform(mouseY, [-150, 150], [8, -8])
);

const rotateY = useSpring(
  useTransform(mouseX, [-150, 150], [-8, 8])
);
  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}

      transition={{
        duration: 0.9,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1],
        
      }}
    >
      {/* Decorative Background */}

      <div className="hero-orbits">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
      </div>

      <div className="hero-light hero-light-one" />
      <div className="hero-light hero-light-two" />
<div className="hero-mouse-glow" />

      {/* Main Floating Album */}

      <motion.div
  className="floating-card"
  style={{
    rotateX,
    rotateY,
    transformPerspective: 1200,
  }}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }}
  onMouseLeave={() => {
    mouseX.set(0);
    mouseY.set(0);
  }}
  animate={{
    y: [-12, 10, -12],
    rotate: [-8, 5, -8],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}

       
      >
        <div className="album-card">

          <div className="album-glow" />

          <div className="album-noise" />

          <div className="album-art">
  <div className="album-art-glow" />

  <Disc3 size={52} />

  <span>EV</span>
</div>

          <div className="album-info">

            <span className="album-label">
              FEATURED RELEASE
            </span>

            <h3>Night Drive</h3>

            <p>by Aurora Waves</p>
            <div className="album-progress">
  <div className="progress-track">
    <div className="progress-fill" />
  </div>

  <div className="progress-time">
    <span>1:42</span>
    <span>3:18</span>
  </div>
</div>

          </div>

          <button className="play-button">
            <Play
              size={20}
              fill="currentColor"
            />
          </button>

        </div>
      </motion.div>

      {/* Floating Badges */}

      <motion.div
        className="floating-badge badge-top"
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={18} />
        <span>New Release</span>
      </motion.div>

      <motion.div
        className="floating-badge badge-right"
        animate={{
          x: [-8, 8, -8],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Users size={18} />
        <span>Rising Artist</span>
      </motion.div>

      <motion.div
        className="floating-badge badge-left"
        animate={{
          x: [8, -8, 8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Headphones size={18} />
        <span>12,432 Listening Live</span>
      </motion.div>

    </motion.div>
  );
}

export default HeroVisual;