// src/components/Conveyancing.jsx
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaExclamationTriangle,
  FaHandshake,
  FaMoneyBillWave,
  FaBriefcase,
  FaGlobeAmericas,
  FaInfoCircle,
  FaWhatsapp,
} from 'react-icons/fa'
import conveyancingImage from '../assets/conveyancing.jpg'
import './Conveyancing.css'

export default function Conveyancing() {
  useEffect(() => window.scrollTo(0, 0), [])

  const sections = [
    {
      icon: <FaExclamationTriangle className="cv-icon" />,
      title: 'Concerned About Navigating Complex Property Transactions?',
      paragraphs: [
        `We understand that buying or selling property can be overwhelming—especially when intricate legal processes are involved. At Tai & Khan Partnership, we simplify conveyancing by offering clear, practical advice and expert representation at every stage, ensuring your property transactions proceed smoothly and securely.`,
        `(*Transparent fee structure provided upfront, with no hidden costs.)`
      ]
    },
    {
      icon: <FaHandshake className="cv-icon" />,
      title: 'Comprehensive Property Conveyancing—Reliable and Professional',
      paragraphs: [
        `Property transactions must be handled meticulously and professionally. Mistakes or oversights aren't just costly—they can significantly delay your transaction and expose you to unnecessary risks.`,
        `At Tai & Khan Partnership, we specialise exclusively in professional conveyancing services, covering both project developments and individual sale and purchase transactions. Whether you're acquiring residential properties, serviced apartments, mixed developments, or individual properties, our approach is meticulous, professional, and completely transparent.`
      ]
    },
    {
      icon: <FaMoneyBillWave className="cv-icon" />,
      title: 'Affordable Conveyancing for Individual Property Transactions',
      paragraphs: [
        `Quality legal representation shouldn’t be reserved only for large-scale developments. If you're involved in buying or selling individual properties, our tailored conveyancing services offer accessible and cost-effective solutions designed specifically for transactions involving Malaysian and foreign individuals or corporations.`
      ]
    },
    {
      icon: <FaBriefcase className="cv-icon" />,
      title: 'Corporate Conveyancing—Strategic Guidance for Developers',
      paragraphs: [
        `Successful project developments rely on expert conveyancing guidance. Our conveyancing team, led by Queennie Tai, provides strategic advice tailored to developers at every stage—from land acquisition and regulatory approvals through to final transactions of residential, serviced apartments, and mixed-use properties. Our experience ensures smooth, timely project completion with minimal legal risk.`
      ]
    },
    {
      icon: <FaGlobeAmericas className="cv-icon" />,
      title: 'International Property Transactions—Expertise Across Borders',
      paragraphs: [
        `Real estate transactions involving international parties come with their own set of complexities. Our conveyancing team has substantial experience assisting foreign individuals and corporations navigating Malaysian property laws and regulations, providing peace of mind through expert counsel, detailed documentation, and efficient handling of cross-border transactions.`
      ]
    },
    {
      icon: <FaInfoCircle className="cv-icon" />,
      title: 'Complimentary Initial Consultation—Clarity Without Commitment',
      paragraphs: [
        `Not sure how to proceed or have questions about your conveyancing needs? We offer a free, no-obligation initial consultation. Our conveyancing specialists will clearly outline your options, detail expected costs, and guide you through the conveyancing process step-by-step. Transparent advice with no surprises—take the first step toward secure property transactions confidently.`
      ],
      extra: (
        <>
          <p className="cv-contact">
            <FaWhatsapp className="cv-icon whatsapp" />
            +60 16 410 4163
          </p>
          <a
            href="https://wa.me/60164104163"
            className="cv-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="cv-icon" />
            Start WhatsApp Chat
          </a>
        </>
      )
    },
  ]

  return (
    <section id="conveyancing" className="conveyancing">
      <h2 className="cv-main-title">Expert Conveyancing Services in Malaysia</h2>

      <img
        src={conveyancingImage}
        alt="Conveyancing"
        className="cv-main-image"
      />

      <div className="cv-grid">
        {sections.map((sec, i) => (
          <div key={i} className="cv-card">
            <h3 className="cv-title">
              {sec.icon}
              {sec.title}
            </h3>
            {sec.paragraphs.map((p, j) => (
              <p key={j} className={j === 1 && i === 0 ? 'cv-note' : ''}>
                {p}
              </p>
            ))}
            {sec.extra}
          </div>
        ))}
      </div>

      <Link to="/" className="cv-back">
        ← Back to Home
      </Link>
    </section>
  )
}
