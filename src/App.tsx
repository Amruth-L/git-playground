const navItems = ['Home', 'About', 'Services', 'Contact'];

const App = () => {
  return (
    <div className="page-shell">
      <header className="navbar">
        <div className="brand">Northstar</div>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Get Started
        </a>
      </header>

      <main className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Small studio. Clear digital presence.</p>
          <h1>Build a homepage that feels clean, modern, and ready to use.</h1>
          <p className="hero-text">
            This starter layout gives you a simple navbar, a strong headline, and a
            lightweight landing section that works well on desktop and mobile.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Start Project
            </a>
            <a className="secondary-link" href="#about">
              Learn more
            </a>
          </div>
        </div>

        <section className="hero-card" id="about">
          <span className="card-label">Why this works</span>
          <h2>Simple structure, polished presentation.</h2>
          <p>
            The layout keeps the navigation visible, leaves room for your main message,
            and uses a compact feature card to add detail without clutter.
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
