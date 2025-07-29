import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/websitelogo2.png'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'core-services', label: 'Core Services' },
    { id: 'support-services', label: 'Support Services' },
    { id: 'conveyancing', label: 'Conveyancing' },
    { id: 'debt-recovery', label: 'Debt Recovery' },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact Us' }
  ]

  useEffect(() => {
    const handleClickOutside = e => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    const handleScroll = () => open && setOpen(false)

    document.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [open])

  return (
    <nav ref={navRef}>
      {/* Logo links back to home */}
      <a href="#home" className="logo-container">
        <img src={logo} alt="Tai & Khan Partnership" />
      </a>

      <div className={`nav-links${open ? ' open' : ''}`}>
        {links.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            style={{ color: 'var(--accent)' }}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div
        className={`hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(prev => !prev)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  )
}
