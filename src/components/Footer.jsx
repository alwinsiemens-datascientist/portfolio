import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© <span>{year}</span> Alwin Siemens</p>
        <p>Created with React and Vite</p>
      </div>
    </footer>
  )
}
