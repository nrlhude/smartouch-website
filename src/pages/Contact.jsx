import { useState } from 'react'
import './Contact.css'

const contactDetails = [
  {
    icon: 'fa-solid fa-location-dot', label: 'Office Address',
    lines: ['36-02 & 36-03, Jalan Permas 10,', 'Bandar Baru Permas Jaya,', '81750 Masai, Johor, Malaysia'],
  },
  {
    icon: 'fa-solid fa-phone', label: 'Phone Numbers',
    lines: ['+607-388 9903', '+6011-5354 9903', '+607-388 3686', '+607-388 1124'],
  },
  {
    icon: 'fa-solid fa-fax', label: 'Fax',
    lines: ['+607-388 0628'],
  },
  {
    icon: 'fa-solid fa-envelope', label: 'Email',
    lines: ['sales@smartouch.com.my'],
  },
]

const contactPerson = {
  name: 'Mr Kenny',
  role: 'Sales Consultant',
  phone: '012-7883383',
  whatsapp: '60127883383',
}

const officeHours = [
  { day: 'Monday – Friday', time: '8:30 AM – 5:30 PM' },
  { day: 'Saturday', time: '9:00 AM – 1:00 PM' },
  { day: 'Sunday & Public Holidays', time: 'Closed' },
]

const departments = [
  { icon: '💼', label: 'Sales & Demo Enquiries', email: 'sales@smartouch.com.my' },
  { icon: '🛠️', label: 'Technical Support', email: 'support@smartouch.com.my' },
  { icon: '📦', label: 'Product Information', email: 'info@smartouch.com.my' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="tag light">Contact Us</div>
          <h1 className="page-hero-title">Let's Talk About Your Workforce</h1>
          <p className="page-hero-sub">
            Whether you need a demo, a quote, or just have questions — our team is ready to help.
            Reach us by phone, WhatsApp, or email.
          </p>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <div className="quick-contact">
        <div className="container">
          <div className="qc-grid">
            <a href="tel:+6073889903" className="qc-btn">
              <i className="fa-solid fa-phone" />
              <div>
                <div className="qc-label">Call Us</div>
                <div className="qc-value">+607-388 9903</div>
              </div>
            </a>
            <a
              href="https://wa.me/60127883383?text=Hello%20Smart%20Touch%20Technology!%20I%20would%20like%20to%20enquire%20about%20your%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="qc-btn whatsapp"
            >
              <i className="fa-brands fa-whatsapp" />
              <div>
                <div className="qc-label">WhatsApp Mr Kenny</div>
                <div className="qc-value">012-7883383</div>
              </div>
            </a>
            <a href="mailto:sales@smartouch.com.my" className="qc-btn email">
              <i className="fa-solid fa-envelope" />
              <div>
                <div className="qc-label">Email Us</div>
                <div className="qc-value">sales@smartouch.com.my</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main contact section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-col">
              <h2 className="contact-form-title">Send Us a Message</h2>
              <p className="contact-form-sub">
                Fill in the form and we'll get back to you within 1 business day.
              </p>

              {submitted ? (
                <div className="success-msg">
                  <div className="success-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for contacting Smart Touch Technology. Our team will reach out to you within 1 business day.</p>
                  <p>
                    For urgent matters, call us at <a href="tel:+6073889903">+607-388 9903</a> or
                    WhatsApp <a href="https://wa.me/60127883383" target="_blank" rel="noopener noreferrer">012-7883383</a>.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Sdn Bhd"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+60 12-345 6789"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject / Area of Interest</label>
                    <select name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a topic</option>
                      <option>Payroll System</option>
                      <option>Time Attendance</option>
                      <option>Leave Management</option>
                      <option>Biometric Authentication (BAS)</option>
                      <option>Access Control & Barriers</option>
                      <option>Visitor Management</option>
                      <option>Canteen / Dormitory System</option>
                      <option>SmartGoGo Mobile App</option>
                      <option>Full HRMS Package</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business needs, number of employees, and any specific requirements..."
                      rows={5}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }}>
                    <i className="fa-solid fa-paper-plane" /> Send Message
                  </button>
                  <p style={{ fontSize: 12, color: 'var(--gray-500)', textAlign: 'center', marginTop: 8 }}>
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="contact-info-col">
              {/* Contact person */}
              <div className="contact-person-card">
                <div className="cp-avatar">K</div>
                <div className="cp-info">
                  <div className="cp-name">{contactPerson.name}</div>
                  <div className="cp-role">{contactPerson.role}</div>
                  <div className="cp-contacts">
                    <a href={`tel:+60${contactPerson.phone.replace(/\D/g,'').slice(1)}`} className="cp-link">
                      <i className="fa-solid fa-phone" /> {contactPerson.phone}
                    </a>
                    <a
                      href={`https://wa.me/${contactPerson.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cp-link whatsapp"
                    >
                      <i className="fa-brands fa-whatsapp" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact details */}
              {contactDetails.map(d => (
                <div key={d.label} className="contact-detail-item">
                  <div className="cdi-icon"><i className={d.icon} /></div>
                  <div>
                    <div className="cdi-label">{d.label}</div>
                    {d.lines.map(l => <div key={l} className="cdi-value">{l}</div>)}
                  </div>
                </div>
              ))}

              {/* Office hours */}
              <div className="office-hours">
                <h4 className="oh-title"><i className="fa-regular fa-clock" /> Office Hours</h4>
                {officeHours.map(h => (
                  <div key={h.day} className="oh-row">
                    <span className="oh-day">{h.day}</span>
                    <span className="oh-time">{h.time}</span>
                  </div>
                ))}
              </div>

              {/* Departments */}
              <div className="departments">
                <h4 className="dept-title">Get in Touch by Department</h4>
                {departments.map(d => (
                  <a key={d.label} href={`mailto:${d.email}`} className="dept-item">
                    <span className="dept-icon">{d.icon}</span>
                    <div>
                      <div className="dept-label">{d.label}</div>
                      <div className="dept-email">{d.email}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <div className="container">
          <h2 className="map-title">Find Our Office</h2>
          <p className="map-sub">36-02 &amp; 36-03, Jalan Permas 10, Bandar Baru Permas Jaya, 81750 Masai, Johor, Malaysia</p>
          <div className="map-embed-wrap">
            <iframe
              title="Smart Touch Technology Office Location"
              src="https://maps.google.com/maps?q=Jalan+Permas+10,+Bandar+Baru+Permas+Jaya,+81750+Masai,+Johor,+Malaysia&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="map-directions-bar">
            <span><i className="fa-solid fa-location-dot" /> 36-02 &amp; 36-03, Jalan Permas 10, Bandar Baru Permas Jaya, 81750 Masai, Johor, Malaysia</span>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Jalan+Permas+10+Bandar+Baru+Permas+Jaya+81750+Masai+Johor+Malaysia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <i className="fa-solid fa-diamond-turn-right" /> Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-banner" style={{ background: 'linear-gradient(135deg,var(--primary) 0%,#1a73e8 100%)', padding: '56px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: 'white', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Ready to Book a Free Demo?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 28, maxWidth: 460, margin: '0 auto 28px' }}>
            See Smart Touch in action — we'll walk you through the features most relevant to your business.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+6073889903" className="btn btn-white btn-lg">
              <i className="fa-solid fa-phone" /> Call +607-388 9903
            </a>
            <a href="https://wa.me/60127883383" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
              <i className="fa-brands fa-whatsapp" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
