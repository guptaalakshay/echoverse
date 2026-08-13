import "../styles/features.css";
console.log("FEATURES COMPONENT LOADED");
function Features() {
  return (
    <section id="discover" className="features">
      <div className="section-title">
        <h2>Discover New Sounds</h2>

        <p>
          Explore rising artists and tracks curated just for you.
        </p>
      </div>

      <div className="feature-grid">
        <div className="music-card">
          <div className="album-art purple"></div>

          <h3>Night Drive</h3>

          <span>Aurora Waves</span>

          <p>Electronic • 32K Listeners</p>

          <button>▶ Listen</button>
        </div>

        <div className="music-card">
          <div className="album-art cyan"></div>

          <h3>Midnight Echo</h3>

          <span>Lunar Beats</span>

          <p>Lo-Fi • 54K Listeners</p>

          <button>▶ Listen</button>
        </div>

        <div className="music-card">
          <div className="album-art pink"></div>

          <h3>Neon Dreams</h3>

          <span>Echo Pulse</span>

          <p>Indie Pop • 18K Listeners</p>

          <button>▶ Listen</button>
        </div>
      </div>
    </section>
  );
}

export default Features;