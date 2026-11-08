import React from 'react';
import { Gamepad2, Github, Heart, ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="brand-icon-box">
                <Gamepad2 size={20} />
              </div>
              <span>GESTURE<span className="glow-text-cyan">CLIMB</span></span>
            </div>
            <p>
              Real-time Computer Vision Hand Gesture Controller for the official Hill Climb Racing Windows PC game.
            </p>
          </div>

          <div className="footer-col">
            <h5>Navigation</h5>
            <ul className="footer-links">
              <li><a href="#about">About Project</a></li>
              <li><a href="#how-it-works">Pipeline Architecture</a></li>
              <li><a href="#controls">Gesture Mappings</a></li>
              <li><a href="#showcase">Live Demo & Overlay</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Tech Stack</h5>
            <ul className="footer-links">
              <li><a href="#tech">Python 3.12</a></li>
              <li><a href="#tech">MediaPipe Hands</a></li>
              <li><a href="#tech">OpenCV DirectShow</a></li>
              <li><a href="#tech">Windows SendInput</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Community</h5>
            <ul className="footer-links">
              <li>
                <a
                  href="https://github.com/placeholder/GestureClimb"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li><a href="#installation">Local Quickstart</a></li>
              <li><a href="#controls">Safety Guardian</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} GestureClimb. Open source Computer Vision project.
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            Hill Climb Racing is a registered trademark of Fingersoft. This project is an external controller tool and is not affiliated with Fingersoft.
          </div>
        </div>
      </div>
    </footer>
  );
}

