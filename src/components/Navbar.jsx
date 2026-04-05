import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="navbar">
        <Link to="/" className="navbar-logo">
          <img src="/images/cara.png" alt="Cara" />
        </Link>

        {/* Desktop nav */}
        <nav className="navbar-links">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar-link ${location.pathname === l.to ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link to="/cart" className="cart-icon">
            <i className="fa fa-shopping-cart" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {/* Animated hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay — outside header to avoid backdrop-filter clipping */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`mobile-link ${location.pathname === l.to ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-overlay-footer">
          <div className="mobile-social">
            <a href="#"><i className="fa-brands fa-instagram" /></a>
            <a href="#"><i className="fa-brands fa-x-twitter" /></a>
            <a href="#"><i className="fa-brands fa-facebook" /></a>
          </div>
          <p>© Cara 2025</p>
        </div>
      </div>
    </>
  );
}
