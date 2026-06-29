import ActionLink from '../components/ActionLink'
import Pill from '../components/Pill'
import StatusPage from '../components/StatusPage'

interface UnderMaintenanceProps {
  pageName?: string
  estimatedCompletion?: string
}

export default function UnderMaintenance({ 
  pageName = 'This page',
  estimatedCompletion 
}: UnderMaintenanceProps) {
  return (
    <StatusPage
      visual={(
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-slate-800 bg-slate-900">
          <svg 
            className="w-10 h-10 text-slate-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
        </div>
      )}
      badge={(
        <Pill className="inline-block mb-4 px-3 py-1 font-mono tracking-widest text-amber-400 border-amber-400/30 bg-amber-400/5">
          UNDER CONSTRUCTION
        </Pill>
      )}
      title={`${pageName} is under maintenance`}
      description="Currently building out this section. Check back soon for updates."
      detail={estimatedCompletion && (
          <p className="text-sm text-slate-600 font-mono mb-8">
            // Estimated completion: {estimatedCompletion}
          </p>
      )}
      actions={(
        <>
          <ActionLink to="/" variant="neutral">
            ← Back to Home
          </ActionLink>
          <ActionLink to="/projects">
            View Projects
          </ActionLink>
        </>
      )}
      footer={(
        <div className="mt-16">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-600 font-mono">
            <span className="w-2 h-2 rounded-full bg-slate-800 animate-pulse" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-slate-800 animate-pulse" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-slate-800 animate-pulse" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      )}
    />
  )
}
