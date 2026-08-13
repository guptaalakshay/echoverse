import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import "../styles/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={scrolled ? "navbar scrolled" : "navbar"}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        {/* BRAND */}
        <a href="#" className="logo" onClick={closeMenu}>
          <span className="logo-icon" />
          <span>EchoVerse</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="nav-links">
          <a href="#discover">Discover</a>
          <a href="#artists">Artists</a>
          <a href="#communities">Community</a>
          <a href="#premium">Premium</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <button
            className="search-btn"
            aria-label="Search"
            type="button"
          >
            <Search size={19} strokeWidth={1.8} />
          </button>

          <button className="cta-btn" type="button">
            Start Listening
            <ArrowRight size={17} strokeWidth={2} />
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? (
              <X size={21} strokeWidth={1.8} />
            ) : (
              <Menu size={21} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 0.97,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <a href="#discover" onClick={closeMenu}>
              Discover
            </a>

            <a href="#artists" onClick={closeMenu}>
              Artists
            </a>

            <a href="#communities" onClick={closeMenu}>
              Community
            </a>

            <a href="#premium" onClick={closeMenu}>
              Premium
            </a>

            <button className="mobile-btn" type="button">
              Start Listening
              <ArrowRight size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;