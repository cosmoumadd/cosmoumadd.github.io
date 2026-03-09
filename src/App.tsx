import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App