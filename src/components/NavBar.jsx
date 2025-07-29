import React, { useState } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'core-services', label: 'Core Services' },
    { id: 'support-services', label: 'Support Services' },
    { id: 'conveyancing', label: 'Conveyancing' },
    { id: 'debt-recovery', label: 'Debt Recovery' },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact Us' }
  ]

  return (
    <nav>
      <div style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Tai & Khan Partnership
      </div>

      <div className={`nav-links${open ? ' open' : ''}`}>
        {links.map(link => (
          <a key={link.id} href={`#${link.id}`} style={{ color: 'var(--accent)' }}>
            {link.label}
          </a>
        ))}
      </div>

      <div className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
