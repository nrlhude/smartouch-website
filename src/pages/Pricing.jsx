import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

const modules = [
  { icon: '💰', name: 'Payroll System' },
  { icon: '⏱️', name: 'Time Attendance' },
  { icon: '📅', name: 'Leave Management' },
  { icon: '🧾', name: 'Claims Management' },
  { icon: '📱', name: 'SmartGoGo App' },
  { icon: '📋', name: 'Schedule System' },
  { icon: '🪪', name: 'Visitor Management' },
  { icon: '🍽️', name: 'Canteen Management' },
  { icon: '🏠', name: 'Dormitory System' },
  { icon: '🔧', name: 'Job Costing' },
  { icon: '🏗️', name: 'Construction Site' },
  { icon: '👁️', name: 'Biometric Auth (BAS)' },
  { icon: '🔒', name: 'Access Control' },
  { icon: '🚧', name: 'Barrier Solutions' },
]

const reasons = [
  { icon: '🎯', title: 'Right-sized for You', desc: 'We price based on your actual needs — number of employees, sites, and modules selected.' },
  { icon: '📦', title: 'Modular Selection', desc: 'Buy only what you need. Add modules as your business grows without switching systems.' },
  { icon: '🚀', title: 'Fast Implementation', desc: 'Our team handles implementation and training. Most clients are live in under 2 weeks.' },
  { icon: '🤝', title: 'Local Support', desc: 'Malaysia-based support team. Get help by phone, WhatsApp, email, or on-site visit.' },
  { icon: '🔄', title: 'Regular Updates', desc: 'Automatic updates keep you compliant with latest EPF, SOCSO, and tax rate changes.' },
  { icon: '☁️', title: 'Cloud Hosting Included', desc: 'Secure cloud hosting, backups, and 99.9% uptime SLA are included in your subscription.' },
]

const faqs = [
  { q: 'How is pricing determined?', a: 'Our pricing is based on the number of employees, the modules you need, and your number of locations. We provide a customised quote after understanding your requirements — no one-size-fits-all packages.' },
  { q: 'Is there a minimum contract period?', a: 'We typically work on annual subscriptions, but we can discuss flexible arrangements. Contact our sales team to find the best option for your business.' },
  { q: 'What is included in the subscription?', a: 'Cloud hosting, software updates (including statutory compliance updates), technical support, and access to all subscribed modules are included. Hardware (biometric terminals) may be quoted separately.' },
  { q: 'Can I add more modules later?', a: 'Yes. Our platform is modular — you can start with payroll and attendance, then add leave management, claims, visitor management, and more as your needs grow.' },
  { q: 'Is there a setup or implementation fee?', a: 'Implementation fees vary based on the scope of your project. Our team will provide a clear breakdown during the quotation process. Training is typically included.' },
  { q: 'Do you support multi-company or multi-branch pricing?', a: 'Yes. We have options for multi-entity and multi-branch organisations. Talk to our team for enterprise pricing.' },
]

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="pricing-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="tag light">Pricing</div>
          <h1 className="page-hero-title">Pricing Tailored to Your Business</h1>
          <p className="page-hero-sub">
            We don't believe in off-the-shelf pricing. Every business is different — we'll design
            a solution and pricing that fits your exact needs.
          </p>
        </div>
      </section>

      {/* Pricing approach */}
      <section className="section">
        <div className="container">
          <div className="pricing-approach">
            <div className="pa-left">
              <div className="tag">How Pricing Works</div>
              <h2 className="section-title">Custom Pricing for Every Business</h2>
              <p style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 24 }}>
                Smart Touch Technology uses a consultative sales process. There are no hidden fees
                or surprises — just an honest conversation about what you need, followed by a
                clear, detailed proposal.
              </p>
              <div className="pa-steps">
                {[
                  { step: '01', title: 'Tell us about your business', desc: 'Company size, number of employees, locations, and the challenges you face.' },
                  { step: '02', title: 'We recommend the right modules', desc: 'Our team identifies the right combination of products and hardware for your needs.' },
                  { step: '03', title: 'Receive a detailed quote', desc: 'You get a clear, itemised quotation — software, hardware, implementation, and support.' },
                  { step: '04', title: 'Go live in days, not months', desc: 'Our implementation team gets you set up fast, with full training included.' },
                ].map(s => (
                  <div key={s.step} className="pa-step">
                    <div className="pa-step-num">{s.step}</div>
                    <div>
                      <div className="pa-step-title">{s.title}</div>
                      <div className="pa-step-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pa-right">
              <div className="pa-quote-card">
                <div className="pqc-header">
                  <h3>Get Your Custom Quote</h3>
                  <p>Fill in your details and we'll be in touch within 1 business day.</p>
                </div>
                <form className="pqc-form" onSubmit={e => e.preventDefault()}>
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input type="text" placeholder="Your Company Sdn Bhd" required />
                  </div>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" placeholder="Full Name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="+60 12-345 6789" required />
                  </div>
                  <div className="form-group">
                    <label>Number of Employees</label>
                    <select>
                      <option>1–50</option>
                      <option>51–200</option>
                      <option>201–500</option>
                      <option>500+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Modules of Interest</label>
                    <div className="module-checkboxes">
                      {['Payroll', 'Time Attendance', 'Leave Management', 'Biometric', 'Access Control', 'Other'].map(m => (
                        <label key={m} className="module-check">
                          <input type="checkbox" /> {m}
                        </label>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    <i className="fa-solid fa-paper-plane" /> Request a Quote
                  </button>
                  <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--gray-500)', marginTop: 8 }}>
                    Or call us at <a href="tel:+6073889903" style={{ color: 'var(--primary)' }}>+607-388 9903</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">Available Modules</div>
            <h2 className="section-title">14 Modules — Pick What You Need</h2>
            <p className="section-subtitle">
              Start with the essentials and grow. Our modular platform means you only pay for what you use.
            </p>
          </div>
          <div className="modules-grid">
            {modules.map(m => (
              <div key={m.name} className="module-pill">
                <span className="module-pill-icon">{m.icon}</span>
                <span className="module-pill-name">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Smart Touch */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <div className="tag">What's Included</div>
            <h2 className="section-title">More Than Just Software</h2>
          </div>
          <div className="grid-3">
            {reasons.map(r => (
              <div key={r.title} className="card price-reason-card">
                <span className="pr-icon">{r.icon}</span>
                <h3 className="pr-title">{r.title}</h3>
                <p className="pr-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-light">
        <div className="container pricing-faq">
          <div className="section-header centered">
            <div className="tag">FAQ</div>
            <h2 className="section-title">Pricing Questions Answered</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={f.q} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <i className="fa-solid fa-chevron-down faq-icon" />
                </button>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" style={{ background: 'linear-gradient(135deg,var(--primary) 0%,#1a73e8 100%)', padding: '72px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: 'white', marginBottom: 16, letterSpacing: '-0.02em' }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            Contact Mr Kenny directly or book a free consultation with our team.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white btn-lg">Contact Us</Link>
            <a href="tel:+60127883383" className="btn btn-outline-white btn-lg">
              <i className="fa-solid fa-phone" /> 012-7883383
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
