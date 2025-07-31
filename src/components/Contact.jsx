// src/components/Contact.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/websitelogo2.png'
import { SiGooglemaps, SiWaze } from 'react-icons/si'

export default function Contact() {
  const navItems = [
    { label: 'Home',         to: '/' },
    { label: 'Services',     to: { pathname: '/', hash: '#services' } },
    { label: 'Partners',     to: { pathname: '/', hash: '#partners' } },
    { label: 'Conveyancing', to: '/conveyancing' },
    { label: 'Debt Recovery',to: '/debt-recovery' },
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
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div
          className="contact-info"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <h2
            style={{
              alignSelf: 'center',
              color: 'var(--accent)',
              marginBottom: '1rem',
              fontSize: '2rem',
              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            Contact Us
          </h2>

          {/* centered wrapper, text remains left-aligned */}
          <div style={{ alignSelf: 'center', textAlign: 'left' }}>
            <img
              src={logo}
              alt="Tai & Khan Partnership logo"
              style={{
                alignSelf: 'center',
                maxHeight: '40px',
                marginBottom: '1rem',
                objectFit: 'contain',
              }}
            />
            <h3
              style={{
                margin: '0.5rem 0 0 0',
                fontWeight: 500,
                fontSize: '1.25rem',
                textAlign: 'left',
              }}
            >
              Tai &amp; Khan Partnership
            </h3>
            <p style={{ margin: '0.25rem 0', lineHeight: 1 }}>
              127A Jalan Imbi, Off Jalan Bukit Bintang
            </p>
            <p style={{ margin: '0.25rem 0', lineHeight: 1 }}>
              55100 Kuala Lumpur
            </p>
            <p style={{ margin: '1rem 0 0 0', fontSize: '1rem' }}>
              Tel: +603-2110 3536
            </p>
            <p style={{ margin: 0, fontSize: '1rem' }}>
              Email: tkpartnership@gmail.com
            </p>
          </div>

          <div
            style={{
              alignSelf: 'center',
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

          <nav
            className="footer-nav"
            style={{
              alignSelf: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem 1.5rem',
              margin: '1rem 0',
              width: '100%',
            }}
          >
            {navItems.map(item => (
              <Link
                key={item.label}
                to={item.to}
                style={{
                  color: 'var(--accent)',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  padding: '0.25rem 0',
                  textAlign: 'center',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div
            style={{
              alignSelf: 'center',
              borderTop: '1px solid rgba(255,255,255,0.3)',
              marginTop: '1rem',
              paddingTop: '1rem',
              fontSize: '0.85rem',
              textAlign: 'center',
            }}
          >
            © {new Date().getFullYear()} Tai &amp; Khan Partnership | Lawyer Firm PJ, KL, Selangor
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Office Location"
            src="https://maps.google.com/maps?q=127A%20Jalan%20Imbi%20Off%20Jalan%20Bukit%20Bintang%2055100%20Kuala%20Lumpur&z=15&output=embed"
            style={{
              width: '100%',
              height: '220px',
              border: 0,
              borderRadius: '8px',
              marginTop: '3rem',
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </footer>
  )
}
