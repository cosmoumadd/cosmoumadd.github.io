import { useEffect, useState } from 'react'
import ActionLink from '../components/ActionLink'
import Pill from '../components/Pill'

const roles = ['Full Stack Developer', 'CS Student @ CityU HK', 'IoT Enthusiast', 'OOP & Java Practitioner']

const futurePlans = [
  {
    title: 'AWS certifications',
    detail: 'Earn AWS Certified Solutions Architect - Associate and AWS Certified Machine Learning Engineer - Associate.',
  },
  {
    title: 'Oracle Java certification',
    detail: 'Strengthen and validate my professional Java development skills.',
  },
  {
    title: 'Alibaba Cloud certifications',
    detail: 'Pursue associate-level certifications in AI, cloud computing, security, and related areas.',
  },
  {
    title: 'Cisco CCNA certification',
    detail: 'Build a stronger foundation in networking through the Cisco Certified Network Associate certification.',
  },
  {
    title: 'Python development certification',
    detail: 'Validate my Python development knowledge with a recognised professional certification.',
  },
]

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
    <>
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
        <Pill className="inline-block mb-5 px-3 py-1 font-mono tracking-widest text-cyan-400 border-cyan-400/30 bg-cyan-400/5">
          AVAILABLE FOR OPPORTUNITIES
        </Pill>

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
          <ActionLink to="/about" variant="primary">
            About Me
          </ActionLink>
          <ActionLink href="https://github.com/cosmoumadd">
            GitHub
          </ActionLink>
          <ActionLink to="/contact">
            Contact
          </ActionLink>
        </div>

        {/* Tech stack pills */}
        <div className="mt-14 flex flex-wrap gap-2 justify-center">
          {['Java', 'Python', 'TypeScript', 'React', 'Node.js', 'C#', 'SQL', 'Spring Boot'].map((tech) => (
            <Pill
              key={tech}
              className="px-3 py-1 text-slate-400 border-slate-800 bg-slate-900 hover:border-slate-600 hover:text-slate-200 transition-colors"
            >
              {tech}
            </Pill>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 text-xs">
        <span>scroll</span>
        <span className="animate-bounce text-slate-500">↓</span>
      </div>
      </section>

      <section id="future-plans" className="border-t border-slate-800 bg-slate-900/40 px-6 py-20 text-slate-100 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-cyan-400">FUTURE PLANS</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">What I'm working toward</h2>
          <p className="text-slate-400 max-w-2xl leading-relaxed mb-10">
            Certifications I plan to pursue as I deepen my skills across software development, cloud, AI,
            security, and networking.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {futurePlans.map((plan, index) => (
              <div key={plan.title} className="border border-slate-800 rounded-xl bg-slate-950/60 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-mono text-cyan-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-100">{plan.title}</h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{plan.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
