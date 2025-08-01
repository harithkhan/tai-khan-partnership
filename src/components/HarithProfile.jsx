// src/components/HarithProfile.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './Partners.css'
import harithImg from '../assets/harith.jpg'

export default function HarithProfile() {
  return (
    <section className="partner-profile">
      <div className="profile-header">
        <img src={harithImg} alt="Harith Khan" />
        <div className="profile-info">
          <h1>Harith Khan</h1>
          <p className="subtitle">Partner</p>
        </div>
      </div>
      <div className="profile-bio">
        {`Harith holds an LLB (Hons) from the University of Reading and was called to the Bar of England and Wales as a Barrister-at-Law by Lincoln’s Inn, having completed the Bar Professional Training Course (BPTC) at City University London. He was admitted to practice as an Advocate and Solicitor of the High Court of Malaya in November 2018.

Harith undertook his pupillage at Wong & Partners, a member firm of Baker McKenzie, within the Dispute Resolution and Intellectual Property practice group. He was extensively trained in litigation, gaining valuable exposure and practical experience in commercial disputes, intellectual property enforcement, and regulatory compliance. This rigorous training equipped him with a robust foundation in advocacy, negotiation, and strategic litigation management.

Currently, Harith specialises in Debt Recovery, particularly in achieving efficient, effective settlements outside of court. He is dedicated to assisting clients in recovering monies owed to them in a professional, ethical, and legally compliant manner. Harith is committed to delivering pragmatic solutions that help clients avoid costly and prolonged court battles, while steadfastly ensuring that all actions taken align with the highest standards of integrity and professionalism.`}
      </div>
      <Link to="/" className="back-home">
        ← Back to Home
      </Link>
    </section>
  )
}
