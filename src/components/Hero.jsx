import React from 'react'
import heroImage from '../assets/hero4.jpg'
import './Hero.css'

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
        <h1>Legal Confidence Delivered</h1>
        <h2>Specialists in Conveyancing &amp; Debt Recovery</h2>
        <p>Every Call Returned, Every Detail Checked, Every Goal Met</p>
      </div>
    </section>
  )
}
