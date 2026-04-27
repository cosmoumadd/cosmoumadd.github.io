const links = [
  { label: 'Email', value: 'wongman2244@gmail.com', href: 'mailto:wongman2244@gmail.com' },
  { label: 'GitHub', value: 'github.com/cosmoumadd', href: 'https://github.com/cosmoumadd' },
  { label: 'LinkedIn', value: 'linkedin.com/in/cosmo-wong-084161342', href: 'https://www.linkedin.com/in/cosmo-wong-084161342/' },
  { label: 'Website', value: 'cosmoumadd.github.io', href: 'https://cosmoumadd.github.io/' },
]

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-slate-950 text-slate-100 py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400">CONTACT</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Get in touch</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Currently looking for internship / junior developer opportunities. Open to full-stack,
            backend, or IoT-adjacent roles. Drop a message anytime.
          </p>
        </div>

        <div className="space-y-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="flex items-center justify-between p-5 border border-slate-800 rounded-xl hover:border-slate-600 hover:bg-slate-900/50 transition-all group"
            >
              <div>
                <p className="text-xs font-mono text-slate-500 mb-0.5">{l.label}</p>
                <p className="text-slate-200 text-sm">{l.value}</p>
              </div>
              <span className="text-slate-600 group-hover:text-slate-300 transition-colors text-lg">↗</span>
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-600 mt-10 text-center font-mono">
          Hong Kong · UTC+8 · Response within 24h
        </p>
      </div>
    </section>
  )
}