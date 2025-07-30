// src/components/Contact.jsx
import React from 'react'
import logo from '../assets/websitelogo2.png'
import { SiGooglemaps, SiWaze } from 'react-icons/si'

export default function Contact() {
  const navItems = [
    'Home',
    'Core Services',
    'Support Services',
    'Conveyancing',
    'Debt Recovery',
    'Partners',
  ]

  return (
    <footer
      id="contact"
      style={{
        background: 'var(--primary)',
        color: 'var(--accent)',
        padding: '2rem 1rem',
      }}
    >
      <div
        className="footer-content"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Info (centered) */}
        <div
          className="contact-info"
          style={{ textAlign: 'center' }}
        >
          <h2
            style={{
              color: 'var(--accent)',
              marginBottom: '1rem',
              fontSize: '2rem',
            }}
          >
            Contact Us
          </h2>

          <img
            src={logo}
            alt="Tai & Khan Partnership logo"
            style={{
              maxHeight: '40px',
              marginBottom: '1rem',
              objectFit: 'contain',
            }}
          />

          <h3
            style={{
              margin: '0.5rem 0',
              fontWeight: 500,
              fontSize: '1.25rem',
            }}
          >
            Tai & Khan Partnership
          </h3>

          <p style={{ margin: '0.25rem 0', lineHeight: 1.1 }}>
            127A Jalan Imbi
          </p>
          <p style={{ margin: '0.25rem 0', lineHeight: 1.1 }}>
            Off Jalan Bukit Bintang
          </p>
          <p style={{ margin: '0.25rem 0', lineHeight: 1.1 }}>
            55100 Kuala Lumpur
          </p>

          <p style={{ margin: '1rem 0 0 0', fontSize: '1rem' }}>
            Tel: +603-2110 3536
          </p>
          <p style={{ margin: '0.25rem 0', fontSize: '1rem' }}>
            Email: tkpartnership@gmail.com
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              margin: '1.5rem 0',
            }}
          >
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=127A+Jalan+Imbi,+Off+Jalan+Bukit+Bintang,+55100+Kuala+Lumpur"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
              }}
            >
              <SiGooglemaps size={24} /> Google Maps
            </a>
            <a
              href="https://waze.com/ul?ll=3.143897,101.712773&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
              }}
            >
              <SiWaze size={24} /> Waze
            </a>
          </div>

          {/* Responsive nav links */}
          <nav
            style={{
              display: 'flex',
              flexWrap: 'wrap',           /* allow wrapping */
              justifyContent: 'center',   /* center each row */
              gap: '0.75rem 1.5rem',       /* row & column gaps */
              margin: '1rem 0',
              width: '100%',
            }}
          >
            {navItems.map(label => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/ /g, '-')}`}
                style={{
                  color: 'var(--accent)',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',      /* keep two-word labels together */
                  padding: '0.25rem 0',
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.3)',
              marginTop: '1rem',
              paddingTop: '1rem',
              fontSize: '0.85rem',
            }}
          >
            © {new Date().getFullYear()} Tai & Khan Partnership | Lawyer Firm PJ, KL, Selangor
          </div>
        </div>

        {/* Map */}
        <div className="contact-map">
          <iframe
            title="Office Location"
            src="https://maps.google.com/maps?q=127A%20Jalan%20Imbi%20Off%20Jalan%20Bukit%20Bintang%2055100%20Kuala%20Lumpur&z=15&output=embed"
            style={{
              width: '100%',
              height: '100%',
              border: 0,
              minHeight: '300px',
              borderRadius: '8px',
              marginTop: '3rem'
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </footer>
  )
}
