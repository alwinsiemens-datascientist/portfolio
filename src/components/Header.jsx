import React, { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="brand">Alwin Siemens (B. Sc.)</h1>

        <nav className={`nav ${open ? 'open' : ''}`} id="nav">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#journey" onClick={() => setOpen(false)}>Journey</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
