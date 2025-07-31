// src/components/Services.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

import conveyancingImg  from '../assets/conveyancing.jpg'
import ringgitImg       from '../assets/ringgit.jpg'
import corporateImg     from '../assets/corporate.jpg'
import litigationImg    from '../assets/litigation.jpg'

export default function Services() {
  const services = [
    {
      image: conveyancingImg,
      title: 'Conveyancing',
      tagline: 'Straight-forward, hassle-free',
      backCopy: `We provide expert conveyancing services to ensure smooth property transactions, from title checks to final settlement. Our team handles all documentation and liaises with relevant authorities. With clear communication and personal attention, we make every step stress-free.`,
      anchor: '/conveyancing'      // now points to dedicated page
    },
    {
      image: ringgitImg,
      title: 'Debt Recovery',
      tagline: 'No recovery, no fees',
      backCopy: `Our team aggressively pursues outstanding debts on a success-only basis, so you only pay if we succeed. We perform thorough assessments, send formal demands, and negotiate settlements. When needed, we escalate to court with minimal fuss, always aiming for a swift resolution.`,
      anchor: '/debt-recovery'     // now points to dedicated page
    },
    {
      image: corporateImg,
      title: 'Corporate',
      tagline: 'Strategic Business Counsel',
      backCopy: `We advise on corporate structuring, compliance, and transactional matters to support your business growth. From incorporations to mergers, our hands-on approach ensures you can focus on running your business with confidence.`,
      // no anchor ⇒ no “Learn more” button
    },
    {
      image: litigationImg,
      title: 'Litigation',
      tagline: 'Assertive Representation',
      backCopy: `Our litigation team provides robust advocacy in court and alternative dispute resolution to protect your interests. We craft tailored strategies, prepare compelling briefs, and stand by you every step of the way.`,
      // no anchor ⇒ no “Learn more” button
    }
  ]

  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="card-container">
        {services.map((s, i) => (
          <FlipCard key={i} {...s} />
        ))}
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
            <p className="service-tagline">{tagline}</p>
            <p className="back-copy">{backCopy}</p>

            {anchor && (
              // use Link so React-Router handles navigation
              <Link to={anchor} className="learn-more">
                Learn more →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
