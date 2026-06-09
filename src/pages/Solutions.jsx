import { Link } from 'react-router-dom'
import './Solutions.css'

const solutionCategories = [
  {
    id: 'payroll-solution', icon: '💰', color: 'blue',
    title: 'Payroll System Solution',
    subtitle: 'Automate your entire payroll process',
    desc: 'Eliminate manual payroll errors and ensure full compliance with Malaysian statutory requirements. Our payroll solution handles everything from basic salary to complex overtime calculations.',
    benefits: [
      'Zero manual payroll errors',
      'Automatic EPF, SOCSO, EIS & PCB calculation',
      'Overtime, allowance and bonus auto-processing',
      'Bank payment file generation',
      'Payslip generation and distribution',
      'Audit-ready payroll reports',
    ],
    useCases: 'Manufacturing, Engineering Firms, Large Enterprises, Multi-branch Companies',
  },
  {
    id: 'attendance-solution', icon: '⏱️', color: 'green',
    title: 'Time Attendance Solution',
    subtitle: 'Accurate attendance across every location',
    desc: 'Replace paper timesheets and manual punch cards with automated biometric attendance. Real-time data flows directly into payroll — no re-entry, no errors.',
    benefits: [
      'Eliminate buddy punching with biometrics',
      'Face, fingerprint, card or mobile GPS clock-in',
      'Multi-site, multi-shift support',
      'Real-time attendance dashboard',
      'Automatic late/absent alerts',
      'Seamless payroll integration',
    ],
    useCases: 'Factories, Construction Sites, Multi-location Businesses, Condominiums',
  },
  {
    id: 'leave-solution', icon: '📅', color: 'cyan',
    title: 'Leave Management Solution',
    subtitle: 'Paperless leave from application to approval',
    desc: 'Replace leave forms and spreadsheets with a fully digital, automated workflow. Employees apply online, managers approve from anywhere, and balances update automatically.',
    benefits: [
      'Online leave applications anytime, anywhere',
      'Configurable approval workflows',
      'Automatic balance calculation and tracking',
      'Public holiday and replacement leave management',
      'Leave entitlement by employee type',
      'Leave reports for HR analytics',
    ],
    useCases: 'Offices, Enterprises, Companies with Remote or Field Workers',
  },
  {
    id: 'schedule-solution', icon: '📋', color: 'purple',
    title: 'Schedule System Solution',
    subtitle: 'Smart workforce scheduling',
    desc: 'Build complex shift rosters effortlessly. Assign employees to shifts, manage rotations, track overtime, and publish schedules — all from one system.',
    benefits: [
      'Visual drag-and-drop scheduling',
      'Multi-shift and rotating shift support',
      'Overtime planning and alerts',
      'Employee schedule self-view',
      'Attendance vs schedule compliance reporting',
      'Integration with payroll for shift allowances',
    ],
    useCases: 'Manufacturing, Healthcare, Hospitality, Security Companies',
  },
  {
    id: 'overtime-solution', icon: '⏰', color: 'orange',
    title: 'Overtime Pay Solution',
    subtitle: 'Accurate OT calculation every time',
    desc: 'Automatically calculate overtime based on Employment Act rates, shift rules, and company policy — fed directly from attendance data into payroll.',
    benefits: [
      'Employment Act OT rate compliance',
      'Automatic OT calculation from attendance',
      'Public holiday OT handling',
      'OT approval workflow',
      'OT caps and budget alerts',
      'Detailed OT reports by department and employee',
    ],
    useCases: 'Factories, Construction, Any Business with Shift Workers',
  },
  {
    id: 'badge-solution', icon: '🆔', color: 'indigo',
    title: 'ID Badge Card Solution',
    subtitle: 'Professional employee ID and access cards',
    desc: 'Design, print and manage employee ID cards with photos, barcodes, or QR codes. Integrate with access control for a single card that does both identification and door access.',
    benefits: [
      'Custom badge layout and branding',
      'Employee photo integration',
      'Barcode and QR code support',
      'Batch printing for large workforces',
      'Access control card integration',
      'Contractor and visitor badge support',
    ],
    useCases: 'Large Enterprises, Factories, Construction Sites, Condominiums',
  },
]

const biometricTypes = [
  {
    icon: '🪪', color: 'blue', title: 'Biometric Facial Recognition',
    desc: 'Touchless face recognition for attendance, access control and identity verification. Fast, hygienic, and impossible to fool.',
    specs: ['Sub-second recognition speed', '99.9% accuracy rate', 'Works with masks (partial)', 'Liveness detection anti-spoof', 'Works in varying light conditions'],
  },
  {
    icon: '👆', color: 'green', title: 'Biometric Fingerprint',
    desc: 'Reliable fingerprint scanning for time attendance and access control — proven technology trusted by thousands of employees.',
    specs: ['Optical & capacitive sensors', 'Multi-finger enrolment', 'Fast 1-second matching', 'Works with clean & dry hands', 'Durable industrial-grade device'],
  },
  {
    icon: '✋', color: 'purple', title: 'Biometric Handkey',
    desc: 'Hand geometry recognition — measures the unique shape of an employee\'s hand for precise identity verification.',
    specs: ['Non-contact hand geometry', 'Highly hygienic', 'Works regardless of skin condition', 'Industrial environment resistant', 'Ideal for manufacturing & labs'],
  },
  {
    icon: '📡', color: 'orange', title: 'Proximity Card',
    desc: 'RFID proximity cards and fobs for quick, contactless access — easy to issue, easy to revoke, and works at high throughput.',
    specs: ['125kHz & 13.56MHz support', 'Instant card issuance', 'Easy access revocation', 'Integration with BAS & Access Control', 'Low cost per card'],
  },
]

const accessSolutions = [
  {
    icon: '🔒', color: 'blue', title: 'Access Control System',
    desc: 'Comprehensive door and gate access management with role-based rights, time restrictions, and complete audit trails.',
    features: ['Door Access Management', 'Staff Access Rights by Role', 'Time-based Rules', 'Restricted Area Control', 'Full Access Log & Audit Trail'],
  },
  {
    icon: '🚧', color: 'green', title: 'Turnstile Barrier',
    desc: 'Single-passage turnstile gates for high-traffic areas — prevents tailgating and ensures every person is verified.',
    features: ['Anti-tailgating Technology', 'Face & Card Integration', 'Bi-directional Control', 'High throughput', 'Emergency Release Mode'],
  },
  {
    icon: '🚪', color: 'orange', title: 'Swing Barrier',
    desc: 'Elegant swing barrier gates for office lobbies, condominiums, and corporate receptions — balancing security with aesthetics.',
    features: ['Sleek Modern Design', 'ADA Accessible Options', 'Face Recognition Ready', 'Silent Operation', 'Customisable Panel Width'],
  },
  {
    icon: '⚡', color: 'cyan', title: 'Speed Gate',
    desc: 'High-speed retractable barriers for busy entrances — fast flow without compromising security.',
    features: ['High-speed Opening (<0.5s)', 'Anti-tailgating Sensors', 'Bi-directional Traffic', 'Face Recognition Integration', 'Fire Safety Compliant'],
  },
]

export default function Solutions() {
  return (
    <div className="solutions-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="tag light">Industry Solutions</div>
          <h1 className="page-hero-title">The Right Solution for Every Challenge</h1>
          <p className="page-hero-sub">
            Smart Touch solutions are designed around real Malaysian business problems — from payroll compliance
            to biometric security to operational management.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-white btn-lg">Book a Demo</Link>
            <Link to="/contact" className="btn btn-outline-white btn-lg">Contact Sales</Link>
          </div>
        </div>
      </section>

      {/* HR Solutions */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">HR & Workforce</div>
            <h2 className="section-title">HR & Payroll Solutions</h2>
            <p className="section-subtitle">
              End-to-end HR automation from payroll to scheduling, fully compliant with Malaysian law.
            </p>
          </div>
          <div className="solutions-grid">
            {solutionCategories.map(s => (
              <div key={s.id} className="card sol-card" id={s.id}>
                <div className="sol-card-top">
                  <div className={`icon-box ${s.color}`}>{s.icon}</div>
                  <div>
                    <h3 className="sol-title">{s.title}</h3>
                    <p className="sol-subtitle">{s.subtitle}</p>
                  </div>
                </div>
                <p className="sol-desc">{s.desc}</p>
                <ul className="check-list sol-benefits">
                  {s.benefits.map(b => <li key={b}>{b}</li>)}
                </ul>
                <div className="sol-use-cases">
                  <span className="sol-uc-label">Best for: </span>
                  <span className="sol-uc-text">{s.useCases}</span>
                </div>
                <Link to="/contact" className="btn btn-primary sol-btn">Request a Demo</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biometric */}
      <section className="section biometric-section" id="biometric">
        <div className="container">
          <div className="section-header centered">
            <div className="tag light">Authentication</div>
            <h2 className="section-title light">Biometric Authentication Methods</h2>
            <p className="section-subtitle light">
              Choose the right biometric technology for your environment — or combine multiple methods.
            </p>
          </div>
          <div className="grid-4">
            {biometricTypes.map(b => (
              <div key={b.title} className="bio-type-card">
                <div className={`icon-box ${b.color}`}>{b.icon}</div>
                <h3 className="bio-type-title">{b.title}</h3>
                <p className="bio-type-desc">{b.desc}</p>
                <ul className="bio-specs">
                  {b.specs.map(sp => (
                    <li key={sp}><i className="fa-solid fa-circle-check" />{sp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Control */}
      <section className="section" id="access-control">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">Physical Security</div>
            <h2 className="section-title">Access Control & Barrier Solutions</h2>
            <p className="section-subtitle">
              From software access rights to physical barriers — control who goes where, and when.
            </p>
          </div>
          <div className="grid-4">
            {accessSolutions.map(s => (
              <div key={s.title} className="card acc-card">
                <div className={`icon-box ${s.color}`}>{s.icon}</div>
                <h3 className="acc-title">{s.title}</h3>
                <p className="acc-desc">{s.desc}</p>
                <ul className="check-list">
                  {s.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction */}
      <section className="section bg-light" id="construction">
        <div className="container">
          <div className="sol-two-col">
            <div className="sol-text">
              <div className="tag">Industry Specific</div>
              <h2 className="section-title">Construction Site System</h2>
              <p className="section-subtitle" style={{ marginBottom: 24 }}>
                Smart Touch understands the unique challenges of construction and engineering sites —
                large workforces, contractors, outdoor environments, and strict safety requirements.
              </p>
              <ul className="check-list">
                <li>Site attendance with biometric verification</li>
                <li>Mobile clock-in for field workers</li>
                <li>Contractor and subcontractor management</li>
                <li>Safety compliance records and alerts</li>
                <li>Labour cost tracking per project</li>
                <li>Multi-site management from one dashboard</li>
                <li>Real-time headcount reports</li>
              </ul>
              <div style={{ marginTop: 28 }}>
                <Link to="/contact" className="btn btn-primary btn-lg">Book a Site Demo</Link>
              </div>
            </div>
            <div className="sol-visual">
              <div className="sol-vis-card">
                <div style={{ fontSize: 56, marginBottom: 16, textAlign: 'center' }}>🏗️</div>
                <h3 style={{ textAlign: 'center', marginBottom: 16, color: 'var(--dark)', fontSize: 18 }}>Construction Site Features</h3>
                {['Face recognition in outdoor conditions', 'Rugged weatherproof hardware', 'GPS geo-fencing per site', 'CIDB compliance ready', 'Contractor pass management', 'Safety briefing records'].map(f => (
                  <div key={f} className="sol-vis-item">
                    <i className="fa-solid fa-check" /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" style={{ background: 'linear-gradient(135deg,var(--primary) 0%,#1a73e8 100%)', padding: '72px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: 'white', marginBottom: 16, letterSpacing: '-0.02em' }}>
            Find the Right Solution for Your Business
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            Talk to our solution experts — we'll help you pick the right combination of products.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white btn-lg">Talk to an Expert</Link>
            <a href="https://wa.me/60115354990" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
              <i className="fa-brands fa-whatsapp" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
