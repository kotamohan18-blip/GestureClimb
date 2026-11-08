import React from 'react';
import { Camera, Play, Sparkles, Terminal, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline & Value Proposition */}
          <div className="hero-content">
            <div className="badge-tag">
              <Sparkles size={14} />
              <span>Real-Time Computer Vision Gaming</span>
            </div>

            <h1 className="hero-title">
              Control <span className="glow-text-cyan">Hill Climb Racing</span> with Hand Gestures
            </h1>

            <p className="hero-desc">
              An external Windows Computer Vision controller powered by <strong>OpenCV</strong> and <strong>MediaPipe Hands</strong>.
              Accelerate with an <strong>Open Palm</strong>, brake with a <strong>Closed Fist</strong>, and race the original, unmodified game without touching your keyboard.
            </p>

            <div className="hero-cta-group">
              <a href="#how-it-works" className="btn btn-primary">
                <Play size={18} />
                <span>How It Works</span>
              </a>

              <a href="#installation" className="btn btn-outline">
                <Terminal size={18} />
                <span>Run Locally</span>
              </a>
            </div>

            <div className="hero-metrics">
              <div className="metric-item">
                <span className="metric-value">21</span>
                <span className="metric-label">3D Landmarks</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">~30 FPS</span>
                <span className="metric-label">Vision Stream</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">0ms</span>
                <span className="metric-label">Input Latency</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">100%</span>
                <span className="metric-label">Original Game</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Simulator Preview */}
          <div className="hero-visual">
            <div className="hero-card-preview">
              <div className="preview-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="preview-tag">LIVE VISION + GAMEPLAY</span>
              </div>

              <div className="preview-body">
                <img
                  src="/demo-gameplay.jpg"
                  alt="GestureClimb live hand tracking and Hill Climb Racing gameplay"
                  className="preview-img"
                  onError={(e) => {
                    // Fallback placeholder if asset load fails
                    e.target.style.display = 'none';
                  }}
                />

                {/* Floating HUD Indicator */}
                <div className="preview-overlay-hud">
                  <div className="hud-title">
                    <Camera size={12} />
                    <span>OPEN PALM DETECTED</span>
                  </div>
                  <div className="hud-command">
                    GAS ACTIVE → [Right Arrow]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

