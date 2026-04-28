import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const navCls = ({ isActive }) =>
    isActive ? 'nav-cta active' : 'nav-cta'

  const linkCls = ({ isActive }) =>
    isActive ? 'active' : undefined

  return (
    <>
      <nav>
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={close}>
          <img src="/assets/logo.jpeg" alt="Elite Shield Security Services logo" className="nav-logo-img" />
          <div className="nav-logo-text">
            <span>Elite Shield</span>
            <span>Security Services</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><NavLink to="/"        className={linkCls} end>Home</NavLink></li>
          <li><NavLink to="/services" className={linkCls}>Services</NavLink></li>
          <li><NavLink to="/about"    className={linkCls}>About Us</NavLink></li>
          <li><NavLink to="/about#clients" className={linkCls}>Clients</NavLink></li>
          <li><NavLink to="/contact"  className={navCls}>Contact Us</NavLink></li>
        </ul>

        {/* Hamburger */}
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-nav${open ? ' open' : ''}`} role="navigation" aria-label="Mobile navigation">
        <Link to="/"         onClick={close}>Home</Link>
        <Link to="/services" onClick={close}>Services</Link>
        <Link to="/about"    onClick={close}>About Us</Link>
        <Link to="/about#clients" onClick={close}>Clients</Link>
        <Link to="/contact"  onClick={close} style={{ color: 'var(--gold)' }}>Contact Us</Link>
      </div>
    </>
  )
}
