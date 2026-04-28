import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ServicePhotoCard from '../components/ServicePhotoCard'
import CtaBanner from '../components/CtaBanner'
import useScrollReveal from '../hooks/useScrollReveal'
import { services } from '../data/services'

const HeroLogo = () => (
  <img
    src="/assets/logo.jpeg"
    alt="Elite Shield Security Services"
    className="hero-logo-img"
  />
)

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
  </svg>
)

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

// Show the first 6 services on the homepage
const featured = services.slice(0, 6)

export default function Home() {
  useScrollReveal()

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">PSRA Licensed &amp; Certified</div>
            <h1 className="hero-title">
              PROTECTING<br />
              WHAT<br />
              MATTERS <span className="gold">MOST</span>
            </h1>
            <p className="hero-tagline">Professional Security Services — Kenya</p>
            <p className="hero-desc">
              Elite Shield Security Services delivers world-class security solutions across
              Kenya. From manned guarding to VIP protection, CCTV and cyber security —
              we guard your world around the clock.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">
                <PhoneIcon /> Get a Free Quote
              </Link>
              <Link to="/services" className="btn-outline">
                View Services <ChevronIcon />
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-num">18+</div>
                <div className="stat-label">Services</div>
              </div>
              <div className="stat">
                <div className="stat-num">24/7</div>
                <div className="stat-label">Operations</div>
              </div>
              <div className="stat">
                <div className="stat-num">10+</div>
                <div className="stat-label">Years Active</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <HeroLogo />
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ──────────────────────────────────── */}
      <section className="services-preview">
        <div className="inner">
          <div className="services-header reveal">
            <div>
              <p className="section-label">Our Expertise</p>
              <h2 className="section-title">
                FEATURED <span style={{ color: 'var(--gold)' }}>SERVICES</span>
              </h2>
            </div>
            <Link to="/services" className="btn-outline">
              All 15 Services <ChevronIcon />
            </Link>
          </div>

          <div className="services-photo-grid">
            {featured.map((svc, i) => (
              <div key={svc.id} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <ServicePhotoCard
                  tag={svc.tag}
                  name={svc.name}
                  image={svc.image}
                  alt={svc.alt}
                  desc={svc.shortDesc}
                  linkTo="/contact"
                  linkLabel="Request Service"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────── */}
      <section className="why-home">
        <div className="inner">
          <div className="why-image-block reveal">
            <img
              src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=1200&q=80"
              alt="Elite Shield security team briefing"
            />
            <div className="why-image-caption">
              <p>Professional Team &mdash; Ready 24/7</p>
            </div>
          </div>

          <div className="reveal">
            <p className="section-label">Why Elite Shield</p>
            <h2 className="section-title">
              TRUSTED BY<br /><span style={{ color: 'var(--gold)' }}>HUNDREDS</span>
            </h2>
            <p className="section-desc">
              We combine experienced security professionals with modern technology and
              rigorous training to deliver protection you can genuinely rely on.
            </p>
            <div className="advantage-list" style={{ marginTop: '2rem' }}>
              {[
                ['PSRA Licensed', 'Fully licensed under the Private Security Regulatory Authority of Kenya.'],
                ['24/7 Operations', 'Our command centre and response teams operate around the clock, every day.'],
                ['Trained Officers', 'All personnel undergo intensive security and crisis-response training.'],
                ['Rapid Response', 'Dedicated quick-reaction forces deployed within minutes of an incident.'],
              ].map(([h, p], i) => (
                <div className="advantage-item" key={i}>
                  <div className="advantage-num">0{i + 1}</div>
                  <div className="advantage-content">
                    <h4>{h}</h4>
                    <p>{p}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/about" className="btn-primary">
                More About Us <ChevronIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <div className="stats-bar">
        <div className="inner">
          {[
            ['15+', 'Security Services'],
            ['24/7', 'Always Available'],
            ['100%', 'PSRA Compliant'],
            ['10+', 'Years Experience'],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <CtaBanner
        title="READY TO SECURE"
        goldLine="YOUR WORLD?"
        body="Contact us today for a free, no-obligation security assessment and discover why businesses and individuals across Kenya trust Elite Shield."
        ctaLabel="Get a Free Quote"
        ctaTo="/contact"
        secondaryLabel="View All Services"
        secondaryTo="/services"
      />
    </>
  )
}
