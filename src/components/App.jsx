// src/components/App.jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './NavBar'
import Hero from './Hero'
import Services from './Services'
import Partners from './Partners'
import Contact from './Contact'
import Conveyancing from './Conveyancing'
import DebtRecovery from './DebtRecovery'
import ScrollToSection from './ScrollToSection'

export default function App() {
  return (
    <>
      <NavBar />
      <ScrollToSection />

      <Routes>
        {/* Home “page” */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Services />
              <Partners />
              <Contact />
            </main>
          }
        />

        {/* Dedicated pages */}
        <Route path="/conveyancing" element={<Conveyancing />} />
        <Route path="/debt-recovery" element={<DebtRecovery />} />

        {/* ANYTHING ELSE → back to "/" */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
