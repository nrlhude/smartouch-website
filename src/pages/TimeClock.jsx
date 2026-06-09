import { Link } from 'react-router-dom'
import './TimeClock.css'

const methods = [
  {
    icon: '👁️', color: 'blue', title: 'Face Recognition',
    desc: 'Touchless, hygienic, and impossible to fake. Employees clock in by simply looking at the terminal.',
    specs: ['Sub-second recognition', 'Works with glasses & partial masks', 'Anti-spoofing liveness detection', 'No physical contact required'],
  },
  {
    icon: '👆', color: 'green', title: 'Fingerprint Scanner',
    desc: 'Proven and reliable fingerprint technology for fast, accurate employee identification.',
    specs: ['1-second match time', 'Multi-finger enrolment', 'Optical & capacitive options', 'Works in industrial environments'],
  },
  {
    icon: '📡', color: 'orange', title: 'Proximity Card',
    desc: 'RFID card or fob tap for quick clock-in — ideal for high-throughput or secure environments.',
    specs: ['RFID & Mifare card support', 'Instant swipe recognition', 'Easy card issuance & revocation', 'Access control integration'],
  },
  {
    icon: '📱', color: 'purple', title: 'Mobile GPS (SmartGoGo)',
    desc: 'Employees clock in from their phone with GPS verification — perfect for field workers and remote sites.',
    specs: ['GPS location verification', 'Geo-fencing per site', 'Works offline with sync', 'Android & iOS support'],
  },
]

const features = [
  { icon: '⚡', color: 'blue', title: 'Real-time Dashboard', desc: 'See who is in and who is absent right now — across all sites, in one view.' },
  { icon: '📊', color: 'green', title: 'Automated Reports', desc: 'Daily, weekly, and monthly attendance reports generated automatically and emailed to HR.' },
  { icon: '🔔', color: 'orange', title: 'Late/Absent Alerts', desc: 'Instant alerts when employees are late, absent, or haven\'t clocked out — via SMS or email.' },
  { icon: '🏢', color: 'purple', title: 'Multi-site Support', desc: 'Manage attendance across multiple locations from a single centralised dashboard.' },
  { icon: '💰', color: 'teal', title: 'Payroll Integration', desc: 'Attendance data flows automatically into payroll — no manual re-entry, no errors.' },
  { icon: '📅', color: 'cyan', title: 'Shift Management', desc: 'Supports complex multi-shift patterns, rotating shifts, and custom shift rules.' },
]

const comparisonRows = [
  { feature: 'Clock-in method', manual: 'Paper / punch card', smart: 'Face, fingerprint, card, mobile' },
  { feature: 'Buddy punching', manual: 'Common and undetectable', smart: 'Impossible — biometric only' },
  { feature: 'Data accuracy', manual: 'Error-prone manual entry', smart: '99.9% automated accuracy' },
  { feature: 'Real-time visibility', manual: 'None — check tomorrow', smart: 'Live dashboard, instant alerts' },
  { feature: 'Payroll processing', manual: 'Manual re-entry from timesheets', smart: 'Automatic — attendance feeds payroll' },
  { feature: 'Multi-site management', manual: 'Separate records per site', smart: 'Centralised view, all sites' },
  { feature: 'Reports', manual: 'Hours of manual compilation', smart: 'One-click automated reports' },
]

export default function TimeClock() {
  return (
    <div className="timeclock-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="tag light">Time Attendance</div>
          <h1 className="page-hero-title">Smart Time Clocking for Every Workforce</h1>
          <p className="page-hero-sub">
            From face recognition to GPS mobile clock-in — Smart Touch Time Attendance supports
            every method, every shift pattern, and every location.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-white btn-lg">Book a Demo</Link>
            <Link to="/contact" className="btn btn-outline-white btn-lg">Get a Quote</Link>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">Clock-in Methods</div>
            <h2 className="section-title">4 Ways to Clock In — You Choose</h2>
            <p className="section-subtitle">
              Mix and match methods across different sites and employee groups. All data centralises in one platform.
            </p>
          </div>
          <div className="grid-4">
            {methods.map(m => (
              <div key={m.title} className="card method-card">
                <div className={`icon-box ${m.color}`}>{m.icon}</div>
                <h3 className="method-title">{m.title}</h3>
                <p className="method-desc">{m.desc}</p>
                <ul className="method-specs">
                  {m.specs.map(s => (
                    <li key={s}><i className="fa-solid fa-check" />{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">Comparison</div>
            <h2 className="section-title">Manual vs Smart Touch Attendance</h2>
            <p className="section-subtitle">See the difference that automation makes.</p>
          </div>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="ct-feature">Feature</th>
                  <th className="ct-manual">Manual / Traditional</th>
                  <th className="ct-smart">Smart Touch</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(r => (
                  <tr key={r.feature}>
                    <td className="ct-feature-cell">{r.feature}</td>
                    <td className="ct-manual-cell">
                      <i className="fa-solid fa-xmark ct-icon-bad" /> {r.manual}
                    </td>
                    <td className="ct-smart-cell">
                      <i className="fa-solid fa-check ct-icon-good" /> {r.smart}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">Platform Features</div>
            <h2 className="section-title">Everything You Need to Manage Attendance</h2>
          </div>
          <div className="grid-3">
            {features.map(f => (
              <div key={f.title} className="card tc-feature-card">
                <div className={`icon-box ${f.color}`}>{f.icon}</div>
                <h3 className="tc-feature-title">{f.title}</h3>
                <p className="tc-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Highlight */}
      <section className="section app-highlight-section">
        <div className="container">
          <div className="app-two-col">
            <div className="app-text">
              <div className="tag light">Mobile App</div>
              <h2 className="section-title light">SmartGoGo — HR in Their Pocket</h2>
              <p className="section-subtitle light" style={{ marginBottom: 28 }}>
                Employees can clock in from any location with GPS verification. Managers get
                instant visibility and can approve requests on the go.
              </p>
              <div className="app-feature-list">
                {[
                  { icon: '📍', text: 'GPS-verified clock-in & clock-out' },
                  { icon: '📅', text: 'Apply for leave and check balances' },
                  { icon: '🧾', text: 'Submit expense claims with photos' },
                  { icon: '💰', text: 'View e-payslips anytime' },
                  { icon: '✅', text: 'Manager approval dashboard' },
                  { icon: '🔔', text: 'Push notifications for approvals' },
                ].map(item => (
                  <div key={item.text} className="app-feature-item">
                    <span className="app-fi-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-white btn-lg">Request a Demo</Link>
                <a href="https://wa.me/60115354990" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
                  <i className="fa-brands fa-whatsapp" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="app-mockup">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-header">
                    <span className="phone-time-label">SmartGoGo</span>
                  </div>
                  <div className="phone-clock-in">
                    <div className="clock-in-avatar">JD</div>
                    <div className="clock-in-name">John Doe</div>
                    <div className="clock-in-dept">Manufacturing · Floor A</div>
                    <div className="clock-in-time">08:42 AM</div>
                    <div className="clock-in-date">Monday, 9 Jun 2026</div>
                    <div className="clock-in-location">
                      <i className="fa-solid fa-location-dot" /> Permas Jaya, Johor
                    </div>
                    <button className="clock-in-btn">Clock In</button>
                  </div>
                  <div className="phone-menu-items">
                    <div className="pmi"><i className="fa-solid fa-calendar" /> Leave</div>
                    <div className="pmi"><i className="fa-solid fa-receipt" /> Claims</div>
                    <div className="pmi"><i className="fa-solid fa-file-invoice" /> Payslip</div>
                    <div className="pmi"><i className="fa-solid fa-bell" /> Approvals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-light" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Ready to Modernise Your Attendance?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Get a free demo and see Smart Touch Time Attendance in action.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Book a Free Demo</Link>
            <a href="tel:+6073889903" className="btn btn-secondary btn-lg">
              <i className="fa-solid fa-phone" /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
