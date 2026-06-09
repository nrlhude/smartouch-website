import { Link } from 'react-router-dom'
import './Blog.css'

const featured = {
  category: 'Payroll', date: 'May 28, 2026',
  title: 'EPF, SOCSO & EIS Rate Changes 2026: What Malaysian Employers Need to Know',
  excerpt: 'The Malaysian government has updated contribution rates for EPF, SOCSO and EIS effective January 2026. Here\'s a complete breakdown of what has changed and how Smart Touch automatically keeps you compliant.',
  readTime: '6 min read',
  author: 'Smart Touch Team',
}

const posts = [
  {
    category: 'HR Technology', date: 'May 15, 2026', readTime: '5 min read',
    title: 'Why Biometric Attendance is No Longer a Luxury — It\'s a Necessity',
    excerpt: 'Buddy punching costs Malaysian businesses millions annually. Here\'s how biometric authentication eliminates time fraud and why more factories are making the switch.',
  },
  {
    category: 'Workforce Management', date: 'May 2, 2026', readTime: '7 min read',
    title: 'Managing Foreign Worker Attendance & Dormitory: A Complete Guide',
    excerpt: 'With JTKSM compliance requirements tightening, here\'s how to manage foreign worker registration, attendance, dormitory allocation, and documentation in one integrated system.',
  },
  {
    category: 'Technology', date: 'Apr 20, 2026', readTime: '4 min read',
    title: 'Face Recognition vs Fingerprint: Which Should Your Business Choose?',
    excerpt: 'Both have their strengths. We break down the pros and cons of each biometric method and help you decide which is right for your workplace environment.',
  },
  {
    category: 'Payroll', date: 'Apr 8, 2026', readTime: '8 min read',
    title: 'The Complete Guide to Overtime Calculation Under the Employment Act 1955',
    excerpt: 'Overtime rules in Malaysia are complex. This guide covers the legal rates for different day types, how to calculate OT correctly, and how payroll automation eliminates errors.',
  },
  {
    category: 'Access Control', date: 'Mar 25, 2026', readTime: '5 min read',
    title: 'Speed Gates vs Turnstiles: Choosing the Right Barrier for Your Premises',
    excerpt: 'Building a secure entrance? We compare turnstiles, swing barriers, and speed gates — covering cost, throughput, aesthetics, and integration with biometric systems.',
  },
  {
    category: 'Mobile HR', date: 'Mar 12, 2026', readTime: '4 min read',
    title: 'How GPS Mobile Attendance is Changing How Construction Sites Operate',
    excerpt: 'Paper timesheets at construction sites are prone to fraud and errors. GPS-verified mobile attendance solves this — here\'s how companies are rolling it out.',
  },
  {
    category: 'Leave Management', date: 'Feb 28, 2026', readTime: '5 min read',
    title: 'Annual Leave Entitlement in Malaysia: What Employers Must Know in 2026',
    excerpt: 'From minimum entitlement to replacement leave and holiday rules — a complete reference for HR managers on leave obligations under Malaysian employment law.',
  },
  {
    category: 'Case Study', date: 'Feb 14, 2026', readTime: '6 min read',
    title: 'How a 500-Employee Factory Cut Payroll Processing Time by 80%',
    excerpt: 'A manufacturing client in Johor switched from manual payroll to Smart Touch. We share the challenges they faced, how implementation went, and the results 6 months later.',
  },
]

const categories = ['All', 'Payroll', 'HR Technology', 'Workforce Management', 'Access Control', 'Mobile HR', 'Leave Management', 'Case Study']

export default function Blog() {
  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="tag light">Insights & Resources</div>
          <h1 className="page-hero-title">Smart Touch Blog</h1>
          <p className="page-hero-sub">
            Expert insights on HR technology, payroll compliance, biometric attendance,
            and workforce management for Malaysian businesses.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section">
        <div className="container">
          <div className="tag">Featured Article</div>
          <div className="featured-post">
            <div className="fp-image">
              <div className="fp-image-inner">
                <i className="fa-solid fa-newspaper" />
              </div>
            </div>
            <div className="fp-content">
              <div className="fp-meta">
                <span className="blog-category">{featured.category}</span>
                <span className="blog-date">{featured.date}</span>
                <span className="blog-read">{featured.readTime}</span>
              </div>
              <h2 className="fp-title">{featured.title}</h2>
              <p className="fp-excerpt">{featured.excerpt}</p>
              <div className="fp-footer">
                <div className="blog-author">
                  <div className="author-avatar">ST</div>
                  <span>{featured.author}</span>
                </div>
                <Link to="/blog" className="btn btn-primary">Read Article <i className="fa-solid fa-arrow-right" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="blog-filter-section">
        <div className="container">
          <div className="blog-cats">
            {categories.map(c => (
              <button key={c} className={`blog-cat-btn ${c === 'All' ? 'active' : ''}`}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="blog-grid">
            {posts.map(p => (
              <article key={p.title} className="card blog-card">
                <div className="bc-image">
                  <div className="bc-image-inner">
                    <i className="fa-solid fa-file-lines" />
                  </div>
                </div>
                <div className="bc-body">
                  <div className="bc-meta">
                    <span className="blog-category">{p.category}</span>
                    <span className="blog-date">{p.date}</span>
                  </div>
                  <h3 className="bc-title">{p.title}</h3>
                  <p className="bc-excerpt">{p.excerpt}</p>
                  <div className="bc-footer">
                    <span className="blog-read"><i className="fa-regular fa-clock" /> {p.readTime}</span>
                    <Link to="/blog" className="bc-read-link">Read more <i className="fa-solid fa-arrow-right" /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <div className="nl-icon">📧</div>
            <h2 className="nl-title">Stay Updated on HR & Payroll in Malaysia</h2>
            <p className="nl-desc">
              Get the latest on EPF/SOCSO rates, Employment Act updates, HR technology tips,
              and Smart Touch product news — delivered to your inbox.
            </p>
            <form className="nl-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter your work email" className="nl-input" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            <p className="nl-note">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
