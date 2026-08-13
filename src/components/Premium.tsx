import "../styles/premium.css";

function Premium() {
  return (
    <section className="premium">
      <h2>Upgrade to EchoVerse Premium</h2>

      <p className="premium-text">
        Experience music without limits. Enjoy ad-free listening,
        offline downloads, and exclusive artist content.
      </p>

      <div className="pricing-card">
        <h3>Premium</h3>

        <h1>
          ₹99<span>/month</span>
        </h1>

        <ul>
          <li>✓ Ad-free Music</li>
          <li>✓ Unlimited Downloads</li>
          <li>✓ HD Audio</li>
          <li>✓ Early Artist Access</li>
        </ul>

        <button>Start Free Trial</button>
      </div>
    </section>
  );
}

export default Premium;