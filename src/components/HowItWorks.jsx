import React from 'react';
import { Video, Scan, BrainCircuit, Keyboard, Trophy, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <Video size={28} className="glow-text-cyan" />,
      title: 'DirectShow Capture',
      desc: 'Hardware-accelerated OpenCV DirectShow stream capturing 640x480 video at 30 FPS with horizontal mirroring.'
    },
    {
      num: '02',
      icon: <Scan size={28} style={{ color: 'var(--neon-green)' }} />,
      title: 'MediaPipe 21 Landmarks',
      desc: 'Extracts 3D coordinates (x, y, z) for wrist, MCP, PIP, DIP, and fingertip joints plus left/right handedness classification.'
    },
    {
      num: '03',
      icon: <BrainCircuit size={28} style={{ color: 'var(--neon-purple)' }} />,
      title: 'Geometric Classifier',
      desc: 'Calculates 3D joint angles, extension ratios, and applies multi-frame stabilization (debounce) to eliminate camera jitter.'
    },
    {
      num: '04',
      icon: <Keyboard size={28} style={{ color: 'var(--neon-cyan)' }} />,
      title: 'SendInput Simulation',
      desc: 'Win32 hardware scancode injection holding Down during gesture and sending Up on release with instant exclusive switching.'
    },
    {
      num: '05',
      icon: <Trophy size={28} style={{ color: 'var(--neon-yellow)' }} />,
      title: 'Hill Climb Racing',
      desc: 'The official Microsoft Store game responds live: vehicle climbs hills, gathers coins, and maintains balance in mid-air.'
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Pipeline Architecture</div>
          <h2 className="section-title">
            From <span className="glow-text-cyan">Webcam Frame</span> to In-Game Throttle
          </h2>
          <p className="section-subtitle">
            A low-latency, modular 5-stage pipeline engineered to eliminate single-frame false triggers and guarantee fail-safe controls.
          </p>
        </div>

        <div className="pipeline-wrapper">
          <div className="pipeline-cards">
            {steps.map((step, idx) => (
              <div key={idx} className="pipeline-step-card">
                <div className="step-num-badge">{step.num}</div>
                <div className="step-icon-wrap">{step.icon}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="card-glass" style={{ marginTop: '20px', padding: '24px 30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>
                  ⚡ Temporal Hysteresis & Anti-Jitter State Machine
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '780px' }}>
                  A single noisy webcam frame will <strong>never</strong> trigger accidental braking while climbing. The classifier requires <code>N=4</code> consecutive confirmed frames to transition between active gestures, but executes an <strong>instantaneous 0-delay cutoff</strong> the moment a hand leaves the camera frame.
                </p>
              </div>
              <div className="badge-tag" style={{ margin: 0 }}>
                Safety First
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

