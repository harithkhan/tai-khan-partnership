import React from 'react'
import harith from '../assets/harith.jpg'
import queennie from '../assets/queennie.jpg'

export default function Partners() {
  const partners = [
    { id: 'queennie', name: 'Queennie Tai', role: 'Managing Partner', special: 'Conveyancing & Corporate', img: queennie },
    { id: 'harith', name: 'Harith Khan', role: 'Partner', special: 'Debt Recovery & Litigation', img: harith },
  ]
  return (
    <section id="partners" className="container" style={{ padding: '3rem 0' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        Our Partners
      </h2>
      <div className="card-container">
        {partners.map((p) => (
          <div key={p.id} className="card">
            <img src={p.img} alt={p.name} style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: p.id === 'queennie' ? 'top' : 'center', borderRadius: '8px' }} />
            <h3 style={{ margin: '1rem 0 0' }}>{p.name}</h3>
            <p className="subtitle">{p.role}</p>
            <p className="description">{p.special}</p>
            {p.id === 'queennie' && (
              <>
                <p className="description">LLB (Hons), University of Liverpool</p>
                <p className="description">Barrister-at-Law (Lincoln's Inn), BPTC, City University London</p>
                <p className="description">Advocate & Solicitor, High Court of Malaya since 2019</p>
              </>
            )}
            {p.id === 'harith' && (
              <>
                <p className="description">LLB (Hons), University of Reading</p>
                <p className="description">Barrister-at-Law (Lincoln's Inn), BPTC, City University London</p>
                <p className="description">Advocate & Solicitor, High Court of Malaya since 2018</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
