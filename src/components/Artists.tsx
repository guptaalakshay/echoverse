import "../styles/artists.css";

function Artists() {
  return (
    <section className="artists" id="artists">
      <div className="artists-header">
        <span className="artists-eyebrow">DISCOVER THE ARTISTS</span>

        <h2>Artists Worth Listening To</h2>

        <p>
          Discover independent artists creating something different.
        </p>
      </div>

      <div className="artist-grid">
        <article className="artist-card">
          <div className="artist-art artist-art--purple" />

          <div className="artist-info">
            <h3>Aurora Waves</h3>
            <p>Electronic · 32K listeners</p>
          </div>
        </article>

        <article className="artist-card">
          <div className="artist-art artist-art--blue" />

          <div className="artist-info">
            <h3>Lunar Beats</h3>
            <p>Lo-Fi · 54K listeners</p>
          </div>
        </article>

        <article className="artist-card">
          <div className="artist-art artist-art--pink" />

          <div className="artist-info">
            <h3>Echo Pulse</h3>
            <p>Indie Pop · 18K listeners</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Artists;