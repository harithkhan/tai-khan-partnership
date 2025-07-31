// src/components/NavBar.jsx
import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/websitelogo2.png'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const { pathname } = useLocation()

  const links = [
    {
      label: 'Home',
      to: '/',
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    { label: 'Services',     to: { pathname: '/', hash: '#services' } },
    { label: 'Partners',     to: { pathname: '/', hash: '#partners' } },
    { label: 'Conveyancing',  to: '/conveyancing' },
    { label: 'Debt Recovery', to: '/debt-recovery' },
    { label: 'Contact Us',   to: { pathname: '/', hash: '#contact' } }
  ]

  useEffect(() => {
    function handleClickOutside(e) {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    function handleScroll() {
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
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setOpen(false)
          }}
        >
          <img src={logo} alt="Tai & Khan Partnership logo" />
        </Link>
      </div>

      <div className={`nav-links${open ? ' open' : ''}`}>
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            onClick={() => {
              // call the scroll handler only if it exists
              if (typeof link.onClick === 'function') {
                link.onClick()
              }
              setOpen(false)
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div
        className={`hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  )
}
