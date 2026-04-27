export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6 px-6">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 font-mono">
        <span>© {new Date().getFullYear()} Cosmo Wong — Built with React + TypeScript + Tailwind</span>
        <div className="flex gap-4">
          <a href="https://github.com/cosmoumadd" target="_blank" rel="noreferrer" className="hover:text-slate-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/cosmo-wong-084161342/" target="_blank" rel="noreferrer" className="hover:text-slate-400 transition-colors">LinkedIn</a>
          <a href="mailto:wongman2244@gmail.com" className="hover:text-slate-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}