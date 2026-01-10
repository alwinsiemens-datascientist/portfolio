import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
