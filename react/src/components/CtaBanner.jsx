import { Link } from 'react-router-dom'

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

/**
 * @param {string}   title     - headline (first line)
 * @param {string}   goldLine  - headline (gold line)
 * @param {string}   body      - body copy
 * @param {string}   ctaLabel  - primary button label
 * @param {string}   ctaTo     - primary button route
 * @param {string}   [secondaryLabel] - optional second button
 * @param {string}   [secondaryTo]    - optional second button route
 */
export default function CtaBanner({
  title,
  goldLine,
  body,
  ctaLabel = 'Get a Free Quote',
  ctaTo = '/contact',
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <div className="cta-banner reveal">
      <h2>
        {title}
        <br />
        <span style={{ color: 'var(--gold)' }}>{goldLine}</span>
      </h2>
      <p>{body}</p>
      <div className="actions">
        {secondaryLabel && (
          <Link to={secondaryTo} className="btn-outline">
            {secondaryLabel}
          </Link>
        )}
        <Link to={ctaTo} className="btn-primary">
          <PhoneIcon /> {ctaLabel}
        </Link>
      </div>
    </div>
  )
}
