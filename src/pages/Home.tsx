import { useEffect, useState } from 'react'

const roles = ['Full Stack Developer', 'CS Student @ CityU HK', 'IoT Enthusiast', 'OOP & Java Practitioner']

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500 opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Badge */}
        <span className="inline-block mb-5 px-3 py-1 text-xs font-mono tracking-widest text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/5">
          AVAILABLE FOR OPPORTUNITIES
        </span>

        <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Cosmo
          </span>
        </h1>

        {/* Typewriter */}
        <p className="text-xl sm:text-2xl text-slate-400 mb-8 h-8 font-mono">
          {displayed}
          <span className="animate-pulse text-cyan-400">|</span>
        </p>

        <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Year 3 CS student at CityU HK. Building web apps, exploring IoT, and crafting clean software.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/about"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-colors duration-200"
          >
            About Me
          </a>
          <a
            href="https://github.com/cosmoumadd"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Tech stack pills */}
        <div className="mt-14 flex flex-wrap gap-2 justify-center">
          {['Java', 'Python', 'TypeScript', 'React', 'Node.js', 'C#', 'SQL', 'Spring Boot'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs text-slate-400 border border-slate-800 rounded-full bg-slate-900 hover:border-slate-600 hover:text-slate-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 text-xs">
        <span>scroll</span>
        <span className="animate-bounce text-slate-500">↓</span>
      </div>
    </section>
  )
}