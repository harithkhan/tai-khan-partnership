import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Services from './Services'
import Conveyancing from './Conveyancing'
import DebtRecovery from './DebtRecovery'
import Partners from './Partners'
import Contact from './Contact'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Conveyancing />
        <DebtRecovery />
        <Partners />
        <Contact />
      </main>
    </>
  )
}