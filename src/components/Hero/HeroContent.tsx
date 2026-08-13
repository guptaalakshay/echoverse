import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import "../../styles/hero-content.css";

function HeroContent() {
  return (
    <div className="hero-content">

      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Sparkles size={16} />
        <span>Built for Independent Artists</span>
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Music
        <br />

        <span className="hero-highlight">
          Beyond
        </span>

        <br />

        Algorithms.
      </motion.h1>
            <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        EchoVerse is a premium music platform where independent artists
        connect directly with listeners through community, discovery,
        and creativity—not recommendation algorithms.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <button className="hero-button hero-button--primary">
  Start Listening
  <ArrowRight size={18} />
</button>

        <button className="hero-button hero-button--secondary">
          Publish Music
        </button>
      
</motion.div>

<motion.div
  className="hero-stats"
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
>
  <div className="hero-stat">
    <h3>12K+</h3>
    <span>Independent Artists</span>
  </div>

  <div className="hero-stat">
    <h3>500K+</h3>
    <span>Monthly Listeners</span>
  </div>

  <div className="hero-stat">
    <h3>2M+</h3>
    <span>Streams</span>
  </div>
</motion.div>
    </div>
  );
}

export default HeroContent;