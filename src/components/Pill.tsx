import type { ReactNode } from 'react'

interface PillProps {
  children: ReactNode
  className?: string
  shape?: 'pill' | 'rounded'
}

export default function Pill({ children, className = '', shape = 'pill' }: PillProps) {
  const shapeClassName = shape === 'pill' ? 'rounded-full' : 'rounded'

  return <span className={`text-xs border ${shapeClassName} ${className}`}>{children}</span>
}
