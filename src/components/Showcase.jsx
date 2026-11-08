import React, { useState } from 'react';
import { Play, Maximize2, Sparkles, Monitor, Eye, CheckCircle } from 'lucide-react';

export default function Showcase() {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  return (
    <section id="showcase" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Visual Demonstration</div>
          <h2 className="section-title">
            Live Gameplay <span className="glow-text-cyan">& Floating Overlay</span>
          </h2>
          <p className="section-subtitle">
            Experience how the computer vision pipeline tracks your hand and floats cleanly above the authentic game window without stealing focus.
          </p>
        </div>

        <div className="showcase-grid">
          {/* Main Screenshot & Video Demo Card */}
          <div className="showcase-main-card">
            <div className="showcase-image-wrapper">
              <img
                src="/demo-gameplay.jpg"
                alt="GestureClimb live hand tracking and original Hill Climb Racing gameplay"
                className="showcase-img"
              />

              {!isPlayingDemo ? (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(7, 9, 14, 0.45)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(2px)',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setIsPlayingDemo(true)}
                >
                  <div
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #10b981 0%, #38bdf8 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      boxShadow: '0 0 35px rgba(16, 185, 129, 0.6)',
                      marginBottom: '16px',
                      transform: 'scale(1)',
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    <Play size={32} style={{ marginLeft: '4px' }} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#ffffff'
                  }}>
                    Live Gameplay Demo
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Click to view overlay breakdown
                  </span>
                </div>
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: '#090b10',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    textAlign: 'center'
                  }}
                >
                  <div className="badge-tag">Demo Player Active</div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
                    Authentic Hill Climb Racing PC Session
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '440px', marginBottom: '20px' }}>
                    Showing Open Palm holding accelerator on <strong>Right Arrow</strong>, driving past 53m on Countryside track.
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => setIsPlayingDemo(false)}
                    style={{ fontSize: '0.85rem', padding: '8px 18px' }}
                  >
                    Back to Screenshot
                  </button>
                </div>
              )}
            </div>

            <div className="showcase-footer">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Monitor size={18} style={{ color: 'var(--neon-green)' }} />
                <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>
                  Original Microsoft Store App • FINGERSOFT.HILLCLIMBRACING
                </span>
              </div>
              <span className="badge-tag" style={{ margin: 0, fontSize: '0.75rem', padding: '3px 10px' }}>
                Verified Working
              </span>
            </div>
          </div>

          {/* Side Feature Highlights */}
          <div className="showcase-side-items">
            <div className="feature-pill-card">
              <div className="about-card-icon icon-cyan" style={{ marginBottom: 0, flexShrink: 0 }}>
                <Eye size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>
                  Floating Webcam Overlay (F2 / F3)
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                  A compact, draggable widget pinned to the top-right corner. It displays your hand skeleton, detection confidence, and live game commands over full-screen games.
                </p>
              </div>
            </div>

            <div className="feature-pill-card">
              <div className="about-card-icon icon-green" style={{ marginBottom: 0, flexShrink: 0 }}>
                <Sparkles size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>
                  Color-Coded Visual Telemetry
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                  Instant feedback banner: <strong style={{ color: 'var(--neon-green)' }}>GREEN</strong> for Gas active, <strong style={{ color: 'var(--neon-red)' }}>RED</strong> for Brake, and <strong style={{ color: 'var(--neon-yellow)' }}>YELLOW</strong> for Neutral coasting.
                </p>
              </div>
            </div>

            <div className="feature-pill-card">
              <div className="about-card-icon icon-purple" style={{ marginBottom: 0, flexShrink: 0 }}>
                <CheckCircle size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>
                  Zero Game Interference
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                  Using Windows <code>WS_EX_NOACTIVATE</code>, clicking or dragging the overlay never takes input focus from the game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

