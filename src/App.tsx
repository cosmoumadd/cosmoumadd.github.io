import { useEffect, useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import UnderMaintenance from './pages/UnderMaintenance'

function AppContent() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    // Handle 404.html redirect for GitHub Pages
    const redirectPath = sessionStorage.getItem('redirectPath')
    if (redirectPath && redirectPath !== '/') {
      sessionStorage.removeItem('redirectPath')
      navigate(redirectPath)
    }
  }, [navigate])

  useLayoutEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.scroll-reveal')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    document.documentElement.classList.add('reveal-ready')

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Pages under construction */}
          <Route 
            path="/blog" 
            element={<UnderMaintenance pageName="Blog" estimatedCompletion="May 2026" />} 
          />
        
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
