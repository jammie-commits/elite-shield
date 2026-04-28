import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import useScrollReveal from '../hooks/useScrollReveal'

const values = [
  'Integrity', 'Professionalism', 'Vigilance',
  'Excellence', 'Reliability', 'Discretion',
]

const advantages = [
  {
    title: 'PSRA Licensed',
    body: 'Fully licensed and compliant with the Private Security Regulatory Authority of Kenya.',
  },
  {
    title: '24 / 7 Operations',
    body: 'Our command centre and rapid-response teams operate around the clock, every day of the year.',
  },
  {
    title: 'Trained & Certified Officers',
    body: 'All personnel complete intensive security, first-aid, and crisis-response training programmes.',
  },
  {
    title: 'Advanced Technology',
    body: 'We integrate modern CCTV, access control, and tracking systems alongside human security.',
  },
  {
    title: 'Rapid Response',
    body: 'Dedicated quick-reaction forces deployed within minutes of any alarm or incident report.',
  },
  {
    title: 'Client-Centred Approach',
    body: 'Custom security plans designed around each client\'s specific environment and risk profile.',
  },
]

const clients = [
  'Corporate Offices & HQs',
  'Gated Residential Estates',
  'Banks & Financial Institutions',
  'Retail Malls & Supermarkets',
  'Hotels & Hospitality',
  'Hospitals & Medical Centres',
  'Construction Sites',
  'Government Ministries',
  'Warehouses & Logistics',
  'Schools & Universities',
  'Embassies & Consulates',
  'Events & Entertainment',
]

const trainingTags = [
  'Basic Security', 'Advanced Guarding', 'First Aid & CPR',
  'Firearms & Use of Force', 'VIP Close Protection',
  'Fire Response', 'CCTV Operations', 'Crowd Management',
  'K-9 Handling', 'Cyber Awareness',
]

export default function About() {
  useScrollReveal()

  return (
    <>
      <PageHero
        breadcrumb="About Us"
        title="ABOUT"
        goldWord="ELITE SHIELD"
        desc="Kenya's premier licensed security services provider — protecting people, property, and assets since inception."
      />

      {/* ── ABOUT SECTION ─────────────────────────────────────── */}
      <section className="about-section">
        <div className="inner">
          <div className="about-photo reveal">
            <img
              src="/assets/MANNED-SECURITY SERVICES.jpeg"
              alt="Elite Shield security headquarters and team"
            />
            <div className="about-photo-overlay">
              <p className="about-photo-label">Est. Kenya</p>
              <p className="about-photo-caption">Elite Shield Security Services</p>
            </div>
          </div>

          <div className="reveal">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">
              KENYA&apos;S TRUSTED<br /><span style={{ color: 'var(--gold)' }}>SECURITY PARTNER</span>
            </h2>
            <p className="section-desc">
              Elite Shield Security Services is a fully licensed, PSRA-compliant security company
              operating across Kenya. We provide a comprehensive range of security solutions — from
              uniformed manned guarding to advanced technological systems — serving corporations,
              governments, NGOs, and private individuals.
            </p>

            <div className="about-mission-box" style={{ marginTop: '2rem' }}>
              <h4>Our Mission</h4>
              <p>
                To provide world-class, technology-enhanced security services that protect
                lives, assets, and information — delivering unmatched peace of mind to every client.
              </p>
            </div>

            <div className="about-mission-box">
              <h4>Our Vision</h4>
              <p>
                To be the most trusted and respected security services company in East Africa,
                recognised for excellence, integrity, and innovation.
              </p>
            </div>

            <h3 style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginTop: '2rem',
              marginBottom: '1rem',
            }}>Core Values</h3>
            <div className="values-grid">
              {values.map(v => (
                <div className="value-item" key={v}>
                  <div className="value-dot" />
                  <span className="value-text">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────── */}
      <section className="why-section">
        <div className="inner">
          <div className="reveal">
            <p className="section-label">Our Advantage</p>
            <h2 className="section-title">
              WHY CHOOSE<br /><span style={{ color: 'var(--gold)' }}>ELITE SHIELD</span>
            </h2>
            <p className="section-desc">
              We combine experienced security professionals, modern technology, and rigorous
              training to deliver protection you can genuinely rely on.
            </p>

            <div className="advantage-list">
              {advantages.map((adv, i) => (
                <div className="advantage-item" key={adv.title}>
                  <div className="advantage-num">0{i + 1}</div>
                  <div className="advantage-content">
                    <h4>{adv.title}</h4>
                    <p>{adv.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Org chart */}
          <div className="org-chart reveal">
            <h3>Management Structure</h3>
            <div className="org-tree">
              <div className="org-box">Board of Directors</div>
              <div className="org-line" />
              <div className="org-box">Chief Executive Officer</div>
              <div className="org-line" />
              <div style={{ width: '100%' }}>
                <div className="org-hline" />
                <div className="org-branch-row">
                  {['Operations\nDirector', 'Security\nManager', 'Technology\nDivision'].map(t => (
                    <div className="org-branch-col" key={t}>
                      <div className="org-line" />
                      <div className="org-box dark" style={{ whiteSpace: 'pre-line' }}>{t}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="org-psra">
                <p>Regulatory Compliance</p>
                <p>PSRA — Private Security Regulatory Authority of Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAINING ──────────────────────────────────────────── */}
      <section className="training-section">
        <div className="inner">
          <div className="training-photo reveal">
            <img
              src="/assets/training-academy.jpeg"
              alt="Elite Shield security officer training programme"
            />
            <div className="training-photo-overlay" />
          </div>

          <div className="training-content reveal">
            <p className="section-label">Training Academy</p>
            <h2 className="section-title">
              EXCELLENCE<br /><span style={{ color: 'var(--gold)' }}>STARTS HERE</span>
            </h2>
            <p>
              Our rigorous in-house training academy ensures every officer deployed meets the
              highest standards of professionalism, physical readiness, and situational
              awareness before they are placed on any assignment.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Courses are updated regularly to reflect evolving security threats and best
              practices, ensuring our teams remain ahead of the curve.
            </p>
            <div className="training-tags">
              {trainingTags.map(tag => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ───────────────────────────────────────────── */}
      <section className="clients-section" id="clients">
        <div className="inner">
          <div className="reveal">
            <p className="section-label">Who We Serve</p>
            <h2 className="section-title">
              OUR <span style={{ color: 'var(--gold)' }}>CLIENTS</span>
            </h2>
            <p className="section-desc">
              We serve a diverse portfolio of clients across Kenya&apos;s public and private sectors.
            </p>
          </div>
          <div className="clients-grid">
            {clients.map((c, i) => (
              <div className="client-item reveal" key={c} style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="client-bullet" />
                <span className="client-name">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="JOIN OUR GROWING LIST"
        goldLine="OF PROTECTED CLIENTS"
        body="Get in touch for a customised security assessment tailored to your organisation's specific requirements."
        ctaLabel="Get a Free Quote"
        ctaTo="/contact"
        secondaryLabel="View Our Services"
        secondaryTo="/services"
      />
    </>
  )
}
