import React from 'react'
import { FaBriefcase, FaGavel } from 'react-icons/fa'

export default function SupportServices() {
  const support = [
    {
      id: 'corporate',
      title: 'Corporate',
      icon: <FaBriefcase size={48} color="var(--primary)" />,
      subtitle: 'Strategic Business Counsel',
      description: 'We advise on corporate structuring, compliance, and transactional matters to support your business growth.',
    },
    {
      id: 'litigation',
      title: 'Litigation',
      icon: <FaGavel size={48} color="var(--primary)" />,
      subtitle: 'Assertive Representation',
      description: 'Our litigation team provides robust advocacy in court and alternative dispute resolution to protect your interests.',
    },
  ]
  return (
    <section id="support-services" className="container" style={{ padding: '3rem 0' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        Support Services
      </h2>
      <div className="card-container">
        {support.map((s) => (
          <div key={s.id} className="card">
            <div style={{ marginBottom: '1rem' }}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p className="subtitle">{s.subtitle}</p>
            <p className="description">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}