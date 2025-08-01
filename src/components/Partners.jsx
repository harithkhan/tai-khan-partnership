import React from 'react'
import { Link } from 'react-router-dom'
import './Partners.css'
import harith from '../assets/harith.jpg'
import queennie from '../assets/queennie.jpg'

export default function Partners() {
  const partners = [
    {
      id:      'queennie',
      name:    'Queennie Tai',
      role:    'Managing Partner',
      special: 'Conveyancing & Corporate',
      img:     queennie,
      slug:    'queennie',
      bio: [
        'LLB (Hons), University of Hull',
        'Barrister-at-Law (Lincoln’s Inn), BPTC, City University London',
        'Advocate & Solicitor, High Court of Malaya since 2019'
      ]
    },
    {
      id:      'harith',
      name:    'Harith Khan',
      role:    'Partner',
      special: 'Debt Recovery & Litigation',
      img:     harith,
      slug:    'harith',
      bio: [
        'LLB (Hons), University of Reading',
        'Barrister-at-Law (Lincoln’s Inn), BPTC, City University London',
        'Advocate & Solicitor, High Court of Malaya since 2018'
      ]
    }
  ]

  return (
    <section id="partners" className="partners-list">
      <h2>Meet the Partners</h2>
      <div className="partner-cards">
        {partners.map(p => (
          <div
            key={p.id}
            className={`partner-card partner-card--${p.id}`}
          >
            <img
              src={p.img}
              alt={p.name}
              className="partner-card__img"
            />
            <div className="partner-content">
              <h3>{p.name}</h3>
              <p className="subtitle">
                {p.role} – {p.special}
              </p>
              {p.bio.map((line, i) => (
                <p key={i} className="description">{line}</p>
              ))}
              <Link to={`/partners/${p.slug}`} className="view-profile">
                View Full Profile →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
