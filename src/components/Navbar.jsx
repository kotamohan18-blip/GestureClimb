import React, { useState } from 'react';
import { Gamepad2, Github, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="brand-logo">
          <div className="brand-icon-box">
            <Gamepad2 size={22} />
          </div>
          <span>GESTURE<span className="glow-text-cyan">CLIMB</span></span>
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#how-it-works" className="nav-link">Architecture</a></li>
            <li><a href="#controls" className="nav-link">Gestures</a></li>
            <li><a href="#showcase" className="nav-link">Demo</a></li>
            <li><a href="#tech" className="nav-link">Tech Stack</a></li>
            <li><a href="#installation" className="nav-link">Quickstart</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href="https://github.com/placeholder/GestureClimb"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '8px 18px', fontSize: '0.88rem' }}
          >
            <Github size={16} />
            <span>GitHub</span>
            <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(12, 16, 25, 0.98)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="nav-link">About</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="nav-link">Architecture</a>
          <a href="#controls" onClick={() => setMobileMenuOpen(false)} className="nav-link">Gestures</a>
          <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="nav-link">Demo</a>
          <a href="#tech" onClick={() => setMobileMenuOpen(false)} className="nav-link">Tech Stack</a>
          <a href="#installation" onClick={() => setMobileMenuOpen(false)} className="nav-link">Quickstart</a>
          <a
            href="https://github.com/placeholder/GestureClimb"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: '10px' }}
          >
            <Github size={18} />
            <span>View on GitHub</span>
          </a>
        </div>
      )}
    </header>
  );
}

