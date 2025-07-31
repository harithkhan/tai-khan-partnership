// src/components/ScrollToSection.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToSection() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // wait a tick for the element to be in the DOM
      setTimeout(() => {
        const id = hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    } else {
      // no hash → scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}
