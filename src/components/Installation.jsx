import React, { useState } from 'react';
import { Terminal, Copy, Check, Github, ExternalLink, Play, Keyboard, Sparkles } from 'lucide-react';

export default function Installation() {
  const [activeTab, setActiveTab] = useState('quickstart');
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const quickstartCommands = `# 1. Clone repository
git clone https://github.com/placeholder/GestureClimb.git
cd GestureClimb

# 2. Install dependencies (OpenCV, MediaPipe, PyAutoGUI, NumPy)
pip install -r requirements.txt

# 3. Launch GestureClimb Controller
python main.py

# 4. In game, press F3 to enter Play Mode (Dashboard minimizes, overlay stays on top!)`;

  const testCommands = `# Run the complete automated test suite (4 verification suites)
python test_all.py

# Expected Output:
# >>> SUITE 1/4: CAMERA & MEDIAPIPE TRACKING [PASSED]
# >>> SUITE 2/4: GESTURE RECOGNITION & CLASSIFICATION [PASSED]
# >>> SUITE 3/4: GAME INPUT SIMULATION & SAFETY GUARDIAN [PASSED]
# >>> SUITE 4/4: FLOATING WEBCAM OVERLAY & FOCUS SAFETY [PASSED]`;

  return (
    <section id="installation" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Setup & Deployment</div>
          <h2 className="section-title">
            Get Started with <span className="glow-text-cyan">GestureClimb</span>
          </h2>
          <p className="section-subtitle">
            Follow these straightforward steps to set up the vision controller on your Windows PC and race in minutes.
          </p>
        </div>

        <div className="install-tabs">
          <div className="install-nav">
            <button
              className={`tab-btn ${activeTab === 'quickstart' ? 'active' : ''}`}
              onClick={() => setActiveTab('quickstart')}
            >
              <Terminal size={18} />
              <span>Quickstart Installation</span>
            </button>

            <button
              className={`tab-btn ${activeTab === 'tests' ? 'active' : ''}`}
              onClick={() => setActiveTab('tests')}
            >
              <Sparkles size={18} />
              <span>Run Automated Tests</span>
            </button>

            <button
              className={`tab-btn ${activeTab === 'shortcuts' ? 'active' : ''}`}
              onClick={() => setActiveTab('shortcuts')}
            >
              <Keyboard size={18} />
              <span>In-Game Hotkeys</span>
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'quickstart' && (
              <div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '14px', fontSize: '0.95rem' }}>
                  Ensure you have <strong>Python 3.10+</strong> and the official <strong>Hill Climb Racing</strong> game installed from the Microsoft Store.
                </p>

                <div className="terminal-box">
                  <div className="terminal-header">
                    <span>POWERSHELL / CMD</span>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(quickstartCommands, 'quickstart')}
                    >
                      {copiedCode === 'quickstart' ? <Check size={14} style={{ color: 'var(--neon-green)' }} /> : <Copy size={14} />}
                      <span>{copiedCode === 'quickstart' ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="terminal-code">{quickstartCommands}</pre>
                </div>
              </div>
            )}

            {activeTab === 'tests' && (
              <div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '14px', fontSize: '0.95rem' }}>
                  Verify that your webcam hardware, MediaPipe model weights, and Windows SendInput hooks operate with 100% test pass rate:
                </p>

                <div className="terminal-box">
                  <div className="terminal-header">
                    <span>POWERSHELL</span>
                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(testCommands, 'tests')}
                    >
                      {copiedCode === 'tests' ? <Check size={14} style={{ color: 'var(--neon-green)' }} /> : <Copy size={14} />}
                      <span>{copiedCode === 'tests' ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="terminal-code">{testCommands}</pre>
                </div>
              </div>
            )}

            {activeTab === 'shortcuts' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div className="card-glass" style={{ padding: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--neon-cyan)', fontWeight: 700 }}>
                    [F3]
                  </span>
                  <h4 style={{ margin: '8px 0 4px', fontSize: '0.95rem' }}>Play Mode</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Minimizes large dashboard and shows compact floating overlay.
                  </p>
                </div>

                <div className="card-glass" style={{ padding: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--neon-green)', fontWeight: 700 }}>
                    [F2]
                  </span>
                  <h4 style={{ margin: '8px 0 4px', fontSize: '0.95rem' }}>Toggle Overlay</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Show or hide the floating webcam overlay anytime.
                  </p>
                </div>

                <div className="card-glass" style={{ padding: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--neon-yellow)', fontWeight: 700 }}>
                    [F1]
                  </span>
                  <h4 style={{ margin: '8px 0 4px', fontSize: '0.95rem' }}>Calibrate Controls</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Configure keyboard bindings or touch pedal screen coords.
                  </p>
                </div>

                <div className="card-glass" style={{ padding: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--neon-red)', fontWeight: 700 }}>
                    [ESC]
                  </span>
                  <h4 style={{ margin: '8px 0 4px', fontSize: '0.95rem' }}>Emergency Stop</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Immediately release all simulated keys and abort controls.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* GitHub Repository Link Placeholder Card */}
        <div className="cta-banner">
          <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', marginBottom: '16px' }}>
            <Github size={36} />
          </div>
          <h3>Open Source on GitHub</h3>
          <p>
            Explore the source code, inspect the MediaPipe hand kinematics pipeline, contribute improvements, or fork the repository.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/placeholder/GestureClimb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github size={18} />
              <span>github.com/placeholder/GestureClimb</span>
              <ExternalLink size={14} style={{ opacity: 0.7 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

