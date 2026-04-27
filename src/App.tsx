import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import UnderMaintenance from './pages/UnderMaintenance'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App