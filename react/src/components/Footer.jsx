import { Link } from 'react-router-dom'
import ShieldLogo from './ShieldLogo'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ display: 'inline-flex' }}>
              <ShieldLogo />
              <div className="nav-logo-text">
                <span>Elite Shield</span>
                <span>Security Services</span>
              </div>
            </Link>
            <p>
              Kenya&apos;s trusted security partner — providing professional, PSRA-licensed
              security solutions to protect what matters most to you.
            </p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link to="/services">Manned Guarding</Link></li>
              <li><Link to="/services">Armed Security</Link></li>
              <li><Link to="/services">VIP Protection</Link></li>
              <li><Link to="/services">CCTV Installation</Link></li>
              <li><Link to="/services">Event Security</Link></li>
              <li><Link to="/services">View All Services →</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Why Choose Us</Link></li>
              <li><Link to="/about">Training Academy</Link></li>
              <li><Link to="/about#clients">Our Clients</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="tel:+254700000000">+254 700 000 000</a></li>
              <li><a href="mailto:info@eliteshield.co.ke">info@eliteshield.co.ke</a></li>
              <li><span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Nairobi, Kenya</span></li>
              <li><span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Available 24 / 7</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {year} Elite Shield Security Services Ltd. All rights reserved.</p>
          <div className="psra-badge">
            <svg width="14" height="16" viewBox="0 0 50 60" fill="none">
              <path d="M25 2L4 12V32C4 44 14 54 25 58C36 54 46 44 46 32V12L25 2Z" fill="rgba(200,168,75,0.15)" stroke="#c8a84b" strokeWidth="2" />
            </svg>
            PSRA Licensed
          </div>
        </div>
      </div>
    </footer>
  )
}
