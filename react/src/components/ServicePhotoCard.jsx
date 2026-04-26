import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

/**
 * @param {string}  tag       - category badge label
 * @param {string}  name      - service title
 * @param {string}  image     - photo URL
 * @param {string}  alt       - image alt text
 * @param {string}  desc      - description text
 * @param {string}  linkTo    - internal route for the CTA link
 * @param {string}  linkLabel - CTA link text
 */
export default function ServicePhotoCard({
  tag,
  name,
  image,
  alt,
  desc,
  linkTo = '/contact',
  linkLabel = 'Request Service',
}) {
  return (
    <div className="service-photo-card">
      <div className="service-photo-wrap">
        <img
          src={image}
          alt={alt}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <div className="service-photo-overlay" />
        <span className="service-photo-tag">{tag}</span>
      </div>
      <div className="service-photo-body">
        <div className="service-photo-name">{name}</div>
        <div className="service-photo-desc">{desc}</div>
        <Link to={linkTo} className="service-photo-link">
          {linkLabel} <ArrowIcon />
        </Link>
      </div>
    </div>
  )
}
