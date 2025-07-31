import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/websitelogo2.png'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  const links = [
    { id: 'home',           label: 'Home' },
    { id: 'services',       label: 'Services' },
    { id: 'conveyancing',   label: 'Conveyancing' },
    { id: 'debt-recovery',  label: 'Debt Recovery' },
    { id: 'partners',       label: 'Partners' },
    { id: 'contact',        label: 'Contact Us' },
  ]

  useEffect(() => {
    const handleClickOutside = e => {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    const handleScroll = () => {
      if (open) setOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [open])

  return (
    <nav ref={navRef}>
      <div className="logo-container">
        <a href="#home" onClick={() => setOpen(false)}>
          <img src={logo} alt="Tai & Khan Partnership logo" />
        </a>
      </div>

      <div className={`nav-links${open ? ' open' : ''}`}>
        {links.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
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
