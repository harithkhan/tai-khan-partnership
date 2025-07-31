import React, { useState } from 'react'
import './Services.css'
import conveyancingImg from '../assets/conveyancing.jpg'
import ringgitImg       from '../assets/ringgit.jpg'

export default function CoreServices() {
  return (
    <section id="core-services" className="services">
      <h2>Core Services</h2>
      <div className="card-container">
        <FlipCard
          image={conveyancingImg}
          title="Conveyancing"
          tagline="Straight-forward, hassle-free"
          backCopy={`We provide expert conveyancing services to ensure smooth property transactions, from title checks to final settlement. Our team handles all documentation and liaises with relevant authorities. With clear communication and personal attention, we make every step stress-free.`}
          anchor="#conveyancing"
        />
        <FlipCard
          image={ringgitImg}
          title="Debt Recovery"
          tagline="No recovery, no fees"
          backCopy={`Our team aggressively pursues outstanding debts on a success-only basis, so you only pay if we succeed. We perform thorough assessments, send formal demands, and negotiate settlements. When needed, we escalate to court with minimal fuss, always aiming for a swift resolution.`}
          anchor="#debt-recovery"
        />
      </div>
    </section>
  )
}

function FlipCard({ image, title, tagline, backCopy, anchor }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div
      className={`service-card${flipped ? ' flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        {/* FRONT */}
        <div
          className="card-front"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="overlay full">
            <h3 className="service-title">{title}</h3>
            <p className="service-tagline">{tagline}</p>
          </div>
        </div>

        {/* BACK */}
        <div className="card-back">
          <div className="overlay back">
            <h3 className="service-title">{title}</h3>
            {/* ← main copy under the header on flip */}
            <p className="service-tagline">{tagline}</p>
            <p className="back-copy">{backCopy}</p>
            <a href={anchor} className="learn-more">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
