import { Link } from 'react-router-dom'
import './Footer.css'

const products = [
  'Payroll System', 'Time Attendance', 'Leave Management',
  'Claims Management', 'SmartGoGo App', 'Visitor Management',
  'Canteen Management', 'Dormitory System', 'Job Costing',
]

const solutions = [
  'HR & Payroll Solution', 'Time Attendance Solution', 'Leave Management Solution',
  'Biometric Facial', 'Biometric Fingerprint', 'Access Control', 'Barrier Solutions',
]

const company = [
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Time Clock', path: '/time-clock' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <img src="/logo.svg" alt="Smart Touch Technology" className="footer-logo-img" />
              </Link>
              <p className="footer-tagline">
                Building Smarter Workforces, Safer Operations.<br />
                PAL is always with you.
              </p>
              <div className="footer-contact-quick">
                <a href="tel:+6073889903" className="footer-contact-link">
                  <i className="fa-solid fa-phone" /> +607-388 9903
                </a>
                <a href="mailto:sales@smartouch.com.my" className="footer-contact-link">
                  <i className="fa-solid fa-envelope" /> sales@smartouch.com.my
                </a>
                <a
                  href="https://wa.me/60115354990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link whatsapp"
                >
                  <i className="fa-brands fa-whatsapp" /> WhatsApp Us
                </a>
              </div>
              <div className="footer-social">
                <a href="#" aria-label="Facebook" className="social-icon"><i className="fa-brands fa-facebook-f" /></a>
                <a href="#" aria-label="LinkedIn" className="social-icon"><i className="fa-brands fa-linkedin-in" /></a>
                <a href="https://www.youtube.com/@smartime01" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon yt"><i className="fa-brands fa-youtube" /></a>
                <a href="#" aria-label="Instagram" className="social-icon"><i className="fa-brands fa-instagram" /></a>
              </div>
            </div>

            {/* Products */}
            <div className="footer-col">
              <h4 className="footer-col-title">Products</h4>
              <ul className="footer-links">
                {products.map(p => (
                  <li key={p}><Link to="/products" className="footer-link">{p}</Link></li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="footer-col">
              <h4 className="footer-col-title">Solutions</h4>
              <ul className="footer-links">
                {solutions.map(s => (
                  <li key={s}><Link to="/solutions" className="footer-link">{s}</Link></li>
                ))}
              </ul>
            </div>

            {/* Company + Contact */}
            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links">
                {company.map(c => (
                  <li key={c.label}><Link to={c.path} className="footer-link">{c.label}</Link></li>
                ))}
              </ul>
              <h4 className="footer-col-title" style={{ marginTop: 28 }}>Office</h4>
              <address className="footer-address">
                36-02 &amp; 36-03, Jalan Permas 10,<br />
                Bandar Baru Permas Jaya,<br />
                81750 Masai, Johor, Malaysia
              </address>
              <div className="footer-phones">
                <div>+607-388 9903</div>
                <div>+6011-5354 9903</div>
                <div>+607-388 3686</div>
                <div>Fax: +607-388 0628</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              © {new Date().getFullYear()} Smart Touch Technology Sdn Bhd. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <a href="#" className="footer-bottom-link">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
