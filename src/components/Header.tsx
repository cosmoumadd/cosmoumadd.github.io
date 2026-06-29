import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavigateBar() {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Brand */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-bold text-white tracking-tight whitespace-nowrap"
          >
            cosmoumadd<span className="text-cyan-400">.</span>github.io
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex gap-1">
            {navItems.map(({ to, label }) => {
              const active = pathname === to
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                      active
                        ? 'text-white bg-slate-800'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav links */}
        <div
          id="mobile-navigation"
          aria-hidden={!mobileOpen}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
            mobileOpen ? 'grid-rows-[1fr] opacity-100' : 'pointer-events-none grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <ul className="flex flex-col gap-1 border-t border-slate-800 py-3">
              {navItems.map(({ to, label }, index) => {
                const active = pathname === to
                return (
                  <li
                    key={to}
                    className={mobileOpen ? 'mobile-nav-item' : ''}
                    style={{ animationDelay: `${index * 45}ms` }}
                  >
                    <Link
                      to={to}
                      tabIndex={mobileOpen ? undefined : -1}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-md px-3 py-2 text-sm transition-all duration-200 hover:translate-x-1 ${
                        active
                          ? 'bg-slate-800 text-white'
                          : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                      }`}
                    >
                      <span className="mr-3 font-mono text-xs text-cyan-400/60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Header() {
  return <NavigateBar />
}

export default Header
