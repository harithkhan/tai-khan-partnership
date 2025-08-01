import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import Contact from './Contact'
import './Profile.css'
import harithImg from '../assets/harith.jpg'

export default function HarithProfile() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="partner-profile partner-profile--harith">
        <div className="profile-header">
          <h1>Harith Khan</h1>
          <p className="subtitle">
            Partner – Debt Recovery &amp; Litigation
          </p>
          <div className="contact-details">
            <p>
                <FaEnvelope className="icon" />
                <a href="mailto:harith@tkpartnership.com">
                harith@tkpartnership.com
                </a>
                &nbsp;&nbsp;
                <FaWhatsapp className="icon" />
                +60163365110
            </p>
          </div>
        </div>

        <div className="profile-bio">
          <img
            src={harithImg}
            alt="Harith Khan"
            className="profile-image"
          />
          <p>
            Harith holds an LLB (Hons) from the University of Reading and was
            called to the Bar of England and Wales as a Barrister-at-Law by
            Lincoln’s Inn, having completed the Bar Professional Training Course
            (BPTC) at City University London. He was admitted to practice as an
            Advocate and Solicitor of the High Court of Malaya in November 2018.
          </p>
          <p>
            Harith undertook his pupillage at Wong & Partners, a member firm of
            Baker McKenzie, within the Dispute Resolution and Intellectual
            Property practice group. He was extensively trained in litigation,
            gaining valuable exposure and practical experience in commercial
            disputes, intellectual property enforcement, and regulatory
            compliance. This rigorous training equipped him with a robust
            foundation in advocacy, negotiation, and strategic litigation
            management.
          </p>
          <p>
            Currently, Harith specialises in Debt Recovery, particularly in
            achieving efficient, effective settlements outside of court. He is
            dedicated to assisting clients in recovering monies owed to them
            in a professional, ethical, and legally compliant manner. Harith is
            committed to delivering pragmatic solutions that help clients avoid
            costly and prolonged court battles, while steadfastly ensuring that
            all actions taken align with the highest standards of integrity and
            professionalism.
          </p>
        </div>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </section>

      {/* Contact us footer */}
      <Contact />
    </>
  )
}
