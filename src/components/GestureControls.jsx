import React from 'react';
import { CheckCircle2, AlertTriangle, ShieldX, Key, ArrowRight, CornerDownRight } from 'lucide-react';

export default function GestureControls() {
  const gestures = [
    {
      emoji: '🖐️',
      type: 'OPEN_PALM',
      command: 'GAS ACTIVE',
      keyAction: 'Right Arrow [0x4D]',
      statusColor: 'gas',
      badgeClass: 'badge-gas',
      cardClass: 'gesture-card-gas',
      summary: 'Extend all 5 fingers facing webcam. Accelerates the vehicle and pitches vehicle forward in air.',
      criteria: [
        'All 5 fingers extended (angles > 140°)',
        'Wrist-to-fingertip ratio > 1.45',
        'Continuous key-down simulated'
      ]
    },
    {
      emoji: '✊',
      type: 'CLOSED_FIST',
      command: 'BRAKE ACTIVE',
      keyAction: 'Left Arrow [0x4B]',
      statusColor: 'brake',
      badgeClass: 'badge-brake',
      cardClass: 'gesture-card-brake',
      summary: 'Curl all fingers firmly into palm. Applies hydraulic brakes or reverses on steep downhill slopes.',
      criteria: [
        'All 4 fingers curled (angles < 115°)',
        'Fingertips contracted toward wrist',
        'Automatic release of accelerator'
      ]
    },
    {
      emoji: '🚫',
      type: 'NO_HAND_DETECTED',
      command: 'CONTROLS RELEASED',
      keyAction: 'All Keys Released (0x00)',
      statusColor: 'neutral',
      badgeClass: 'badge-neutral',
      cardClass: 'gesture-card-neutral',
      summary: 'Pull hand out of camera frame. Immediately disengages both gas and brake so car coasts safely.',
      criteria: [
        'Instant fail-safe zero-frame release',
        'Protects against stuck throttles',
        'Camera disconnection watchdog'
      ]
    },
    {
      emoji: '✋',
      type: 'UNCERTAIN_GESTURE',
      command: 'WAITING (SAFE NEUTRAL)',
      keyAction: 'Keys Disengaged',
      statusColor: 'neutral',
      badgeClass: 'badge-neutral',
      cardClass: 'gesture-card-neutral',
      summary: 'Partial finger gestures (e.g. peace sign, pointing) are filtered out to prevent erratic driving.',
      criteria: [
        'Confidence threshold < 70%',
        'Maintains previous stabilized state',
        'Prevents accidental speed flips'
      ]
    }
  ];

  return (
    <section id="controls" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Intuitive Control Mapping</div>
          <h2 className="section-title">
            Zero Learning Curve <span className="glow-text-green">Gesture Mappings</span>
          </h2>
          <p className="section-subtitle">
            Natural reflexes translated into precise throttle and brake control, stabilized against accidental motion.
          </p>
        </div>

        <div className="gesture-cards-grid">
          {gestures.map((item, idx) => (
            <div key={idx} className={`gesture-card ${item.cardClass}`}>
              <div className="gesture-header">
                <span className="gesture-emoji">{item.emoji}</span>
                <span className={`gesture-badge ${item.badgeClass}`}>{item.command}</span>
              </div>

              <h3 className="gesture-name">{item.type.replace(/_/g, ' ')}</h3>
              <p className="gesture-desc">{item.summary}</p>

              <div className="gesture-specs">
                <div className="spec-row">
                  <span className="spec-key">Hardware Key:</span>
                  <span className="spec-val" style={{ color: 'var(--neon-cyan)' }}>{item.keyAction}</span>
                </div>
                {item.criteria.map((crit, cIdx) => (
                  <div key={cIdx} className="spec-row" style={{ alignItems: 'flex-start' }}>
                    <span className="spec-key">Rule:</span>
                    <span className="spec-val" style={{ fontSize: '0.78rem', textAlign: 'right' }}>{crit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Focus Guarantee Banner */}
        <div className="card-glass" style={{ marginTop: '36px', borderLeft: '4px solid var(--neon-cyan)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--neon-cyan)' }}>
                🛡️ Focus-Aware Safety Guardian
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                Inputs are strictly channeled to <code>Hill Climb Racing</code>. If you Alt-Tab or switch windows, all keys instantly release to prevent unwanted typing.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--neon-red)' }}>
                🚨 Instant Emergency Stop [ESC]
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                Pressing <code>ESC</code> or clicking Emergency Stop in the dashboard aborts all inputs and disengages the controller with zero key ghosting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

