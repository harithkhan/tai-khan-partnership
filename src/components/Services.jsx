import React from 'react'
import { FaBuilding, FaMoneyBillWave } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      id: 'conveyancing',
      title: 'Conveyancing',
      icon: <FaBuilding size={48} color="var(--primary)" />,
      subtitle: 'Straight-forward, hassle-free',
      description: 'We provide expert conveyancing services to ensure smooth property transactions, from title checks to final settlement.',
    },
    {
      id: 'debt-recovery',
      title: 'Debt Recovery',
      icon: <FaMoneyBillWave size={48} color="var(--primary)" />,
      subtitle: 'No recovery, no fees',
      description: 'Our team aggressively pursues outstanding debts on a contingency basis, so you only pay if we succeed.',
    },
  ]
  return (
    <section id="core-services" className="container" style={{ padding: '3rem 0' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        Our Core Services
      </h2>
      <div className="card-container">
        {services.map((s) => (
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