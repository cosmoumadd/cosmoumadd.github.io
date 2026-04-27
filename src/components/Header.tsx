import { Link, useLocation } from 'react-router-dom'

function NavigateBar() {
  const { pathname } = useLocation()

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
          <Link to="/" className="text-lg font-bold text-white tracking-tight">
            cosmoumadd<span className="text-cyan-400">.</span>github.io
          </Link>

          {/* Nav links */}
          <ul className="flex gap-1">
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
        </div>
      </div>
    </nav>
  )
}

function Header() {
  return <NavigateBar />
}

export default Header