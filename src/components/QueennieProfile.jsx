import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import Contact from './Contact'
import './Profile.css'
import queennieImg from '../assets/queennie.jpg'

export default function QueennieProfile() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="partner-profile partner-profile--queennie">
        <div className="profile-header">
          <h1>Queennie Tai Zee Queen</h1>
          <p className="subtitle">
            Managing Partner – Conveyancing &amp; Corporate
          </p>
          <div className="contact-details">
            <p>
                <FaEnvelope className="icon" />
                <a href="mailto:queennie@tkpartnership.com">
                queennie@tkpartnership.com
                </a>
                &nbsp;&nbsp;
                <FaWhatsapp className="icon" />
                +60164104163
            </p>
          </div>
        </div>

        <div className="profile-bio">
          <img
            src={queennieImg}
            alt="Queennie Tai Zee Queen"
            className="profile-image"
          />
          <p>
            Queenie holds an LLB (Hons) from the University of Hull and was
            called to the Bar of England and Wales as a Barrister-at-Law by
            Lincoln’s Inn, having completed the Bar Professional Training Course
            (BPTC) at City University London. She was admitted to practice as
            an Advocate and Solicitor of the High Court of Malaya in November
            2019.
          </p>
          <p>
            As the Managing Partner of the firm, Queenie oversees both
            Conveyancing and Corporate practices, demonstrating exceptional
            leadership and strategic management capabilities. Her extensive
            legal experience primarily encompasses real property and
            land-related matters, and she regularly provides comprehensive
            advice to developers in various stages of their project
            developments, including residential properties, serviced
            apartments, and mixed developments.
          </p>
          <p>
            Beyond project-based conveyancing, Queenie also possesses
            significant expertise in handling non-project sale and purchase
            transactions. Her depth of knowledge and meticulous attention to
            detail make her the counsel of choice for both Malaysian and
            international individuals and corporations seeking representation
            and advice for complex real estate transactions. Queenie is known
            for her clear, practical guidance, and her commitment to delivering
            timely and commercially viable solutions tailored specifically to
            her clients’ objectives.
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
