import { Link } from 'react-router-dom'
import './Products.css'

const categories = [
  {
    id: 'hrms', tag: 'Core HRMS', title: 'HR & Payroll Solutions',
    products: [
      {
        icon: '💰', color: 'blue', title: 'Payroll System',
        desc: 'Malaysia\'s most comprehensive payroll automation. Handles EPF, SOCSO, EIS, and PCB automatically, calculates overtime and allowances, and generates payslips instantly.',
        features: ['Automated Salary Calculation', 'EPF, SOCSO, EIS, PCB Compliance', 'Overtime & Allowance Processing', 'Bonus & Incentive Management', 'Automated E-Payslips', 'Bank Payment File Generation', 'Multi-company & Multi-currency'],
        badge: 'Most Popular',
      },
      {
        icon: '📅', color: 'cyan', title: 'Leave Management System',
        desc: 'Digitise your entire leave process end-to-end. Employees apply online, managers approve with one click, and balances update automatically.',
        features: ['Online Leave Applications', 'Multi-level Approval Workflow', 'Leave Balance Auto-tracking', 'Public Holiday Management', 'Leave Type Customisation', 'Payroll Integration', 'Leave Reports & Analytics'],
      },
      {
        icon: '🧾', color: 'orange', title: 'Claims Management System',
        desc: 'Simplify expense reimbursement with a digital workflow — from submission with receipt to payment via payroll.',
        features: ['Digital Expense Submission', 'Receipt Attachment Upload', 'Multi-level Approval', 'Claims Type Configuration', 'Payroll Integration', 'Expense Reports', 'Mileage Calculation'],
      },
      {
        icon: '📊', color: 'purple', title: 'Schedule System',
        desc: 'Build complex rosters and shift schedules easily. Assign employees to shifts, manage rotations, and track schedule compliance.',
        features: ['Shift & Roster Planning', 'Drag-and-drop Scheduling', 'Multi-shift Support', 'Overtime Planning', 'Schedule Publishing', 'Attendance vs Schedule Report'],
      },
      {
        icon: '🆔', color: 'teal', title: 'ID Badge Card Solution',
        desc: 'Design and print professional employee ID badges with photo, barcode or QR code — integrated with your employee database.',
        features: ['Custom Badge Design', 'Photo Integration', 'Barcode & QR Code', 'Batch Printing', 'Access Control Integration'],
      },
    ],
  },
  {
    id: 'attendance', tag: 'Time Attendance', title: 'Attendance & Time Management',
    products: [
      {
        icon: '⏱️', color: 'green', title: 'Time Attendance System',
        desc: 'A complete attendance solution supporting every clock-in method — face recognition, fingerprint, card, and mobile GPS.',
        features: ['Face Recognition Attendance', 'Fingerprint Attendance', 'Proximity Card Attendance', 'Mobile Clock-in (GPS)', 'Multi-shift Support', 'Real-time Dashboard', 'Attendance Reports'],
        badge: 'Core Product',
      },
      {
        icon: '📱', color: 'purple', title: 'SmartGoGo Mobile App',
        desc: 'A complete HR app for employees — clock in with GPS, apply leave, submit claims, and access payslips, all from their phone.',
        features: ['GPS-verified Clock-in/out', 'Geofencing Support', 'Leave Applications & Balance', 'Claims Submission', 'E-payslip Access', 'Manager Approval Dashboard', 'Push Notifications'],
        badge: 'Mobile App',
      },
    ],
  },
  {
    id: 'biometric', tag: 'Biometric', title: 'Biometric Authentication (BAS)',
    products: [
      {
        icon: '👁️', color: 'blue', title: 'Biometric Authentication System',
        desc: 'Our flagship BAS platform provides enterprise-grade touchless face recognition for attendance, access, and identity verification.',
        features: ['Face Recognition', 'Biometric Fingerprint', 'Biometric Handkey', 'Proximity Card Support', 'Touchless & Hygienic', 'Real-time Monitoring', 'Centralised Dashboard', 'Alert & Notifications'],
        badge: 'Flagship',
      },
    ],
  },
  {
    id: 'operations', tag: 'Operations', title: 'Operational Management Systems',
    products: [
      {
        icon: '🪪', color: 'indigo', title: 'Visitor Management System (VMS)',
        desc: 'Replace your paper visitor book with a professional digital system — self-registration, QR entry, and real-time visitor tracking.',
        features: ['Self-registration Kiosk', 'QR Code Entry', 'Host Notification (SMS/Email)', 'Visitor Photo Capture', 'Badge Printing', 'Visitor Log & Reports', 'Pre-registration'],
      },
      {
        icon: '🍽️', color: 'teal', title: 'Canteen Subsidy Management',
        desc: 'Manage staff meal subsidies fairly and accurately — using face recognition, cards, or QR to track consumption and prevent fraud.',
        features: ['Face / Card / QR Consumption', 'Meal Entitlement Setup', 'Subsidy Cap per Employee', 'Multi-meal Type Support', 'Fraud Prevention', 'Canteen Reports', 'Payroll Deduction Integration'],
      },
      {
        icon: '🏠', color: 'blue', title: 'Dormitory Management System',
        desc: 'A comprehensive system to manage worker accommodation — from registration and room allocation to utilities tracking.',
        features: ['Worker Registration', 'Room Allocation & Assignment', 'Occupancy Tracking', 'Utilities (Water/Electricity) Billing', 'Check-in / Check-out Management', 'Maintenance Request Tracking'],
      },
      {
        icon: '🔧', color: 'orange', title: 'Job Costing System',
        desc: 'Accurately track labour costs against projects and jobs — link attendance data to project time sheets automatically.',
        features: ['Labour Hour Tracking per Project', 'Project Cost Reporting', 'Cost Control Dashboard', 'Attendance Integration', 'Multi-project Support'],
      },
      {
        icon: '🏗️', color: 'red', title: 'Construction Site System',
        desc: 'Purpose-built for construction and engineering — manage site attendance, safety compliance, and mobile clock-in for field workers.',
        features: ['Site Attendance Tracking', 'Biometric Verification On-site', 'Safety Compliance Records', 'Mobile Attendance', 'Contractor Management', 'Site Reports'],
      },
    ],
  },
  {
    id: 'security', tag: 'Security', title: 'Access Control & Physical Security',
    products: [
      {
        icon: '🔒', color: 'green', title: 'Access Control System',
        desc: 'Control who enters every door in your facility with role-based access rights, time restrictions, and full audit trails.',
        features: ['Door Access Management', 'Role-based Access Rights', 'Time-based Access Rules', 'Restricted Area Control', 'Access Log & Audit Trail', 'Visitor Access Management', 'Emergency Lockdown'],
      },
      {
        icon: '🚧', color: 'orange', title: 'Barrier Solutions',
        desc: 'Physical access control gates — turnstiles, swing barriers, and speed gates — integrated with face recognition or card readers.',
        features: ['Turnstile Gate', 'Swing Barrier', 'Speed Gate', 'Face Recognition Integration', 'Card Reader Integration', 'Anti-tailgating', 'Emergency Release Mode'],
      },
    ],
  },
]

export default function Products() {
  return (
    <div className="products-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="tag light">Complete Product Suite</div>
          <h1 className="page-hero-title">One Platform, Every Workforce Need</h1>
          <p className="page-hero-sub">
            From payroll automation to biometric access control — Smart Touch covers every aspect
            of workforce and operational management, fully integrated.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-white btn-lg">Book a Demo</Link>
            <Link to="/contact" className="btn btn-outline-white btn-lg">Contact Sales</Link>
          </div>
        </div>
      </section>

      {/* Category nav */}
      <div className="cat-nav-bar">
        <div className="container">
          <div className="cat-nav">
            {categories.map(c => (
              <a key={c.id} href={`#${c.id}`} className="cat-nav-link">{c.tag}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Product Categories */}
      {categories.map((cat, ci) => (
        <section key={cat.id} id={cat.id} className={`section products-section ${ci % 2 === 1 ? 'bg-light' : ''}`}>
          <div className="container">
            <div className="section-header">
              <div className="tag">{cat.tag}</div>
              <h2 className="section-title">{cat.title}</h2>
            </div>
            <div className="products-list">
              {cat.products.map(p => (
                <div key={p.title} className="card product-row-card">
                  {p.badge && <span className="prod-badge">{p.badge}</span>}
                  <div className="prc-icon">
                    <div className={`icon-box ${p.color}`}>{p.icon}</div>
                  </div>
                  <div className="prc-body">
                    <h3 className="prc-title">{p.title}</h3>
                    <p className="prc-desc">{p.desc}</p>
                    <ul className="prc-features">
                      {p.features.map(f => (
                        <li key={f}><i className="fa-solid fa-check" />{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="prc-cta">
                    <Link to="/contact" className="btn btn-primary">Get a Demo</Link>
                    <Link to="/contact" className="btn btn-secondary">Learn More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="cta-banner" style={{ background: 'linear-gradient(135deg,var(--primary) 0%,#1a73e8 100%)', padding: '72px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: 'white', marginBottom: 16, letterSpacing: '-0.02em' }}>
            Not Sure Which Products You Need?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
            Our team will assess your requirements and recommend the right solution for your business.
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
