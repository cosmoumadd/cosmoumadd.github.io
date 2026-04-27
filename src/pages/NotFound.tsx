import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 graphic */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700">
            404
          </h1>
        </div>

        {/* Status badge */}
        <span className="inline-block mb-4 px-3 py-1 text-xs font-mono tracking-widest text-red-400 border border-red-400/30 rounded-full bg-red-400/5">
          NOT FOUND
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Page not found
        </h2>

        <p className="text-slate-400 text-lg mb-2 max-w-xl mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <p className="text-sm text-slate-600 font-mono mb-8">
          // Error: Route does not match any known paths
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Link
            to="/"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-colors duration-200"
          >
            ← Back to Home
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Report Issue
          </Link>
        </div>

        {/* Helpful links */}
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
      </div>
    </section>
  )
}