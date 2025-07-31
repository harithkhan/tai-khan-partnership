import React from 'react'
import conveyancingImage from '../assets/conveyancing.jpg'
import { Link } from 'react-router-dom'

export default function Conveyancing() {
  return (
    <section id="conveyancing" className="container" style={{ padding: '2rem 1rem' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}>Conveyancing</h2>
      <img
        src={conveyancingImage}
        alt="Conveyancing"
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', margin: '0 auto 1.5rem' }}
      />
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
        In Malaysia, the conveyancing process involves a series of legal steps to transfer property titles securely and efficiently. From conducting thorough title searches and verifying land boundaries to handling loan documentation and liaising with the Land Office, each phase presents its own complexities. Understanding local regulations, such as the Torrens system and Real Property Act requirements, is crucial for a smooth transaction.
      </p>
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
        Our firm guides clients through the Malaysian conveyancing landscape by offering comprehensive support at every stage. We coordinate with banks, surveyors, and government bodies to streamline documentation, calculate stamp duties accurately, and ensure compliance with all statutory obligations. Whether you are a first-time buyer or an experienced investor, our expertise minimizes delays and mitigates risks.
      </p>
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
        At Tai & Khan Partnership, we prioritize transparent communication and personalized service. We keep you informed of progress, explain each step in clear terms, and respond promptly to all inquiries. Our goal is to make conveyancing in Malaysia truly hassle-free, so you can focus on your new property with confidence.
      </p>
      <Link to="/" className="back-button" style={{ display:'inline-block', marginBottom:'1rem' }}>
        ← Back to Home
      </Link>
    </section>
  )
}