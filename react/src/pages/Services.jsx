import PageHero from '../components/PageHero'
import ServicePhotoCard from '../components/ServicePhotoCard'
import CtaBanner from '../components/CtaBanner'
import useScrollReveal from '../hooks/useScrollReveal'
import { categories, services } from '../data/services'

export default function Services() {
  useScrollReveal()

  return (
    <>
      <PageHero
        breadcrumb="Services"
        title="OUR"
        goldWord="SERVICES"
        desc="Comprehensive security solutions across 4 specialist divisions — from uniformed guards to cutting-edge technology."
      />

      <section className="all-services">
        <div className="inner">
          {categories.map(cat => {
            const catServices = services.filter(s => s.category === cat.id)
            return (
              <div className="services-category reveal" key={cat.id}>
                <div className="category-label">
                  <h3>{cat.label}</h3>
                  <div className="category-line" />
                </div>
                <div className="services-photo-grid">
                  {catServices.map((svc, i) => (
                    <div key={svc.id} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                      <ServicePhotoCard
                        tag={svc.tag}
                        name={svc.name}
                        image={svc.image}
                        alt={svc.alt}
                        desc={svc.fullDesc}
                        linkTo="/contact"
                        linkLabel="Request Service"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CtaBanner
        title="NEED A CUSTOM"
        goldLine="SECURITY SOLUTION?"
        body="Our security consultants will design a tailored protection plan that fits your exact requirements and budget."
        ctaLabel="Get a Free Quote"
        ctaTo="/contact"
      />
    </>
  )
}
