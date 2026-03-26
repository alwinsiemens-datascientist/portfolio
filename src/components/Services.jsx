import React from 'react'

const services = [
  {
    icon: '📐',
    title: 'Tutoring',
    subtitle: 'Computer Science & Mathematics',
    description:
      'Clear explanations instead of dry theory – I break down complex topics and help you truly understand them.',
    tags: ['Computer Science', 'Mathematics', 'High School', 'University'],
  },
  {
    icon: '🔧',
    title: 'Creative Workshop',
    subtitle: 'Milling · Lasering · Printing',
    description:
      'Personalized products and custom orders – from idea to finished piece. Open for individual projects.',
    tags: ['CNC Milling', '3D Relief', 'Custom Orders'],
  },
  {
    icon: '🌐',
    title: 'Digitalization',
    subtitle: 'E-Commerce · Websites · SEO',
    description:
      'From A to Z: hosting selection, transparent pricing, custom domain, deployment and SEO configuration – all from one source.',
    tags: ['Portfolio', 'E-Commerce', 'Domain & Hosting', 'SEO'],
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <h2>Services</h2>
      <p className="services-intro muted">
        Alongside my work as a software developer, I offer the following services.
      </p>
      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <span className="service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p className="service-subtitle muted">{s.subtitle}</p>
            <p className="service-desc">{s.description}</p>
            <ul className="skill-list service-tags">
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
