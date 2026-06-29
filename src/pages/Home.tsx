import { useEffect, useState } from 'react'
import ActionLink from '../components/ActionLink'
import Pill from '../components/Pill'

const roles = ['Full Stack Developer', 'CS Student @ CityU HK', 'Java Developer', 'Cloud & IoT Explorer']

const focusAreas = [
  {
    number: '01',
    title: 'Java',
    detail: 'Deepening my object-oriented design, software architecture, and Spring Boot skills for reliable backend development.',
    tools: ['Java', 'Spring Boot', 'OOP'],
  },
  {
    number: '02',
    title: 'Web Development',
    detail: 'Building responsive, accessible full-stack experiences with modern frontend frameworks, APIs, and databases.',
    tools: ['React', 'TypeScript', 'REST APIs'],
  },
  {
    number: '03',
    title: 'Cloud / AWS',
    detail: 'Expanding my knowledge of cloud architecture, deployment, and connected applications through hands-on projects.',
    tools: ['AWS', 'Cloud Architecture', 'IoT'],
  },
]

const languages = ['Cantonese', 'English', 'Mandarin']

export default function Home() {
  const [prefersReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState(() => prefersReducedMotion ? roles[0] : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return

    const target = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }, 0)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, prefersReducedMotion, roleIndex])

  return (
    <>
      <section
        id="home"
        className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center overflow-hidden bg-slate-950 px-6 py-20 text-slate-100"
      >
        <div className="hero-grid absolute inset-0 opacity-10" aria-hidden="true" />
        <div className="ambient-glow absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />
        <div className="ambient-glow animation-delay-700 absolute bottom-[10%] right-[8%] h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" aria-hidden="true" />
        <div className="orb absolute right-[16%] top-[22%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="scroll-reveal">
            <Pill className="mb-5 inline-flex items-center gap-2 border-cyan-400/30 bg-cyan-400/5 px-3 py-1 font-mono tracking-widest text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" aria-hidden="true" />
              OPEN TO INTERNSHIP &amp; JUNIOR ROLES
            </Pill>

            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Cosmo
              </span>
            </h1>

            <p className="mb-7 h-8 text-xl font-mono text-slate-300 sm:text-2xl" aria-label={roles[roleIndex]}>
              <span aria-hidden="true">{displayed}</span>
              <span className="cursor-blink text-cyan-400" aria-hidden="true">|</span>
            </p>

            <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Year 3 Computer Science student at CityU Hong Kong, creating practical web and IoT
              solutions with a growing focus on Java backend development and AWS cloud technologies.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <ActionLink to="/projects" variant="primary">View Projects</ActionLink>
              <ActionLink to="/about">About Me</ActionLink>
              <ActionLink to="/contact">Let&apos;s Connect</ActionLink>
            </div>
          </div>

          <div className="scroll-reveal reveal-delay-300 mx-auto mt-12 max-w-2xl rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-2xl shadow-cyan-950/10 backdrop-blur sm:flex sm:items-center sm:justify-between sm:px-6">
            <div className="mb-3 text-left sm:mb-0">
              <p className="text-xs font-mono tracking-widest text-slate-500">LANGUAGES</p>
              <p className="mt-1 text-sm text-slate-300">Ready to communicate in diverse teams</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <Pill key={language} className="border-slate-700 bg-slate-950/70 px-3 py-1.5 text-slate-300">
                  {language}
                </Pill>
              ))}
            </div>
          </div>
        </div>

        <a
          href="#technical-focus"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-slate-600 transition-colors hover:text-cyan-400 sm:flex"
        >
          <span>Explore focus</span>
          <svg className="h-4 w-4 animate-bounce" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      <section id="technical-focus" className="border-t border-slate-800 bg-slate-900/40 px-6 py-20 text-slate-100 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="scroll-reveal mb-10 max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-cyan-400">CURRENT TECHNICAL FOCUS</span>
            <h2 className="mt-2 mb-4 text-3xl font-bold sm:text-4xl">Building depth where it matters</h2>
            <p className="leading-relaxed text-slate-400">
              I&apos;m focusing my coursework and personal projects on technologies that support modern,
              dependable software—from the application layer to the cloud.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((focus, index) => (
              <article
                key={focus.title}
                className="focus-card scroll-reveal rounded-2xl border border-slate-800 bg-slate-950/70 p-6"
                style={{ '--reveal-delay': `${index * 120}ms` } as React.CSSProperties}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs text-cyan-400">{focus.number}</span>
                  <span className="h-px w-12 bg-gradient-to-r from-cyan-400/70 to-transparent" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-100">{focus.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-400">{focus.detail}</p>
                <div className="flex flex-wrap gap-2">
                  {focus.tools.map((tool) => (
                    <Pill key={tool} shape="rounded" className="border-slate-800 bg-slate-900 px-2 py-1 text-slate-500">
                      {tool}
                    </Pill>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="scroll-reveal mt-8 flex flex-col gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 sm:flex-row sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300" aria-hidden="true">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 3 4 7v5c0 4.4 3.4 7.7 8 9 4.6-1.3 8-4.6 8-9V7l-8-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">Certification preparation</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                I&apos;m preparing to pursue relevant certification exams in Java development, web technologies,
                and AWS cloud architecture as I continue building practical experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
