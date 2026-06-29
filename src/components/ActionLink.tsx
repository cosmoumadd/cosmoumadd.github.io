import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ActionLinkProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'neutral'
} & (
  | { to: string; href?: never }
  | { href: string; to?: never }
)

const variantClasses = {
  primary: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-950/30',
  secondary: 'border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white',
  neutral: 'bg-slate-800 hover:bg-slate-700 text-slate-100',
}

export default function ActionLink({ children, variant = 'secondary', ...destination }: ActionLinkProps) {
  const className = `px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${variantClasses[variant]}`

  if (typeof destination.to === 'string') {
    return <Link to={destination.to} className={className}>{children}</Link>
  }

  return (
    <a href={destination.href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  )
}
