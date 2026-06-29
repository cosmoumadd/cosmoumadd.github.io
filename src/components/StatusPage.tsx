import type { ReactNode } from 'react'

interface StatusPageProps {
  visual: ReactNode
  badge: ReactNode
  title: string
  titleLevel?: 'h1' | 'h2'
  description: string
  detail?: ReactNode
  actions: ReactNode
  footer?: ReactNode
}

export default function StatusPage({
  visual,
  badge,
  title,
  titleLevel = 'h1',
  description,
  detail,
  actions,
  footer,
}: StatusPageProps) {
  const titleClassName = titleLevel === 'h1'
    ? 'text-4xl sm:text-5xl font-bold mb-4'
    : 'text-3xl sm:text-4xl font-bold mb-4'

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {visual}
        {badge}
        {titleLevel === 'h1' ? (
          <h1 className={titleClassName}>{title}</h1>
        ) : (
          <h2 className={titleClassName}>{title}</h2>
        )}
        <p className="text-slate-400 text-lg mb-2 max-w-xl mx-auto leading-relaxed">{description}</p>
        {detail}
        <div className="flex flex-wrap gap-4 justify-center mt-10">{actions}</div>
        {footer}
      </div>
    </section>
  )
}
