import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const productItems = [
  { label: 'Payroll System', icon: '💰', path: '/products', desc: 'EPF, SOCSO, PCB compliant automation' },
  { label: 'Time Attendance', icon: '⏱️', path: '/products', desc: 'Face, fingerprint & card clock-in' },
  { label: 'Leave Management', icon: '📅', path: '/products', desc: 'Online applications & approvals' },
  { label: 'Claims Management', icon: '🧾', path: '/products', desc: 'Expense submission & payroll sync' },
  { label: 'SmartGoGo App', icon: '📱', path: '/products', desc: 'GPS attendance & e-payslip mobile' },
  { label: 'Visitor Management', icon: '🪪', path: '/products', desc: 'QR entry & kiosk integration' },
  { label: 'Canteen Management', icon: '🍽️', path: '/products', desc: 'Subsidy control & fraud prevention' },
  { label: 'Dormitory System', icon: '🏠', path: '/products', desc: 'Room allocation & occupancy tracking' },
]

const solutionItems = [
  { label: 'HR & Payroll', icon: 'fa-solid fa-money-bill-wave', path: '/solutions' },
  { label: 'Time & Attendance', icon: 'fa-solid fa-clock', path: '/solutions' },
  { label: 'Biometric Auth (BAS)', icon: 'fa-solid fa-fingerprint', path: '/solutions' },
  { label: 'Access Control', icon: 'fa-solid fa-lock', path: '/solutions' },
  { label: 'Barrier Solutions', icon: 'fa-solid fa-road-barrier', path: '/solutions' },
  { label: 'Construction Site', icon: 'fa-solid fa-helmet-safety', path: '/solutions' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdown(null)
  }, [location])

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDropdown(null)
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.svg" alt="Smart Touch Technology" className="navbar-logo-img" />
        </Link>

        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Home
          </NavLink>

          <div className={`nav-dropdown-wrap ${dropdown === 'products' ? 'open' : ''}`}>
            <button
              className="nav-link dropdown-btn"
              onClick={() => setDropdown(d => d === 'products' ? null : 'products')}
            >
              Products <i className="fa-solid fa-chevron-down nav-chevron" />
            </button>
            <div className="dropdown-panel dropdown-wide">
              <div className="dropdown-header">
                <span>Our Products</span>
                <Link to="/products" className="dropdown-view-all">View All →</Link>
              </div>
              <div className="dropdown-grid">
                {productItems.map(p => (
                  <Link key={p.label} to={p.path} className="dropdown-item">
                    <span className="di-icon">{p.icon}</span>
                    <div>
                      <div className="di-label">{p.label}</div>
                      <div className="di-desc">{p.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className={`nav-dropdown-wrap ${dropdown === 'solutions' ? 'open' : ''}`}>
            <button
              className="nav-link dropdown-btn"
              onClick={() => setDropdown(d => d === 'solutions' ? null : 'solutions')}
            >
              Solutions <i className="fa-solid fa-chevron-down nav-chevron" />
            </button>
            <div className="dropdown-panel">
              <div className="dropdown-header">
                <span>Solutions by Category</span>
              </div>
              {solutionItems.map(s => (
                <Link key={s.label} to={s.path} className="dropdown-item simple">
                  <i className={`${s.icon} di-fa-icon`} />
                  <span className="di-label">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/time-clock" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Time Clock
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Pricing
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Blog
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Contact
          </NavLink>
        </div>

        <div className="navbar-actions">
          <Link to="/contact" className="btn btn-secondary btn-sm">Login</Link>
          <Link to="/contact" className="btn btn-primary btn-sm">Book a Demo</Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" end className="mob-link">Home</NavLink>
        <NavLink to="/products" className="mob-link">Products</NavLink>
        <NavLink to="/solutions" className="mob-link">Solutions</NavLink>
        <NavLink to="/time-clock" className="mob-link">Time Clock</NavLink>
        <NavLink to="/pricing" className="mob-link">Pricing</NavLink>
        <NavLink to="/blog" className="mob-link">Blog</NavLink>
        <NavLink to="/about" className="mob-link">About Us</NavLink>
        <NavLink to="/contact" className="mob-link">Contact</NavLink>
        <div className="mob-actions">
          <Link to="/contact" className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>Login</Link>
          <Link to="/contact" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Book a Demo</Link>
        </div>
      </div>
    </nav>
  )
}
