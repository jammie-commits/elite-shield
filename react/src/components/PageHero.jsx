/** Reusable page-header hero for interior pages (About, Services, Contact) */
export default function PageHero({ breadcrumb, title, goldWord, desc }) {
  return (
    <div className="page-hero">
      <div className="page-hero-bg" />
      <div className="page-hero-grid" />
      <div className="page-hero-content">
        <p className="page-hero-breadcrumb">
          <a href="/">Home</a> &nbsp;/&nbsp; {breadcrumb}
        </p>
        <h1 className="page-hero-title">
          {title} <span className="gold">{goldWord}</span>
        </h1>
        <p className="page-hero-desc">{desc}</p>
      </div>
    </div>
  )
}
