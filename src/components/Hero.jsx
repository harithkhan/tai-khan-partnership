import React from 'react'
import heroImage from '../assets/hero3.jpg'

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-text">
        <h1>Tai & Khan Partnership</h1>
        <h2>Your Reliable Lawyers</h2>
        <h3>Every Call Returned. Every Detail Checked. Every Goal Met</h3>
      </div>
    </section>
  )
}
