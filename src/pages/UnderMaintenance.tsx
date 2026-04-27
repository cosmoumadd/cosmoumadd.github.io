import { Link } from 'react-router-dom'

interface UnderMaintenanceProps {
  pageName?: string
  estimatedCompletion?: string
}

export default function UnderMaintenance({ 
  pageName = 'This page',
  estimatedCompletion 
}: UnderMaintenanceProps) {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
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

        {/* Status badge */}
        <span className="inline-block mb-4 px-3 py-1 text-xs font-mono tracking-widest text-amber-400 border border-amber-400/30 rounded-full bg-amber-400/5">
          UNDER CONSTRUCTION
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          {pageName} is under maintenance
        </h1>

        <p className="text-slate-400 text-lg mb-2 max-w-xl mx-auto leading-relaxed">
          Currently building out this section. Check back soon for updates.
        </p>

        {estimatedCompletion && (
          <p className="text-sm text-slate-600 font-mono mb-8">
            // Estimated completion: {estimatedCompletion}
          </p>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Link
            to="/"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold rounded-lg transition-colors duration-200"
          >
            ← Back to Home
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors duration-200"
          >
            View Projects
          </Link>
        </div>

        {/* Progress indicator */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-600 font-mono">
            <span className="w-2 h-2 rounded-full bg-slate-800 animate-pulse" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-slate-800 animate-pulse" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-slate-800 animate-pulse" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </section>
  )
}