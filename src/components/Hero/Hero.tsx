import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

import "../../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <HeroBackground />

      <div className="hero__container">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;