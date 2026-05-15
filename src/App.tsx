import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import UnderMaintenance from './pages/UnderMaintenance'

function AppContent() {
  const navigate = useNavigate()

  useEffect(() => {
    // Handle 404.html redirect for GitHub Pages
    const redirectPath = sessionStorage.getItem('redirectPath')
    if (redirectPath && redirectPath !== '/') {
      sessionStorage.removeItem('redirectPath')
      navigate(redirectPath)
    }
  }, [navigate])

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