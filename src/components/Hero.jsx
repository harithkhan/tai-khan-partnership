// src/components/Hero.jsx
import React from 'react'
import heroImage from '../assets/hero4.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover'
      }}
    >
      <div className="hero-text">
        <h1 style={{ color: 'var(--accent)' }}>Tai & Khan Partnership</h1>
        <h2 style={{ color: 'var(--accent)' }}>Your Reliable Lawyers</h2>
        <h3 style={{ color: 'var(--accent)' }}>Every Call Returned. Every Detail Checked. Every Goal Met</h3>
      </div>
    </section>
  )
}
