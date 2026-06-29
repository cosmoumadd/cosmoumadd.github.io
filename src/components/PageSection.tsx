import type { ReactNode } from 'react'

interface PageSectionProps {
  children: ReactNode
  id?: string
  maxWidth?: 'narrow' | 'wide'
  compactOnMobile?: boolean
}

const widthClasses = {
  narrow: 'max-w-2xl',
  wide: 'max-w-4xl',
}

export default function PageSection({
  children,
  id,
  maxWidth = 'wide',
  compactOnMobile = false,
}: PageSectionProps) {
  const spacing = compactOnMobile ? 'py-16 sm:py-24' : 'py-24'

  return (
    <section id={id} className={`min-h-screen bg-slate-950 text-slate-100 ${spacing} px-6`}>
      <div className={`${widthClasses[maxWidth]} mx-auto`}>{children}</div>
    </section>
  )
}
