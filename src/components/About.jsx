import React from 'react';
import { Gamepad2, ShieldAlert, Cpu, Eye, Zap, Layers } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">About The Project</div>
          <h2 className="section-title">
            The True <span className="glow-text-cyan">Zero-Imitation</span> Vision Controller
          </h2>
          <p className="section-subtitle">
            Unlike projects that build a simplified Pygame replica, GestureClimb is engineered as an external, high-performance bridge for the authentic PC game.
          </p>
        </div>

        <div className="about-grid">
          <div className="card-glass">
            <div className="about-card-icon icon-green">
              <Gamepad2 size={28} />
            </div>
            <h3 className="about-card-title">Authentic Game Preservation</h3>
            <p className="about-card-desc">
              Your vehicles, garage upgrades, high scores, physics engine, and terrain remain 100% genuine. The original Microsoft Store Windows package is controlled directly without modifying any game binary files.
            </p>
          </div>

          <div className="card-glass">
            <div className="about-card-icon icon-cyan">
              <Cpu size={28} />
            </div>
            <h3 className="about-card-title">Hardware-Level ScanCodes</h3>
            <p className="about-card-desc">
              Modern DirectX and UWP games ignore high-level virtual key events. GestureClimb implements low-level Win32 <code>SendInput</code> with hardware scancodes (<code>0x4D</code> Right, <code>0x4B</code> Left) for instant physical key response.
            </p>
          </div>

          <div className="card-glass">
            <div className="about-card-icon icon-purple">
              <Eye size={28} />
            </div>
            <h3 className="about-card-title">Non-Activating Floating Overlay</h3>
            <p className="about-card-desc">
              When playing in full-screen, the compact floating webcam overlay stays visible above the gameplay without stealing keyboard focus, thanks to Windows <code>WS_EX_NOACTIVATE</code> extended styles.
            </p>
          </div>
        </div>

        <div className="disclaimer-bar" style={{ marginTop: '40px' }}>
          <ShieldAlert size={20} style={{ flexShrink: 0 }} />
          <div>
            <strong>Architecture Notice:</strong> GestureClimb is a standalone Windows desktop Python application. This showcase website documents its architecture, models, and setup. No local game control or camera access is executed in the browser.
          </div>
        </div>
      </div>
    </section>
  );
}

