import { Link } from 'react-router-dom'
import './About.css'

const coreSystems = [
  { icon: '💰', color: 'blue', title: 'Payroll System', desc: 'Full payroll automation with EPF, SOCSO, EIS, PCB compliance and payslip generation.' },
  { icon: '⏱️', color: 'green', title: 'Time Attendance', desc: 'Multi-method attendance — face, fingerprint, card, and GPS mobile — feeding into payroll.' },
  { icon: '📅', color: 'cyan', title: 'Leave Management', desc: 'Digital leave application, approval workflows, and automatic balance tracking.' },
  { icon: '🧾', color: 'orange', title: 'Claims Management', desc: 'Expense submission, approval workflow, and payroll integration.' },
  { icon: '📋', color: 'purple', title: 'Schedule System', desc: 'Shift and roster planning with multi-shift and rotation support.' },
]

const operationalSystems = [
  { icon: '🪪', color: 'indigo', title: 'Visitor Management System', desc: 'Replace paper log books with digital QR visitor registration and host notification.' },
  { icon: '🍽️', color: 'teal', title: 'Canteen Subsidy Management', desc: 'Face, card and QR-based meal consumption tracking with fraud prevention.' },
  { icon: '🏠', color: 'blue', title: 'Dormitory Management', desc: 'Worker accommodation management from room allocation to utilities billing.' },
  { icon: '🔧', color: 'orange', title: 'Job Costing System', desc: 'Labour hour and cost tracking per project, integrated with attendance.' },
  { icon: '🏗️', color: 'red', title: 'Construction Site System', desc: 'Site attendance, biometric verification, and safety compliance for field operations.' },
]

const philosophy = [
  { icon: '🎯', title: 'Solve Real Problems', desc: 'We build solutions around actual pain points faced by Malaysian HR and operations teams — not theoretical features.' },
  { icon: '🇲🇾', title: 'Built for Malaysia', desc: 'Every product is designed with Malaysian statutory requirements, local business culture, and practical constraints in mind.' },
  { icon: '🔗', title: 'Integration First', desc: 'Our systems are designed to work together. Attendance feeds payroll. Leave integrates with scheduling. Everything talks to everything.' },
  { icon: '📈', title: 'Grow With You', desc: 'Start with one module and grow. Our modular platform scales with your business without forcing system changes.' },
]

const milestones = [
  { year: '2010', event: 'Founded in Johor Bahru, Malaysia' },
  { year: '2012', event: 'Launched first integrated HRMS platform' },
  { year: '2015', event: 'Expanded into biometric authentication systems' },
  { year: '2018', event: 'Introduced SmartGoGo mobile HR application' },
  { year: '2020', event: 'Deployed touchless face recognition BAS system' },
  { year: '2022', event: 'Reached 400+ enterprise clients across Malaysia' },
  { year: '2024', event: 'Launched full operational management suite' },
  { year: '2026', event: '500+ companies, 20+ integrated modules' },
]

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="tag light">About Us</div>
          <h1 className="page-hero-title">Malaysia's Trusted Workforce Technology Partner</h1>
          <p className="page-hero-sub">
            For over 15 years, Smart Touch Technology has been helping Malaysian businesses
            automate their HR, manage their people, and secure their operations.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="story-text">
              <div className="tag">Our Story</div>
              <h2 className="section-title">From Johor to Malaysia's Leading HR Tech Provider</h2>
              <p>
                Smart Touch Technology Sdn Bhd was founded in Johor Bahru with a clear mission:
                to solve the real-world HR and operational challenges that Malaysian businesses
                face every day.
              </p>
              <p>
                We started with a payroll and attendance system for manufacturing companies.
                Over 15 years, we've grown our platform to cover the full spectrum of workforce
                management — from biometric authentication to visitor management, canteen
                systems, dormitory management, and physical access control.
              </p>
              <p>
                Today, over 500 companies across Malaysia — from factories and construction
                sites to office towers and condominiums — rely on Smart Touch to manage their
                people, protect their premises, and stay compliant with Malaysian law.
              </p>
              <p>
                We remain headquartered in Johor, with a dedicated team serving clients
                across Peninsular and East Malaysia.
              </p>
            </div>
            <div className="story-right">
              <div className="about-stats-card">
                {[
                  { num: '500+', label: 'Companies Served' },
                  { num: '15+', label: 'Years in Business' },
                  { num: '20+', label: 'Integrated Modules' },
                  { num: '99.9%', label: 'Uptime Guarantee' },
                ].map(s => (
                  <div key={s.label} className="about-stat">
                    <div className="about-stat-num">{s.num}</div>
                    <div className="about-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="about-tagline-card">
                <blockquote>
                  "PAL is always with you."
                </blockquote>
                <p>Our commitment to every client — a technology partner that's always there.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-light">
        <div className="container">
          <div className="mission-section">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To solve real-world HR and operational problems with smart, scalable technology — designed specifically for Malaysian businesses.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To be Malaysia's most trusted integrated workforce management platform, empowering businesses to operate smarter and safer.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">⭐</div>
              <h3>Our Values</h3>
              <p>Practical solutions, genuine partnership, continuous improvement, and unwavering commitment to compliance and quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core HR Systems */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">Core Platform</div>
            <h2 className="section-title">Core HR Management Systems</h2>
            <p className="section-subtitle">
              The foundation of our platform — fully integrated HR and workforce management tools.
            </p>
          </div>
          <div className="grid-3" style={{ gap: 20 }}>
            {coreSystems.map(s => (
              <div key={s.title} className="card about-sys-card">
                <div className={`icon-box ${s.color}`}>{s.icon}</div>
                <h3 className="sys-title">{s.title}</h3>
                <p className="sys-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SmartGoGo */}
      <section className="section smartgogo-section">
        <div className="container">
          <div className="sgg-content">
            <div className="sgg-text">
              <div className="tag light">Mobile HR App</div>
              <h2 className="section-title light">SmartGoGo — The Complete Employee App</h2>
              <p className="section-subtitle light" style={{ marginBottom: 28 }}>
                SmartGoGo is our mobile HR application that puts the power of the platform
                in every employee's pocket — and every manager's hand.
              </p>
              <div className="sgg-features">
                {[
                  { icon: '📍', text: 'GPS-verified attendance clock-in' },
                  { icon: '📅', text: 'Leave application and balance checking' },
                  { icon: '🧾', text: 'Expense claims with photo receipts' },
                  { icon: '💰', text: 'E-payslip access anytime' },
                  { icon: '✅', text: 'Manager approval dashboard' },
                  { icon: '🔔', text: 'Real-time push notifications' },
                ].map(f => (
                  <div key={f.text} className="sgg-feature">
                    <span>{f.icon}</span>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sgg-visual">
              <div className="sgg-card">
                <div style={{ fontSize: 48, textAlign: 'center', marginBottom: 16 }}>📱</div>
                <h3 style={{ textAlign: 'center', color: 'var(--dark)', marginBottom: 8 }}>SmartGoGo</h3>
                <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--gray-500)', marginBottom: 20 }}>Available on Android & iOS</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ flex: 1, background: '#000', color: 'white', borderRadius: 8, padding: '8px 12px', textAlign: 'center', fontSize: 11, fontWeight: 600 }}>
                    <div style={{ fontSize: 16, marginBottom: 2 }}>🍎</div>App Store
                  </div>
                  <div style={{ flex: 1, background: '#1a73e8', color: 'white', borderRadius: 8, padding: '8px 12px', textAlign: 'center', fontSize: 11, fontWeight: 600 }}>
                    <div style={{ fontSize: 16, marginBottom: 2 }}>▶</div>Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAS */}
      <section className="section bg-light">
        <div className="container">
          <div className="about-bas">
            <div className="bas-visual">
              <div className="bas-card">
                <div className="bas-icon-row">
                  {['👁️', '👆', '✋', '📡'].map(i => (
                    <div key={i} className="bas-icon-item">{i}</div>
                  ))}
                </div>
                <h3>BAS Platform</h3>
                <p>Multi-modal biometric authentication</p>
                <div className="bas-modes">
                  {['Face Recognition', 'Fingerprint', 'Handkey', 'Proximity Card'].map(m => (
                    <span key={m} className="bas-mode-pill">{m}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bas-text">
              <div className="tag">Biometric Platform</div>
              <h2 className="section-title">Biometric Authentication System (BAS)</h2>
              <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 20 }}>
                Our BAS platform is the biometric backbone of Smart Touch — an enterprise-grade
                authentication system that supports multiple biometric modalities: face recognition,
                fingerprint, handkey, and proximity card.
              </p>
              <ul className="check-list">
                <li>Touchless face recognition — fast, hygienic, and fraud-proof</li>
                <li>Anti-spoofing liveness detection</li>
                <li>Works for attendance and door access simultaneously</li>
                <li>Real-time monitoring and centralised dashboard</li>
                <li>Alerts for failed authentications and anomalies</li>
                <li>Integration with payroll, leave, and access control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Systems */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">Operations</div>
            <h2 className="section-title">Operational Management Systems</h2>
            <p className="section-subtitle">
              Beyond HR — Smart Touch extends into facility and operational management.
            </p>
          </div>
          <div className="grid-3" style={{ gap: 20 }}>
            {operationalSystems.map(s => (
              <div key={s.title} className="card about-sys-card">
                <div className={`icon-box ${s.color}`}>{s.icon}</div>
                <h3 className="sys-title">{s.title}</h3>
                <p className="sys-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">Our Journey</div>
            <h2 className="section-title">15+ Years of Innovation</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="tl-content">
                  <div className="tl-year">{m.year}</div>
                  <div className="tl-event">{m.event}</div>
                </div>
                <div className="tl-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">Our Approach</div>
            <h2 className="section-title">Company Philosophy</h2>
            <p className="section-subtitle">
              The principles that guide how we build products and serve our clients.
            </p>
          </div>
          <div className="grid-4">
            {philosophy.map(p => (
              <div key={p.title} className="card phil-card">
                <span className="phil-icon">{p.icon}</span>
                <h3 className="phil-title">{p.title}</h3>
                <p className="phil-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" style={{ background: 'linear-gradient(135deg,var(--primary) 0%,#1a73e8 100%)', padding: '72px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: 'white', marginBottom: 16, letterSpacing: '-0.02em' }}>
            Let's Build a Smarter Workforce Together
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            Talk to our team and discover how Smart Touch can transform your HR and operations.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white btn-lg">Book a Free Demo</Link>
            <Link to="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
