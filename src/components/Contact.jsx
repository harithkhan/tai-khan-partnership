import React from 'react'

export default function Contact() {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'core-services', label: 'Core Services' },
    { id: 'support-services', label: 'Support Services' },
    { id: 'conveyancing', label: 'Conveyancing' },
    { id: 'debt-recovery', label: 'Debt Recovery' },
    { id: 'partners', label: 'Partners' }
  ]
  return (
    <footer id="contact" style={{ backgroundColor: 'var(--primary)', color: 'var(--accent)', padding: '2rem 1rem' }}>
      <h2 style={{ textAlign: 'center', color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '2rem' }}>Contact Us</h2>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div>
          <h3 style={{ margin: 0 }}>
            Tai & Khan Partnership <span style={{ fontWeight: 'normal' }}>(Reg No. 000020008875)</span>
          </h3>
          <p style={{ margin: '0.5rem 0' }}>127A Jalan Imbi</p>
          <p style={{ margin: '0.5rem 0' }}>Off Jalan Bukit Bintang</p>
          <p style={{ margin: '0.5rem 0' }}>55100 Kuala Lumpur</p>
          <p style={{ margin: '0.5rem 0' }}>
            Email: <a href="mailto:tkpartnership@gmail.com" style={{ color: 'var(--accent)' }}>tkpartnership@gmail.com</a>
          </p>
          <p style={{ margin: '0.5rem 0' }}>
            Tel: +603-2110 3536
          </p>
        </div>
        <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {links.map(link => (
            <a key={link.id} href={`#${link.id}`} style={{ color: 'var(--accent)' }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Tai & Khan Partnership
      </div>
    </footer>
  )
}
