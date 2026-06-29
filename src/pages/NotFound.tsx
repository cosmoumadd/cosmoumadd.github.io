import { Link } from 'react-router-dom'
import ActionLink from '../components/ActionLink'
import Pill from '../components/Pill'
import StatusPage from '../components/StatusPage'

export default function NotFound() {
  return (
    <StatusPage
      visual={(
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700">
            404
          </h1>
        </div>
      )}
      badge={(
        <Pill className="inline-block mb-4 px-3 py-1 font-mono tracking-widest text-red-400 border-red-400/30 bg-red-400/5">
          NOT FOUND
        </Pill>
      )}
      title="Page not found"
      titleLevel="h2"
      description="The page you're looking for doesn't exist or has been moved."
      detail={(
        <p className="text-sm text-slate-600 font-mono mb-8">
          // Error: Route does not match any known paths
        </p>
      )}
      actions={(
        <>
          <ActionLink to="/" variant="primary">
            ← Back to Home
          </ActionLink>
          <ActionLink to="/contact">
            Report Issue
          </ActionLink>
        </>
      )}
      footer={(
        <div className="mt-16 pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-600 mb-4 font-mono">Try these pages instead:</p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">About</Link>
            <span className="text-slate-800">·</span>
            <Link to="/projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Projects</Link>
            <span className="text-slate-800">·</span>
            <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>
      )}
    />
  )
}
