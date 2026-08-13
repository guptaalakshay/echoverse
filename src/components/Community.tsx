import "../styles/community.css";

function Community() {
  return (
    <section id="community" className="community">
      <p className="community-eyebrow">THE ECHOVERSE COMMUNITY</p>

      <h2>Join the Community</h2>

      <p className="community-text">
        Connect with music lovers, share playlists, discover new artists,
        and become part of the fastest-growing music community.
      </p>

      <div className="community-stats">
        <div className="stat-card">
          <h3>500K+</h3>
          <p>Active Users</p>
        </div>

        <div className="stat-card">
          <h3>12K+</h3>
          <p>Independent Artists</p>
        </div>

        <div className="stat-card">
          <h3>2M+</h3>
          <p>Monthly Streams</p>
        </div>
      </div>
    </section>
  );
}

export default Community;