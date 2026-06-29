import type { ReactNode } from 'react'

interface PageIntroProps {
  eyebrow: string
  title: string
  children: ReactNode
  descriptionClassName?: string
}

export default function PageIntro({
  eyebrow,
  title,
  children,
  descriptionClassName = 'max-w-xl',
}: PageIntroProps) {
  return (
    <div className="mb-16">
      <span className="text-xs font-mono tracking-widest text-cyan-400">{eyebrow}</span>
      <h2 className="text-4xl font-bold mt-2 mb-4">{title}</h2>
      <p className={`text-slate-400 text-lg leading-relaxed ${descriptionClassName}`}>{children}</p>
    </div>
  )
}
