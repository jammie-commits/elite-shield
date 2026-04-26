import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import useScrollReveal from '../hooks/useScrollReveal'
import { services } from '../data/services'

const serviceNames = services.map(s => s.name)

export default function Contact() {
  useScrollReveal()

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', company: '',
    service: '', location: '', message: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Replace with real API call / EmailJS / formspree as needed
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title="GET IN"
        goldWord="TOUCH"
        desc="Reach out for a free, no-obligation security assessment. Our team responds within 2 hours."
      />

      {/* ── QUICK LINKS ─────────────────────────────────────── */}
      <div className="quick-links-strip">
        <div className="inner">
          <a href="tel:+254700000000" className="quick-link-card">
            <div className="quick-link-icon">📞</div>
            <div>
              <div className="quick-link-label">Call Us Now</div>
              <div className="quick-link-title">+254 700 000 000</div>
            </div>
          </a>
          <a href="mailto:info@eliteshield.co.ke" className="quick-link-card">
            <div className="quick-link-icon">✉️</div>
            <div>
              <div className="quick-link-label">Email Us</div>
              <div className="quick-link-title">info@eliteshield.co.ke</div>
            </div>
          </a>
          <div className="quick-link-card" style={{ cursor: 'default' }}>
            <div className="quick-link-icon">🕐</div>
            <div>
              <div className="quick-link-label">Operating Hours</div>
              <div className="quick-link-title">24 / 7 — Always Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTACT SECTION ────────────────────────────── */}
      <section className="contact-section">
        <div className="inner">
          {/* Form */}
          <div className="reveal">
            <p className="section-label">Send Us a Message</p>
            <h2 className="section-title">
              REQUEST A<br /><span style={{ color: 'var(--gold)' }}>FREE QUOTE</span>
            </h2>

            {submitted ? (
              <div className="form-success">
                ✓ Thank you! Your message has been received. We will respond within 2 hours.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Kamau"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+254 7XX XXX XXX"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company / Organisation</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Ltd"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">— Select a service —</option>
                    {serviceNames.map(sn => (
                      <option key={sn} value={sn}>{sn}</option>
                    ))}
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location / Site Address</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Westlands, Nairobi"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message / Additional Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your security needs, site size, or any specific requirements..."
                    required
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message — Get a Free Quote
                </button>
              </form>
            )}
          </div>

          {/* Contact info + quick service tags */}
          <div className="reveal">
            <p className="section-label">Contact Details</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              WE&apos;RE<br /><span style={{ color: 'var(--gold)' }}>ALWAYS HERE</span>
            </h2>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon">📞</div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">
                    <a href="tel:+254700000000" style={{ color: 'inherit', textDecoration: 'none' }}>+254 700 000 000</a><br />
                    <a href="tel:+254711000000" style={{ color: 'inherit', textDecoration: 'none' }}>+254 711 000 000</a>
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">✉️</div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">
                    <a href="mailto:info@eliteshield.co.ke" style={{ color: 'inherit', textDecoration: 'none' }}>info@eliteshield.co.ke</a>
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div>
                  <div className="contact-info-label">Office</div>
                  <div className="contact-info-value">Nairobi, Kenya<br />Serving Nationwide</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">🕐</div>
                <div>
                  <div className="contact-info-label">Operating Hours</div>
                  <div className="contact-info-value">24 hours / 7 days a week<br />365 days a year</div>
                </div>
              </div>
            </div>

            <div className="contact-promise">
              <h4>OUR PROMISE TO YOU</h4>
              <p>
                Every enquiry receives a personal response within <strong>2 hours</strong>.
                For urgent security needs, call us directly — we are available
                <strong> 24 / 7</strong>, every day of the year.
              </p>
            </div>

            <p style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginTop: '2rem',
              marginBottom: '1rem',
            }}>Available Services</p>
            <div className="service-tags">
              {services.map(svc => (
                <Link to="/services" key={svc.id} className="service-tag">{svc.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
