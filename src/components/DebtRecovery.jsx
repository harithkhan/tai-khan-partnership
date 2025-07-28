import React from 'react'
import debtImage from '../assets/debt.jpg'

export default function DebtRecovery() {
  return (
    <section id="debt-recovery" className="container" style={{ padding: '2rem 1rem' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}>Debt Recovery</h2>
      <img
        src={debtImage}
        alt="Debt Recovery"
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', margin: '0 auto 1.5rem' }}
      />
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
        Recovering outstanding debts in Malaysia can be complex, involving negotiation, statutory demands, and, if necessary, court proceedings under the Debt Recovery Tribunal or civil courts. Each method carries its own timeline, costs, and procedural requirements.
      </p>
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
        At Tai & Khan Partnership, we strive to resolve debts efficiently and cost-effectively. We begin with pre-action negotiations and formal demand letters, aiming to settle claims out of court and avoid hefty court fees and prolonged litigation. Our success-based approach means you incur no legal fees unless we successfully recover funds on your behalf.
      </p>
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
        Should litigation become necessary, our experienced team handles every step—from filing writs and garnishee proceedings to enforcing judgments. We keep you informed, provide clear costs estimates, and work diligently to achieve a favourable outcome while minimising your financial exposure.
      </p>
    </section>
  )
}