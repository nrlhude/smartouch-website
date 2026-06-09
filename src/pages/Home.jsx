import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const stats = [
  { number: '500+', label: 'Companies Served' },
  { number: '15+', label: 'Years Experience' },
  { number: '20+', label: 'Integrated Solutions' },
  { number: '99.9%', label: 'Uptime SLA' },
]

const coreProducts = [
  {
    icon: '💰', color: 'blue', title: 'Payroll System',
    desc: 'Fully automated payroll with statutory compliance built in. Never miss an EPF, SOCSO, or PCB deadline.',
    features: ['EPF, SOCSO, EIS & PCB Compliant', 'Overtime & Bonus Processing', 'Automated E-Payslips', 'Bank Payment Integration'],
  },
  {
    icon: '⏱️', color: 'green', title: 'Time Attendance',
    desc: 'Multiple clock-in methods — face, fingerprint, card, or mobile GPS. Real-time visibility across all sites.',
    features: ['Face & Fingerprint Recognition', 'Mobile GPS Clock-in', 'Multi-shift Support', 'Real-time Dashboard'],
  },
  {
    icon: '📅', color: 'cyan', title: 'Leave Management',
    desc: 'Digitise your entire leave process — from application to approval, with automatic balance tracking.',
    features: ['Online Leave Applications', 'Multi-level Approvals', 'Leave Balance Tracking', 'Payroll Integration'],
  },
  {
    icon: '🧾', color: 'orange', title: 'Claims Management',
    desc: 'Streamline expense submissions and approvals with a fully integrated claims workflow.',
    features: ['Digital Expense Submission', 'Approval Workflow', 'Receipt Attachments', 'Payroll Integration'],
  },
  {
    icon: '📱', color: 'purple', title: 'SmartGoGo Mobile App',
    desc: 'Empower your workforce on the go — GPS attendance, leave, claims, and e-payslips in one app.',
    features: ['GPS-verified Attendance', 'Leave Applications', 'Claims Submission', 'E-payslip Access', 'Manager Approvals'],
  },
]

const extendedProducts = [
  {
    icon: '🪪', color: 'indigo', title: 'Visitor Management (VMS)',
    desc: 'Modernise your reception with self-registration, QR entry, host notifications and visitor logs.',
    features: ['Self-registration Kiosk', 'QR Code Entry', 'Host Notification', 'Visitor Tracking'],
  },
  {
    icon: '🍽️', color: 'teal', title: 'Canteen Subsidy Management',
    desc: 'Control meal subsidies with face, card or QR consumption tracking and automated entitlement.',
    features: ['Face / Card / QR Consumption', 'Meal Entitlement Control', 'Subsidy Management', 'Fraud Prevention'],
  },
  {
    icon: '🏠', color: 'blue', title: 'Dormitory Management',
    desc: 'Manage worker accommodation with room allocation, occupancy tracking and utility management.',
    features: ['Worker Registration', 'Room Allocation', 'Occupancy Tracking', 'Utilities Management'],
  },
  {
    icon: '🔧', color: 'orange', title: 'Job Costing System',
    desc: 'Track labour hours against projects for accurate cost control and project profitability.',
    features: ['Labour Hour Tracking', 'Project Costing', 'Cost Control Reports'],
  },
  {
    icon: '🏗️', color: 'red', title: 'Construction Site System',
    desc: 'Purpose-built attendance and safety compliance for construction and engineering sites.',
    features: ['Site Attendance', 'Biometric Verification', 'Safety Compliance', 'Mobile Attendance'],
  },
]

const biometricSolutions = [
  {
    icon: '👁️', color: 'blue', title: 'Biometric Authentication (BAS)',
    desc: 'Touchless face recognition for attendance and access — fast, hygienic, and fraud-proof.',
    features: ['Face Recognition', 'Touchless Attendance', 'Real-time Monitoring', 'Dashboard & Alerts'],
  },
  {
    icon: '🔒', color: 'green', title: 'Access Control',
    desc: 'Manage who enters every door — role-based access rights, restricted areas and audit trails.',
    features: ['Door Access Management', 'Staff Access Rights', 'Restricted Area Control', 'Access Logs'],
  },
  {
    icon: '🚧', color: 'orange', title: 'Barrier Solutions',
    desc: 'Physical security gates — turnstiles, swing barriers, and speed gates with face recognition.',
    features: ['Turnstile', 'Swing Barrier', 'Speed Gate', 'Face Recognition Integration'],
  },
]

const problems = [
  'Manual timesheets full of errors',
  'Buddy punching and time fraud',
  'Missed payroll deadlines',
  'Scattered HR data across systems',
  'No real-time workforce visibility',
  'Non-compliance with Malaysian labour law',
]

const solutions = [
  'Automated time capture — face, fingerprint, card',
  'Biometric verification prevents fraud',
  'Payroll runs itself with full compliance',
  'All HR data centralised in one platform',
  'Live dashboards across all locations',
  'Built-in EPF, SOCSO, EIS, PCB compliance',
]

const industries = [
  { icon: '🏭', label: 'Manufacturing' },
  { icon: '🏗️', label: 'Construction' },
  { icon: '⚙️', label: 'Engineering' },
  { icon: '🏢', label: 'Offices' },
  { icon: '🏬', label: 'Factories' },
  { icon: '🏘️', label: 'Condominiums' },
  { icon: '🏛️', label: 'Large Enterprises' },
  { icon: '🌐', label: 'Multi-branch Orgs' },
]

const whyUs = [
  { icon: '🛡️', color: 'blue', title: 'Proven Compliance', desc: 'Built for Malaysia — EPF, SOCSO, EIS, PCB, and Employment Act compliance out of the box.' },
  { icon: '☁️', color: 'cyan', title: 'Cloud-based Platform', desc: 'Access your HR data anywhere, anytime. Secure, scalable, and always up to date.' },
  { icon: '🔗', color: 'green', title: 'Fully Integrated', desc: 'Payroll, attendance, leave, claims and biometrics all talk to each other seamlessly.' },
  { icon: '📊', color: 'purple', title: 'Real-time Dashboards', desc: 'Live workforce visibility — headcount, attendance rates, overtime, and more.' },
  { icon: '📱', color: 'orange', title: 'Mobile-first', desc: 'SmartGoGo app lets employees clock in, apply leave and view payslips from anywhere.' },
  { icon: '🤝', color: 'teal', title: 'Local Support', desc: 'Malaysia-based support team ready to help — by phone, WhatsApp, or on-site.' },
]

const faqs = [
  {
    q: 'What is Smart Touch Technology?',
    a: 'Smart Touch Technology is a Malaysia-based workforce automation company providing integrated HRMS, payroll, attendance, biometric, visitor management, and operational management solutions for businesses of all sizes.',
  },
  {
    q: 'Is your payroll system compliant with Malaysian regulations?',
    a: 'Yes. Our payroll system is fully compliant with EPF, SOCSO, EIS, and PCB (income tax) requirements. It is regularly updated to reflect the latest government rates and requirements.',
  },
  {
    q: 'What types of biometric devices do you support?',
    a: 'We support face recognition, fingerprint, handkey, proximity cards, and QR codes. Our Biometric Authentication System (BAS) supports touchless attendance which is ideal for post-pandemic environments.',
  },
  {
    q: 'Do you support multi-location businesses?',
    a: 'Absolutely. Our cloud-based platform supports unlimited locations with centralised management, reporting, and real-time dashboards — perfect for multi-branch organisations.',
  },
  {
    q: 'Is there a mobile app for employees?',
    a: 'Yes. SmartGoGo is our mobile app that lets employees perform GPS-based clock-in, apply for leave, submit claims, and view e-payslips. Managers can approve requests on the go.',
  },
  {
    q: 'How do I get started?',
    a: "Book a free demo with our team. We'll understand your business needs and recommend the right solutions. Contact Mr Kenny at 012-7883383 or email sales@smartouch.com.my.",
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <i className={`fa-solid fa-chevron-down faq-icon`} />
      </button>
      {open && <div className="faq-a">{a}</div>}
    </div>
  )
}

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="tag light">PAL is always with you</div>
            <h1 className="hero-title">
              Building Smarter<br />
              <span className="hero-title-accent">Workforces,</span> Safer<br />
              Operations.
            </h1>
            <p className="hero-sub">
              Malaysia's leading integrated HRMS — payroll automation, biometric attendance,
              access control, and workforce management. One platform for your entire operation.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-white btn-lg">
                <i className="fa-solid fa-calendar-check" /> Book a Free Demo
              </Link>
              <Link to="/products" className="btn btn-outline-white btn-lg">
                Explore Solutions <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="hero-badges">
              <span className="hero-badge"><i className="fa-solid fa-shield-halved" /> Malaysian Compliant</span>
              <span className="hero-badge"><i className="fa-solid fa-cloud" /> Cloud-Based</span>
              <span className="hero-badge"><i className="fa-solid fa-mobile-screen" /> Mobile-Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map(s => (
              <div key={s.label} className="stat-item">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-sm trust-section">
        <div className="container">
          <p className="trust-label">Trusted by leading companies across Malaysia</p>
          <div className="trust-logos">
            {['Manufacturing Co.', 'Construction Group', 'Engineering Sdn Bhd', 'Property Holdings', 'Factories Inc.', 'Enterprise Corp'].map(c => (
              <div key={c} className="trust-logo-item">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Core HRMS */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">Core HRMS Solutions</div>
            <h2 className="section-title">Everything HR, In One Platform</h2>
            <p className="section-subtitle">
              From payroll to attendance to leave management — all integrated, all automated, all compliant.
            </p>
          </div>
          <div className="products-grid-5">
            {coreProducts.map(p => (
              <div key={p.title} className="card product-card">
                <div className={`icon-box ${p.color}`}>{p.icon}</div>
                <h3 className="product-card-title">{p.title}</h3>
                <p className="product-card-desc">{p.desc}</p>
                <ul className="check-list product-features">
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/products" className="product-link">Learn more <i className="fa-solid fa-arrow-right" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Solutions */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="tag green">Extended Solutions</div>
            <h2 className="section-title">Beyond HR — Full Operational Control</h2>
            <p className="section-subtitle">
              Manage visitors, canteen subsidies, dormitories, construction sites, and more from the same platform.
            </p>
          </div>
          <div className="grid-3 extended-grid">
            {extendedProducts.map(p => (
              <div key={p.title} className="card product-card">
                <div className={`icon-box ${p.color}`}>{p.icon}</div>
                <h3 className="product-card-title">{p.title}</h3>
                <p className="product-card-desc">{p.desc}</p>
                <ul className="check-list product-features">
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/products" className="product-link">Learn more <i className="fa-solid fa-arrow-right" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biometric & Security */}
      <section className="section biometric-section">
        <div className="container">
          <div className="section-header centered">
            <div className="tag light">Biometric & Security</div>
            <h2 className="section-title light">Secure Your People &amp; Premises</h2>
            <p className="section-subtitle light">
              From touchless face recognition to physical access barriers — keep your workplace secure.
            </p>
          </div>
          <div className="grid-3">
            {biometricSolutions.map(s => (
              <div key={s.title} className="card bio-card">
                <div className={`icon-box ${s.color}`}>{s.icon}</div>
                <h3 className="bio-card-title">{s.title}</h3>
                <p className="bio-card-desc">{s.desc}</p>
                <ul className="check-list">
                  {s.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">The Smart Touch Difference</div>
            <h2 className="section-title">From Problems to Solutions</h2>
          </div>
          <div className="ps-grid">
            <div className="ps-col problem-col">
              <div className="ps-col-header">
                <i className="fa-solid fa-triangle-exclamation" />
                <h3>Common Challenges</h3>
              </div>
              <ul className="ps-list">
                {problems.map(p => (
                  <li key={p} className="ps-item problem-item">
                    <i className="fa-solid fa-xmark" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ps-arrow"><i className="fa-solid fa-arrow-right" /></div>
            <div className="ps-col solution-col">
              <div className="ps-col-header">
                <i className="fa-solid fa-circle-check" />
                <h3>Smart Touch Solutions</h3>
              </div>
              <ul className="ps-list">
                {solutions.map(s => (
                  <li key={s} className="ps-item solution-item">
                    <i className="fa-solid fa-check" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">Industries We Serve</div>
            <h2 className="section-title">Built for Your Industry</h2>
            <p className="section-subtitle">
              From factory floors to high-rise offices — Smart Touch serves businesses across all sectors.
            </p>
          </div>
          <div className="industries-grid">
            {industries.map(ind => (
              <div key={ind.label} className="industry-card">
                <span className="industry-icon">{ind.icon}</span>
                <span className="industry-label">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">Why Smart Touch</div>
            <h2 className="section-title">Why Hundreds of Companies Choose Us</h2>
            <p className="section-subtitle">
              We don't just sell software — we solve real HR and operational problems for Malaysian businesses.
            </p>
          </div>
          <div className="grid-3">
            {whyUs.map(w => (
              <div key={w.title} className="card why-card">
                <div className={`icon-box ${w.color}`}>{w.icon}</div>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container faq-container">
          <div className="section-header centered">
            <div className="tag">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Workforce?</h2>
            <p className="cta-sub">
              Join 500+ Malaysian companies already using Smart Touch. Book a free demo today.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-white btn-lg">
                <i className="fa-solid fa-calendar-check" /> Book a Free Demo
              </Link>
              <a
                href="https://wa.me/60115354990"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-lg"
              >
                <i className="fa-brands fa-whatsapp" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
