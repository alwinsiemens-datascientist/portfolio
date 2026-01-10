import React from 'react'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-text">
          <h2>
            Hi, I'm <strong>Alwin Siemens (B. Sc.)</strong>
          </h2>
          <p>Fullstack Developer with a heart for ML Systems</p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-card">
          <img src="assets/alwin.jpg" alt="Abstract data visualization" />
        </div>
      </div>
    </section>
  )
}
