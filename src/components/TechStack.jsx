import React from 'react';
import { Terminal, Cpu, Camera, Binary, Layout, ShieldCheck, Gauge, Layers } from 'lucide-react';

export default function TechStack() {
  const techs = [
    {
      name: 'Python 3.12+',
      category: 'Core Language',
      desc: 'Orchestrates the multithreaded vision pipeline, state machine, and Win32 hardware hooks.',
      icon: <Terminal size={22} />
    },
    {
      name: 'MediaPipe Hands',
      category: 'AI / Computer Vision',
      desc: 'Machine learning inference detecting 21 3D hand landmarks and hand orientation in real-time.',
      icon: <Camera size={22} />
    },
    {
      name: 'OpenCV (cv2)',
      category: 'DirectShow Capture',
      desc: 'Low-latency Windows DirectShow frame acquisition, BGR/RGB transformations, and HUD rendering.',
      icon: <Binary size={22} />
    },
    {
      name: 'Windows SendInput',
      category: 'Hardware Input Driver',
      desc: 'Ctypes Win32 API generating raw keyboard scancodes for DirectX and UWP game engines.',
      icon: <Cpu size={22} />
    },
    {
      name: 'NumPy',
      category: 'Math & Kinematics',
      desc: 'Calculates 3D Euclidean vectors, cosine joint angles, and exponential moving average FPS.',
      icon: <Gauge size={22} />
    },
    {
      name: 'PyAutoGUI',
      category: 'Simulation Fallback',
      desc: 'Provides automated mouse button coordinates and drag calibrations for touch pedal displays.',
      icon: <Layers size={22} />
    },
    {
      name: 'Tkinter GUI & Win32',
      category: 'Desktop UI & Overlay',
      desc: 'Modern dark dashboard plus WS_EX_NOACTIVATE non-activating floating webcam overlay.',
      icon: <Layout size={22} />
    },
    {
      name: 'Safety Guardian',
      category: 'Process Watchdog',
      desc: 'Monitors foreground window titles, camera health, and provides a global emergency stop.',
      icon: <ShieldCheck size={22} />
    }
  ];

  return (
    <section id="tech" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Engineering Foundation</div>
          <h2 className="section-title">
            Built with <span className="glow-text-cyan">Modern CV & OS Stacks</span>
          </h2>
          <p className="section-subtitle">
            Leveraging lightweight, robust computer vision and native Windows kernel APIs for sub-frame responsiveness.
          </p>
        </div>

        <div className="tech-grid">
          {techs.map((t, idx) => (
            <div key={idx} className="tech-card">
              <div className="tech-icon-box">{t.icon}</div>
              <div className="tech-info">
                <h4>{t.name}</h4>
                <span style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--neon-cyan)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '6px'
                }}>
                  {t.category}
                </span>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

