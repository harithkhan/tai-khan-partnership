import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './NavBar.css'
import logo from '../assets/websitelogo2.png'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // helper to jump to an in-page section
  const goToSection = (hash) => {
    setOpen(false)
    if (pathname !== '/') {
      // navigate home first
      navigate('/')
      // then scroll after a slight delay
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // our menu items
  const links = [
    {
      label: 'Home',
      to: '/',
      onClick: () => {
        setOpen(false)
        navigate('/')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    { label: 'Services',    section: '#services' },
    { label: 'Partners',    section: '#partners' },
    { label: 'Conveyancing', to: '/conveyancing' },
    { label: 'Debt Recovery',to: '/debt-recovery' },
    { label: 'Contact Us',   section: '#contact' },
  ]

  // close mobile menu on outside click or on scroll
  useEffect(() => {
    const handleClickOutside = (e) => {
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
        <Link
          to="/"
          onClick={() => {
            setOpen(false)
            navigate('/')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img src={logo} alt="Tai & Khan Partnership logo" />
        </Link>
      </div>

      <div className={`nav-links${open ? ' open' : ''}`}>
        {links.map((item, i) => {
          if (item.section) {
            // in-page anchor
            return (
              <a
                key={i}
                href={item.section}
                onClick={(e) => {
                  e.preventDefault()
                  goToSection(item.section)
                }}
              >
                {item.label}
              </a>
            )
          } else {
            // regular route
            return (
              <Link
                key={i}
                to={item.to}
                onClick={() => {
                  if (item.onClick) item.onClick()
                  else setOpen(false)
                }}
              >
                {item.label}
              </Link>
            )
          }
        })}
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
