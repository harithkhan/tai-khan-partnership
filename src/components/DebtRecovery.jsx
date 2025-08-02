import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaExclamationTriangle,
  FaGavel,
  FaMoneyBillWave,
  FaReceipt,
  FaHandshake,
  FaWhatsapp,
} from 'react-icons/fa'
import debtImage from '../assets/debt.jpg'
import Contact from './Contact'
import './DebtRecovery.css'

export default function DebtRecovery() {
  useEffect(() => window.scrollTo(0, 0), [])

  const sections = [
    {
      icon: <FaExclamationTriangle className="dr-icon" />,
      title: 'Worried About Spending More Money on Debt Collection?',
      paragraphs: [
        `We understand that chasing unpaid debts can feel risky—especially if you're unsure about recovery. At Tai & Khan Partnership, we eliminate this uncertainty by offering debt recovery on a success-fee basis. You only pay legal fees if we successfully reclaim your debt.`,
        `(*Subject to a nominal upfront fee as mandated by Malaysian law.*)`
      ]
    },
    {
      icon: <FaGavel className="dr-icon" />,
      title: 'Legal Debt Recovery—Always Professional, Always Ethical',
      paragraphs: [
        `When recovering debts, it's crucial to act professionally and within the law. Intimidation or aggressive tactics aren't just illegal—they can harm your business relationships and reputation.`,
        `At Tai & Khan Partnership, our focus is exclusively on legitimate, professional debt recovery solutions, both pre-court and in-court. From structured negotiation to formal statutory demands and, when required, court proceedings, we ensure every step is ethical, legal, and transparent.`
      ]
    },
    {
      icon: <FaMoneyBillWave className="dr-icon" />,
      title: 'Cost-Effective Solutions for Debts from RM5,000',
      paragraphs: [
        `Recovering smaller debts shouldn't come with disproportionately large legal expenses. If you're owed anywhere from RM5,000 to RM100,000, our pre-court debt recovery services offer you an affordable and practical route to reclaiming what's rightfully yours.`
      ]
    },
    {
      icon: <FaReceipt className="dr-icon" />,
      title: 'Tax Relief on Unrecoverable Debts—Provided Free',
      paragraphs: [
        `Sometimes, despite best efforts, debts remain unpaid. If recovery isn't successful, businesses can still significantly benefit from tax relief on bad debts—potentially up to 30% savings on your corporate or income taxes.`,
        `However, this tax advantage is only available if you've undertaken appropriate legal debt recovery steps. That's why, in the rare cases where recovery efforts fall short, Tai & Khan Partnership provides complimentary assistance to help you claim these important tax savings. Either way, you win—recover your debt or benefit from tax relief.`
      ]
    },
    {
      icon: <FaHandshake className="dr-icon" />,
      title: 'Free Debt Assessment—Zero Risk, Complete Transparency',
      paragraphs: [
        `Not sure how to proceed or what your options are? We offer a free, no-obligation debt recovery assessment. Our experts will clearly explain your options, outline potential costs, and help you understand exactly what to expect. There's no risk and no hidden surprises.`,
      ],
      extra: (
        <>
          <p className="dr-contact">
            <FaWhatsapp className="dr-icon whatsapp" />
            +60 16 336 5110
          </p>
          <a
            href="https://wa.me/60163365110"
            className="dr-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="dr-icon" />
            Start WhatsApp Chat
          </a>
        </>
      )
    },
  ]

  return (
    <>
      <section id="debt-recovery" className="debt-recovery">
        <h2 className="dr-main-title">Success-Based Debt Recovery</h2>

        <img
          src={debtImage}
          alt="Debt Recovery"
          className="dr-main-image"
        />

        <div className="dr-grid">
          {sections.map((sec, i) => (
            <div
              key={i}
              className={`dr-card${sec.extra ? ' dr-card--span2' : ''}`}
            >
              <h3 className="dr-title">
                {sec.icon}
                {sec.title}
              </h3>
              {sec.paragraphs.map((p, j) => (
                <p key={j} className={j === 1 && i === 0 ? 'dr-note' : ''}>
                  {p}
                </p>
              ))}
              {sec.extra}
            </div>
          ))}
        </div>

        <Link to="/" className="dr-back">
          ← Back to Home
        </Link>
      </section>

      <Contact />
    </>
  )
}
