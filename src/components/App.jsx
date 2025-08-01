// src/components/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar            from './NavBar'
import Hero              from './Hero'
import Services          from './Services'
import Conveyancing      from './Conveyancing'
import DebtRecovery      from './DebtRecovery'
import Partners          from './Partners'
import Contact           from './Contact'
import QueennieProfile   from './QueennieProfile'
import HarithProfile     from './HarithProfile'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Partners />
              <Contact />
            </>
          }/>
          <Route path="/partners/queennie" element={<QueennieProfile />} />
          <Route path="/partners/harith"    element={<HarithProfile   />} />
          <Route path="/conveyancing"       element={<Conveyancing     />} />
          <Route path="/debt-recovery"      element={<DebtRecovery     />} />
        </Routes>
      </main>
    </>
  )
}
